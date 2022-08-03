const productService = require("./products");
const {
  selectOrders,
  selectOrdersById,
  insertOrder,
  insertOrderItems,
  updateOrder,
} = require("../dal/ordersDAL");

const memberService = require("./members");

//getAllOrders - Admin & user
async function getOrders(userObj) {
  let orders;
  if (userObj.isAdmin) {
    // if user is admin
    orders = await selectOrders();
  } else {
    // if user is NOT admin
    orders = await selectOrders(userObj.id);
  }
  return (orders)? buildOrderList(orders) : []; 
}

//getASingleOrderById - Admin & User
async function getOrderById(userObj, orderId) {
  let orders;
  if (userObj.isAdmin) {
    // if user is admin
    orders = await selectOrdersById(orderId);
  } else {
    // if user is NOT admin
    orders = await selectOrdersById(orderId, userObj.id);
  }
  return orders ? buildOrderList(orders) : []; 
};

//getAllOrdersUsingFilter - Admin & user
async function getOrdersUsingFilter(userObj, filterObj) {
  //By ProductId or By MemberId or By Date
  // if user is NOT admin
    // const dbOrders = await selectAllOrdersByMemberIdAndFilter(filterObj, userObj.id);

  // if user is admin
    // const dbOrders = await selectAllOrdersByMemberIdAndFilter(filterObj);
}

async function addOrder(orderObj, userId) {
  if (memberService.isAdmin(userId)) {
    return {
      statusCode: 401,
      message: "unauthorised access - admin is not allowed to create orders.",
    };
  }

  const orderRef = Math.random().toString(36).substring(2, 9);
  const currentDateTime = new Date();
  const initialState = "pending";

  const newOrderRecord = {
    memberId: orderObj.memberId,
    orderRef: orderRef,
    orderDate: currentDateTime,
    orderStatus: initialState,
  };

  const insertOrderResult = await insertOrder(newOrderRecord);
  if (!insertOrderResult.rowCount > 0) {
    return {
      statusCode: 500,
      message: "order did not get inserted",
    };
  }

  const orderId = insertOrderResult.rows[0].id;

  const orderItems = orderObj.products.map((product) => {
    return {
      productId: product.id,
      orderId: orderId,
      quantity: product.quantity,
    };
  });

  return insertOrderItems(orderItems)
    .then((insertRes) => {
      if (insertRes.rowCount === orderItems.length) {
        return {
          statusCode: 200,
          message: { id: orderId },
        };
      } else {
        return {
          statusCode: 500,
          message: "order did not get inserted",
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        statusCode: 500,
        message:
          "an error occured on the server-side during the order insertion",
      };
    });
}

async function modifyOrder(reqBody, userId) {
  if (!orderUpdateAllowed(reqBody, userId)) {
    return {
      statusCode: 401,
      message: "user is not allowed to update the condition",
    };
  }

  const orderObj = {
    id: reqBody.id,
    memberId: reqBody.memberId,
    orderRef: reqBody.orderRef,
    orderStatus: reqBody.orderStatus,
  };

  const result = updateOrder(orderObj);

  if ((await result).rowCount === 1) {
    return {
      statusCode: 200,
      message: "Your order status has been updated",
    };
  } else {
    return {
      statusCode: 204,
      message: "Your order status has not been modified",
    };
  }
}

function orderUpdateAllowed(reqBody, userId) {
  const isAdmin = memberService.isAdmin(userId);

  if (isAdmin && ["APPROVED", "DECLINED"].includes(reqBody.orderStatus)) {
    return true;
  }
  if (!isAdmin && "CANCELLED" === reqBody.orderStatus) {
    return true;
  }
  return false;
}

async function buildOrderList(orders) {
  // console.log(orders)
  return Promise.all(
    orders.rows.map(async (order) => {
      const member = await memberService.getMemberById(order.member_id);
      const products = await productService.getAllProductsByOrderId(order.id);

      return buildOrderObj(order, products, member);
    })
  ).then((ordersList) => {
    return ordersList;
  });
}

function buildOrderObj(order, products, member) {
  return {
    id: order.id,
    orderDate: order.order_date,
    orderRef: order.order_ref,
    products: products,
    orderStatus: order.order_status,
    member: {
      id: member[0].id,
      fullName: member[0].first_name + ' ' + member[0].last_name,
      email: member[0].email,
      address: member[0].address,
      city: member[0].city, 
      postcode: member[0].postcode, 
      country: member[0].country,
      phoneNumber: member[0].telephone
    },
  };
}

module.exports = {
  getOrders,
  getOrderById,
  addOrder,
  modifyOrder,
};

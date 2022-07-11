const productService = require("./products");
const ordersDAL = require("../dal/ordersDAL");
const memberService = require("./members");

async function getOrders(userId) {
  if (!memberService.isAdmin(userId)) {
    const dbOrders = await ordersDAL.selectOrdersByMemberId(userId);

    return Promise.all(
      dbOrders.rows.map(async (dbOrder) => {
        const productList = await productService.getAllProductsByOrderId(
          dbOrder.id
        );

        return {
          id: dbOrder.id,
          orderDate: dbOrder.orderDate,
          orderRef: dbOrder.orderRef,
          products: productList,
          orderStatus: dbOrder.orderStatus,
        };
      })
    ).then((ordersList) => {
      return ordersList;
    });
  }
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

  const insertOrderResult = await ordersDAL.insertOrder(newOrderRecord);
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

  return ordersDAL
    .insertOrderItems(orderItems)
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

  const result = ordersDAL.updateOrder(orderObj);

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

module.exports = {
  getOrders,
  addOrder,
  modifyOrder,
};

import { insertOrder } from "../services/orderService";

function CheckoutPage() {
  //info to pass in req form (user id located in login session)
  const orderObj = {
    memberId: 1,
    products: [
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 1 },
    ],
  };

  function handleOnClick() {
    insertOrder(orderObj);
  }

  return (
    <div className="Form">
      <h1>TESTING...</h1>
      <button onClick={handleOnClick}>Submit an order</button>
    </div>
  );
}

export default CheckoutPage;
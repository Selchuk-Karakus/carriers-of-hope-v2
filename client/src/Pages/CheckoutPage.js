import { insertOrder } from "../services/orderService";
import { useNavigate, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../styles/cartPage.scss";


function CheckoutPage() {
  const navigate = useNavigate();
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
    <div className="product-details">
      <Link to={`/products`}>
        <button className="back-button">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      </Link>
        <h1>Free Delivery within Coventry</h1>
        <h2>Bagged Items</h2>
      <div className="checkout-card">
        <div className="description">This is where the Item details are displayed</div>
        <button
          className="checkout-button"
          onClick={() => navigate("/register", { replace: true })}
        >
          Continue as guest
        </button>
        <div></div>
        <button
          className="checkout-button"
          onClick={() => navigate("/login", { replace: true })}
        >
          Login/signup
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;

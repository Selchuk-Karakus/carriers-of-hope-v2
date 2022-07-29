import { insertOrder } from "../services/orderService";
import { useNavigate, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

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
    <div className="detail-content">
      <Link to={`/products`}>
        <button className="back-button">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      </Link>
      <h1>Free Delivery within Coventry</h1>
      <h3>Bagged Items</h3>
      <div>This is where the Item details are displayed</div>
      <button
        className="nav-button"
        onClick={() => navigate("/register", { replace: true })}
      >
        Continue as guest
      </button>
      <button
        className="nav-button"
        onClick={() => navigate("/login", { replace: true })}
      >
        Login/signup
      </button>
    </div>
  );
}

export default CheckoutPage;

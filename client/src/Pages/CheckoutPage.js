import React, { useEffect, useState, useContext } from "react";
import { insertOrder } from "../services/orderService";
import { useNavigate,  } from "react-router-dom";
import "../styles/cartPage.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Contexts/CartContext";
import { UserContext } from "../Contexts/UserContext";
import { getMemberById } from "../services/membersService";

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [checkoutUser, setCheckoutUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoggedIn) {
      getMemberById(user.userId).then((res) => {
        setCheckoutUser(res[0]);
      });
    } 
  }, [user]);

  function handleClick() {
    const products = cart?.map(item => {
      return { 
        productId: item.product.id, 
        quantity: item.qty };
    })

    const orderObj = {
      memberId: checkoutUser?.id,
      products: products,
    };

    insertOrder(orderObj).then(res => {
      navigate('/');
    });
  }

  return (
    <div className="product-details">
      <h1>Free Delivery within Coventry</h1>
      <h2>Bagged Items</h2>
      {cart.map((item, index) => {
        return (
            <div key={index} className="product-card">
              <div className="image-container">
                <img
                  src={
                    "/images/" +
                    item.product.category_name.replaceAll(" ", "") +
                    ".jpg"
                  }
                  alt={item.product.product_name}
                />
              </div>
              <div className="card-text">
                <h3 className="p-name">{item.product.product_name}</h3>
                <p className="p-description">
                  A short description about the product
                </p>

                <div>
                  <span>{item.qty} </span>
                  <span>Remove</span>
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
        );
      })}
      <div className="user-info">
        <p>Full Name: {checkoutUser?.first_name + " " + checkoutUser?.last_name}</p>
        <p>Address: {checkoutUser?.address}</p>
        <p>Email: {checkoutUser?.email}</p>
        <p>Phone number: {checkoutUser?.telephone}</p>
      </div>
      <button onClick={handleClick} className="place-order-btn">
        Place Order
      </button>
      {/* <button
        className="checkout-button"
        onClick={() => navigate("/register", { replace: true })}
      >
        Continue as guest
      </button>
      <button
        className="checkout-button"
        onClick={() => navigate("/login", { replace: true })}
      >
        Login/signup
      </button> */}
    </div>
  );
}

export default CheckoutPage;

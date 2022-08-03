import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cartPage.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Contexts/CartContext";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-details">
      <h2 className="free-delivery-title">Free Delivery within Coventry</h2>
      <h3>Bagged Items</h3>
      {cart.map((item, index) => {
        return (
          <>
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
          </>
        );
      })}
      <div className="card-text">
        <button
          className="checkout-button"
          onClick={() => navigate(`/checkout`, { replace: true })}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

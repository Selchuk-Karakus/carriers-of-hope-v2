import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Contexts/CartContext";
import { IoIosArrowBack } from "react-icons/io";
import { handleRemoveItemInCart } from "../util/cart";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      <div className="cart-details">
        <h1 className="free-delivery-title">Free Delivery within Coventry</h1>
        <h2>Bagged Items</h2>
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

                    <h3>{item.product.product_name}</h3>
                    <p className="p-description">{item.product.description}</p>
                      <span className="qty">
                        <strong>Qty </strong>
                        {item.qty}
                      </span>
                      <span
                        className="bin-icon"
                        onClick={() => {
                        handleRemoveItemInCart(index, cart, setCart);
                        }}
                      >
                        <RiDeleteBin6Line />
                      </span>
              </div>
            </>
          );
        })}
        <div className="btn-container">
          <button
            className="checkout-button"
            onClick={() => navigate(`/checkout`, { replace: true })}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

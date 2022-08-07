import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Contexts/CartContext";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <Link to={"/products"}>
        <button className="back-btn">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      </Link>
      <div className="cart-details">
        <h1 className="free-delivery-title">Free Delivery within Coventry</h1>
        <h2>Bagged Items</h2>
        {cart.map((item, index) => {
          return (
            <>
              <div key={index} className="product-card">
                <div className="card-img-desc">
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
                    <h3>{item.product.product_name}</h3>
                    <p className="p-description">{item.product.description}</p>
                    <div className="qty-and-delete-container">
                      <span>Qty{item.qty}</span>
                      <span className="bin-icon">
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default CartPage;

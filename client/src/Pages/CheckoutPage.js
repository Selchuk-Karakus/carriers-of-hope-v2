import React, { useEffect, useState, useContext } from "react";
import { insertOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";
import "../styles/cartPage.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Contexts/CartContext";
import { UserContext } from "../Contexts/UserContext";
import { getMemberById } from "../services/membersService";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { handleRemoveItemInCart } from "../util/cart";

function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);
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
    const products = cart?.map((item) => {
      return {
        productId: item.product.id,
        quantity: item.qty,
      };
    });

    const orderObj = {
      memberId: checkoutUser?.id,
      products: products,
    };

    insertOrder(orderObj).then((res) => {
      setCart([]);
      navigate("/");
    });
  }

  return (
    <>
      <div className="checkout-container">
        <Link to={"/cart"}>
          <button className="back-btn">
            <span className="icon">
              <IoIosArrowBack />
            </span>
            Back
          </button>
        </Link>
        <div className="product-details-checkout">
          <h2>
            <strong>CHECKOUT</strong>
          </h2>
          <div className="detail-container">
            <div className="user-info">
              <div className="email">
                <h4>EMAIL ADDRESS</h4>
                <p>{checkoutUser?.email}</p>
              </div>

              <div className="edit-user-info">
                <div className="postal-address">
                  <h4>POSTAL ADDRESS</h4>
                  <p>
                    {" "}
                    {checkoutUser?.first_name + " " + checkoutUser?.last_name}
                  </p>
                  <p>{checkoutUser?.address}</p>
                  <p>{checkoutUser?.city}</p>
                  <p>{checkoutUser?.postcode.toUpperCase()}</p>
                  <p>{checkoutUser?.country}</p>
                  <p>{checkoutUser?.telephone}</p>
                </div>

                <Link to={"/address-book"}>
                  <button>CHANGE</button>
                </Link>
              </div>
            </div>
            <div className="product-card-checkout">
              {cart.map((item, index) => {
                return (
                  <>
                    <div key={index} className="card">
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
                      {/* <p className="p-description">{item.product.description}</p> */}
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
                <button onClick={handleClick}>Place Order</button>
              </div>
            </div>
          </div>

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
      </div>
    </>
  );
}

export default CheckoutPage;

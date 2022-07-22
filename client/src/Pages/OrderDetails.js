import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrdersContext } from "../Contexts/OrdersContext";
import { getOrders } from "../services/orderService";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../styles/orderdetails.scss";
import { CgProfile } from "react-icons/cg";

function OrderDetails() {
  const { orders, setOrders } = useContext(OrdersContext);
  const [orderDetailsObj, setOrderDetailsObj] = useState({});

  const { id } = useParams();
  useEffect(() => {
    if (orders.length === 0) {
      getOrders().then((orders) => {
        setOrders(orders);
      });
    }
    const res = orders.find((orderVal) => orderVal.id === Number(id));

    setOrderDetailsObj(res);
  }, [orders, id, setOrderDetailsObj, setOrders]);
  return (
    <>
      <div className="admin-navbar">
        <div className="admin-profile">
          <h1>Admin name</h1>
          <span className="profile-icon">
            <CgProfile />
          </span>
        </div>
        <div className="logout">Logout</div>
      </div>

      <Link to={"/admin/dashboard"}>
        <button className="back-button">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      </Link>

      <h2>Order details</h2>
      <div className="order-details-container">
        <div className="product-img">
          <img
            src="https://m.media-amazon.com/images/I/61GupjuEzDL._AC_SX466_.jpg"
            alt="microwave"
          />
        </div>

        <div className="product-details-container">
          <div className="products-description-details">
            <span className="product-name">
              Microwave {orderDetailsObj?.products?.name}
            </span>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="product-quantity">Qty 1</p>
          </div>

          <div className="customer-details-container">
            <div className="customer-name">
              <p>Customer Name:</p>
              {orderDetailsObj?.member?.fullName}
            </div>

            <div className="customer-email">
              <p>Email:</p>
              {orderDetailsObj?.member?.email}
            </div>

            <div className="customer-address">
              <p>Address: </p>
              {orderDetailsObj?.member?.address},{orderDetailsObj?.member?.city}
              ,{orderDetailsObj?.member?.postcode},
              {orderDetailsObj?.member?.country}
            </div>

            <div className="customer-number">
              <p>Phone Number: </p>
              {orderDetailsObj?.member?.phoneNumber}
            </div>
          </div>
        </div>
      </div>

      <div className="form-container">
        <form className="form">
          <label className="container">Delivered</label>
          <input type="checkbox" className="checkbox" />

          <label className="container">Picked up</label>
          <input type="checkbox" className="checkbox" />

          <label className="container">Waiting list</label>
          <input type="checkbox" className="checkbox" />

          <label className="container">Cancelled</label>
          <input type="checkbox" className="checkbox" />
        </form>
      </div>
    </>
  );
}

export default OrderDetails;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../styles/requestform.scss";
import { IoIosArrowBack } from "react-icons/io";
import { getProductById } from "../services/productsService";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage = () => {
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    async function load() {
      const product = await getProductById(id);
      setProduct(product);
      setLoaded(true);
    }
    load();
  }, [id]);

  const navigate = useNavigate();
  return loaded ? (
    <div className="detail-content">
      <Link to={`/product-details/${id}`}>
        <button className="back-button">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      </Link>
      <h2 className="free-delivery-title">Free Delivery within Coventry</h2>
      <h3>Bagged Items</h3>
      <div className="product-card">
        <div className="image-container">
          <img
            src={"/images/" + product.category_name + ".jpg"}
            alt={product.product_name}
          />
        </div>
        <div className="card-text">
          <h3 className="p-name">{product.product_name}</h3>
          <p className="p-description">A short description about the product</p>

          <div>
            <span>Qty 1 </span>
            <span>Remove</span>
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
      <div>
        <button
          className="nav-button"
          onClick={() => navigate(`/checkout`, { replace: true })}
        >
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default CartPage;

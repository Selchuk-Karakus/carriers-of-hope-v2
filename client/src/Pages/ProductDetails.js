import React, { useEffect,useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { ThreeDots } from "react-loading-icons";

function ProductDetails() {
  const [product, setProduct]=useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    console.log(id)
    const fetchOneData = async () => {
      const response = await fetch(
        `http://localhost:8000/products/${id}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setProduct(jsonData);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error("Network response was not ok.");
      }
    };
    fetchOneData().catch(console.error);
    console.log(product)
  }, [id]);


  const increaseQty =()=>{
    setQuantity(quantity+1);
  }

  const decreaseQty =()=>{
    if(quantity!==0)
    setQuantity(quantity-1);
  }

  return (
    <div className="product-details">
      <Link to={"/products-list/" + product.category_name}>
        <button className="back-btn">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          Back
        </button>
      </Link>{" "}
      <div>
        {loading ? (
          <ThreeDots stroke="#FFE61B" style={{ "margin-left": "5rem" }} />
        ) : error ? (
          <div>
            {" "}
            <img
              src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
              width={"50px"}
              alt="error-img"
            />{" "}
            <p className="text-danger">Network response was not ok!</p>
          </div>
        ) : (
          <div className="product-card">
            <div className="image-container">
              <img
                alt="product-images"
                src={
                  "/images/" +
                  product.category_name.replaceAll(" ", "") +
                  ".jpg"
                }
              />
            </div>
            ) : (
            <div className="product-card">
              <div className="image-container">
                <img
                  alt="product-images"
                  src={
                    product.category_name === "Electrical items"
                      ? "/images/Electrical-items.jpg"
                      : "/images/" +
                        product.category_name.replaceAll(" ", "") +
                        ".jpg"
                  }
                />
              </div>
              <div className="body">
                <h3 className="p-name">{product.product_name}</h3>
                <h4 className="sub-title">Product Description</h4>
                <p className="description">
                  <span>-Lorem ipsum dolor sit amet</span>
                  <span>-Consectetur adipiscing elit.</span>
                  <span>-Quisque sit amet porttitor arcu.</span>
                </p>
                <h4 className="sub-title">Delivery</h4>
                <p>Lorem ipsum dolor sit amet</p>
                <div className="qnt-content">
                  <h3>Qty.</h3>
                  <span className="qty-btn" onClick={decreaseQty}>
                    -
                  </span>
                  <p>{quantity}</p>
                  <span className="qty-btn" onClick={increaseQty}>
                    +
                  </span>
                </div>
                <button
                  className="nav-button"
                  onClick={() => navigate("/request-form")}
                >
                  Request Item
                </button>
              </div>
            </div>
            <div className="card-text">
              <h3 className="p-name">{product.product_name}</h3>
              <h4>Product Description</h4>
              <p className="description">
                <span>-Lorem ipsum dolor sit amet</span>
                <span>-Consectetur adipiscing elit.</span>
                <span>-Quisque sit amet porttitor arcu.</span>
              </p>
              <h4>Delivery</h4>
              <p>Lorem ipsum dolor sit amet</p>
              <button
                className="nav-button"
                onClick={() => navigate(`/request-form/${id}`)}
              >
                Request Item
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;

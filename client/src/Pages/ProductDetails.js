import React, { useEffect,useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {Styles} from '../styles/productdetails';
import { ThreeDots } from "react-loading-icons";


function ProductDetails() {
  const [product, setProduct]=useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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

  return(
        <Styles>
          <div className="detail-content">
          <Link to={'/products'}><button className="back-button"><span className="icon"><IoIosArrowBack/></span>Back</button></Link>
          {" "}
          <div>
          {loading ? (
            <ThreeDots stroke="#FFE61B" style={{"margin-left":"5rem"}}/>
          ) : error ? (
            <div>
              {" "}
              <img
                src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
                width={"50px"}
                alt='error-img'
              />{" "}
              <p className="text-danger">Network response was not ok!</p>
            </div>
          ) : (
            <div >
              {product?
                 product.map(({product_name,category_name})=>{
                  return(
                    <div className="product-card">
                      <div className="image-container">
                          <img alt="product-images"
                             src={'/images/' + category_name +'.jpg'} />        
                        </div>  
                      <div className="card-text">
                      <h3 className="p-name">{product_name}</h3>
                      <p className="p-category">{category_name}</p>
                      <button className="nav-button" onClick={() => navigate("/request-form")}>Place request</button>
                      </div>
                    </div>
                  )
                })
              : "Loading..."}
          </div>
           
          )}
          </div>
          </div>
        </Styles>
        );
}

export default ProductDetails;

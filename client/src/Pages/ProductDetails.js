import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Styles} from '../styles/productdetails';


function ProductDetails() {
  const [product, setProduct]=useState({});
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
      } else {
        throw new Error("Network response was not ok.");
      }
    };
    fetchOneData().catch(console.error);
    console.log(product)
  }, [id]);

  return(
        <Styles>
          {product.map(({product_name,category_name})=>{
            return(
              <div className="detail-content">
                <img alt="product-images"
                    src={'/images/' +category_name +'.jpg'} />        
                <h3 className="p-name">{product_name}</h3>
                <p className="p-category">{category_name}</p>
                <button onClick={() => navigate("/request-form")}>Place request</button>
              </div>
            )
          })}
        </Styles>
        );
}

export default ProductDetails;

import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Styles} from "../styles/productcards";


const ProductCards = ({productsData}) => {
   console.log(productsData);

   return (
        <div className="card-container">
            {productsData?productsData.map(
                ({product_name,category_name}, index) => {
                  return (
                    <div className="video-card" key={index}> 
                    <Link to={`/product-details/${product_name}`} >             
                      <div className="card-body">
                        <h3 className="title">{product_name}</h3>
                        <p className="">{category_name}</p>
                      </div>
                      </Link>    
                    </div>
                );
                }
                )
              : "Loading..."}
        </div>
   );
 };
 
 export default ProductCards;
 
import React, { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import {Styles} from '../styles/productspage';
import { IoIosArrowBack } from 'react-icons/io';
import {ProductsContext} from '../services/products.context';
import { ThreeDots } from "react-loading-icons";


function ProductsPage() {
  const  {products, loading, error, fetchData} =  useContext(ProductsContext);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);


  return (
    <Styles>
      <div className="card-container">
        <button><IoIosArrowBack/><span></span>Back</button>
          {" "}
          <div>
          {loading ? (
            <ThreeDots stroke="#FFE61B" style={{margin:"auto"}}/>
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
            <div className="card-container">
            {products?products.map(
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
           
          )}
          </div>
      </div>
    </Styles>
  );
}
export default ProductsPage;

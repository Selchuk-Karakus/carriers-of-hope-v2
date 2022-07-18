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
    console.log(products)
  }, []);


  return (
    <Styles>
      <div className="main-content">
        <Link to={'/'}><button className="back-button"><span className="icon"><IoIosArrowBack/></span>Back</button></Link>
          {" "}
        <div className=''>
          <h3 className="title">Online Shop</h3>
          <div className="onlineShop-image">
            <img src="images/online_shopping.jpg"  alt="online-shopping photo"/>
          </div>
        </div>
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
              <div className="card-container">
                {products?products.map(
                  ({id,product_name,category_name}, index) => {
                    return (
                      <div className="product-card" key={id}> 
                        <Link to={'/product-details/'+id} >   
                          <div className="image-container">
                          <img alt="product-images"
                              src={'/images/' + category_name +'.jpg'} />        
                          </div>  
                          <div className="card-text">
                            <h3 className="p-name">{product_name}</h3>
                            <p className="p-category">{category_name}</p>
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

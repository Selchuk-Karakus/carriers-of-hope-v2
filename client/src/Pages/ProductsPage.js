/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect,useContext, useState} from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {ProductsContext} from '../Contexts/ProductsContext';
import { ThreeDots } from "react-loading-icons";
import '../styles/productspage.scss';

function ProductsPage() {
  
  const  {products, loading, error, fetchData} =  useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts]=useState([]);

  let { category } = useParams();

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    let filteredData = products.filter((p) => {
      if(category!=='Electrical-items'){
       return p.category_name.includes(category)}
       else{
        return p.category_name.includes('Electrical items')
       }
    });
    setFilteredProducts(filteredData)
  }, [category]);
  console.log(filteredProducts)



  return (
      <div className="main-content">
        <Link to={'/products'}><button className="back-button"><span className="icon"><IoIosArrowBack/></span>Back</button></Link>
          {" "}
        <div className=''>
          <h3 className="title">Request {category}</h3>
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
                {filteredProducts?filteredProducts.map(
                  ({id,product_name,category_name}, index) => {
                    return (
                      <div className="product-card" key={id}> 
                        <Link to={'/product-details/'+id} >   
                          <div className="image-container">
                          <img alt="product-images"
                              src={category_name==='Electrical items' ?'/images/Electrical-items.jpg':'/images/:'+category_name+'.jpg'} />        
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
  );
}
export default ProductsPage;

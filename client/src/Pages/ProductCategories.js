import React,{useState} from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {FiChevronRight} from 'react-icons/fi'

function ProductCategories () {

  const categories = ['Furniture', 'Electrical-items', 'Household', 'Toiletries', 'Baby', 'Other'];

  
   return(
      <div className="categories-page">
        <Link to={'/'}><button className="back-btn"><span className="icon"><IoIosArrowBack/></span>Back</button></Link>
        <div className='shop-online'>
          <h3 className="title">Online Shop</h3>
          <div className="onlineShop-image">
            <img src="images/Online-Shopping2.jpg"  alt="online-shopping photo"/>
          </div>
          <p>Carriers of Hope online shop allow you to enjoy the unique shopping experience in the comfort of your own home.</p>
        </div>
        <h3>Request items by categories</h3>
        <div className="cards-section">
          {categories.map((category,index)=>{
            return(
              <div className="categories-card" key={index}> 
                <Link to={'/products-list/'+category} >   
                  <div className="image-container">
                  <img alt="product-images"
                      src={'/images/' + category +'.jpg'} />        
                  </div>  
                  <h4 className="p-name">{category}<span className="icon"><FiChevronRight/></span></h4>
                </Link>    
              </div>
            )
          })}

        </div>
      
        
      </div>


   )
}

export default ProductCategories;

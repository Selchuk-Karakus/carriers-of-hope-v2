/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect,useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import {ProductsContext} from '../Contexts/ProductsContext';
import { ThreeDots } from "react-loading-icons";
import {FiChevronRight} from 'react-icons/fi'


function ProductsPage() {
  
  const {products, loading, error, fetchData} =  useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts]=useState([]);
  const [sortQuery, setSortQuery]=useState([]);
  const [searchQuery, setSearchQuery]=useState([]);

  let { category } = useParams();

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    let search=()=>{
      let filteredData = products.filter((p) => {
        if(category!=='Electrical-items'){
         return p.category_name.includes(category)}
         else{
          return p.category_name.includes('Electrical items')
         }
      });
      setFilteredProducts(filteredData);
    }
    search()
  }, [category,products]);
  console.log(filteredProducts);



  return (
      <div className="products-page">
        <div className="header">
          <div><Link to={'/products'}><button className="back-btn"><span className="icon"><IoIosArrowBack/></span>Back</button></Link>
            {" "}
          <h3>Request {category}</h3>
          </div>
          <div className="filter-bar">
              <select className="sort-option" onChange={(e)=> setSortQuery(e.target.value)}>
                <option  selected="true" value="All">Sort by</option>
              </select>
              <select className="filter-option" onChange={(e)=> setSearchQuery(e.target.value)}>
                <option  selected="true" disabled="disabled">Filter</option>
                {filteredProducts.map(
                  ({id,product_name}, index) => {
                    return (                          
                      <option value={product_name}><Link to={'/product-details/'+id} >{product_name}</Link></option>                    
                  );
                  }
                  )
                }
              </select>
          </div>
        </div>
        <div>
          {loading ? (
            <ThreeDots stroke="#FFE61B" style={{"margin-left":"5rem"}}/>
          ) : error ? (
            <div className="text-danger">
              {" "}
              <img
                src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
                width={"50px"}
                alt='error-img'
              />{" "}
              <p >Network response was not ok!</p>
            </div>
            ) : (
              <div className="card-container">
                {filteredProducts.map(
                  ({id,product_name,category_name}, index) => {
                    return (
                      <div className="product-card" key={id}> 
                        <Link to={'/product-details/'+id} >   
                          <div className="image-container">
                            <img alt="product-images"
                              src={category_name==='Electrical items' ?
                              '/images/Electrical-items.jpg':'/images/'+category_name+'.jpg'} />        
                          </div>  
                          <div className="card-text">
                            <h4 className="p-name">{product_name}<span className="icon"><FiChevronRight/></span></h4>
                          </div>
                        </Link>    
                    </div>
                  );
                  }
                  )
                }
              </div>
            
          )}
        </div>
      </div>
  );
}
export default ProductsPage;

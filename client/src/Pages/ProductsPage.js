/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect,useContext, useState} from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {ProductsContext} from '../Contexts/ProductsContext';
import { IoIosArrowBack } from 'react-icons/io';
import { BiSortAlt2 } from 'react-icons/bi';
import { ThreeDots } from "react-loading-icons";
import {FiChevronRight} from 'react-icons/fi'


function ProductsPage() {
  
  const {products, loading, error, fetchData} =  useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts]=useState([]);
  const [isSort, setIsSort]=useState(false);
  const [searchQuery, setSearchQuery]=useState('');
  const [redirect, setRedirect] = useState(false);


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

  useEffect(()=>{
    const sortProducts = ()=>{
      let sortedArray =  [].concat(filteredProducts).sort((a,b)=>{
        return isSort? a.product_name[0].localeCompare(b.product_name[0]): a.id-b.id
      })
      setFilteredProducts(sortedArray)
    }
    sortProducts()
  },[isSort])
  
  const handleFilterQuery=(e)=>{
     setSearchQuery(e.target.value);
     setRedirect(true);
  }
  if (redirect) {
    return <Navigate to={'/product-details/'+searchQuery}/>
  }
  return (
      <div className="products-page">
        <div className="header">
          <div><Link to={'/products'}><button className="back-btn"><span className="icon"><IoIosArrowBack/></span>Back</button></Link>
            {" "}
          <h3>Request {category}</h3>
          </div>
          <div className="filter-bar">
              <button className="sort-btn" onClick={()=> setIsSort(!isSort)}>
               Sort by Name 
               <span>
                  <BiSortAlt2/>
                 </span>
              </button>
              <select  onChange={handleFilterQuery} className="filter-option" >
                <option   selected="true" disabled="disabled">Filter</option>
                {filteredProducts.map(
                  ({id,product_name}, index) => {
                    return (                          
                      <option value={id}>{product_name}</option>                    
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
                        <Link to={"/product-details/" + id}>
                          <div className="image-container">
                            <img
                              alt="product-images"
                              src={
                                category_name === "Electrical items"
                                  ? "/images/Electrical-items.jpg"
                                  : "/images/" +
                                    category_name.replaceAll(" ", "") +
                                    ".jpg"
                              }
                            />
                          </div>
                          <div className="card-text">
                            <h4 className="p-name">
                              {product_name}
                              <span className="icon">
                                <FiChevronRight />
                              </span>
                            </h4>
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

import React, {useState, useEffect,useContext} from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import {ProductsContext} from '../services/products.context';
import { ThreeDots } from "react-loading-icons";
import {Link} from 'react-router-dom';
import '../styles/productstable.scss';

function ProductsTable(){

   const  {products, loading, error, fetchData} =  useContext(ProductsContext);
 
  
   useEffect(() => {
     fetchData().catch(console.error);
   }, []);
   
   const deleteProduct = async (id) => {
      if (window.confirm("Are you sure you want to delete this product?")) {
        const url = `http://localhost:8000/products/${id}`;
        const postDetails = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const response = await fetch(url, postDetails);
          if (response.ok) {
            let jsonResponse = await response.json();
            console.log(jsonResponse);
          } else {
            throw new Error("Request failed!");
          }
        } catch (error) {
          console.log(error);
        }
        fetchData();
      }
    };
    
 
   return(
        <div className="products-table">
          <Link to='/add-new-product'><button>Add New Product</button></Link>
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
            <div className="product-dashboard">
              <table id="products-table">
                <thead>
                  <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?products.sort((a,b)=>a.id-b.id).map(
                      ({id,product_name,category_name}, index) => {
                      return (
                        <tr>       
                          <td>{id}</td>
                          <td>{product_name}</td>
                          <td>{category_name}</td>
                          <td>In Stock</td>
                          <td className="actions">
                            <span className="edit-btn">
                                <Link to={'/edit-product/'+id}><FiEdit2/></Link>
                            </span>
                            <span className="delete-btn">
                                <RiDeleteBin6Line onClick={()=>deleteProduct(id)}/>
                            </span>
                            </td>
                          </tr>
                      );
                      }
                    )
                  : "Loading..."
                  }
                </tbody>
              </table>
            </div>
          )}
        </div>

)

}

export default ProductsTable;
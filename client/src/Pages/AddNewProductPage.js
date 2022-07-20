import React, { useState } from "react";
import {Navigate} from 'react-router-dom'
import '../styles/addproduct.scss';

export default function AddNewProductPage() {

  const [formProduct, setFormProduct] = useState({});
  const [redirect, setRedirect] = useState(false);


  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormProduct({...formProduct,[name]: value });
    console.log(formProduct);
  };

  const submitAddProduct = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/products";
    const postDetails = {
      method: "POST",
      body: JSON.stringify(formProduct),
      headers: { "Content-Type": "application/json" },
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
    setRedirect(true)
    
  };

  
  if (redirect) {
    return <Navigate to={'/admin/dashboard'}/>
  }

  return (
      <div className="form-container">
         <h3>Add a new product</h3>
        <form>
          <div>
            <label for="product_name">
              Product Name
            </label>
            <input
              required
              onChange={handleInputValue}
              type="text"
              name="product_name"
              className="form-control"
              id="product_name"              
            />
          </div>
          <div>
            <label for="category_name">
              Category Name
            </label>
            <input
              required
              onChange={handleInputValue}
              type="text"
              name="category_name"
              className="form-control"
              id="category_name"
            />
          </div>
          <div>
            <textarea required placeholder=" "></textarea>
            <label>Description</label>
          </div>
          <button
            type="submit"
            className="submit-btn"
            onClick={submitAddProduct}
          >
            Submit
          </button>
        </form>
      </div>
  );
}

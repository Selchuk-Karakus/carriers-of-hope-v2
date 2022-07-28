import React, { useState, useContext} from "react";
import {Navigate} from 'react-router-dom';
import { RiAddCircleFill } from 'react-icons/ri';
import {ProductsContext} from '../Contexts/ProductsContext';
import '../styles/addproduct.scss';

export default function AddNewProductPage() {

  const [formProduct, setFormProduct] = useState({});
  const [redirect, setRedirect] = useState(false);
  const {setProductsTable} =  useContext(ProductsContext);


  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormProduct({...formProduct,[name]: value });
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
    setRedirect(true);
    setProductsTable(true);
  };

  console.log(formProduct);

  const cancelAddProduct=()=>{
    setRedirect(true);
    setProductsTable(true);
  }
  
  if (redirect) {
    return <Navigate to={'/admin/dashboard'}/>
  }

  return (
      <div className="form-container-products">  
      <h3>Add a new product</h3>
      <div className="form-wrapper">
        <form className="product-form">
          <div  className="product-name">
            <label for="product_name">
              Product Name
            </label>
            <input
              required
              onChange={handleInputValue}
              type="text"
              name="product_name"
              id="product_name"              
            />
          </div>
          <div className="add-image">
            <span className="addImage-icon"><RiAddCircleFill/></span>
            <span className="addImage-icon middle-img"><RiAddCircleFill/></span>
            <span className="addImage-icon"><RiAddCircleFill/></span>
          </div>
          <div className="status">
            <label for="status">
              Status
            </label>
            <select id='status'
                    onChange={handleInputValue} 
                    name='product_status' 
                    value={formProduct.product_status}  
                    className="select-option ">
              <option value='Status' disabled>Status</option>
              <option value={true}>In Stock</option>
              <option value={false}>Out of Stock</option>
            </select>
          </div>
          <div  className="category">
            <label for="category_name">
              Category Name
            </label>
            <select required onChange={handleInputValue} name='category_name' className="select-option">
              <option selected="true" value='category' disabled>Select Category </option>
              <option value='Furniture'>Furniture </option>
              <option value="Electrical items">Electrical items</option>
              <option  value='Household'>Household</option>
              <option  value='Toiletries'>Toiletries</option>
              <option  value='Baby'>Baby</option>
              <option  value='Other'>Other</option>
            </select>
          </div>
          <div className="description" >
            <label>Description</label>
            <textarea name="description" onChange={handleInputValue}  placeholder=""></textarea>
          </div>
            <button
              type="submit"
              className="submit-btn"
              onClick={submitAddProduct}
            >
              Upload
            </button>
            <button className="cancel-btn" onClick={cancelAddProduct}>
              Cancel
            </button>
        </form>
        </div>
      </div>
  );
}

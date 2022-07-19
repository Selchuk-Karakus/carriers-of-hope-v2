import React, { useState, useEffect } from "react";
import {Styles} from '../styles/addproduct';
import { Navigate, useParams } from "react-router-dom";


export default function UpdateProductPage() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [redirect, setRedirect] = useState(false);


  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({...product,[name]: value });
    console.log(product);
  };

  let { id } = useParams();

  useEffect(() => {
    console.log(id)
    const fetchOneData = async () => {
      const response = await fetch(
        `http://localhost:8000/products/${id}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setProduct(jsonData);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error("Network response was not ok.");
      }
    };
    fetchOneData().catch(console.error);
    console.log(product)

  }, []);


  const submitAddProduct = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/products/${id}`;
    const postDetails = {
      method: "PUT",
      body: JSON.stringify(product),
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
    return <Navigate to={'/dashboard'}/>
  }

  return (
    <Styles>
      <div className="form-container">
         <h3>Edit Product Listing</h3>
        <form>
          <div>
            <label for="product_name">
              Product Name
            </label>
            <input
              defaultValue={product.product_name}
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
              defaultValue={product.category_name}

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
    </Styles>
  );
}

import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { RiAddCircleFill } from 'react-icons/ri';
import { ThreeDots } from "react-loading-icons";
import '../styles/addproduct.scss';


export default function UpdateProductPage() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [redirect, setRedirect] = useState(false);


  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({...product,[name]: value });
    // console.log(product);
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

  }, []);


  const submitUpdateProduct = async (e) => {
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

  const cancelUpdateProduct=()=>{
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to={'/admin/dashboard'}/>
  }
  console.log(product)

  return (
      <div className="form-container">
         <h3>Edit Product</h3>
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
            <form className="product-form"> 
            <div  className="product-name">
              <label for="product_name">
                Product Name
              </label>
              <input
                defaultValue={product.product_name}
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
              <select name='product_status' className="select-option">
              
                {product.product_status?
                <><option selected value='In Stock'>In Stock</option>
                <option value='Out of Stock'>Out of Stock</option></>:
                <><option selected value='Out of Stock'>Out of Stock</option>
                <option value='In Stock'>In Stock</option>
                </>
                }                
              </select>
            </div>
            <div  className="category">
              <label for="category_name">
                Category Name
              </label>
              <select name='category_name' className="select-option">
                <option selected="true" value='Furniture'>{product.category_name} </option>
                <option value='Furniture'>Furniture </option>
                <option value="Electrical items">Electrical items</option>
                <option  value='Household'>Household</option>
                <option  value='Toiletries'>Toiletries</option>
                <option  value='Baby'>Baby</option>
                <option  value='Other'>Other</option>
              </select>
            </div>
            <div className="description">
              <label>Description</label>
              <textarea name="description" placeholder="">{product.description}</textarea>
            </div>
            <button
                type="submit"
                className="submit-btn"
                onClick={submitUpdateProduct}
              >
                Update
              </button>
              <button className="cancel-btn" onClick={cancelUpdateProduct}>
                Cancel
              </button>
          </form>
           )}
        
      </div>
  );
}

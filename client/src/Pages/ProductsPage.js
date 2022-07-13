import React, { useEffect,useContext } from "react";
import {Styles} from '../styles/productspage';
import { IoIosArrowBack } from 'react-icons/io';
import {ProductsContext} from '../services/products.context';
import ProductCards from '../components/ProductsCards';
import { ThreeDots } from "react-loading-icons";


function ProductsPage() {
  const  {products, loading, error, fetchData} =  useContext(ProductsContext);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);


  return (
    <Styles>
      <div className="card-container">
        <button><IoIosArrowBack/><span></span>Back</button>
          {" "}
          <div>
          {loading ? (
            <ThreeDots stroke="#FFE61B" style={{margin:"auto"}}/>
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
            <ProductCards productsData={products}/>
          )}
          </div>
      </div>
    </Styles>
  );
}
export default ProductsPage;

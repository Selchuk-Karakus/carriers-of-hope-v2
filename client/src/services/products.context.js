

import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
   const [products, setProducts]=useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
  
 const fetchData = async () => {
   const response = await fetch(
     "http://localhost:8000/products"
   );
   if (response.ok) {
     const jsonData = await response.json();
     setProducts(jsonData);
     setLoading(false);
   } else {
     setLoading(false);
     setError(true);
     throw new Error("Network response was not ok.");
   }
 };
 
  return (
    <ProductsContext.Provider value={{ products, loading, error, fetchData}}>
      {" "}
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;

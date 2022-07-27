import React, {useState, useEffect,useContext} from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit2,FiDownload } from 'react-icons/fi';
import {ProductsContext} from '../Contexts/ProductsContext';
import { ThreeDots } from "react-loading-icons";
import {Link} from 'react-router-dom';
import '../styles/productstable.scss';
import { CSVLink } from "react-csv";

function ProductsTable(){

   const  {products, loading, error, fetchData} =  useContext(ProductsContext);
   const [filterByStatus, setFilterByStatus] = useState('');
   const [sortQuery, setSortQuery] = useState('');
   const [filteredProducts, setFilteredProducts] = useState(products);
    const headers = [
      { label: "Product ID", key: "id" },
      { label: "Product Name", key: "product_name" },
      { label: "Category", key: "category_name" },
      // { label: "Status", key: "" },
      // { label: "Staff notes", key: "" },
    ];
  
   useEffect(() => {
     fetchData().catch(console.error);
   }, []);
   
   useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = products.filter((product) => {
        if(filterByStatus==='In Stock') {
          return product.product_status===true  
        } else if(filterByStatus==='Out of Stock'){
          return product.product_status===false  
        } else{
          return product
        }
      })
      setFilteredProducts(filteredProducts);
    };
    filterProducts();
    console.log(filterByStatus)
  }, [filterByStatus,products]);


  useEffect(() => {
    const sortProducts = ()=>{
      let filteredArray =  [].concat(products).sort((a,b)=>{
        return sortQuery==='product_name'? a.product_name[0].localeCompare(b.product_name[0]):
                sortQuery==='category_name'?a.category_name[0].localeCompare(b.category_name[0]):
                a.id-b.id
      })
      setFilteredProducts(filteredArray)
    }
    console.log(sortQuery)
    sortProducts()
  }, [sortQuery,products]);

     
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

    const handleSelectOptionValue=(e)=>{
     setSortQuery(e.target.value)
    }

    
 
   return (
     <div className="products-table">
       <div className="table-controller">
         <Link to="/add-new-product">
           <button className="add-btn">Add New Product</button>
         </Link>
         <div className="filter-bar">
           <select
             className="sort-option"
             onChange={(e) => setFilterByStatus(e.target.value)}
           >
             <option selected="true" value="All">
               Filter by Status
             </option>
             <option value="In Stock">In Stock</option>
             <option value="Out of Stock">Out of Stock</option>
           </select>
           <select className="sort-option" onChange={handleSelectOptionValue}>
             <option selected="true" disabled="disabled">
               Sort by
             </option>
             <option value="id">Product Id</option>
             <option value="product_name">Product Name</option>
             <option value="category_name">Category Name</option>
             <option value="status">Status</option>
           </select>

           {filteredProducts && filteredProducts.length > 0 && (
             <CSVLink
               className="download-btn"
               headers={headers}
               data={filteredProducts}
               filename="products.csv"
             >
               <FiDownload />
             </CSVLink>
           )}
         </div>
       </div>
       {loading ? (
         <ThreeDots stroke="#FFE61B" style={{ "margin-left": "5rem" }} />
       ) : error ? (
         <div>
           {" "}
           <img
             src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
             width={"50px"}
             alt="error-img"
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
                 <th>Staff notes</th>
                 <th>Action</th>
               </tr>
             </thead>
             <tbody>
               {filteredProducts
                 ? filteredProducts.map(
                     ({ id, product_name, category_name }, index) => {
                       return (
                         <tr key={id}>
                           <td>{id}</td>
                           <td>{product_name}</td>
                           <td>{category_name}</td>
                           <td className="instock-row">In Stock</td>
                           <td>
                             "Lorem ipsum dolor sit amet, consectetur adipiscing
                             elit.{" "}
                           </td>

                           <td className="actions">
                             <span className="edit-btn">
                               <Link to={"/edit-product/" + id}>
                                 <FiEdit2 />
                               </Link>
                             </span>
                             <span className="delete-btn">
                               <RiDeleteBin6Line
                                 onClick={() => deleteProduct(id)}
                               />
                             </span>
                           </td>
                         </tr>
                       );
                     }
                   )
                 : "Loading..."}
             </tbody>
           </table>
         </div>
       )}
     </div>
   );

}

export default ProductsTable;
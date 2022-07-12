import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import RequestForm from "./components/RequestForm";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="all-products" element={<AllProducts />}></Route>
        <Route
          path="product-details/:itemId"
          element={<ProductDetails />}
        ></Route>
        <Route path="product-details" element={<ProductDetails />}></Route>
        <Route path="request-form" element={<RequestForm />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

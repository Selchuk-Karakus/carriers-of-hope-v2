import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import RequestForm from "./components/RequestForm";
import UserLogin from "./components//UserLogin";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import Global from './styles/global';
import ProductsProvider from "./services/products.context";

function App() {
  return (
    <Global>
      <Navbar />
      <Routes>
        <Route path="/"  exact element={<Homepage />}></Route>
        <ProductsProvider>
        <Route path="products" exact  element={<ProductsPage />}></Route>
        <Route
          path="product-details/:name"
          exact 
          element={<ProductDetails />}
        ></Route>
        </ProductsProvider>
        <Route path="user-login" element={<UserLogin />} />
        <Route path="request-form" exact  element={<RequestForm />}></Route>
        
        <Route path="order-summary" exact  element={<OrderSummary />}></Route>
        <Route path="*"  exact element={<NoMatch />}></Route>
      </Routes>
    
      <Footer />
    </Global>

  );
}

export default App;

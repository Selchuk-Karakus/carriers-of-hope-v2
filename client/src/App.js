import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import RequestForm from "./components/RequestForm";
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
      <ProductsProvider>
      <Routes>
        <Route path="/"  exact element={<Homepage />}></Route>
        <Route path="products" exact  element={<ProductsPage />}></Route>
        <Route
          path="product-details/:name"
          exact 
          element={<ProductDetails />}
        ></Route>
        <Route path="request-form" exact  element={<RequestForm />}></Route>
        <Route path="order-summary" exact  element={<OrderSummary />}></Route>
        <Route path="*"  exact element={<NoMatch />}></Route>
      </Routes>
      </ProductsProvider>
      <Footer />
    </Global>
  );
}

export default App;

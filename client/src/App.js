import "./App.css";
import { Container } from "./components/styles/Container.styled";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import RequestForm from "./components/RequestForm";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import FilteredProducts from "./components/FilteredProducts";
import UserLogin from "./components/UserLogin";
import ForgottenNameOrPassword from "./components/ForgottenNameOrPassword";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="all-products" element={<AllProducts />}></Route>
            <Route
              path="product-details/:itemId"
              element={<ProductDetails />}
            ></Route>
            <Route path="filtered-products" element={<FilteredProducts />} />
            <Route path="product-details" element={<ProductDetails />}></Route>
            <Route path="user-login" element={<UserLogin />}></Route>
            <Route
              path="forgotten-name-or-password"
              element={<ForgottenNameOrPassword />}
            ></Route>
            <Route path="sign-up" element={<SignUp />}></Route>
            <Route></Route>
            <Route path="request-form" element={<RequestForm />}></Route>
            <Route path="order-summary" element={<OrderSummary />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </div>

        <Footer />
      </Container>
    </>
  );
}

export default App;

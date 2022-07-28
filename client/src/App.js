import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import RequestForm from "./components/RequestForm";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import ProductsProvider from "./Contexts/ProductsContext";
import ForgottenNameOrPassword from "./components/ForgottenNameOrPassword";
import SignUp from "./Pages/SignUpPage";
import Dashboard from "./Pages/Dashboard";
import AddNewProductPage from "./Pages/AddNewProductPage";
import UpdateProductPage from "./Pages/UpdateProductPage";
import OrderDetails from "./Pages/OrderDetails";
import CustomerDetails from "./Pages/CustomerDetails";
import OrdersContextProvider from "./Contexts/OrdersContext";
import MembersContextProvider from "./Contexts/MembersContext";
import ProductCategories from './Pages/ProductCategories';
import "./styles/global.scss";
import './styles/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="content-wrap">
        <ProductsProvider>
          <OrdersContextProvider>
            <MembersContextProvider>
              <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/products" element={<ProductCategories />} />
                <Route path="/products-list/:category" element={<ProductsPage />} />
                <Route
                  path="/product-details/:id"
                  element={<ProductDetails />}
                />
                <Route path="login" element={<LoginPage />} />
                <Route
                  path="forgotten-name-or-password"
                  element={<ForgottenNameOrPassword />}
                />
                <Route path="register" element={<SignUp />} />
                <Route path="request-form" element={<RequestForm />} />
                <Route path="order-summary" element={<OrderSummary />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/order/:id" element={<OrderDetails />} />
                <Route
                  path="/add-new-product"
                  element={<AddNewProductPage />}
                ></Route>
                <Route
                  path="/edit-product/:id"
                  element={<UpdateProductPage />}
                ></Route>
                <Route path="/admin/member/:id" element={<CustomerDetails />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </MembersContextProvider>
          </OrdersContextProvider>
        </ProductsProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;

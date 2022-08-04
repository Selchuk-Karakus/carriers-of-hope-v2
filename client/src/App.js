import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar";
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
import ProductCategories from "./Pages/ProductCategories";
import CheckoutPage from "./Pages/CheckoutPage";
import "./styles/global.scss";
import "./styles/main.scss";
import UserContextProvider from "./Contexts/UserContext";
import CartContextProvider from "./Contexts/CartContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="page-template">
          <Navbar />
          <div className="content-wrap">
            <ProductsProvider>
              <OrdersContextProvider>
                <MembersContextProvider>
                  <CartContextProvider>
                    <Routes>
                      <Route path="/" exact element={<Homepage />} />
                      <Route path="/products" element={<ProductCategories />} />
                      <Route
                        path="/products-list/:category"
                        element={<ProductsPage />}
                      />
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
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="checkout" element={<CheckoutPage />} />
                      <Route path="/admin/dashboard" element={<Dashboard />} />
                      <Route
                        path="/admin/order/:id"
                        element={<OrderDetails />}
                      />
                      <Route
                        path="/add-new-product"
                        element={<AddNewProductPage />}
                      ></Route>
                      <Route
                        path="/edit-product/:id"
                        element={<UpdateProductPage />}
                      ></Route>
                      <Route
                        path="/admin/member/:id"
                        element={<CustomerDetails />}
                      />
                      <Route path="*" element={<NoMatch />} />
                    </Routes>
                  </CartContextProvider>
                </MembersContextProvider>
              </OrdersContextProvider>
            </ProductsProvider>
          </div>
          <Footer />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;

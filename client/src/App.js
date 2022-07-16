import "./App.css"
import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import ProductsPage from "./Pages/ProductsPage"
import ProductDetails from "./Pages/ProductDetails";
import RequestForm from "./components/RequestForm"
import LoginPage from "./Pages/LoginPage";
import Navbar from "./components/Navbar"
import OrderSummary from "./components/OrderSummary"
import Footer from "./components/Footer"
import NoMatch from "./components/NoMatch"
import Global from './styles/global'
import ProductsProvider from "./services/products.context"
import FilteredProducts from "./components/FilteredProducts"
import ForgottenNameOrPassword from "./components/ForgottenNameOrPassword"
import SignUp from "./components/SignUp"
import { Container } from './styles/Container.styled'





function App() {
  return (
    <>
      <Container>
        <Navbar />
        <div className="content-wrap">
        <ProductsProvider>
          <Routes>
            <Route path="/" exact element={<Homepage />}></Route>
            <Route path="/products"  element={<ProductsPage />}></Route>
            <Route
            
              path="/product-details/:id"
              element={<ProductDetails />}
            ></Route>
            <Route path="filtered-products" element={<FilteredProducts />} />

            <Route path="login" element={<LoginPage />} />
            <Route
              path="forgotten-name-or-password"
              element={<ForgottenNameOrPassword />}
            ></Route>
            <Route path="sign-up" element={<SignUp />}></Route>
            <Route></Route>
            <Route path="request-form" element={<RequestForm />}></Route>
            <Route path="order-summary" element={<OrderSummary />}></Route>
            <Route path="*"  element={<NoMatch />}></Route>
          </Routes>
        </ProductsProvider>
        </div>
        <Footer />
      </Container>
    </>
  )
}


// function App() {
//   return (
//     <Global>
//       <Navbar />
//       <ProductsProvider>
//         <Routes>
//           <Route path="/" exact element={<Homepage />}></Route>
//           <Route path="products" exact element={<ProductsPage />}></Route>
//           <Route
//             path="product-details/:name"
//             exact
//             element={<ProductDetails />}
//           ></Route>
//           <Route path="user-login" element={<UserLogin />} />
//           <Route path="request-form" exact element={<RequestForm />}></Route>

//           <Route path="order-summary" exact element={<OrderSummary />}></Route>
//           <Route path="*" exact element={<NoMatch />}></Route>
//         </Routes>
//       </ProductsProvider>
//       <Footer />
//     </Global>
//   )
// }


export default App


//! This is the old App() from the merge. This is for reference
// function App() {
//   return (
//     <>
//       <Container>
//         <Navbar />
//         <div className="content-wrap">
//       <ProductsProvider>

//           <Routes>
//             <Route path="/" element={<Homepage />}></Route>
//             <Route path="products" element={<ProductsPage />}></Route>
//             <Route
//               path="product-details/:itemId"
//               element={<ProductDetails />}
//             ></Route>
//             <Route path="filtered-products" element={<FilteredProducts />} />
//             <Route path="product-details" element={<ProductDetails />}></Route>
//             <Route path="user-login" element={<UserLogin />}></Route>
//             <Route
//               path="forgotten-name-or-password"
//               element={<ForgottenNameOrPassword />}
//             ></Route>
//             <Route path="sign-up" element={<SignUp />}></Route>
//             <Route></Route>
//             <Route path="request-form" element={<RequestForm />}></Route>
//             <Route path="order-summary" element={<OrderSummary />}></Route>
//             <Route path="*" element={<NoMatch />}></Route>
//           </Routes>
//           </ProductsProvider>

//         </div>

//         <Footer />
//       </Container>
//     </>
//   )
// }
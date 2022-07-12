import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AllItems from "./components/AllItems";
import ItemDetails from "./components/ItemDetails";
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
        <Route path="all-items" element={<AllItems />}></Route>
        <Route path="item-details/:itemId" element={<ItemDetails />}></Route>
        <Route path="item-details" element={<ItemDetails />}></Route>
        <Route path="request-form" element={<RequestForm />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

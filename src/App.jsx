import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation";
import { useState } from "react";
import FilteredData from "./pages/FilteredData";
import ProductDetails from "./pages/ProductDetails";



const App = () => {
  const [Orders , setOrders] = useState(null)
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Checkout" element={<Checkout setOrders={setOrders}/>} />
         <Route path="/OrderConfirmation" element={<OrderConfirmation Orders={Orders}/>} />
         <Route path="/filter-data" element={<FilteredData/>}></Route>
         <Route path="/product/:id" element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

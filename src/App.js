import "./App.css";
import Products from "../src/component/products/Products.js";
import Categories from "../src/component/products/Categories.js";
import Product from "../src/component/products/Product.js";
import Home from "../src/component/pages/Home";
import SignUp from "../src/component/pages/SignUp";
import Login from "../src/component/pages/Login";
import NotFound from "../src/component/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/layouts/Footer";
import Header from "./component/layouts/Header";
import ScrollToTop from "./component/ScrollToTop";
import Cart from "./component/carts/Cart";

export default function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Products />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />

      <Footer />
    </div>
  );
}

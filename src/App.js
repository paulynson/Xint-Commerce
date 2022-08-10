import "./App.css";
import Products from "../src/component/products/Products.js";
import Categories from "../src/component/products/Categories.js";
import Product from "../src/component/products/Product.js";
import Home from "../src/component/pages/Home";
import SignUp from "../src/component/pages/SignUp";
import Login from "../src/component/pages/Login";
import NotFound from "../src/component/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Cart from "./component/carts/Cart";
import { WithNav } from "./component/layouts/navheaders/WithNav";
import WithoutNav from "./component/layouts/navheaders/WithoutNav";

export default function App() {
  return (
    <div className="App bg-gray-100">
      <Routes>
        {/* Without Navbar */}
        <Route element={<WithoutNav />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* With Navbar */}
        <Route path="/" element={<WithNav />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </div>
  );
}

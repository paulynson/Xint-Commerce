import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./products.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../layouts/SideBar";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCart } from "../reduxfiles/actions";
import Swal from "sweetalert2";

function Product() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const addProduct = (product) => {
    Swal.fire({
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1000,
    });
    dispatch(addCart(product));
  };

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const date = new Date();
  const tDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  console.log(tDate);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    userId: id,
    date: tDate,
    products: [{ productId: id }],
  };
  console.log(data);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios("https://fakestoreapi.com/products/" + id);
      console.log("this is the fetched ", res.data);
      setProduct(res.data);
      // console.log(data.user);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="relative flex gap-4 py-24 lg:flex lg:flex-row flex-col px-10">
      <div
        className="absolute top-3 left-2/4 flex p-2 h-8 w-8 items-center justify-center text-white rounded-full bg-green-700 hover:bg-green-500"
        onClick={handleBack}
      >
        <button className="cursor-pointer text-xs font-bold hover:animate-pulse">
          <BsArrowLeftShort className="text-2xl " />
        </button>
      </div>
      <section className="lg:w-2/3 w-full bg-white p-6">
        {/* <p>Welcome {id} </p> */}
        {product && (
          <section className="flex lg:flex lg:flex-row flex-col lg:items-center gap-2 lg:px-6 container lg:py-8">
            <div className=" bg-slate-400 w-full">
              <img src={product.image} alt={product.title} className="w-full" />
            </div>
            <div className="text-left  p-4">
              <p className="sm text-gray-500">{product.category}</p>
              <p className="font-bold my-2">{product.title}</p>
              <p className="leading-7">{product.description}</p>
              <p className="my-2 text-purple-700 font-bold text-2xl">
                $ {product.price}
              </p>
              {/* <p className="flex items-center gap-2">
                <span className="text-xs">Rating</span> {product.rating.rate}
              </p> */}
              <button
                className="bg-green-400 my-2 hover:bg-green-600 px-4 py-2 text-white shadow-lg cursor-pointer"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </section>
        )}
        <div className="p-3">
          <h3 className="font-bold py-3 text-2xl">Shop by Category</h3>
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-8 gap-x-3">
            <img
              src="/images/e6.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full"
            />
            <img
              src="/images/e8.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full"
            />
            <img
              src="/images/e9.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full"
            />
            <img
              src="/images/e10.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full"
            />
          </div>
          <div className="my-8 flex justify-center items-center">
            <button className="py-2 bg-green-500 hover:bg-green-700 text-white px-3">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <SideBar className="lg:w-1/3 w-full" />
    </div>
  );
}

export default Product;

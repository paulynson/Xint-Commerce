import React, { useState, useEffect, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./products.css";
import { useNavigate } from "react-router-dom";
// import SideBar from "../layouts/SideBar";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCart } from "./../../reduxfiles/actions";
import Swal from "sweetalert2";

function Product() {
  const { id } = useParams();

  const [electronics, setElectronics] = useState([]);
  // const [randomProduct, setRandomProduct] = useState(allProducts);

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

  // const date = new Date();
  // const tDate = `${date.getDate()}-${
  //   date.getMonth() + 1
  // }-${date.getFullYear()}`;
  // console.log(tDate);

  useEffect(() => {
    const allProducts = [
      "electronics",
      "jewelery",
      "men's%20clothing",
      "women's%20clothing",
    ];
    const randomIndex =
      allProducts[Math.floor(Math.random() * allProducts.length)];

    // setRandomProduct(randomIndex);
    const fetchElectronics = async () => {
      const url = `https://fakestoreapi.com/products/category/${randomIndex}`;
      const res = await axios(url);
      setElectronics(res.data);
    };

    // console.log("my random", randomIndex);
    fetchElectronics();
  }, []);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const data = {
  //   userId: id,
  //   date: tDate,
  //   products: [{ productId: id }],
  // };
  // console.log(data);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios("https://fakestoreapi.com/products/" + id);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="lg:py-24 py-4 px-10">
      {/* Back Button */}
      <div className="flex justify-center">
        <div
          className="p-2 h-8 w-8 my-4 flex items-center justify-center text-white text-center rounded-full bg-green-700 hover:bg-green-500"
          onClick={handleBack}
        >
          <button className="cursor-pointer text-xs font-bold hover:animate-pulse">
            <BsArrowLeftShort className="text-2xl " />
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          {/* Product Single File */}
          {product && (
            <section className="grid lg:grid lg:grid-cols-8 lg:items-center gap-2 lg:px-6 container lg:py-8">
              <div className=" bg-slate-400 w-full col-span-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full"
                />
              </div>
              <div className="text-left  p-4 col-span-5">
                <p className="sm text-gray-500">{product.category}</p>
                <p className="font-bold my-2 text-4xl">{product.title}</p>
                <hr />
                <p className="my-2 text-purple-700 font-bold text-3xl">
                  ₦{product.price}
                </p>
                <p className="leading-7 ">{product.description}</p>

                <hr />
                <button
                  className="bg-green-400 hover:bg-green-600 px-4 py-2 text-white shadow-lg cursor-pointer my-4"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
                <hr />
                {/* Raiting */}
                <p className="mt-3">
                  Rating:{" "}
                  <span className="text-black font-bold text-lg">
                    {product.rating.rate}
                  </span>{" "}
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
      {/* Other Sample sections */}
      <section className="my-6">
        {/* Related Product */}
        <div>
          <h2 className="my-3 font-bold text-2xl">Related Products</h2>
          <div>
            <Suspense fallback={<p>Loading...</p>}>
              <section className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5 ">
                {electronics &&
                  electronics?.map((electronic) => (
                    <div
                      key={electronic.id}
                      className="text-center justify-center box-h p-3 shadow-md relative bg-white"
                    >
                      <Link to={`/product/${electronic.id}`}>
                        <img
                          src={electronic.image}
                          alt={electronic.title}
                          className="img-box"
                        />
                        <div className="py-6">
                          <p className="my-2 text-xs">
                            {electronic.title.slice(0, 24)}
                          </p>
                          <p className="text-purple-700 font-bold text-lg">
                            ₦{electronic.price}
                          </p>
                        </div>
                      </Link>
                      <button
                        className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                        onClick={() => addProduct(electronic)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
              </section>
            </Suspense>
          </div>
        </div>

        <div>
          <h2 className="my-3 font-bold text-2xl">Shop by Category</h2>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <img
              src="/images/e6.jpg"
              alt="pix"
              className="lg:h-64 md:h-52 sm:h-52 h-32 w-full"
            />
          </div>
          <div>
            {" "}
            <img
              src="/images/e8.jpg"
              alt="pix"
              className="lg:h-64 md:h-52 sm:h-52 h-32 w-full"
            />
          </div>
          <div>
            {" "}
            <img
              src="/images/e9.jpg"
              alt="pix"
              className="lg:h-64 md:h-52 sm:h-52 h-32 w-full"
            />
          </div>
          <div>
            {" "}
            <img
              src="/images/e10.jpg"
              alt="pix"
              className="lg:h-64 md:h-52 sm:h-52 h-32 w-full"
            />
          </div>
        </div>
        <div className="my-8 flex justify-center items-center">
          <button className="py-2 bg-green-500 hover:bg-green-700 text-white px-3">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Product;

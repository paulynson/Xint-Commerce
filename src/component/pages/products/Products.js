import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./products.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../reduxfiles/actions";
import Swal from "sweetalert2";

const Products = () => {
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

  const [products, setProducts] = useState([]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      const res = await axios(url);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="">
        <div className="relative flex justify-center items-center text-center">
          <img
            src="/images/e8.jpg"
            alt="pix"
            className="lg:h-[500px]  object-cover h-[300px] w-full"
          />
          <p className="absolute text-white font-bold lg:text-6xl text-4xl drop-shadow-lg shadow-black max-w-7xl">
            Plain and World Class Products
          </p>
        </div>
      </div>
      <div className="p-6">
        {" "}
        <h3 className="font-bold py-3 text-3xl">New Products in Stock</h3>
        <hr />
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5 ">
          {products &&
            products?.map((product) => (
              <div
                key={product.id}
                className="text-center justify-center box-h p-3 shadow-md relative bg-white"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-box "
                  />
                  <div className="py-6">
                    <p className="my-2 text-xs">{product.title.slice(0, 24)}</p>
                    <p className="text-purple-700 font-bold text-2xl">
                      ₦{product.price}
                    </p>
                  </div>
                </Link>
                <button
                  className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </section>
      </Suspense>
      <section>
        <section>
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-3 my-6 p-10">
            <img
              src="/images/e5.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full border-yellow-400 border"
            />
            <img
              src="/images/e7.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full border-yellow-400 border"
            />
            <img
              src="/images/e10.jpg"
              alt="pix"
              className="lg:h-64 h-52 w-full border-yellow-400 border"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Products;

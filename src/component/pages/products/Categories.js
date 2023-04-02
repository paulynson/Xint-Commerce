import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./products.css";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../reduxfiles/actions";
import Swal from "sweetalert2";

const Categories = () => {
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);

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

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  Electronics
  useEffect(() => {
    const fetchElectronics = async () => {
      //   e.preventDefault();
      const url = "https://fakestoreapi.com/products/category/electronics";
      const res = await axios(url);
      setElectronics(res.data);
      // console.log(res.data);
    };
    fetchElectronics();
    fetchJewelery();
    fetchMens();
    fetchWomens();
  }, []);

  // Refetch when clicked

  const fetchElectronics = async (e) => {
    e.preventDefault();
    const url = "https://fakestoreapi.com/products/category/electronics";
    const res = await axios(url);
    setElectronics(res.data);
    // console.log(res.data);
  };

  //   Jewelery
  const fetchJewelery = async () => {
    const url = "https://fakestoreapi.com/products/category/jewelery";
    const res = await axios(url);
    setJewelery(res.data);
  };

  //   Mens
  const fetchMens = async () => {
    const url = "https://fakestoreapi.com/products/category/men's%20clothing";
    const res = await axios(url);
    setMens(res.data);
  };
  //   Womens
  const fetchWomens = async () => {
    const url = "https://fakestoreapi.com/products/category/women's%20clothing";
    const res = await axios(url);
    setWomens(res.data);
  };

  return (
    <div>
      <div className="">
        <div className="relative flex justify-center items-center text-center">
          <img
            src="/images/e9.jpg"
            alt="pix"
            className="lg:h-[500px]  object-cover h-[300px] w-full"
          />
          <p className="absolute text-yellow-500 font-bold lg:text-6xl text-4xl drop-shadow-xl shadow-white max-w-7xl">
            Categories and Products
          </p>
        </div>
      </div>
      <div className="p-10">
        {" "}
        <h3 className="font-bold py-3 text-3xl">Categories</h3>
        <hr />
      </div>

      {/* Tabs */}
      <section className="p-10">
        <Tabs>
          <TabList>
            <Tab onClick={fetchElectronics}>Electronics</Tab>
            <Tab onClick={fetchJewelery}>Jewelery</Tab>
            <Tab onClick={fetchMens}>Mens Clothing</Tab>
            <Tab onClick={fetchWomens}>Womens Clothing</Tab>
          </TabList>

          <TabPanel>
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
          </TabPanel>
          {/* Jewelery */}
          <TabPanel>
            <div>
              <Suspense fallback={<p>Loading...</p>}>
                <section className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5">
                  {jewelery &&
                    jewelery?.map((jewel) => (
                      <div
                        key={jewel.id}
                        className="text-center justify-center box-h p-3 shadow-md relative bg-white"
                      >
                        <Link to={`/product/${jewel.id}`}>
                          <img
                            src={jewel.image}
                            alt={jewel.title}
                            className="img-box"
                          />
                          <div className="py-6">
                            <p className="my-2 text-xs">
                              {jewel.title.slice(0, 24)}
                            </p>
                            <p className="text-purple-700 font-bold text-lg">
                              ₦{jewel.price}
                            </p>
                          </div>
                        </Link>
                        <button
                          className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                          onClick={() => addProduct(jewel)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                </section>
              </Suspense>
            </div>
          </TabPanel>
          {/* Mens */}
          <TabPanel>
            <div>
              <Suspense fallback={<p>Loading...</p>}>
                <section className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5 ">
                  {mens &&
                    mens?.map((men) => (
                      <div
                        key={men.id}
                        className="text-center justify-center box-h p-3 shadow-md relative bg-white"
                      >
                        <Link to={`/product/${men.id}`}>
                          <img
                            src={men.image}
                            alt={men.title}
                            className="img-box"
                          />
                          <div className="py-6">
                            <p className="my-2 text-xs">
                              {men.title.slice(0, 24)}
                            </p>
                            <p className="text-purple-700 font-bold text-lg">
                              ₦{men.price}
                            </p>
                          </div>
                        </Link>
                        <button
                          className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                          onClick={() => addProduct(men)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                </section>
              </Suspense>
            </div>
          </TabPanel>
          {/* womens */}
          <TabPanel>
            <div>
              <Suspense fallback={<p>Loading...</p>}>
                <section className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 gap-x-5 ">
                  {womens &&
                    womens?.map((women) => (
                      <div
                        key={women.id}
                        className="text-center justify-center box-h p-3 shadow-md relative bg-white"
                      >
                        <Link to={`/product/${women.id}`}>
                          <img
                            src={women.image}
                            alt={women.title}
                            className="img-box"
                          />
                          <div className="py-6">
                            <p className="my-2 text-xs">
                              {women.title.slice(0, 24)}
                            </p>
                            <p className="text-purple-700 font-bold text-lg">
                              ₦{women.price}
                            </p>
                          </div>
                        </Link>
                        <button
                          className="w-full bg-green-400 hover:bg-green-600 px-4 py-2 text-white absolute bottom-0 left-0 shadow-lg"
                          onClick={() => addProduct(women)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ))}
                </section>
              </Suspense>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Categories;

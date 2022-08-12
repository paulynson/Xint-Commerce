import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { deleteCart } from "../reduxfiles/actions";
import { BsFillCartFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";

export default function Cart() {
  const state = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();

  const delProduct = (product) => {
    // if (window.confirm("Do you want to delete this product?")) {
    //   dispatch(deleteCart(product));
    // }
    // if (
    //   Swal.fire({
    //     icon: "info",
    //     text: "Do you want to delete this?",
    //   })
    // ) {
    //   dispatch(deleteCart(product));
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "product is deleted",
          icon: "info",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(deleteCart(product));
      }
    });
  };
  return (
    <div className="p-6 border bg-green-100">
      <section className="p-3 flex flex-col ">
        {Object.keys(state).length < 1 ? (
          <div className="text-black text-center flex justify-center items-center flex-col gap-3 h-[60vh]">
            <BsFillCartFill className="text-black text-5xl" />{" "}
            <p>Cart is Empty</p>
          </div>
        ) : (
          state?.map((product) => (
            <section>
              <div className="flex text-center m-0 p-0 w-full justify-center items-center lg:flex lg:flex-row lg:items-center gap-6 lg:px-6 container lg:py-8  my-6 bg-white relative  shadow border py-3  ">
                <div
                  className=" lg:w-1/3 w-full flex justify-center items-center my-6 p-2"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="lg:w-[200px] lg:h-[200px]  object-fill w-[150px] h-[150px]"
                  />
                </div>
                <div className="text-left p-4 lg:w-2/3 w-full">
                  <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
                    <p className="font-bold my-2 lg:text-lg">
                      {product.title.slice(0, 24)}
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="mr-3 text-xs">rating</span>
                      <span
                        className={
                          product.rating.rate < 2
                            ? "text-red-600 px-2 bg-red-200 text-sm"
                            : "font-bold my-2 lg:text-lg text-green-600 px-2 bg-green-200 text-sm"
                        }
                      >
                        {product.rating.rate}
                      </span>
                    </p>
                    <p className="my-2 text-purple-700 font-bold text-sm lg:text-lg">
                      $ {product.price}
                    </p>
                  </div>
                  <p className="sm text-gray-400 text-xs lg:block lg:text-sm my-2 hidden">
                    {product.category}
                  </p>
                  <p className="lg:leading-7 leading-5 text-xs">
                    {product.description.slice(0, 15)}
                  </p>
                  <div className="flex gap-3 items-center my-4">
                    <button className="border text-black px-3 border-red-600">
                      -
                    </button>
                    <span>{0}</span>
                    <button className="border text-black px-3 border-green-600">
                      +
                    </button>
                  </div>
                </div>
                {/* Remove button */}
                <button
                  className="border lg:p-2 p-1 hover:bg-red-600 text-red-400 border-red-400 hover:text-white text-xs absolute lg:top-3 lg:right-3 top-2 right-2"
                  onClick={() => delProduct(product)}
                >
                  <CgClose />
                </button>
              </div>
            </section>
          ))
        )}
      </section>
      {Object.keys(state).length < 1 ? (
        ""
      ) : (
        <div className="flex justify-between items-center my-4 text-green-600  px-4">
          <div className="bg-white py-2 px-4 cursor-pointer font-bold hover:text-yellow-400 hover:bg-green-600 shadow-md">
            PAYMENT
          </div>
          <div className="text-lg">Total: ${0}</div>
        </div>
      )}
    </div>
  );
}

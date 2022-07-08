import React from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { deleteCart } from "../reduxfiles/actions";
import { BsFillCartFill } from "react-icons/bs";

export default function Cart() {
  const state = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const delProduct = (product) => {
    dispatch(deleteCart(product));
  };
  return (
    <div className="lg:m-10 p-6 border bg-green-100">
      <Suspense fallback={<p>Loading...</p>}>
        <section className="p-3 flex flex-col ">
          {Object.keys(state).length > 0 ? (
            state?.map((product) => (
              <section>
                <div className="flex lg:flex lg:flex-row lg:items-center gap-y-4 lg:px-6 container lg:py-8  my-6 bg-white  shadow border py-3 px-3 ">
                  <div
                    className=" w-1/3 flex justify-center items-center my-6 p-2"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="lg:w-[300px] lg:h-[300px]  w-[150px] h-[150px]"
                    />
                  </div>
                  <div className="text-left p-4 w-2/3">
                    <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row">
                      <p className="font-bold my-2 text-lg">
                        {product.title.slice(0, 24)}
                      </p>
                      <p className="my-2 text-purple-700 font-bold text-sm lg:text-lg">
                        $ {product.price}
                      </p>
                    </div>
                    <p className="sm text-gray-400 text-xs lg:block lg:text-sm my-2 hidden">
                      {product.category}
                    </p>
                    <p className="lg:leading-7 leading-5 text-xs">
                      {product.description.slice(0, 250)}
                    </p>
                    <button
                      className="border p-2 hover:bg-red-600 hover:text-white text-xs"
                      onClick={() => delProduct(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div></div>
              </section>
            ))
          ) : (
            <div className="text-black text-center flex justify-center items-center flex-col gap-3 h-[60vh]">
              <BsFillCartFill className="text-black text-5xl" />{" "}
              <p>Cart is Empty</p>
            </div>
          )}
        </section>
      </Suspense>
    </div>
  );
}

import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteCart,
  // addQuantity,
  // deleteQuantity,
} from "./../reduxfiles/actions";
import { BsFillCartFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";

export default function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  // const items = useSelector((state) => state.cart);
  // const [inc, setInc] = useState(productQty);

  const dispatch = useDispatch();

  // Add Quantity
  // function handleAddQuantity(product) {
  //   setInc(inc + 1);
  //   dispatch(addQuantity(product));
  // }

  // function handleDeleteQuantity(product) {
  //   setInc(inc - 1);
  //   dispatch(deleteQuantity(product));
  // }

  const delProduct = (product) => {
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
        {Object.keys(items).length < 1 ? (
          <div className="text-black text-center flex justify-center items-center flex-col gap-3 h-[60vh]">
            <BsFillCartFill className="text-black text-5xl" />{" "}
            <p>Cart is Empty</p>
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Quantity
                  </th> */}
                  {/* <th scope="col" className="px-6 py-3">
                    SubTotal
                  </th> */}
                </tr>
              </thead>
              {items?.map((product) => (
                <tbody key={product.id}>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {/* Remove button */}
                      <button
                        className="border lg:p-2 p-1 rounded-full hover:bg-red-600 text-red-400 border-red-400 hover:text-white text-xs"
                        onClick={() => delProduct(product)}
                      >
                        <CgClose />
                      </button>
                    </th>
                    <td className="px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[80px] h-[80px]"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="my-2 lg:text-sm">
                        {product.title.slice(0, 24)}
                      </p>
                    </td>
                    <td className="px-6 py-4">₦{product.price}</td>
                    {/* <td className="px-6 py-4"> */}
                    {/* Increase and decrease buttons */}
                    {/* <div className="flex gap-3 items-center my-4">
                        <button
                          className={`border text-black py-1 px-2 border-red-600 cursor-pointer`}
                      
                          onClick={(e) => handleDeleteQuantity(product.id)}
                        >
                          -
                        </button>
                        <span>{inc}</span>
                        <button
                          className="border text-black py-1 px-2 border-green-600"
                          onClick={(e) => handleAddQuantity(product.id)}
                        >
                          +
                        </button>
                      </div> */}
                    {/* </td> */}
                    {/* <td className="px-6 py-4">₦{product.price}</td> */}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </section>
      {Object.keys(items).length < 1 ? (
        ""
      ) : (
        <div className="flex justify-between items-center my-4 text-green-600 lg:px-4 px-2">
          <Link
            to="/payment"
            className="bg-white py-2 lg:px-5 px-2 rounded-full lg:text-lg text-xs cursor-pointer font-bold hover:text-yellow-400 hover:bg-green-600 shadow-md"
          >
            Proceed to Checkout
          </Link>
          <div className="text-lg">Total: ₦{total.toFixed(2)}</div>
          {/* <div className="text-lg">Total: ₦{total}</div> */}
        </div>
      )}
    </div>
  );
}

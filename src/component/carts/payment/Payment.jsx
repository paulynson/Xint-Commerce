import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleButton } from "./GoogleButton";
import { useAuth } from "./../../../firebase/firebase";

const Payment = (async) => {
  const { items, total } = useSelector((state) => state.cart);

  // TO check if the user is logged in before final checkout
  const currentUser = useAuth();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useRefs to confirm the inputs
  const fullNameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const cardRef = useRef();
  const expireRef = useRef();
  const cvcRef = useRef();

  // Declaring a navigate
  const navigate = useNavigate();

  // Checkout Button Function
  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      if (!currentUser) {
        Swal.fire({
          icon: "info",
          title: "You Need to login before you can checkout",
          text: "You will be redirectecd to login page now",
          showConfirmButton: false,
          timer: 3500,
        });
        setTimeout(() => {
          return navigate("/login");
        }, 4000);
      } else if (
        fullNameRef.current.value === "" &&
        emailRef.current.value === "" &&
        addressRef.current.value === "" &&
        cardRef.current.value === "" &&
        expireRef.current.value === "" &&
        cvcRef.current.value === ""
      ) {
        Swal.fire({
          icon: "info",
          text: "Kindly Fill all the information needed",
          showConfirmButton: false,
          timer: 2000,
        });
        fullNameRef.current.focus();
      } else {
        Swal.fire({
          icon: "success",
          text: "Checkout Completed",
          showConfirmButton: false,
          timer: 2000,
        });

        fullNameRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";
        cardRef.current.value = "";
        expireRef.current.value = "";
        cvcRef.current.value = "";
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: `${error}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="px-10 py-16">
      {/* Grid Parents */}
      <div className="grid lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-1 grid-cols-1 gap-y-6">
        {/* Left Billing Details */}
        <div className="lg:col-span-3 col-span-8">
          <div className="my-2 px-4">
            <h2 className="text-green-700 font-bold uppercase">
              BILLING DETAILS
            </h2>
            <hr />
          </div>
          <form className="px-4">
            {/* Name */}
            <div className="space-y-3 my-2">
              <label className="block">Full Name</label>
              <input
                type="text"
                className="block w-full p-2"
                required
                ref={fullNameRef}
              />
            </div>
            {/* Email */}
            <div className="space-y-3 my-2">
              <label className="block">Email</label>
              <input
                type="email"
                className="block w-full p-2"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                ref={emailRef}
              />
            </div>
            {/* Address */}
            <div className="space-y-3 my-2">
              <label className="block">Address</label>
              <input
                type="text"
                className="block w-full p-2"
                required
                ref={addressRef}
              />
            </div>
          </form>
        </div>
        {/* Right YOur Order */}
        <div className="lg:col-span-5 col-span-8 px-4 lg:my-0">
          <div className="my-2 px-4">
            <h2 className="text-green-700 font-bold uppercase">YOUR ORDER</h2>
            <hr />
          </div>

          <div className="px-4">
            <div className=" bg-slate-200 text-black flex justify-between  items-center py-5 px-4 my-3">
              <p className="font-bold">PRODUCT</p>
              <p className="font-bold">SUBTOTAL</p>
            </div>
            <div className="  text-black flex justify-between  items-center py-5">
              <div>
                {" "}
                {items?.map((product) => (
                  <div key={product.id}>
                    <p className="text-sm py-1">✔️ {product.title}</p>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="font-bold p-3 bg-slate-200 ">
                ₦{total.toFixed(2)}
              </div>
            </div>
          </div>
          {/* <hr /> */}
          {/* Credit Card */}
          <div className="px-4">
            <div className=" bg-slate-200 text-black  items-center py-5 px-4 my-4">
              <p className="font-bold">Pay With GooglePay</p>
            </div>
            <section className="my-4">
              <GoogleButton />
            </section>
            <div className=" bg-slate-200 text-black  items-center py-5 px-4">
              <p className="font-bold">Credit card / debit card</p>
            </div>
            <p className="my-3 text-xs">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <div>
              <form className="my-6">
                {/* Name */}
                <div className="space-y-2 my-2">
                  <label className="block">Card Number</label>
                  <input
                    type="text"
                    className="block w-full p-2"
                    placeholder="1234 1234 1234 1234"
                    required
                    ref={cardRef}
                  />
                </div>
                {/* Email */}
                <div className="space-y-2 my-2">
                  <label className="block">Expiration</label>
                  <input
                    type="text"
                    className="block w-full p-2"
                    placeholder="MM / YY"
                    required
                    ref={expireRef}
                  />
                </div>
                {/* Address */}
                <div className="space-y-2 my-2">
                  <label className="block">CVC</label>
                  <input
                    type="text"
                    className="block w-full p-2"
                    placeholder="CVC"
                    required
                    ref={cvcRef}
                  />
                </div>
                <button
                  className="bg-green-500 hover:bg-green-600 block w-full py-3 my-5 text-white uppercase font-bold"
                  onClick={handleCheckout}
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
          {/* Google Button */}
        </div>
      </div>
    </div>
  );
};

export default Payment;

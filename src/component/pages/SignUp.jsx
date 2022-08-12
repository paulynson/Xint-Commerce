import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { SiBigcartel } from "react-icons/si";
import { signup, useAuth } from "../../firebase/firebase";

const SignUp = () => {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      Swal.fire({
        icon: "success",
        title: `${emailRef.current.value} signup successful`,
        showConfirmButton: false,
        timer: 1500,
      });
      return navigate("/login");
    } catch {
      if (
        passwordRef.current.value.length === 6 ||
        passwordRef.current.value.length < 8
      ) {
        return Swal.fire({
          icon: "info",
          title: `Password length must not be less than 8 characters`,
          showConfirmButton: false,
          timer: 5500,
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: `${emailRef.current.value} is already registered`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="text-green-700 flex gap-1 items-center justify-center my-6">
        <SiBigcartel className="text-2xl" />
        <p className=" lg:text-[1rem] text-lg">Xint-Commerce</p>
      </div>
      <h4 className="my-8 text-3xl font-bold">SIGNUP</h4>
      <form
        className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 lg:w-[400px]"
        onSubmit={handleSignup}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            ref={emailRef}
            required
            // value={email}
            // onChange={(e) => setEmail(e.value.target)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            ref={passwordRef}
            required
            // value={password}
            // onChange={(e) => setPassword(e.value.target)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="my-3 flex justify-center">
          <p className="text-red-500 text-xs italic">
            Already Registered?
            <Link
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800 ml-3"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

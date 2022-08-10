import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// import { signup } from "../../firebase/firebase";

const SignUp = () => {
  const handleSignup = async () => {
    Swal.fire({
      icon: "success",
      title: "User Signup Successful",
    });
  };

  return (
    <div className="flex justify-center items-center my-48">
      <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 lg:w-[400px]">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
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
            id="password"
            type="password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignup}
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

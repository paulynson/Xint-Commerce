import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SiBigcartel } from "react-icons/si";

// import { login } from "../../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    Swal.fire({
      icon: "success",
      title: "User Logged In Successful",
      timer: 1500,
    });
    return navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div className="text-green-700 flex gap-1 items-center justify-center my-6">
        <SiBigcartel className="text-2xl" />
        <p className=" lg:text-[1rem] text-lg">Xint-Commerce</p>
      </div>
      <h4 className="my-8 text-3xl font-bold">LOGIN</h4>
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
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
        <div className="my-3 flex justify-center">
          <p className="text-red-500 text-xs italic">
            Not Registered?
            <Link
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

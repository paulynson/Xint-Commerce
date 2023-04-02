import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SiBigcartel } from "react-icons/si";
import { login, useAuth } from "../../firebase/firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      Swal.fire({
        icon: "success",
        title: `${emailRef.current.value} is logged in successful`,
        showConfirmButton: false,
        timer: 1500,
      });
      return navigate("/");
    } catch {
      if (passwordRef.current.value !== currentUser?.password) {
        return Swal.fire({
          icon: "info",
          title: `${passwordRef.current.value} is incorrect`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: `${emailRef.current.value} is not registered`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div className="text-green-700 flex gap-1 items-center justify-center my-6">
        <SiBigcartel className="text-2xl" />
        <p className=" lg:text-[1rem] text-lg">XintMerce</p>
      </div>
      <h4 className="my-8 text-3xl font-bold">LOGIN</h4>
      <form
        className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 lg:w-[400px]"
        onSubmit={handleLogin}
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
            id="username"
            type="email"
            ref={emailRef}
            required
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
            ref={passwordRef}
            type="password"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-yellow-400 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
        <div className="my-3 flex justify-center">
          <p className="text-slate-600 text-xs italic">
            Not Registered?
            <Link
              className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800 ml-3"
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

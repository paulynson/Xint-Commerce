import React from "react";
import { Link } from "react-router-dom";
import { SiBigcartel } from "react-icons/si";
import { date } from "yup";

function Footer() {
  const date = new Date();
  return (
    <div className="z-50">
      <div className="flex justify-center items-center bg-green-700 px-8 py-6 flex-col">
        <Link to="/" className="hover:text-yellow-200">
          <div className="text-white flex gap-1 items-center justify-center hover:text-yellow-200">
            <SiBigcartel className="text-3xl" />
            <p className="font-bold text-2xl">Xint-Commerce</p>
          </div>
        </Link>
        <p className="text-yellow-400 text-xs my-4">
          © {date.getFullYear()}, Xint-Commerce{" "}
          <span className="text-white">Your Famous Store...</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

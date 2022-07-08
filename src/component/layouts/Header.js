import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { SiBigcartel } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [show, setShow] = useState(false);

  const state = useSelector((state) => state.CartReducer);
  console.log(state.length);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handlesToggle = (e) => {
    setShow(!show);
  };
  return (
    <div className="bg-green-700 lg:mb-0 lg:bg-transparent">
      <div className="flex lg:flex lg:justify-between lg:flex-row flex-row gap-y-6 items-center bg-green-700 px-10 py-6 justify-between">
        <Link to="/" className="hover:text-yellow-200">
          <div className="text-white flex gap-1 items-center justify-center hover:text-yellow-200">
            <SiBigcartel className="text-3xl" />
            <p className="font-bold text-2xl">Xint-Commerce</p>
          </div>
        </Link>
        <div>
          {!show ? (
            <GiHamburgerMenu
              className="text-white text-2xl cursor-pointer hover:text-yellow-400 lg:hidden"
              onClick={handlesToggle}
            />
          ) : (
            <CgClose
              className="text-2xl cursor-pointer hover:text-red-800 text-white drop-shadow-md shadow-md border-white lg:hidden"
              onClick={handlesToggle}
            />
          )}
        </div>

        <div className="lg:flex gap-2 items-center lg:justify-between lg:flex-row flex-col gap-y-6 hidden">
          <ul className="flex gap-3 text-white lg:mr-8 lg:justify-between lg:flex-row flex-col gap-y-6 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "text-white"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "text-white"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "text-white"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "text-white"
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
          <Link to="/cart" className="relative hover:cursor-pointer">
            <BsFillCartFill className="text-white text-4xl" />{" "}
            <div className="h-4 w-4 flex itms-center justify-center absolute top-0 right-0 text-xs font-bold bg-yellow-400 rounded-full">
              <p> {state.length}</p>
            </div>
          </Link>
        </div>
      </div>
      {/* <slideInDown> */}
      {show && (
        <AnimatePresence>
          <motion.div
            className="gap-2 lg:hidden items-center lg:justify-between lg:flex-row flex-col gap-y-6 shadow-lg py-6"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <ul className="flex gap-3 text-white lg:mr-8 lg:justify-between lg:flex-row flex-col gap-y-6 text-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "text-white"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "text-white"
                  }
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "text-white"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400 font-bold" : "text-white"
                  }
                >
                  Signup
                </NavLink>
              </li>
            </ul>
            <div className="text-center items center flex items-center justify-center my-6 ">
              <Link to="/cart" className=" max-w-10 relative cursor-pointer">
                <BsFillCartFill className="text-white text-4xl hover:text-yellow-200 hover:border-2" />{" "}
                <div className="h-4 w-4 flex itms-center justify-center absolute top-0 right-0 text-xs font-bold bg-yellow-400 hover:bg-green-500 rounded-full hover:border-2">
                  <p className=""> {state.length}</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {/* </slideInDown> */}
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { SiBigcartel } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth, logout } from "../../firebase/firebase";
import Swal from "sweetalert2";

function Header() {
  const [show, setShow] = useState(false);
  const currentUser = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      Swal.fire({
        icon: "success",
        title: `${currentUser?.email} have been logged out`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: `${currentUser?.email} not logged in`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

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
            <p className="font-bold lg:text-2xl text-lg">Xint-Commerce</p>
          </div>
        </Link>
        <div>
          {!show ? (
            <>
              <div className="flex space-x-6 items-center">
                {/* Cart for Mobile */}
                <div className="text-center items center flex lg:hidden items-center justify-center my-6 ">
                  <Link
                    to="/cart"
                    className=" max-w-10 relative cursor-pointer"
                  >
                    <BsFillCartFill className="text-white text-4xl hover:text-yellow-200 hover:border-2" />{" "}
                    <div className="h-4 w-4 flex itms-center justify-center absolute top-0 right-0 text-xs font-bold bg-yellow-400 hover:bg-green-500 rounded-full hover:border-2">
                      <p className=""> {state.length}</p>
                    </div>
                  </Link>
                </div>
                {/* Cart for Mobile */}
                <GiHamburgerMenu
                  className="text-white text-2xl cursor-pointer hover:text-yellow-400 lg:hidden"
                  onClick={handlesToggle}
                />
              </div>
            </>
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
            <>
              {currentUser ? (
                <li className="hidden">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400 font-bold" : "text-white"
                    }
                  ></NavLink>
                </li>
              ) : (
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
              )}
            </>
            <>
              {currentUser ? (
                <li>
                  <button
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400 font-bold" : "text-white"
                    }
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
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
              )}
            </>
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
              <>
                {currentUser ? (
                  <li className="hidden">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                      }
                    ></NavLink>
                  </li>
                ) : (
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
                )}
              </>
              <>
                {currentUser ? (
                  <li>
                    <button
                      className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                      }
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
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
                )}
              </>
            </ul>
            {/* <div className="text-center items center flex items-center justify-center my-6 ">
              <Link to="/cart" className=" max-w-10 relative cursor-pointer">
                <BsFillCartFill className="text-white text-4xl hover:text-yellow-200 hover:border-2" />{" "}
                <div className="h-4 w-4 flex itms-center justify-center absolute top-0 right-0 text-xs font-bold bg-yellow-400 hover:bg-green-500 rounded-full hover:border-2">
                  <p className=""> {state.length}</p>
                </div>
              </Link>
            </div> */}
          </motion.div>
        </AnimatePresence>
      )}
      {/* </slideInDown> */}
    </div>
  );
}

export default Header;

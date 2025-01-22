import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { BsListNested } from "react-icons/bs";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);

  return (
    <div className="">
      <div className="navbar fixed bg-white z-10 shadow-sm mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/startLearning"
                className={({ isActive }) =>
                  `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
                }
              >
                Start-Learning
              </NavLink>
              <NavLink
                to="/tutorials"
                className={({ isActive }) =>
                  `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
                }
              >
                Tutorials
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `btn mb-2 ${isActive ? " text-white" : "bg-white text-purple-800"}`
                }
              >
                About Us
              </NavLink>

              {user?.email && (
                <NavLink
                  to="/myprofile"
                  className={({ isActive }) =>
                    `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
                  }
                >
                  My Profile
                </NavLink>
              )}
            </ul>
          </div>
          <h2 className="font-semibold text-2xl animate__animated animate__bounce bg-gradient-to-r from-purple-900 to-blue-700 bg-clip-text text-transparent">
          Learning Application
          </h2>
        </div>

        <div className="navbar-center gap-5 font-semibold hidden lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/startLearning"
            className={({ isActive }) =>
              `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
            }
          >
            Start-Learning
          </NavLink>
          <NavLink
            to="/tutorials"
            className={({ isActive }) =>
              `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
            }
          >
            Tutorials
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
            }
          >
            About Us
          </NavLink>
          {user?.email && (
            <NavLink
              to="/myprofile"
              className={({ isActive }) =>
                `btn mb-2 ${isActive ? "bg-black text-white" : "bg-white text-purple-800"}`
              }
            >
              My Profile
            </NavLink>
          )}
        </div>

        <div className="navbar-end">
          <div className="login flex items-center gap-2">
            {user?.email ? (
              <div className="flex items-center gap-4">
                <img className="rounded-full size-12" src={user?.photoURL} alt="" />
                <button
                  className="btn  text-white rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="btn text-white rounded-md"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

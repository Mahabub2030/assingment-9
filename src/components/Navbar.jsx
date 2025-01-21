import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { BsListNested } from "react-icons/bs";


const Navbar = () => {
  const {user,handleLogout}=useContext(authContext)
  // console.log(user?.photoURL);
  return (
    <div className="">
      <div className="navbar  w-10/12 mx-auto bg-blue-400 rounded-md mb-5  ">
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
            <button className="btn bg-blue-400 text-purple-800 mb-2"><NavLink to="/">Home</NavLink></button>
            <button className="btn bg-blue-400 text-purple-800 mb-2"><NavLink to="/startLearning">Start-Learning</NavLink></button>
            <button className="btn bg-blue-400 text-purple-800 mb-2"><NavLink to="/tutorials">Tutorials</NavLink></button>
            <button className="btn bg-blue-400 text-purple-800 mb-2"><NavLink to="#">About Us</NavLink></button>
            
            {
              (user?.email && <button className="btn bg-blue-400 text-purple-800 mb-2"><NavLink  to="/myprofile">My Profile</NavLink></button> )
            }
            
          </ul>
        </div>
        <h2 className="font-semibold text-2xl animate__animated animate__bounce bg-gradient-to-r from-purple-900 to-blue-700 bg-clip-text text-transparent">Learn With Fun</h2>
      </div>
      <div className="navbar-center gap-5 font-semibold hidden lg:flex">
      <button className=" bg-blue-400 text-purple-800 mb-2"><NavLink to="/">Home</NavLink></button>
            <button className=" bg-blue-400 text-purple-800 mb-2"><NavLink to="/startLearning">Start-Learning</NavLink></button>
            <button className=" bg-blue-400 text-purple-800 mb-2"><NavLink to="/tutorials">Tutorials</NavLink></button>
            <button className=" bg-blue-400 text-purple-800 mb-2"><NavLink to="#">About Us</NavLink></button>
            {
              (user?.email && <button className=" bg-blue-400 text-purple-800 mb-2"><NavLink  to="/myprofile">My Profile</NavLink></button> )
            }
      </div>
      <div className="navbar-end">
        <div className="login flex items-center gap-2">
          {
            user?.email ? (
              <div className="flex items-center gap-4">
                <img className="rounded-full size-12" src={user?.photoURL} alt="" />
                <button className="btn  bg-gradient-to-r from-purple-500 to-blue-500  rounded-md text-white" onClick={handleLogout}>Logout</button>
              </div>
            ):(
              <NavLink to="/login" className="btn bg-gradient-to-r from-purple-500 to-blue-500  rounded-md text-white">
            Login
          </NavLink>
            )
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
       
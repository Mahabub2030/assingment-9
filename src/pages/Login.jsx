import React, { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { authContext } from "../components/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(location?.state?.from || "/"); // Navigate to desired route or homepage
      })
      .catch(() => {
        toast.error("Invalid Email or Password");
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success("Logged in with Google successfully!");
        navigate(location?.state?.from || "/");
      })
      .catch(() => {
        toast.error("Google login failed. Please try again.");
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please provide a valid email address.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password reset email sent. Please check your email.");
        })
        .catch(() => {
          toast.error("Failed to send password reset email. Please try again.");
        });
    }
  };

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="rounded-xl card bg-base-100 w-full max-w-sm p-10">
          <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label cursor-pointer">
                <span className="label-text-alt link-hover">Forgot password?</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-100">
                Login
              </button>
            </div>
            <div className="form-control mt-6">
              <div
                onClick={googleLoginHandler}
                className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
              >
                <FcGoogle size={32} />

                <p>Continue with Google</p>
              </div>
              {/* <button type="button" className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-100" onClick={googleLoginHandler}>
                Login With Google
              </button> */}
            </div>
          </form>
          <p className="text-center font-semibold mt-4">
            Don't have an account?{" "}
            <NavLink className="text-red-500" to="/register">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { authContext } from "../components/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import {  toast } from 'react-toastify';

const Login = () => {
  const {handleGoogleLogin,handleLogin} = useContext(authContext)
  const [error,setError]=useState("")
  const emailRef = useRef();
  const location =useLocation()
  const navigate = useNavigate()
  // console.log(location)
  const handleSubmit =(e)=>{
    e.preventDefault()
    setError('')
    const email = e.target.email.value
    const password = e.target.password.value

    handleLogin(email,password)
    .then(res=>{
      navigate(location?.state ? location.state:'/')
      toast("Loged In")
    })
    .catch(err=>{
      toast("Invalid Email or Password")
          setError(err)
    })
  };
  const googleLoginHandler=()=>{
    handleGoogleLogin()
    .then(res=>{
      navigate(location?.state ? location.state:'/')
    })
  }

  const handleForgetPassword=()=>{
    // console.log("give me a email",emailRef.current.value);
    const email = emailRef.current.value;
    if(!email){
      toast("Please Provide a valid email address")
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        toast("Password Reset email sent, please check your email")
      })
    }
  }

  return (
    <div className="bg-gray-200">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="  min-h-screen flex justify-center items-center">
        <div className="rounded-xl card bg-base-100 w-full max-w-sm shrink-0  p-10">
          <h2 className="text-2xl font-semibold text-center">
            Login Your Account
          </h2>
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
                // required
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
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-100">Login</button>
            </div>
          {error && <p className="text-red-500 font-bold text-center">Invalid Credential</p>}
            
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-100" onClick={googleLoginHandler}>Login With Google</button>
            </div>

          </form>
          <p className="text-center font-semibold">
            Don't Have An account?
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

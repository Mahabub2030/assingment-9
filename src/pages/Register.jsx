import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { authContext } from "../components/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { handleRegister, handleGoogleLogin, manageProfile, setUser } = useContext(authContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate password
    if (password.length < 6) {
      setError("Password must contain at least six characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        manageProfile({ displayName: name, photoURL: image });
        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch((err) => {
        setError("Registration failed. Please try again.");
        toast.error(err.message);
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success("Logged in with Google successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Google login failed. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="bg-gray-200">
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="rounded-xl card bg-base-100 w-full max-w-sm shrink-0 p-10">
          <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-2 top-14"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
              >
                Register
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

            </div>
          </form>
          {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
          <p className="text-center font-semibold">
            Already Have An Account?{" "}
            <NavLink className="text-red-500" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useContext } from "react";
import { authContext } from "../components/AuthProvider";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(authContext);
  // console.log(user.photoURL);
  return (
    <div className=" p-5 h-screen w-10/12 mx-auto  flex flex-col  bg-cover bg-center rounded-xl bg-[url('https://img.freepik.com/premium-vector/colorful-welcome-brush-background-design-07_706800-169.jpg?w=740')]">
        <h2 className="font-bold text-5xl my-20 py-4  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">WELCOME TO OUR WEBSITE {user?.displayName}</h2>
      <div className=" p-5 card w-[420px] backdrop-blur-sm shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl mb-5  bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">{user?.displayName}</p>
            <p className="font-bold text-3xl mb-5 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">{user?.email}</p>
            <div className="flex items-center gap-10">
              <span className=" font-bold text-3xl text-blue-500"></span>
              <img className="size-40 rounded-full" src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>
        <NavLink to="/updateProfile"><button className='mx-auto w-60 btn bg-gradient-to-r from-purple-500 to-blue-500 text-white  block mb-4'>Update</button></NavLink>
      </div>
    </div>
  );
};

export default MyProfile;

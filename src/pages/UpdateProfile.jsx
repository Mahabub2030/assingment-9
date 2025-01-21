import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { authContext } from "../components/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const UpdateProfile = () => {
    const {user,handleRegister} = useContext(authContext)
    const [update,setUpdate] = useState("")
    const handleUpdateProfile = (e)=>{
      setUpdate("")
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        handleRegister(user.name,user.image)
        // console.log(user.name, user.image);
        const profile ={
            displayName:name,
            photoURL:image    
        }         
            updateProfile(auth.currentUser,profile)
            .then(()=>{
                setUpdate("Profile Updated")
            })
        
    }
  return (
    <div className="bg-gray-200">
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            Update Your Profile
          </h2>
          <form onSubmit={handleUpdateProfile} className="card-body">
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
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Photo-URL"
                className="input input-bordered"
                required
              />
              
            </div> 
            <p className="font-bold text-green-500 text-center">{update}</p>
            <button type="submit" className="text-white btn bg-gradient-to-r from-purple-500 to-blue-500">Update Profile</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

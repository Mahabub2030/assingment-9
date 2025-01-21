import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(authContext)
    const location = useLocation()
    // console.log(location)
    if(loading){
        return <div className='flex justify-center items-center mb-[650px]'><span className="loading loading-ring loading-lg"></span></div>
    }
    if (!user){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;
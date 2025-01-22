import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";

import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Lesson from "../pages/Lesson";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Error from "../components/Error";
import About from "../pages/about";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<MainLayout></MainLayout>
            },
            {
                path:'/startLearning',
                element:<StartLearning></StartLearning>
            },
            {
                path:'/tutorials',
                element:<PrivateRoute>
                    <Tutorials></Tutorials>
                </PrivateRoute>
            },
            {
                path:'/myProfile',
                element:<PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path:'/about',
                element:
                    <About></About>
              
            },
        ]
        
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/lesson/:lesson_no',
        element: <PrivateRoute>
            <Lesson></Lesson>
        </PrivateRoute>,
        loader:async({params})=> {
            const res = await fetch("/HindiVocabularyData.json")
            const data = await res.json()
            // console.log(data,params.lesson_no)
            const singleData = data.filter(d=>d.Lesson_no==params.lesson_no)
            return singleData
        }
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/updateProfile',
        element: <UpdateProfile></UpdateProfile>
    },
    {
        path:'*',
        element: <Error></Error>
    }
])

export default router;
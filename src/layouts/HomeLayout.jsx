import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
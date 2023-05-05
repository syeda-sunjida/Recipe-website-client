import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Login from '../Components/Login';
import Blog from '../Components/Blog';
import Register from '../Components/Register';
import ExtraOne from '../Components/ExtraOne';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Login></Login>
            <Register></Register>
            <Blog></Blog> */}
            <Outlet></Outlet>
            <ExtraOne></ExtraOne>
            <Footer></Footer>
        </div>
    );
};

export default Main;
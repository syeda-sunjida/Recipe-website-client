import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import ExtraOne from '../Components/ExtraOne';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <Outlet></Outlet>
            <ExtraOne></ExtraOne>
            <Footer></Footer>
        </div>
    );
};

export default Main;
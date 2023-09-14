import React from 'react';
import Header from "../../Pages/Shared/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer.jsx";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
import React from 'react';
import {Link} from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const GuidesAndExpriences = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-40 items-center">
            <div>
                <h2 className="text-4xl font-bold">GUIDES & <br/>EXPERIENCES</h2>
                <Link to={"#"} className="flex items-center underline mt-6 text-2xl font-bold" >BROWSE ALL GUIDES & EXPERIENCES <FaAngleDoubleRight /></Link>
            </div>
            <div>
                <p className="font-bold text-xl">NYC is one of the world's most diverse destinations. Explore the City's many cultural enclaves and see the five boroughs from every angle.</p>
            </div>
        </div>
    );
};

export default GuidesAndExpriences;
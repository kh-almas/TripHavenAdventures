import React from 'react';
import Slider from "./Slider/Slider.jsx";
import Matcher from "./Matcher/Matcher.jsx";
import BestProduct from "./BestProduct/BestProduct.jsx";

const Home = () => {
    return (
        <div className="p-20">
            <Slider />
            <BestProduct />
            <Matcher />
        </div>
    );
};

export default Home;
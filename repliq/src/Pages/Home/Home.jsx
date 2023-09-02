import React from 'react';
import Slider from "./Slider/Slider.jsx";
import Newsletter from "./Newsletter/Newsletter.jsx";
import BestPlace from "./BestPlace/BestPlace.jsx";
import GuidesAndExpriences from "./GuidesAndExpriences/GuidesAndExpriences.jsx";
import CategorySection from "./CategorySection/CategorySection.jsx";

const Home = () => {
    return (
        <div className="p-20">
            <Slider />
            <BestPlace />
            <GuidesAndExpriences />
            <CategorySection />
            <Newsletter />
        </div>
    );
};

export default Home;
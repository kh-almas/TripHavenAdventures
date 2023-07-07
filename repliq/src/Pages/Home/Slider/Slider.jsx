import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img className="w-full h-[500px]" src="https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-[500px]" src="https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-[500px]" src="https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-[500px]" src="https://soliloquywp.com/wp-content/uploads/2016/10/multiple-image-slider-wordpress.png" alt="img"/>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default Slider;
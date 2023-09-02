import React from "react";
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../../assets/sliderImg/slider1.jpg";
import img2 from "../../../assets/sliderImg/slider2.jpg";
import img3 from "../../../assets/sliderImg/slider3.jpg";
import img4 from "../../../assets/sliderImg/slider4.jpg";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="w-full h-[500px]" src={"https://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg"} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[500px]" src={"https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image003.jpg"} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[500px]" src={"https://www.bdembassybeijing.org/wp-content/uploads/2017/09/Rangamati-750x450.jpg"} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[500px]" src={"https://tourrom.com/wp-content/uploads/2019/01/paharpur.jpg"} alt="img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

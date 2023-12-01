import MiniCard from "../topSelling/MiniCard.jsx";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VerticalCarrousel = ({ direction }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      direction={`${direction}`}
    >
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
      <SwiperSlide>
        <MiniCard></MiniCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default VerticalCarrousel;

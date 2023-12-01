import Card from "../card/Card.jsx";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carrousel = ({direction}) => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={4}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
    zoom={true}
    direction={`${direction}`}
    >
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card></Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrousel;

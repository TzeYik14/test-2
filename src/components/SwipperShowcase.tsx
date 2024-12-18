"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "@/assets/payy_mobile1.jpeg";
import img2 from "@/assets/payy_mobile2.jpeg";
import img3 from "@/assets/payy_mobile3.jpeg";
import img4 from "@/assets/payy_mobile4.jpeg";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide>
        <div className="screenshot-item">
          <div className="image flex justify-center items-center mb-4">
            <Image
              src={img1}
              alt="Screenshot 1"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="screenshot-item">
          <div className="image flex justify-center items-center mb-4">
            <Image
              src={img2}
              alt="Screenshot 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="screenshot-item">
          <div className="image flex justify-center items-center mb-4">
            <Image
              src={img3}
              alt="Screenshot 3"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="screenshot-item">
          <div className="image flex justify-center items-center mb-4">
            <Image
              src={img4}
              alt="Screenshot 4"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;

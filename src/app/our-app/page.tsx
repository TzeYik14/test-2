"use client";
import React from "react";
import payyBanner from "../../assets/payy_mobile_banner.jpg";
import payy1 from "../../assets/payy_mobile1.jpeg";
import payy2 from "../../assets/payy_mobile2.jpeg";
import payy3 from "../../assets/payy_mobile3.jpeg";
import payy4 from "../../assets/payy_mobile4.jpg";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation module

const OurServices: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start justify-start pt-20 min-h-screen max-w-[1200px] gap-4">
      <h1 className="text-5xl font-light pl-10 bg-[#BADBED] w-full py-3 text-white">
        OUR APPS
      </h1>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full object-cover">
          <Image
            src={payyBanner}
            layout="responsive"
            width={700}
            height={475}
            className="h-full w-full object-cover"
            alt="Payy"
          />
        </div>

        <div className="w-full md:w-full text-gray-500 min-h-[500px] flex flex-col gap-3 justify-start items-end text-end p-10 bg-white">
          <div className="text-4xl uppercase">PayyRemit App</div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">Multi-currency</p>
            <p>Refer rates by various base currency</p>
            <p className="text-xl font-medium">Transfer</p>
            <p>Fast, secure, affordable with no hidden fees</p>
            <p className="text-xl font-medium">Ease</p>
            <p>Easy to use functionality</p>
          </div>
          <button className="bg-[#83B7D4] flex justify-center py-4 px-10 hover:bg-[#BADBED] transition-all duration-300 items-center gap-4 mt-10 rounded-lg text-white">
            <p>Download Now</p>
            <FaDownload />
          </button>
        </div>
      </div>
      <h1 className="flex items-center text-5xl font-light pl-10 w-full py-3 text-gray-400">
        PREVIEWS{" "}<hr className="w-full ml-10 border-2 border-gray-300"/>
      </h1>
      <div className="flex justify-center bg-white w-full">
        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation module
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="max-w-[400px] h-full object-cover"
        >
          <SwiperSlide>
            <Image
              src={payy1}
              layout="responsive"
              width={700}
              height={475}
              className="h-full w-full object-cover"
              alt="payy1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={payy2}
              layout="responsive"
              width={700}
              height={475}
              className="h-full w-full object-cover"
              alt="payy2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={payy3}
              layout="responsive"
              width={700}
              height={475}
              className="h-full w-full object-cover"
              alt="payy3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={payy4}
              layout="responsive"
              width={700}
              height={475}
              className="h-full w-full object-cover"
              alt="payy4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurServices;

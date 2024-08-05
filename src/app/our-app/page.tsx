import React from "react";
import payyBanner from "../../assets/payy_mobile_banner.jpg";
import payy1 from "../../assets/payy_mobile1.jpeg";
import payy2 from "../../assets/payy_mobile2.jpeg";
import payy3 from "../../assets/payy_mobile3.jpeg";
import payy4 from "../../assets/payy_mobile4.jpg";
import { FaDownload } from "react-icons/fa";

import Image from "next/image";
const OurServices = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start justify-start pt-20 min-h-screen max-w-[1200px] gap-4">
      <h1 className="text-5xl  font-light pl-10 bg-[#BADBED] w-full py-3 text-white">
        OUR APPS
      </h1>
      <div className="w-full flex flex-col  md:flex-row">
        <div className="w-full object-cover">
          <Image
            src={payyBanner}
            className="h-full w-full object-cover"
            alt="Payy"
          />
        </div>

        <div className="w-full  md:w-full text-gray-500 min-h-[500px] flex flex-col gap-3 justify-start items-end text-end p-10 bg-white ">
          <div className="text-4xl uppercase">PayyRemit App</div>
          <div className="flex flex-col gap-1">

            <p className="text-xl font-medium">Multi-currency</p>
            <p>Refer rates by various base currency</p>
            <p className="text-xl font-medium">Transfer</p>
            <p>Fast, secure, affordable with no hidden fees </p>
            <p className="text-xl font-medium">Ease</p>
            <p>Easy to use functionality</p>
          </div>
            <button className="bg-[#83B7D4] flex justify-center py-4 px-10 hover:bg-[#BADBED] transition-all duration-300  items-center gap-4 mt-10 rounded-lg text-white">
              <p>Download Now </p>
              <FaDownload />
            </button>
        </div>
      </div>
      <h1 className="text-5xl  font-light pl-10  w-full py-3">PREVIEWS</h1>

      <div className="md:flex w-full grid grid-cols-2">
        <div className="w-full h-full object-cover">
          <Image
            src={payy1}
            className="h-full w-full object-cover"
            alt="payy1"
          />
        </div>
        <div className="w-full h-full object-cover">
          <Image
            src={payy2}
            className="h-full w-full object-cover"
            alt="payy2"
          />
        </div>
        <div className="w-full h-full object-cover">
          <Image
            src={payy3}
            className="h-full w-full object-cover"
            alt="payy3"
          />
        </div>
        <div className="w-full h-full object-cover">
          <Image
            src={payy4}
            className="h-full w-full object-cover"
            alt="payy4"
          />
        </div>
      </div>
      {/* <div className="w-full flex relative">
       
        <div className="w-full absolute md:relative z-10 md:w-2/5 text-white md:text-gray-500 h-[500px] flex flex-col justify-start items-start text-start p-10">
          <div className="text-4xl uppercase">Compliance and risk management solutions</div>
          <div className="font-light mt-4 uppercase text-md w-full">
          We offer a range of compliance and risk management solutions to help businesses navigate complex regulatory environments and reduce their exposure to risk.
          </div>
        </div>
        <div
          className="w-full md:w-3/5 bg-slate-500 h-[500px] bg-cover relative"
          style={{
            backgroundImage: `url(${payyBanner.src})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 md:bg-[#83B7D4] opacity-60 transition-all duration-300 "></div>
        </div>
      </div>
      <div className="w-full flex relative">
        <div
          className="w-full md:w-2/3 bg-slate-500 h-[500px] bg-cover relative"
          style={{
            backgroundImage: `url(${payyBanner.src})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 md:bg-[#83B7D4] opacity-60 transition-all duration-300 "></div>
        </div>
        <div className="w-full absolute md:relative  md:w-1/3 text-white md:text-gray-500 h-[500px] flex flex-col justify-start items-end text-end p-10">
          <div className="text-4xl uppercase">Payment processing solutions</div>
          <div className="font-light mt-4 uppercase text-md w-full">
            Our payment processing solutions are designed to help businesses of
            all sizes accept payments from customers easily and securely. Our
            platform includes features such as card processing, e-wallets, and
            mobile payments, among others.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OurServices;

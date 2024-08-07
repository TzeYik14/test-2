import React from "react";
import malaysia from "../../assets/malaysia.png";
import indonesia from "../../assets/indonesia.png";
import singapore from "../../assets/singapore.jpg";
const OurServices = () => {
  return (
    <div className="flex w-full flex-col items-center md:items-start justify-start pt-20 min-h-screen max-w-[1200px]">
      <h1 className="text-5xl mb-10 font-light pl-10 bg-sail-700 text-white w-full py-4">OUR SERVICES</h1>
      
      <div className="w-full flex relative">
        <div
          className="w-full md:w-2/3 h-[500px] bg-cover relative"
          style={{
            backgroundImage: `url(${malaysia.src})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 md:opacity-0 opacity-60 transition-all duration-300 "></div>
        </div>
        <div className="w-full absolute md:relative  md:w-1/3 text-white md:text-gray-500 min-h-[500px] flex flex-col justify-start items-end text-end p-10 bg-none md:bg-white">
          <div className="text-4xl uppercase">Payment processing solutions</div>
          <div className="font-light mt-4 uppercase text-md w-full">
            Our payment processing solutions are designed to help businesses of
            all sizes accept payments from customers easily and securely. Our
            platform includes features such as card processing, e-wallets, and
            mobile payments, among others.
          </div>
        </div>
      </div>
      <div className="w-full flex relative">
       
        <div className="w-full absolute md:relative z-10 md:w-2/5 text-white md:text-gray-500 min-h-[500px] flex flex-col justify-start items-start text-start p-10 bg-none md:bg-white">
          <div className="text-4xl uppercase">Compliance and risk management solutions</div>
          <div className="font-light mt-4 uppercase text-md w-full">
          We offer a range of compliance and risk management solutions to help businesses navigate complex regulatory environments and reduce their exposure to risk.
          </div>
        </div>
        <div
          className="w-full md:w-3/5 bg-slate-500 h-[500px] bg-cover relative"
          style={{
            backgroundImage: `url(${indonesia.src})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 md:opacity-0 opacity-60 transition-all duration-300 "></div>
          </div>
      </div>
      <div className="w-full flex relative">
        <div
          className="w-full md:w-2/3 bg-slate-500 h-[500px] bg-cover relative"
          style={{
            backgroundImage: `url(${singapore.src})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 md:opacity-0 opacity-60 transition-all duration-300 "></div>
          </div>
        <div className="w-full absolute md:relative  md:w-1/3 text-white md:text-gray-500 min-h-[500px] flex flex-col justify-start items-end text-end p-10 bg-none md:bg-white ">
          <div className="text-4xl uppercase">Payment processing solutions</div>
          <div className="font-light mt-4 uppercase text-md w-full">
            Our payment processing solutions are designed to help businesses of
            all sizes accept payments from customers easily and securely. Our
            platform includes features such as card processing, e-wallets, and
            mobile payments, among others.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

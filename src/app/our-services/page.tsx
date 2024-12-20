import React from "react";
import payment from "@/assets/payment.png"
import risk from "@/assets/risk.png"
import fintech from"@/assets/fintech.png"
import Image from "next/image";

const OurSections = () => {
  const sections = [
    {
      title: "Payment Processing Solutions",
      description:
        "Our payment processing solutions are designed to help businesses of all sizes accept payments from customers easily and securely. Our platform includes features such as card processing, e-wallets, and mobile payments, among others.",
      textBg: "bg-[#fffff]",
      textColor: "text-[#000000]",
      reverse: false,
      image: payment,
    },
    {
      title: "Compliance and Risk Management Solutions",
      description:
        "We offer a range of compliance and risk management solutions to help businesses navigate complex regulatory environments and reduce their exposure to risk.",
      textBg: "bg-[#fffff]",
      textColor: "text-[#000000]",
      reverse: true,
      image: risk,
    },
    {
      title: "Custom Fintech Solutions",
      description:
        "We take a personalized approach to each client's needs, working closely with them to understand their unique challenges and develop customized solutions.",
      textBg: "bg-[#fffff]",
      textColor: "text-[#000000]",
      reverse: false,
      image: fintech,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1500px] bg-gray-50 min-h-screen mt-14 py-5">
      <h1 className="text-5xl mb-10 font-light pl-10 bg-sail-300 text-white w-full py-5 border-b border-gray-300">
        Our Services
      </h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } w-full max-w-[1800px] items-center shadow-lg rounded-none overflow-hidden mb-7`}
        >
          <div
            className={`w-full md:w-1/2 p-6 md:p-10 ${section.textBg} text-black flex flex-col justify-center`}
            style={{ minHeight: "300px" }}
          >
            <h1 className={`text-xl md:text-3xl font-bold ${section.textColor}`}>
              {section.title}
            </h1>
            <p className="mt-4 text-sm md:text-lg font-light">
              {section.description}
            </p>
          </div>

          <div className="w-full md:w-1/2 h-[200px] md:h-[300px] relative">
            <Image
              src={section.image}
              alt={section.title}
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurSections;
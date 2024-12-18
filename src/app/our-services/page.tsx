import React from "react";
import customSoftwareImg from "@/assets/softaware.png"; // Adjust the path as necessary
import crmSystemsImg from "@/assets/crm.png"; // Adjust the path as necessary
import approachImg from "@/assets/approach.png"; // Adjust the path as necessary
import Image from "next/image";

const OurSections = () => {
  const sections = [
    {
      title: "Custom Software Development",
      description:
        "We create bespoke software solutions tailored to your business needs. Our expert developers deliver innovative, scalable, and secure applications, including mobile, web, and enterprise software, to enhance efficiency and productivity.",
      textBg: "bg-[#5CAED4]",
      textColor: "text-[#fffff]",
      reverse: false,
      image: customSoftwareImg,
    },
    {
      title: "Advanced CRM Systems",
      description:
        "Enhance customer relationships with our tailored CRM solutions. Our systems streamline sales, marketing, and service processes, providing valuable insights to improve engagement and drive business growth.",
      textBg: "bg-[#5CAED4]",
      textColor: "text-[#fffff]",
      reverse: true,
      image: crmSystemsImg,
    },
    {
      title: "Our Approach",
      description:
        "We take a personalized approach to each client's needs, working closely with them to understand their unique challenges and develop customized solutions.",
      textBg: "bg-[#5CAED4]",
      textColor: "text-[#fffff]",
      reverse: false,
      image: approachImg,
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1500px] bg-gray-50 min-h-screen mt-14 py-5">
      <h1 className="text-5xl mb-10 font-light pl-10 bg-sail-300 text-white w-full py-5">
        Our Services
      </h1>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } w-full max-w-[1800px] items-center shadow-lg rounded-lg overflow-hidden mb-7`}
        >
          <div
            className={`w-full md:w-1/2 p-6 md:p-10 ${section.textBg} text-white flex flex-col justify-center`}
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
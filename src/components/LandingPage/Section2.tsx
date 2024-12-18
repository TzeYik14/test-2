import Image from "next/image";
import fintechImage from "@/assets/fintech.png";
import malaysia from "@/assets/malaysia.png";
import indonesia from "@/assets/indonesia.png";
import singapore from "@/assets/singapore.jpg";
import ContactUs from "@/app/contact-us/page";
import building from "@/assets/building.png";
import { FaChevronRight } from "react-icons/fa";
const branchs = [
  {
    country: "singapore",
    company: "Payy Pte",
    UEN: "202218135M",
    image: singapore,
  },
  {
    country: "Indonesia",
    company: "Payy Pte",
    UEN: "202218135M",
    image: indonesia,
  },
  {
    country: "Malaysia",
    company: "Payy Pte",
    UEN: "202218135M",
    image: malaysia,
  },
];
export default function Seciton2() {
  return (
    <div className="flex flex-col w-full max-w-[1500px] bg-gray-50 min-h-screen">
      <p className="text-5xl font-extralight tracking-wider text-sail-300 w-full text-start px-14 pt-10 mt-10 bg-white">
        ABOUT US
      </p>
      <div className="w-full grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-auto lg:h-[500px] p-4 md:p-10 bg-white gap-4 md:gap-10">
        {/* Image Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto">
          <Image
            src={building}
            alt={branchs[0].country}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {/* Text and Button Section */}
        <div className="w-full flex flex-col gap-4 items-end justify-between pt-4 md:pt-10 p-4 md:p-8 bg-white">
          <p className="w-[90%] sm:w-[80%] uppercase font-extralight text-gray-400 text-end">
            We offer a range of innovative financial technology products and services to help businesses and individuals achieve their financial goals. We are passionate about leveraging the power of technology to create solutions that make financial management more accessible, efficient, and secure.
          </p>
          <a href="/our-services">
            <button className="bg-white border-[#83B7D4] border p-3 px-10 mt-4 md:mt-10 rounded-lg text-[#83B7D4]">
              FIND OUT MORE
            </button>
          </a>
        </div>
      </div>






      <div className="w-full  flex flex-col md:flex-row">
        <ContactUs></ContactUs>
      </div>

    </div>
  );
}

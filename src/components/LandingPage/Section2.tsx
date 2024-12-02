import Image from "next/image";
import fintechImage from "@/assets/fintech.png"; // Ensure the path is correct
import malaysia from "@/assets/malaysia.png";
import indonesia from "@/assets/indonesia.png";
import singapore from "@/assets/singapore.jpg";
import ContactUs from "@/app/contact-us/page";
import building from "@/assets/building.png";
import { FaChevronRight } from "react-icons/fa";
const branchs = [
  {
    country: "Singapore",
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
       {/* <p className="text-5xl font-extralight tracking-wider text-sail-300 w-full text-start px-14 pt-10 mt-10 bg-white">
            ABOUT US
          </p> */}
      {/* <div className="w-full grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-full  flex-col lg:flex-row p-10 bg-white ">
    
        <div className="w-full  h-full relative ">
          <Image
            src={building}
            alt={branchs[0].country}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full flex flex-col gap-4 items-end justify-between pt-10 p-8 bg-white ">
       
          <p className="w-[80%] uppercase font-extralight text-gray-400 text-end">
            Welcome We offer a range of innovative financial technology products
            and services to help businesses and individuals achieve their
            financial goals. We are passionate about leveraging the power of
            technology to create solutions that make financial management more
            accessible, efficient, and secure.
          </p>
          <button className="bg-white border-[#83B7D4] border  p-3 px-10 mt-10 rounded-lg text-[#83B7D4]">
            FIND OUT MORE
          </button>
        </div>
      </div>   */}
    
        


      <div className="w-full  flex flex-col md:flex-row">
      <ContactUs></ContactUs>
      </div>
   
    </div>
  );
}

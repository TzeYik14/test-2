import Image from "next/image";
import fintechImage from "@/assets/fintech.png"; // Ensure the path is correct
import malaysia from "@/assets/malaysia.png";
import indonesia from "@/assets/indonesia.png";
import singapore from "@/assets/singapore.jpg";
import banner from "@/assets/banner.jpg";
import { FaChevronRight } from "react-icons/fa";
const branchs = [
  {
    country: "Singapore",
    company: "Payy Pte",
    UEN: "202218135M",
    image: singapore,
  },
  {
    country: "Canada",
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
export default function Seciton1() {
  return (
    <div className=" flex flex-col w-full max-w-[1500px] ">
      {/* Header Section */}
      <div className="relative bg-cover bg-center h-[55vh] bg-white overflow-hidden transition-all duration-300 ">
        <div className="absolute inset-0 w-[70vw] bg-right bg-contain  bg-no-repeat z-10 md:z-0 opacity-80 md:opacity-100  bg-sail-900 stroke-none " />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 md:pl-[125px] text-left text-white shadow-lg z-20">
          <h3 className="hidden md:block md:text-base tracking-wide uppercase mb-4">
            Solutions of the Day
          </h3>
          <h1 className="text-xl md:text-4xl mb-4 font-extralight">FINANCE TECHNOLOGY</h1>
          <h2 className="text-5xl md:text-5xl font-extrabold ">FINTECH</h2>
          <hr className="w-[100px] border-sail-200 border-2 my-10" />

          <a
            href="#get-started"
            className="bg-none border-2 flex items-center gap-2 justify-center text-white hover:text-sail-500 px-10 py-3 font-semibold shadow-md hover:bg-gray-100 transition duration-200"
          >
            GET STARTED <FaChevronRight />
          </a>
        </div>
        <Image
          src={banner}
          alt="Banner"
          className="absolute h-full w-full md:z-10 z-0  bg-red-400 md:w-[50%] md:h-[80%] md:right-10 md:top-[10%] object-cover"
          width={500}
          height={400}
        />
        {/* Text Overlay */}
      </div>
      <div className="bg-white flex justify-center flex-col gap-4 min-h-[30vh]">
        <div className="flex flex-col items-center gap-6 mt-10">
          {/* <hr className="w-full border-2" /> */}
          <p className="text-3xl text-sail-700 w-full text-center">
            GROUP OF COMPANIES
          </p>
          <hr className="w-[60px] border-sail-400 border-2" />
        </div>
        <div className="flex justify-center items-center p-6 gap-y-3 lg:flex-row flex-col gap-10 px-10  ">
          {branchs.map((branch, index) => (
            <div
              className={`flex flex-col rounded-lg px-20 hover:scale-105 bg-white transition-all duration-300 gap-4 items-center text-center justify-center p-8  hover:shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.3)] cursor-pointer  `}
              key={index}
            >
              <div className="bg-gray-100  overflow-hidden rounded-full mb-3">
                <Image
                  src={branch?.image}
                  alt="Singapore"
                  className="object-cover h-[150px] w-[150px] aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-medium text-[#83B7D4] pb-3">
                  {branch.country}
                </h3>
                <p className="text-sm text-gray-500">{branch.company}</p>
                <p className="text-sm text-gray-500">{branch.UEN}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

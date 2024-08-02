import Image from "next/image";
import fintechImage from "@/assets/fintech.png"; // Ensure the path is correct
import malaysia from "@/assets/malaysia.png";
import indonesia from "@/assets/indonesia.png";
import singapore from "@/assets/singapore.jpg";
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
      <div className="relative bg-cover bg-center h-[60vh] overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${fintechImage.src})`,
            filter: "blur(3px)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 md:pl-[125px] text-left text-white shadow-lg z-10">
          <h3 className="text-base tracking-wide uppercase mb-4">
            Solutions of the Day
          </h3>
          <h1 className="text-4xl mb-4 font-extralight">FINANCE TECHNOLOGY</h1>
          <h2 className="text-5xl font-extrabold mb-10">FINTECH</h2>
          <a
            href="#get-started"
            className="bg-white rounded-full flex items-center gap-2 justify-center text-[#83B7D4] px-10 py-3 font-semibold shadow-md hover:bg-gray-100 transition duration-200"
          >
            GET STARTED <FaChevronRight />
          </a>
        </div>
      </div>
      <div className="bg-white flex justify-center flex-col  min-h-[40vh]">
        <div className="flex items-center">
          {/* <hr className="w-full border-2" /> */}
          {/* <p className="text-xl text-gray-400 w-full text-center">
            GROUP OF COMPANIES
          </p> */}
          {/* <hr className="w-full border-2" /> */}
        </div>
        <div className="flex justify-around items-center p-6 gap-y-3 lg:flex-row flex-col">
  {branchs.map((branch, index) => (
    <div
      className={`flex hover:scale-105 transition-all duration-300 gap-4 items-center text-center justify-center p-8 w-full ${
        index !== branchs.length - 1 ? 'lg:border-r border-r-0 border-b lg:border-b-0 border-gray-200' : ''
      }`}
      key={index}
    >
      <div className="bg-gray-100 rounded-full overflow-hidden  mb-3">
        <Image
          src={branch?.image}
          alt="Singapore"
          className="object-cover h-[150px] w-[150px] aspect-square"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-2xl font-medium text-[#83B7D4] pb-3">
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

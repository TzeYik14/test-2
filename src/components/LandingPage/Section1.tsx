import Image from "next/image";
import canada from "@/assets/canda.jpg"
import london from "@/assets/london.jpg"
import singapore from "@/assets/singapore.jpg";

import background from "@/assets/background.png";

import Link from "next/link";

// import background from "@/assets/background.png"
// import { FaChevronRight } from "react-icons/fa";
const branchs = [
  {
    country: "Singapore",
    company: "Payy Pte Ltd",
    UEN: "202218135M",
    image: singapore,
  },
  {
    country: "Canada",
    company: "Payy Services Inc",
    UEN: "1000215199",
    image: canada,
  },
  {
    country: "London",
    company: "Payy Services Ltd",
    UEN: "14631344",
    image: london,
  },
];
export default function Seciton1() {
  return (
    <div className=" flex flex-col w-full max-w-[1500px] ">
      {/* Header Section */}
      <div
        className="hero min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.7,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-10 text-6xl font-bold text-white drop-shadow-lg">
              Payy
            </h1>
            <p className="mb-5 text-3xl text-white drop-shadow-lg">
            Empowering Your Financial Future, One Smart Step at a Time
            </p>
            <Link href="/our-app">
              <button className="btn bg-[#008080] hover:bg-orange-700 text-white px-6 py-3 rounded-lg">
                Explore Our App
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 p-10 text-center">
        <p className="text-4xl font-semibold mb-4">
        Fintech Solutions
        </p>
        <p className="text-lg text-gray-700">
        At Payy , we specialize in delivering innovative fintech solutions that empower businesses to thrive in a digital economy
        </p>
      </div>
      
      
 


      <div className="bg-white flex justify-center flex-col gap-4 min-h-[30vh] py-4">
        <div className="flex flex-col items-center gap-6 mt-10">
          {/* <hr className="w-full border-2" /> */}
          <p className="text-3xl text-sail-700 w-full text-center">
            Group Of Companies
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

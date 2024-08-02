import Image from "next/image";
import fintechImage from "@/assets/fintech.png"; // Ensure the path is correct
import malaysia from "@/assets/malaysia.png";
import indonesia from "@/assets/indonesia.png";
import singapore from "@/assets/singapore.jpg";
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
      <div className="w-full grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-full  flex-col lg:flex-row ">
        <div className="w-full  h-full relative">
          <Image
            src={building}
            alt={branchs[0].country}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-between pt-10 p-8 bg-white ">
          <p className="text-5xl font-extralight tracking-wider text-white w-full text-end border p-3 bg-[#BADBED]">
            ABOUT US
          </p>
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
      </div>

      <div className="w-full h-[50vh] bg-red-900 flex flex-col md:flex-row">
        <div className="bg-white w-full  md:w-2/3 h-full flex flex-col justify-between p-10 gap-4 ">
          <div>
            <p className="text-2xl text-[#83B7D4] ">CONTACT US</p>
            <p className="text-gray-400">Drop us a line!</p>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
          />
          <input
            type="text"
            placeholder="Email*"
            className="w-full p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 px-5 bg-gray-100 rounded-lg focus:outline-gray-300"
            style={{ resize: "none" }}
          />
          <button className="bg-[#83B7D4] p-3 px-10 mt-10 rounded-lg text-white">
            SEND
          </button>
        </div>
        <div className="bg-white w-full md:w-1/3 h-full flex flex-col justify-end p-10 gap-4 ">
          <div className="text-end flex flex-col ">
            <p className="text-2xl text-[#83B7D4]">Email</p>
            <p className="text-gray-400">contact@payyservices.com</p>
          </div>
        </div>
      </div>
   
    </div>
  );
}

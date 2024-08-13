// components/SideBar.tsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const navItem = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "OUR SERVICES",
      path: "/our-services",
    },
    {
      title: "OUR APP",
      path: "/our-app",
    },
    {
      title: "CONTACT US",
      path: "/contact-us",
    },
  ];
  const router = useRouter();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-sail-700 text-white shadow-lg z-30 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 text-end">
        <button className="text-2xl hover:text-gray-600" onClick={onClose}>
          <IoMdClose />
        </button>
      </div>
      <ul className="flex flex-col p-10 text-xl gap-10 ">
        {navItem.map((item, index) => (
          <li onClick={() => {router.push(item.path);onClose()}} key={index} className="w-full hover:bg-sail-400 px-5 py-4 transition-all duration-300 cursor-pointer">
            <a  className=" hover:text-[#83B7D4]">
              {item.title}
            </a>
          </li>
        ))}
     
      </ul>
    </div>
  );
};

export default SideBar;

'use client'
import React from "react";
import logo from '../../assets/Fast-Tech.png'
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import SideBar from "./SideBar";
import { useState } from "react";
const link = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  // { href: "/our-app", label: "OUR APP" },
  // { href: "/contact-us", label: "Privacy Policies" },
  { href: "/contact-us", label: "Contact Us" },
];


const NavBar: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white w-screen p-5 shadow-md fixed z-20">
        <div className="container mx-auto flex justify-between items-center max-w-[900px] text-sm font-light">
          <div className="font-bold text-lg">
            <Image src={logo} alt="Payy" width={150} height={150} />
          </div>
          <ul className="hidden md:flex space-x-10 ">
            {link.map((item, index) => (
              <li key={index}>
                <a
                  href={item?.href}
                  className="hover:text-[#83B7D4] transition-all duration-300"
                >
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          <IoMdMenu
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleSideBar}
          />
        </div>
      </nav>
      <SideBar isOpen={isSideBarOpen} onClose={toggleSideBar} />
    </>
  );
};

export default NavBar;


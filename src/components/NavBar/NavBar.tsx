import React from "react";
import logo from '../../assets/payy.png'
// No SSR-dependent logic here
import Image from "next/image";
const link = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/our-app", label: "OUR APP" },
  { href: "/contact-us", label: "Privacy Policies" },
  { href: "/contact-us", label: "Contact Us" },
];
const NavBar: React.FC = () => {
  return (
    <nav className="bg-white w-full p-5 shadow-md fixed z-10">
      <div className="container mx-auto flex justify-between items-center max-w-[900px] text-sm font-light">
        <div className="font-bold text-lg">
            <Image src={logo} alt="Payy" width={70} height={70} />
        </div>
        <ul className="hidden md:flex space-x-10 ">
      
          {link.map((item, index) => (
            <li key={index}>
              <a href={item?.href} className=" hover:text-[#83B7D4] transition-all duration-300">
                {(item.label).toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

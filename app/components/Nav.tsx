"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/",
    },
    {
      id: 3,
      title: "Services",
      url: "/",
    },
    {
      id: 4,
      title: "Contact",
      url: "/",
    },
  ];

  return (
    <nav className="h-[100px] z-20 w-full bg-[#2CA58D] flex justify-between items-center px-[20px] md:px-[50px] lg:px-[100px] fixed text-white">
      <div className="z-40">
        <h3 className="leading-none font-bold">
          Enhance <br /> Technical
        </h3>
      </div>
      <div className="hidden gap-[40px] lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:scale-110 duration-250 transition-all ease-in-out"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden z-40 ">
        {!isOpen ? (
          <FaBars size={25} onClick={setIsOpenHandler} />
        ) : (
          <FaTimes size={25} onClick={setIsOpenHandler} />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 h-screen w-screen z-30 bg-[#2CA58D]"></div>
      )}
    </nav>
  );
}

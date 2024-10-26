import React from "react";
import Logo from "@/assets/images/Rdlogo.svg";
export const Header = () => {
  return (
    <>
      <nav className="fixed bg-white top-0 p-6 mt-2 h-12 rounded-xl flex justify-center items-center shadow-lg z-50 w-[240px] translate-x-[19vw] md:w-1/2 md:justify-between md:translate-x-1/2">
        <img
          src={Logo}
          width={50}
          height={12}
          className="hidden md:block md:rounded-lg"
        />
        <ul className="flex space-x-4 list-none font-semibold items-center">
          <li className="cursor-pointer hover:text-gray-700">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-gray-700">
            <a href="#project">Project</a>
          </li>
          <li className="cursor-pointer hover:text-gray-700">
            <a href="#Work">Work</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

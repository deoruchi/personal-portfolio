import React from "react";
import Logo from "../../imageFolder/images/Rdlogo.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <nav className="fixed bg-whiteBlur2 top-2 left-1 p-6 mt-2 h-12 rounded-xl flex justify-center items-center shadow-lg z-50 w-[240px] translate-x-[19vw] md:w-1/2 md:justify-between md:translate-x-1/2">
        <img
          src={Logo}
          width={50}
          height={12}
          className="hidden md:block md:rounded-lg"
        />
        <ul className="flex space-x-4 list-none font-semibold items-center">
          <li
            className="cursor-pointer hover:text-gray-700"
            onClick={() => {
              nav("/personal-portfolio/about");
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-gray-700"
            onClick={() => {
              nav("/personal-portfolio/project");
            }}
          >
            Project
          </li>
          <li className="cursor-pointer hover:text-gray-700">
            <a href="#work">Work</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

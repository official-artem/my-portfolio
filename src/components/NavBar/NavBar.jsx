import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import { links } from "../../data";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div name="navbar" className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Artem Hrechuk</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav((current) => !current)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-20">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link onClick={() => setNav((current) => !current)} to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      )}

    </div>
  );
};

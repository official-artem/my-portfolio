import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

export const Button = () => {
  return (
    <div>
      <Link to="navbar" smooth duration={500} className="group bg-gradient-to-b from-cyan-500 to-blue-500 fixed right-5 bottom-5 w-16 h-16 rounded-[50%] flex items-center justify-center cursor-pointer">
        <span className="group-hover:scale-150 duration-300">
          <IoIosArrowUp size={25} color={"white"} />
        </span>
      </Link>
    </div>
  );
};

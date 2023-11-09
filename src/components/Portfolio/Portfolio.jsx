import React from "react";
import { portfolioData } from "../../data/portfolioData";

export const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b min-h-screen from-black pb-[100px] to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg pl-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolioData.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-2">
              <img
                src={src}
                alt="Bike landing"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                  href={demo} 
                  rel="noreferrer"
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a 
                  href={code} 
                  rel="noreferrer"
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

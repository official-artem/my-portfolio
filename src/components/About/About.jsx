import React from "react";

export const About = () => {
  return (
    <div name="about" className="bg-gradient-to-b from-gray-800 to-black w-full text-white  md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20 text-justify">
        Hi! I am delighted to apply for a position in your company. A year ago, I decided to pursue a career change and find something I would truly enjoy. I discovered the front end profession and since then I have been developing my skills in this direction. 
        </p>

        <br />

        <p className="text-xl text-justify">
        Likewise, I am proficient in JavaScript, Node.js, React, and  I am eager to learn other frameworks if needed, TypeScript, HTML5, CSS3, as well as SCSS, BEM, and Git/GitHub. Additionally, I have mastered JavaScript, Node.js and, I am eager to learn other frameworks if needed. Over the past year, I have gone from having no knowledge of the front end to becoming a full-fledged developer. I am looking forward to joining a great team and working on exciting projects.
        </p>
      </div>
    </div>
  )
}
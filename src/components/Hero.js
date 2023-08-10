import React from "react";
import { handleScroll } from "../handleScroll";

const Hero = () => {
  return (
    <section
      className="w-full h-full bg-no-repeat bg-cover pb-20 pt-20"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/09/03/23/56/sea-3652697_1280.jpg")`,
      }}
    >
      {/* lg:flex-row */}
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24  lg:justify-between">
        {/* lg:text-left  lg:max-w-md xl:max-w-lg*/}
        <div className="flex flex-col justify-center p-6 text-center rounded-sm">
          <h1 className="text-5xl text-gray-900 font-bold leadi sm:text-6xl">
            Hi, I'm <span className="dark:text-blue-800">Tobi</span>
          </h1>
          <p className="mt-6 mb-6 text-lg text-gray-800 sm:mb-8">
            I'm a Full Stack Web Developer with a passion for creating
            innovative and user-friendly applications.
            {/* <br className="hidden md:inline lg:hidden"> */}
            {/* </br> */}
          </p>
          <p class="mb-4 text-gray-800 text-base md:text-base">
            🚀 Looking to bring your web ideas to life? 🌐💡
          </p>
          {/* lg:justify-start */}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              rel="noopener noreferrer"
              href="#contact-me"
              onClick={handleScroll}
              className="px-8 py-3 text-lg font-semibold rounded shadow-md border border-blue-950 hover:bg-blue-950 hover:text-white dark:text-gray-900"
            >
              Work with me
            </a>
            <a
              rel="noopener noreferrer"
              href="#projects"
              onClick={handleScroll}
              className="px-8 py-3 text-lg font-semibold border rounded bg-blue-700 hover:bg-blue-900 dark:border-gray-100"
            >
              See my past works
            </a>
          </div>
        </div>
        {/* <div className="relative flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Profile}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

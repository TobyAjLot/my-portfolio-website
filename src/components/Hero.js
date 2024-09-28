import React from "react";

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full h-full bg-no-repeat bg-cover pb-20 pt-20"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/09/03/23/56/sea-3652697_1280.jpg")`,
      }}
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24  lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm">
          <h1 className="text-5xl text-gray-900 font-bold leadi sm:text-6xl">
            Hi, I'm <span className="dark:text-blue-800">Tobi</span>
          </h1>
          <p className="mt-6 mb-6 text-lg text-gray-800 sm:mb-8">
            I'm a Full Stack Web Developer with a passion for creating
            innovative and user-friendly applications.
          </p>
          <p class="mb-4 text-gray-800 text-base md:text-base">
            🚀 Looking to bring your web ideas to life? 🌐💡
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => handleScrollTo("contact-me")}
              className="px-8 py-3 text-lg font-semibold rounded shadow-md border border-blue-950 hover:bg-blue-950 hover:text-white dark:text-gray-900"
            >
              Work with me
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-3 text-lg font-semibold border rounded bg-blue-700 hover:bg-blue-900 dark:border-gray-100"
            >
              See my past works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

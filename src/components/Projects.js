import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import farmlink from "../images/projects-img/farmlink.PNG";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-100 bg-blue-950 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 lg:w-1/3 w-full">
            <div className="h-full bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="lg:h-72 md:h-36 w-full object-cover object-center"
                src={farmlink}
                alt="farmlink"
              />

              <div className="p-6 text-left">
                <h2 className="text-4xl text-gray-800 font-bold mb-4 ">
                  Farmlink
                </h2>
                <h3 className="text-2xl text-gray-500 font-medium mb-4">
                  E-Commerce
                </h3>
                <p className="leading-relaxed text-gray-500 mb-4">
                  Farmlink is a platform that empowers farmers and buyers to
                  connect, collaborate, and thrive in the agricultural
                  ecosystem.
                </p>

                {/* <h3 className="text-gray-500 text-md font-medium mb-2">
                  Technologies
                </h3>
                <hr className="my-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="bg-indigo-500 text-white px-2 py-1 rounded text-xs">
                    Tailwind CSS
                  </span>
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">
                    MongoDB
                  </span>
                </div> */}

                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  <span className="font-bold text-gray-600 mr-1">Note:</span>
                  <p className="leading-relaxed text-gray-600">
                    I contributed to the backend development of this project,
                    working alongside a talented backend team of 5 members.
                  </p>
                </h3>

                <div className="flex justify-between mt-6">
                  <a
                    href="https://farmlink-fe-int.vercel.app/"
                    target="_blank"
                    className="text-white bg-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  {/* <a
                    href=""
                    target="_blank"
                    className="text-white bg-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700"
                    rel="noreferrer"
                  >
                    Source Code
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

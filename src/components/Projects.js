import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import Todo from "../images/projects-img/todo-list.png";
import Secrets from "../images/projects-img/secrets.png";
import Drumkit from "../images/projects-img/drum-kit.png";
import Dicegame from "../images/projects-img/dice-game.png";
import Blog from "../images/projects-img/blog.png";
import Simongame from "../images/projects-img/simon-game.png";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-100 bg-blue-950 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <div className="flex flex-wrap m-8">
            <div className="sm:w-1/2 w-100 p-4 flex relative">
              <img
                src={Todo}
                alt="gallery"
                className="rounded-3xl p-4 absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-2 relative z-10 w-full bg-gray-900 opacity-0 duration-300 hover:opacity-100 rounded-lg inset-0">
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  Tobi's To-Do List
                </h1>
                <div className="w-full h-auto relative text-center">
                  <ul className="technologies mb-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li> Node JS</li>
                    <li> MongoDB</li>
                  </ul>
                  <ul className="technologies mb-2">
                    <li> Express JS</li>
                    <li> EJS </li>
                    <li> Mongoose </li>
                    <li> Lodash</li>
                  </ul>
                </div>
                <div className="mt-2 pb-4">
                  <p>
                    <span className="font-bold">Descripton: </span>This app lets
                    you add pending tasks you need to complete at a later time.
                    You can also create a custom list by adding /(name of list)
                    to the home page
                  </p>
                </div>
                <button className="relative text-black bg-gray-200 p-2 rounded">
                  <a
                    href="https://todolist-toby-app.onrender.com"
                    target="_blank"
                  >
                    Check it out
                  </a>
                </button>
              </div>
            </div>
            {/* <div className="sm:w-1/2 w-100 p-4 flex relative">
              <img
                src={Secrets}
                alt="gallery"
                className="rounded-3xl p-4 absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-2 relative z-10 w-full bg-gray-900 opacity-0 duration-300 hover:opacity-100 rounded-lg inset-0">
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  Secrets App
                </h1>
                <div className="w-full h-auto relative text-center">
                  <ul className="technologies mb-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li> Node JS</li>
                    <li> Mongoose </li>
                  </ul>
                  <ul className="technologies mb-2">
                    <li> Express JS</li>
                    <li> MD5 </li>
                    <li> MongoDB</li>
                    <li> Google-OAuth2 </li>
                  </ul>
                </div>
                <div className="mt-2 pb-4">
                  <p>
                    <span className="font-bold">Descripton: </span>Share that
                    secret that is bugging your mind. Don't worry, No one will
                    know its you.
                  </p>
                </div>
                <button className="relative text-black bg-gray-200 p-2 rounded">
                  Check it out
                </button>
              </div>
            </div> */}
            {/* <div className="sm:w-1/2 w-100 p-4 flex relative">
              <img
                src={Blog}
                alt="gallery"
                className="rounded-3xl p-4 absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-2 relative z-10 w-full bg-gray-900 opacity-0 duration-300 hover:opacity-100 rounded-lg inset-0">
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  Tobi's Blog
                </h1>
                <div className="w-full h-auto relative text-center">
                  <ul className="technologies mb-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li> MongoDB</li>
                  </ul>
                  <ul className="technologies mb-2">
                    <li> Node JS</li>
                    <li> Express JS</li>
                    <li> EJS </li>
                    <li> Mongoose </li>
                  </ul>
                </div>
                <div className="mt-2 pb-4">
                  <p>
                    <span className="font-bold">Descripton: </span>Stay up to
                    date with the fast changing tech space
                  </p>
                </div>
                <button className="relative text-black bg-gray-200 p-2 rounded">
                  Check it out
                </button>
              </div>
            </div> */}
            <div className="sm:w-1/2 w-100 p-4 flex relative">
              <img
                src={Dicegame}
                alt="gallery"
                className="rounded-3xl p-4 absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-2 relative z-10 w-full bg-gray-900 opacity-0 duration-300 hover:opacity-100 rounded-lg inset-0">
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  Dice Game
                </h1>
                <div className="w-full h-auto relative text-center">
                  <ul className="technologies mb-2">
                    <li> HTML</li>
                    <li> CSS</li>
                    <li> Bootstrap</li>
                    <li> Javascript</li>
                  </ul>
                </div>
                <div className="mt-2 pb-4">
                  <p>
                    <span className="font-bold">Descripton: </span>Challenge
                    your friends to the epic dice rolling and see your score go
                    up the board. May the best friend win!
                  </p>
                </div>
                <button className="relative text-black bg-gray-200 p-2 rounded">
                  <a
                    href="https://tobyajlot.github.io/Dice-game"
                    target="_blank"
                  >
                    Check it out
                  </a>
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 w-100 p-4 flex relative">
              <img
                src={Simongame}
                alt="gallery"
                className="rounded-3xl p-4 absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-2 relative z-10 w-full bg-gray-900 opacity-0 duration-300 hover:opacity-100 rounded-lg inset-0">
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  Simon Game
                </h1>
                <div className="w-full h-auto relative text-center">
                  <ul className="technologies mb-2">
                    <li> HTML</li>
                    <li> CSS</li>
                    <li> Bootstrap</li>
                    <li> Javascript</li>
                  </ul>
                </div>
                <div className="mt-2 pb-4">
                  <p>
                    <span className="font-bold">Descripton: </span>This is a
                    version of the Simon electronic game of short-term memory
                    skill invented by Ralph H. Baer and Howard J. How far can
                    you go?
                  </p>
                </div>
                <button className="relative text-black bg-gray-200 p-2 rounded">
                  <a
                    href="https://tobyajlot.github.io/Simon-Game"
                    target="_blank"
                  >
                    Check it out
                  </a>
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 w-100 p-4 flex relative">
              <img
                src={Drumkit}
                alt="gallery"
                className="rounded-3xl p-4 absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-2 relative z-10 w-full bg-gray-900 opacity-0 duration-300 hover:opacity-100 rounded-lg inset-0">
                <h1 className="title-font text-3xl font-medium text-white mb-3">
                  Drumkit
                </h1>
                <div className="w-full h-auto relative text-center">
                  <ul className="technologies mb-2">
                    <li> HTML</li>
                    <li> CSS</li>
                    <li> Bootstrap</li>
                    <li> Javascript</li>
                  </ul>
                </div>
                <div className="mt-2 pb-4">
                  <p>
                    <span className="font-bold">Descripton: </span>Wanna have
                    some fun with the sound of the Drumset? Try the autoplay
                  </p>
                </div>
                <button className="relative text-black bg-white p-2 rounded">
                  <a
                    href="https://tobyajlot.github.io/Drum-Kit"
                    target="_blank"
                  >
                    Check it out
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

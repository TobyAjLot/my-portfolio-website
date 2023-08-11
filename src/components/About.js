import React from "react";
import Profile from "../images/Upwork-removebg-preview (1).png";

const About = () => {
  return (
    <div id="about-me" class="relative bg-blue-950">
      <div class="barber-pic absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10"></div>
      <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
        <div class="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
          <h2 class="text-center max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">About Me</span>
          </h2>
          <div class="w-full flex flex-wrap">
            <div class="w-full lg:w-1/2 p-2 flex items-center rounded-full">
              <img
                alt="Toby"
                loading="lazy"
                width="400"
                height="100"
                decoding="async"
                data-nimg="1"
                class="mx-auto border shadow-md rounded-full"
                src={Profile}
              />
            </div>
            <div class="w-full lg:w-1/2 flex flex-col justify-center p-2 py-8">
              <p class="text-base text-gray-200 md:text-lg">
                My name is Tobi and I am a talented musician and full stack web
                developer. I love watching movies of various genres including
                animations. I also love playing video and mobile games, I like
                the thrills they bring.
              </p>
              <p class="mt-4 text-base text-gray-200 md:text-lg">
                I have a background in health care but I soon realize how much
                interest I have in programming when I researched how to make my
                own game. There's a lot of career paths I'd like to explore in
                the Tech industry such as Artificial Intelligence, Cyber
                Security and so on. I decided to be a web developer to start my
                tech career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

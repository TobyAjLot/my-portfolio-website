import { useEffect, useState, useRef } from "react";
import useAutoHide from "auto-hide-hook";

const Navbar = () => {
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useAutoHide(menuRef, setIsMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${
        isScrolled ? "bg-blue-800 shadow-lg" : "bg-transparent"
      } fixed w-full z-50 transition duration-300 ease-in-out`}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            // aria-label="TobyWebDev"
            // title="TobyWebDev"
            className="inline-flex items-center"
          >
            <i className="mr-2 text-2xl text-gray-100 fa-solid fa-laptop-code"></i>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              TobyWebDev
            </span>
          </a>

          <ul className="space-x-8 items-center hidden lg:flex">
            <li>
              <button
                onClick={() => handleScrollTo("about-me")}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-500"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("skills")}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-500"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("projects")}
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-500"
              >
                Projects
              </button>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <button
                onClick={() => handleScrollTo("contact-me")}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 hover:text-gray-500"
              >
                Contact Me
              </button>
            </li>
          </ul>
          <div className="lg:hidden" ref={menuRef}>
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-300" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a href="/" className="inline-flex items-center">
                        <i className="mr-2 text-2xl text-blue-950 fa-solid fa-laptop-code"></i>
                        <span className="ml-2 text-xl font-bold tracking-wide text-blue-950 uppercase">
                          TobyWebDev
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-blue-200 focus:bg-blue-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-blue-500" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <button
                          onClick={() => handleScrollTo("about-me")}
                          className="font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-blue-accent-200"
                        >
                          About Me
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleScrollTo("skills")}
                          className="font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-blue-accent-200"
                        >
                          Skills
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleScrollTo("projects")}
                          className="font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-blue-accent-200"
                        >
                          Projects
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleScrollTo("contact-me")}
                          className="bg-blue-accent-200 font-medium tracking-wide text-blue-700 px-4 py-2"
                        >
                          Contact Me
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

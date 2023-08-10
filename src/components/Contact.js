import { contact } from "../data";
import { BiSolidMessage } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      id="contact-me"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <BiSolidMessage className="w-10 h-20 inline-block mb-4 text-blue-950" />
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-950 sm:text-center sm:text-4xl md:mx-auto">
          <span className="relative inline-block">Contact Me</span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        {contact.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label=""
            key={item.title}
          >
            <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
              <div className="relative p-5 bg-white rounded-sm">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                    <i className={`${item.icon}`}></i>
                  </div>
                  <h6 className="font-semibold leading-5">{item.title}</h6>
                </div>
                <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import img2 from '../images/bacg.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Contact = () => {
  return (
    <div
      id='contact'
      className="min-h-screen bg-cover bg-center py-32 px-6 sm:px-10"
      style={{ backgroundImage: `url(${img2})` }}
    >
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-200 drop-shadow-lg tracking-wide">
        CONTACT
      </h1>

      <div className="mx-auto w-16 pt-3 border-b-4 border-purple-500 shadow-md"></div>

      <h6 className="text-lg sm:text-xl text-center mt-6 text-gray-300 tracking-wide leading-relaxed max-w-3xl mx-auto">
        Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
      </h6>

      {/* FORM */}
      <form
        className="
          w-full max-w-3xl
          mb-40 sm:mb-52
          mx-auto mt-12
          bg-white/10 backdrop-blur-lg
          shadow-2xl rounded-3xl
          p-6 sm:p-10
          border border-white/20
        "
      >
        <div className="mb-6">
          <label className="block text-gray-200 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-white/20 px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition duration-300 text-gray-100"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-200 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-white/20 px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition duration-300 text-gray-100"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-200 font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition duration-300 text-gray-100 resize-none"
          />
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900
            text-white font-bold py-3
            rounded-xl shadow-lg
            hover:opacity-90 hover:shadow-slate-500/40
            transition duration-300
          "
        >
          Send Message
        </button>
      </form>

      {/* FOOTER */}
      <footer
        className="
          bg-white/10 backdrop-blur-lg
          rounded-3xl
          min-h-[350px]
          shadow-2xl
          border border-white/20
          py-10 sm:py-12
          mt-24 sm:mt-[100px]
          px-6 sm:px-8
          mb-[-80px] sm:mb-[-100px]
          max-w-7xl mx-auto
        "
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-200 mb-3">
              SHAZNA SHAFI
            </h1>
            <p className="text-gray-300 text-base max-w-md leading-relaxed">
              A Frontend focused Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product.
            </p>
          </div>

          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="font-bold text-2xl mb-4 text-gray-200">
              SOCIAL
            </h2>
            <div className="flex justify-center md:justify-end gap-6">
              <FaLinkedin className="w-8 h-8 text-gray-200 hover:text-gray-500 transition duration-300 cursor-pointer" />
              <IoLogoGithub className="w-8 h-8 text-gray-200 hover:text-gray-500 transition duration-300 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 w-full mt-12 mb-6"></div>

        <p className="text-xs text-gray-400 tracking-wide text-center">
          © 2025 .  Shazna Shafi
        </p>
      </footer>
    </div>
  );
};

export default Contact;

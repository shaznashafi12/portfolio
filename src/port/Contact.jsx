import React from 'react'
import img2 from '../images/bacg.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Contact = () => {
  return (
    <div id='contact'> 
         <div className="h-[1000px] bg-cover bg-center pt-[200px]" style={{ backgroundImage: `url(${img2})` }}>
                <h1 className="font-sans text-gray-300 text-4xl font-bold text-center">CONTACT</h1>
                <div className="mx-auto w-8 pt-3 border-b-4 border-purple-500"></div>
                <h6 className="text-xl text-black text-center mt-6 font-normal text-stone-500">
                  Feel free to Contact me by submitting the form below and I will get back
                   to you as soon as <br></br> possible
                </h6>
<form className=" w-[800px] mx-auto mt-12 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-8">
          <div className="mb-6">
            <h1 className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </h1>
            <input type="text" id="name" className="w-full bg-gray-100 px-4 py-3 border border-none rounded-lg focus:outline-none focus:border-purple-500 transition duration-300"/>
          </div>

          <div className="mb-6">
            <h1 className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </h1>
            <input type="email" id="email"
              className="w-full bg-gray-100 px-4 py-3 border border-none rounded-lg focus:outline-none focus:border-purple-500 transition duration-300"
             
            />
          </div>

          <div className="mb-6">
            <h1 className="block  text-gray-700 font-semibold mb-2" htmlFor="message"> Message</h1>
            <textarea id="message" rows="5" className="w-full px-4 py-3  bg-gray-100 border border-none rounded-lg focus:outline-none focus:border-purple-500 transition duration-300 resize-none"
              
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
                </div>
              <footer className="bg-gray-100 text-stone-100 py-16">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl font-bold mb-3">SHAZNA SHAFI</h1>
            <p className="text-gray-400 text-base max-w-[500px] leading-relaxed">
              A Frontend focused Web Developer building the Frontend of Websites and Web
              Applications that lead to the success of the overall product.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="font-bold text-2xl mr-[200px] mb-4">SOCIAL</h1>
            <div className="flex justify-center md:justify-end gap-6 mr-[80px]">
              <FaLinkedin className="w-8 h-8 text-white hover:text-purple-500 transition duration-300 cursor-pointer" />
              <FaTwitter className="w-8 h-8 text-white hover:text-purple-500 transition duration-300 cursor-pointer" />
              <FaYoutube className="w-8 h-8 text-white hover:text-purple-500 transition duration-300 cursor-pointer" />
              <IoLogoGithub className="w-8 h-8 text-white hover:text-purple-500 transition duration-300 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 w-[1400px] ml-10 mr-10  mt-12 mb-6"></div>

        <p className="text-xs text-gray-500 tracking-wide text-center">
         © Copyright 2025 . Made by shazna shafi   
            </p>
      </footer>
    </div>
  )
}

export default Contact
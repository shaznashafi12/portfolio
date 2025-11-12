import React from 'react'
import img from '../images/dp.jpg'
import img1 from '../images/bgg2.jpeg'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className='pt-4'>
      <div className='fixed h-20 pb-3 top-0 left-0 w-full z-50 bg-white shadow-md flex items-center pt-8'>
        <img className='h-10 w-10 rounded-full ms-6'src={img} alt='Profile'/>
        <h2 className='flex pl-3  font-serif font-bold text-1xl'>SHAZNA SHAFI</h2>
      <ul className="flex pl-[800px] gap-12 font-bold text-lg text-gray-800">
<li onClick={() => {
    const h = document.getElementById('home');
    if (h) {
      h.scrollIntoView({ behavior: 'smooth' });
    }
  }}
 className="hover:text-purple-600 cursor-pointer transition duration-300">HOME</li>  
 <li onClick={() => {
    const a = document.getElementById('about');
    if (a) {
      a.scrollIntoView({ behavior: 'smooth' });
    }
  }}
className="hover:text-purple-600 cursor-pointer transition duration-300">
    ABOUT
  </li>
  <li onClick={() => {
    const p = document.getElementById('project');
    if (p) {
      p.scrollIntoView({ behavior: 'smooth' });
    }
  }}
 className="hover:text-purple-600 cursor-pointer transition duration-300">
    PROJECT
  </li>
  <li onClick={() => {
    const c = document.getElementById('contact');
    if (c) {
      c.scrollIntoView({ behavior: 'smooth' });
    }
  }}
 className="hover:text-purple-600 cursor-pointer transition duration-300">CONTACT</li>
</ul>
</div>  


<div className='pt-4'>
  <div
  className="h-[800px] bg-cover bg-center pt-20 "
  style={{ backgroundImage: `url(${img1})` }}>
      
   <h1 className='text-5xl font-serif font-bold text-gray-400 text-center pt-40'>HEY, I'M SHAZNA SHAFI</h1>
   <h6 className='text-lg font-serif  text-gray-400 text-center mt-6 font'>A Result-Oriented Web Developer building and managing Websites and<br></br> Web Applications
     that leads to the success of the overall product</h6>
<Link to=''>
  <button className='w-56 h-16 px-10 font-sans rounded-lg ml-[640px] mt-7 font-bold text-gray text-center bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700'>
    PROJECT
  </button>
</Link>

  <div className="flex flex-col shadow-2xl w-16 mt-[-250px] bg-slate-400 rounded" >
      <div className="p-3 rounded hover:bg-gray-200 transition-colors duration-300">
        <FaLinkedin className="w-8 h-8 text-black" />
      </div>
      <div className="p-3 rounded hover:bg-gray-200 transition-colors duration-300">
        <FaTwitter className="w-8 h-8 text-black" />
      </div>
      <div className="p-3 rounded hover:bg-violet-200 transition-colors duration-300">
        <FaYoutube className="w-8 h-8 text-black" />
      </div>
      <div className="p-3 rounded hover:bg-violet-200 transition-colors duration-300">
        <IoLogoGithub className="w-8 h-8 text-black" />
      </div>
      <div className="p-3 rounded  hover:bg-violet-200 transition-colors duration-300">
        <FaBookOpen className="w-8 h-8 text-black" />
      </div>
    </div>
    </div>  

    </div>
    </div>
  )
}

export default Home

import React from 'react'
import img from '../images/port.jpeg'
import bg from '../images/bgg2.jpeg'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Home = () => {
  return (
    <div id="home" className="bg-[#0f0f0f] text-gray-900">

      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10">
  <nav className="max-w-7xl h-20 flex items-center justify-between px-12">

    {/* Logo */}
    <div className="flex items-center gap-4">
      <img
        src={img}
        alt="profile"
        className="h-12 w-12 rounded-full border border-white/20 
        shadow-[0_0_15px_rgba(255,255,255,0.15)]"
      />

      <h2 className="text-[22px] font-semibold tracking-wider bg-gradient-to-r 
        from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Shazna Shafi
      </h2>
    </div>

    {/* Navigation */}
    <ul className="flex gap-10 mr-[-200px] text-gray-300 font-medium tracking-wide">
      {["home", "about", "project", "contact"].map((sec) => (
        <li
          key={sec}
          onClick={() =>
            document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer px-1 pb-1 relative transition-all duration-300 
          hover:text-white
          after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
          after:bg-gradient-to-r after:from-white after:to-gray-300 
          after:rounded-full after:transition-all after:duration-300 
          hover:after:w-full"
        >
          {sec.toUpperCase()}
        </li>
      ))}
    </ul>
  </nav>
</header>


      {/* HERO SECTION */}
      <section
        className="h-[900px] w-full flex items-center justify-center text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-black/60 via-[#1a1a1a]/60 to-[#0d0d0d]/80">
        </div>

        {/* Soft Geometric Glow Circles */}
        <div className="absolute top-20 left-32 w-60 h-60 bg-[#9b87ff]/20 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-[#5f6fff]/20 rounded-full blur-[100px]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6">

          {/* Title */}
          <h1 className="text-5xl font-semibold tracking-tight leading-tight font-serif
            bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text drop-shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
          HEY,I'M SHAZNA SHAFI
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-[20px] text-gray-200 leading-relaxed font-light">
            <span className="font-medium text-white"></span> A Result-Oriented Web Developer building and managing Websites
             and
            Web Applications that leads to the success of the overall product
          </p>

          {/* Button */}
          <Link to="">
          <button className="
  mt-12 px-14 py-4 text-lg font-semibold tracking-wide
  rounded-2xl text-white relative overflow-hidden
  bg-white/5 border border-white/20 backdrop-blur-xl
  shadow-[0_0_40px_rgba(255,255,255,0.1)]
  hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
  hover:border-white/40 transition-all duration-500
  hover:bg-white/15
  before:absolute before:inset-0 before:-translate-x-full
  before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
  hover:before:translate-x-full before:duration-700 before:ease-out
">
  View My Work
</button>

          </Link>
        </div>

        {/* Social Icons Premium Sidebar */}
        <div className="absolute right-16 top-1/3 flex flex-col items-center gap-8">

          {/* Line */}
          <div className="w-[1px] mt-[-120px] h-20 bg-white/30"></div>

          {[FaLinkedin, IoLogoGithub].map((Icon, i) => (
            <Icon
              key={i}
              className="h-6 w-6 text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
            />
          ))}

          {/* Line */}
          <div className="w-[1px] h-20 bg-white/30"></div>
        </div>

      </section>
    </div>
  );
};

export default Home;

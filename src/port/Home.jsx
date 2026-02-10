import React, { useState } from "react"
import img from "../images/port.jpeg"
import bg from "../images/bgg2.jpeg"
import { Link } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { FiMenu, FiX } from "react-icons/fi"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="home" className="bg-[#0f0f0f] text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 pr-4 md:pr-48">
        <nav className="max-w-7xl h-20 flex items-center justify-between px-6 sm:px-12 mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <img
              src={img}
              alt="profile"
              className="h-12 w-12 rounded-full border border-white/20 
              shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            />
            <h2 className="text-[20px] sm:text-[22px] font-semibold tracking-wider bg-gradient-to-r 
              from-white via-gray-200 to-gray-400 bg-clip-text text-transparent whitespace-nowrap">
              Shazna Shafi
            </h2>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 mr-0 md:mr-[-200px] text-gray-300 font-medium tracking-wide whitespace-nowrap">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="text-2xl text-white" />
              ) : (
                <FiMenu className="text-2xl text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden w-full bg-[#0f0f0f]/95 backdrop-blur-2xl border-t border-white/10">
            <ul className="flex flex-col gap-6 p-6 text-gray-300">
              {["home", "about", "project", "contact"].map((sec) => (
                <li
                  key={sec}
                  onClick={() => {
                    document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" })
                    setMenuOpen(false)
                  }}
                  className="cursor-pointer text-lg font-medium hover:text-white transition-colors duration-300"
                >
                  {sec.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="h-[850px] sm:h-[900px] w-full flex items-center justify-center text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-black/60 via-[#1a1a1a]/60 to-[#0d0d0d]/80" />

        {/* Glows */}
        <div className="absolute top-20 left-32 w-60 h-60 bg-[#9b87ff]/20 rounded-full blur-[90px] hidden sm:block" />
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-[#5f6fff]/20 rounded-full blur-[100px] hidden sm:block" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight font-serif
            bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          >
            HEY, I’M SHAZNA SHAFI
          </h1>

          <p className="mt-6 sm:mt-8 max-w-2xl text-[16px] sm:text-[20px] text-gray-200 leading-relaxed font-light">
            A Result-Oriented Web Developer building and managing Websites
            and Web Applications that leads to the success of the overall product
          </p>

          <Link to="">
            <button
              className="mt-10 sm:mt-12 px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg font-semibold
              rounded-2xl text-white relative overflow-hidden
              bg-white/5 border border-white/20 backdrop-blur-xl
              shadow-[0_0_40px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
              hover:border-white/40 transition-all duration-500
              hover:bg-white/15"
            >
              View My Work
            </button>
          </Link>
        </div>

        {/* Desktop Social Rail */}
        <div className="hidden lg:flex absolute right-16 top-1/3 flex flex-col items-center gap-8">
          <div className="w-[1px] mt-[-120px] h-20 bg-white/30" />
          {[FaLinkedin, IoLogoGithub].map((Icon, i) => (
            <Icon
              key={i}
              className="h-6 w-6 text-white/70 hover:text-white cursor-pointer"
            />
          ))}
          <div className="w-[1px] h-20 bg-white/30" />
        </div>

        {/* Mobile Social Icons */}
        <div className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8">
          <FaLinkedin className="h-5 w-5 text-white/70 hover:text-white cursor-pointer" />
          <IoLogoGithub className="h-5 w-5 text-white/70 hover:text-white cursor-pointer" />
        </div>
      </section>
    </div>
  )
}

export default Home

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import img from "../images/port.jpeg"
import bg from "../images/bgg2.jpeg"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { FiMenu, FiX } from "react-icons/fi"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div id="home" className="bg-[#0f0f0f] text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 pr-4 md:pr-48"
      >
        <nav className="max-w-7xl h-20 flex items-center justify-between px-6 sm:px-12 mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 shrink-0"
          >
            <img
              src={img}
              alt="profile"
              className="h-12 w-12 rounded-full border border-white/20 
              shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            />
            <h2 className="text-[10px] sm:text-[22px] font-semibold tracking-wider bg-gradient-to-r 
              from-white via-gray-200 to-gray-400 bg-clip-text text-transparent whitespace-nowrap">
              Shazna Shafi
            </h2>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 mr-0 md:mr-[-200px] text-gray-300 font-medium tracking-wide whitespace-nowrap">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/#about" },
              { name: "PROJECT", path: "/projects" },
              { name: "CONTACT", path: "/#contact" },
            ].map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                onClick={() => navigate(item.path)}
                className="cursor-pointer px-1 pb-1 relative transition-all duration-300 
                hover:text-white
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                after:bg-gradient-to-r after:from-white after:to-gray-300 
                after:rounded-full after:transition-all after:duration-300 
                hover:after:w-full"
              >
                {item.name}
              </motion.li>
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
       {menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
  >
    <ul className="flex flex-col items-center gap-6 py-8 text-gray-300 font-medium tracking-wide">
      {[
        { name: "HOME", action: () => navigate("/") },
        {
          name: "ABOUT",
          action: () =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
        },
        {
          name: "PROJECT",
          action: () =>
            document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }),
        },
        {
          name: "CONTACT",
          action: () =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
        },
      ].map((item) => (
        <li
          key={item.name}
          onClick={() => {
            item.action()
            setMenuOpen(false)
          }}
          className="cursor-pointer hover:text-white transition duration-300"
        >
          {item.name}
        </li>
      ))}
    </ul>
  </motion.div>
)}


      </motion.header>

      {/* HERO SECTION */}
      <section
        className="h-[850px] sm:h-[900px] w-full flex items-center justify-center text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b 
          from-black/60 via-[#1a1a1a]/60 to-[#0d0d0d]/80" />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-32 w-60 h-60 bg-[#9b87ff]/20 rounded-full blur-[90px] hidden sm:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-32 w-72 h-72 bg-[#5f6fff]/20 rounded-full blur-[100px] hidden sm:block"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          className="relative z-10 flex flex-col items-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight font-serif
            bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          >
            HEY, I’M SHAZNA SHAFI
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="mt-6 sm:mt-8 max-w-2xl text-[16px] sm:text-[20px] text-gray-200 leading-relaxed font-light"
          >
            A Result-Oriented Web Developer building and managing Websites
            and Web Applications that leads to the success of the overall product
          </motion.p>
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() =>
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })
  }
  className="mt-10 sm:mt-12 px-10 sm:px-14 py-3 sm:py-4 text-base sm:text-lg font-semibold
  rounded-2xl text-white relative overflow-hidden
  bg-white/5 border border-white/20 backdrop-blur-xl
  shadow-[0_0_40px_rgba(255,255,255,0.1)]
  hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
  hover:border-white/40 transition-all duration-500
  hover:bg-white/15"
>
  View My Work
</motion.button>


        </motion.div>
{/* Desktop Right Social Rail */}
<div className="hidden mb-32 md:flex flex-col items-center gap-6 absolute right-8 top-1/2 -translate-y-1/2 z-50">

  <div className="w-[1px] h-20 bg-white/30"></div>

  <a
    href="https://www.linkedin.com/in/shazna-shafi-44758736a/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="h-6 w-6 text-white/70 hover:text-white transition duration-300 hover:scale-110 cursor-pointer" />
  </a>

  <a
    href="https://github.com/shaznashafi12"
    target="_blank"
    rel="noopener noreferrer"
  >
    <IoLogoGithub className="h-6 w-6 text-white/70 hover:text-white transition duration-300 hover:scale-110 cursor-pointer" />
  </a>

  <div className="w-[1px] h-20 bg-white/30"></div>
</div>

{/* Mobile Bottom Social Bar */}
<div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
  <div className="flex items-center justify-center gap-6">

    <div className="flex-1 h-[1px] bg-white/30"></div>

    <a
    href="https://www.linkedin.com/in/shazna-shafi-44758736a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="h-5 w-5 text-white/70 active:scale-95 transition duration-300" />
    </a>

    <a
      href="https://github.com/shaznashafi12"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IoLogoGithub className="h-5 w-5 text-white/70 active:scale-95 transition duration-300" />
    </a>

    <div className="flex-1 h-[1px] bg-white/30"></div>

  </div>
</div>



      </section>
    </div>
  )
}

export default Home

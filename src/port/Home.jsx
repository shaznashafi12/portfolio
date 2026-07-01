import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useNavigate } from "react-router-dom"
import img from "../images/port.jpeg"
import bg from "../images/bgg2.jpeg"
import { FaLinkedin, FaDownload } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { FiMenu, FiX } from "react-icons/fi"
import ScatteredName from "../components/ScatteredName"

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
const [activeSection, setActiveSection] = useState("home")

  const y1 = useSpring(useTransform(scrollY, [0, 500], [0, 150]), { stiffness: 80, damping: 20 })
  const y2 = useSpring(useTransform(scrollY, [0, 500], [0, -100]), { stiffness: 80, damping: 20 })
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.92])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
useEffect(() => {
  const sections = ["about", "project", "contact"]
  const observers = sections.map((id) => {
    const el = document.getElementById(id)
    if (!el) return null
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return obs
  })
  const onScroll = () => { if (window.scrollY < 80) setActiveSection("home") }
  window.addEventListener("scroll", onScroll)
  return () => {
    observers.forEach((o) => o?.disconnect())
    window.removeEventListener("scroll", onScroll)
  }
}, [])
  // FIX 1: scroll-based nav actions instead of navigate("/#about")
 const navLinks = [
  { name: "Home",     id: "home",    action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { name: "About",    id: "about",   action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { name: "Project", id: "project", action: () => navigate("/projects") },
  { name: "Contact",  id: "contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
]

  // 3D enhancement: subtle mouse-tracked tilt for the hero content
  const heroTiltX = ((cursorPosition.y / (window.innerHeight || 800)) - 0.5) * -8
  const heroTiltY = ((cursorPosition.x / (window.innerWidth || 1200)) - 0.5) * 8

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden relative">

      {/* 3D enhancement: keyframes for floor grid, rotating halo, floating shards */}
      <style>{`
        @keyframes gridMove { 0% { background-position: 0 0; } 100% { background-position: 0 60px; } }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatShard1 { 0%, 100% { transform: translateY(0px) rotate(12deg); } 50% { transform: translateY(-20px) rotate(28deg); } }
        @keyframes floatShard2 { 0%, 100% { transform: translateY(0px) rotate(-10deg); } 50% { transform: translateY(18px) rotate(-25deg); } }
        @keyframes floatShard3 { 0%, 100% { transform: translateY(0px) rotate(45deg); } 50% { transform: translateY(-14px) rotate(60deg); } }
      `}</style>

      {/* Custom Cursor */}
      <motion.div
        className="hidden lg:block fixed w-5 h-5 border border-amber-400/70 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 30, mass: 0.1 }}
      />

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-2xl border-b border-white/[0.04]"
      >
<nav className="max-w-7xl mx-auto h-20 flex justify-between items-center md:grid md:grid-cols-3 px-8 sm:px-14">
          {/* Logo / Name */}
<div className="flex items-center gap-4 justify-start md:-ml-36"            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div className="relative" style={{ perspective: 400 }}>
              {/* 3D enhancement: rotating gradient halo */}
              <div
                className="absolute -inset-1 rounded-full opacity-70 pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg, rgba(251,191,36,0.6), rgba(168,85,247,0.5), rgba(251,191,36,0.6))",
                  animation: "spinSlow 6s linear infinite",
                  filter: "blur(6px)",
                }}
              />
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl" />
              <motion.img
                src={img}
                alt="profile"
                whileHover={{ rotateY: 18, rotateX: -10, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="h-10 w-10 rounded-full border border-white/20 relative z-10 object-cover"
              />
            </motion.div>
            <div className="leading-tight">
              <p
                className="text-sm font-semibold tracking-wide text-white/90"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Shazna Shafi
              </p>
              <p className="text-[9px] text-amber-400/50 tracking-[0.25em] uppercase">
                Creative Developer
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
<ul className="hidden md:flex items-center justify-center gap-10">           
   {navLinks.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                onClick={() => item.action()}
                className="cursor-pointer group relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className={`text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 font-light ${
  activeSection === item.id
    ? "text-amber-300"
    : "text-gray-400 group-hover:text-amber-300"
}`}>
  {item.name}
</span>

<span className={`absolute -bottom-0.5 left-0 h-[1px] bg-amber-400/60 transition-all duration-300 ${
  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
}`} />
 </motion.li>
            ))}
          </ul>

          {/* Resume Button — Desktop */}
<div className="hidden md:flex justify-end md:-mr-36">
  <motion.a
    href="/SHAZNA_SHAFI_Resume.pdf"
download="SHAZNA_SHAFI_Resume.pdf"
    whileHover={{ y: -3, scale: 1.04, boxShadow: "0 12px 28px rgba(251,191,36,0.25)" }}
    whileTap={{ y: 0, scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.18em] text-amber-200/80 hover:border-amber-400/40 hover:text-amber-200 backdrop-blur-xl transition-all duration-300"
  >
    <FaDownload className="text-[10px]" />
    Resume
  </motion.a>
</div>          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 text-white/70"
          >
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/[0.05]"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((item, i) => (
               <motion.li
  key={item.name}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  whileTap={{ scale: 0.96 }}
  transition={{ delay: i * 0.07 }}
  onClick={() => { item.action(); setMenuOpen(false) }}
  className={`cursor-pointer px-10 py-4 text-[11px] uppercase tracking-[0.2em] transition-all border-l-2 ${
    activeSection === item.id
      ? "text-amber-300 border-amber-400/60 bg-white/[0.03]"
      : "text-gray-400 hover:text-amber-300 hover:bg-white/[0.03] border-transparent hover:border-amber-400/40"
  }`}
>
  {item.name}
</motion.li>
              ))}

              {/* FIX 3: restored missing <a tag */}
              <li className="px-10 py-4">
                
                 <a 
                href="/SHAZNA_SHAFI_Resume.pdf"
download="SHAZNA_SHAFI_Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-amber-300/70 hover:text-amber-300 active:scale-95 transition-transform"
                >
                  <FaDownload className="text-[10px]" /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.header>

      {/* HERO */}
      <section
        ref={heroRef}
        className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", perspective: "1400px" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-purple-950/20" />
        <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Soft Glow Blobs */}
        <motion.div
          style={{ y: y1 }}
          animate={{ rotate: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none"
        >
          <div className="w-full h-full bg-amber-500/10 rounded-full blur-[120px]" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          animate={{ rotate: [0, -12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] pointer-events-none"
        >
          <div className="w-full h-full bg-purple-600/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* 3D enhancement: floating shards for ambient depth */}
        <div className="hidden sm:block absolute top-[22%] left-[12%] w-10 h-10 rounded-md bg-gradient-to-br from-amber-400/20 to-transparent border border-amber-400/20 pointer-events-none" style={{ animation: "floatShard1 7s ease-in-out infinite" }} />
        <div className="hidden sm:block absolute top-[34%] right-[16%] w-7 h-7 rounded-md bg-gradient-to-br from-purple-400/20 to-transparent border border-purple-400/20 pointer-events-none" style={{ animation: "floatShard2 9s ease-in-out infinite" }} />
        <div className="hidden sm:block absolute bottom-[30%] left-[20%] w-5 h-5 rounded-sm bg-gradient-to-br from-rose-400/20 to-transparent border border-rose-400/20 pointer-events-none" style={{ animation: "floatShard3 8s ease-in-out infinite" }} />

        {/* 3D enhancement: signature perspective floor grid */}
        <div className="absolute bottom-0 left-0 w-full h-[38%] overflow-hidden pointer-events-none [mask-image:linear-gradient(to_top,black,transparent)]">
          <div
            className="absolute inset-0 origin-bottom"
            style={{
              transform: "perspective(600px) rotateX(78deg) scale(2.2)",
              backgroundImage:
                "linear-gradient(to right, rgba(251,191,36,0.16) 1px, transparent 1px), linear-gradient(to top, rgba(251,191,36,0.16) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              animation: "gridMove 6s linear infinite",
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity, scale, rotateX: heroTiltX, rotateY: heroTiltY }}
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-28 pb-24"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.45em] text-amber-400/60 mb-8 font-light"
          >
            Portfolio · 2025
          </motion.p>

          {/* Name */}
        <ScatteredName name="Shazna Shafi" />

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-8"
          />

          {/* Tagline */}
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed font-light mb-12"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  I design and build <span className="text-amber-300/90">modern web experiences</span> that feel smooth, fast, and meaningful.  
  Passionate about crafting intuitive interfaces, solving real-world problems, and turning ideas into interactive products.  
  Currently exploring full-stack development and creating projects that blend creativity with performance.
</motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            style={{ perspective: 800 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3, rotateX: 6 }}
              whileTap={{ scale: 0.97, y: 1, rotateX: 0 }}
              onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-3.5 bg-gradient-to-r from-amber-400/90 via-rose-400/80 to-purple-500/80 text-white text-[11px] uppercase tracking-[0.2em] rounded-full font-medium shadow-[0_6px_0_0_rgba(120,53,15,0.35),0_0_30px_rgba(251,191,36,0.25)] hover:shadow-[0_3px_0_0_rgba(120,53,15,0.35),0_0_50px_rgba(251,191,36,0.4)] transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Explore Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3, rotateX: 6 }}
              whileTap={{ scale: 0.97, y: 1, rotateX: 0 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-3.5 border border-white/10 text-white/70 text-[11px] uppercase tracking-[0.2em] rounded-full hover:border-white/25 hover:text-white/90 transition-all duration-300 backdrop-blur-xl shadow-[0_5px_0_0_rgba(255,255,255,0.04)] hover:shadow-[0_2px_0_0_rgba(255,255,255,0.04)]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-gray-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-amber-400/40 to-transparent"
          />
        </motion.div>

        {/* Social Rail — Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="hidden md:flex flex-col items-center gap-6 absolute right-10 top-1/2 -translate-y-1/2 z-50"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/10" />
          {[
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shazna-shafi-44758736a/" },
            { Icon: IoLogoGithub, href: "https://github.com/shaznashafi12" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, y: -2, rotateY: 20 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Icon className="h-4 w-4 text-white/30 hover:text-amber-300 transition-colors duration-300" />
            </motion.a>
          ))}
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent" />
        </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8 }}
  className="md:hidden fixed bottom-6 inset-x-0 flex justify-center z-[999]"
>
  <div className="flex items-center gap-8 px-8 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
    {[
      { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shazna-shafi-44758736a/" },
      { Icon: IoLogoGithub, href: "https://github.com/shaznashafi12" },
    ].map(({ Icon, href }, i) => (
      <motion.a
        key={i}
        whileTap={{ scale: 0.85 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="h-5 w-5 text-white/60 active:text-amber-300 transition-colors" />
      </motion.a>
    ))}
  </div>
</motion.div>
      </section>
    </div>
  )
}

export default Home
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import img3 from "../images/frag2.png"
import img4 from "../images/weather.png"
import img5 from "../images/movie.png"
import img6 from "../images/moonly.png"

import { FiExternalLink, FiGithub, FiArrowUpRight, FiArrowRight } from "react-icons/fi"

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      img: img6,
      title: "Moonly",
      category: "Healthcare",
      desc: "A modern women's health platform offering period tracking, pregnancy insights, wellness resources, and personalized health management with a clean and intuitive interface.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/moonly",
      link: "https://moonly-fq4wec3tc-shazna-shafis-projects.vercel.app/",
      accent: "#ec4899",
    },
    {
      img: img3,
      title: "Fragrancia",
      category: "E-Commerce",
      desc: "A luxurious perfume discovery platform with elegant UI and smart filtering by brand, notes, and mood. Built for a premium, immersive shopping experience.",
      tech: ["React", "Tailwind", "API"],
      github: "https://github.com/shaznashafi12/project", 
      link: "https://shaznashafi12.github.io/project/",
      accent: "#c084fc",
    },
    {
      img: img4,
      title: "Weather Pro",
      category: "Utility",
      desc: "Real-time weather app with accurate forecasts, temperature tracking, humidity levels, and seamless location-based updates. Clean and minimal by design.",
      tech: ["React", "Weather API", "Geolocation"],
      github: "https://github.com/shaznashafi12/weather",       
      link: "https://weather-8k9i.vercel.app/",
      accent: "#67e8f9",
    },
    {
      img: img5,
      title: "CineHub",
      category: "Entertainment",
      desc: "Discover trending movies with detailed ratings, cast info, and rich summaries at a glance. Smart search and fluid UI make every browse effortless.",
      tech: ["React", "TMDB API", "CSS Modules"],
      github: "https://github.com/shaznashafi12/movie",     
      link: "https://movie-iota-azure.vercel.app/",
      accent: "#fbbf24",
    },
  ]

const categories = [
  "All",
  "E-Commerce",
  "Utility",
  "Entertainment",
  "Healthcare",
];
  const filtered = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <div
      id="project"
      className="min-h-screen bg-cover bg-center pt-32 pb-24 px-6 sm:px-12 relative overflow-hidden"
style={{ background: "#080808" }}
    >
<div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

               {/* Header */}
               <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="text-center mb-20"
               >
                 <motion.div
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3, duration: 1 }}
                   className="w-24  h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
                 />
         
          <motion.h2
                       className="text-4xl sm:text-5xl font-bold mb-4"
                       style={{ fontFamily: "'Playfair Display', serif" }}
                     >
                       <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-purple-300 bg-clip-text text-transparent">
                   Projects 
                      </span>
                     </motion.h2>
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed"
  style={{ fontFamily: "'Crimson Pro', serif" }}
>
  Full-stack projects built with the MERN stack, focused on 
            <br className="hidden sm:block" />
performance, scalability, and clean architecture.
          </motion.p>
           <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
              style={{ fontFamily: "'Crimson Pro', serif" }}

  className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed"
          />
        </motion.div>

        {/* ── Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border
                ${activeFilter === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-gray-400 border-white/15 hover:border-white/40 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Scroll Hint ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6 text-gray-400"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Scroll to explore more projects
          </span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center"
          >
            <FiArrowRight className="text-sm" style={{ color: "#fbbf24" }} />
          </motion.span>
        </motion.div>

        {/* ── Projects Grid ── */}
<motion.div
  layout
className="flex gap-6 overflow-x-auto pb-6 snap-x snap-proximity scrollbar-hide [-webkit-overflow-scrolling:touch]">
            <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
className="group relative flex-shrink-0 w-[85vw] sm:w-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-white/25 transition-all duration-500 cursor-pointer snap-center"
              >
                {/* ── Image ── */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full  h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
                    style={{ background: project.accent }}
                  />

                  {/* Hover overlay — triggered by group (whole card) */}
                  <div className="absolute inset-0 bg-black/55 flex items-center  justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                     <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-200"
                    >
                      <FiExternalLink className="text-white text-sm" />
                    </a>
                    
                      <a 
                     href={project.github}
                      onClick={e => e.stopPropagation()}
                      className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-200"
                    >
                      <FiGithub className="text-white text-sm" />
                    </a>
                  </div>
                </div>
<div className="absolute top-20 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
<div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                {/* ── Card Content ── */}
<div className="flex flex-col flex-1 px-6 pt-5 pb-10 gap-4">
                  {/* Title + Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <h2
                      className="text-lg font-medium text-white leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h2>
                    <span
                      className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border shrink-0 mt-0.5"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}40`,
                        background: `${project.accent}12`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-gray-400 text-sm leading-relaxed"
                    style={{ fontFamily: "'Crimson Pro', serif" }}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                  >
                    {project.desc}
                  </motion.p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-[11px] text-gray-400 border border-white/10 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ── View Project Button — centered ── */}
                  <div className="flex justify-center pt-1">
                    
                     <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-2 px-7 py-2.5 rounded-full border text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}50`,
                        background: `${project.accent}0f`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${project.accent}22`
                        e.currentTarget.style.borderColor = `${project.accent}90`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${project.accent}0f`
                        e.currentTarget.style.borderColor = `${project.accent}50`
                      }}
                    >
                      <span>View Project</span>
                      <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 flex flex-col items-center text-center gap-6"
        >
          <div className="w-px h-12 bg-white/20" />
          <h3
            className="text-3xl sm:text-4xl font-light text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a project in mind?
          </h3>
          <p
            className="text-gray-400 text-base max-w-md"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Let's build something together — clean code, thoughtful design.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-3.5 rounded-full border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in touch
          </motion.button>
        </motion.div>

      </div>
    </div>
  )
}

export default Project
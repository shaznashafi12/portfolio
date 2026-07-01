import React, { useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaDownload
} from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si"

const About = () => {
const [activeSkill, setActiveSkill] = useState(null)
  const [flippedCard, setFlippedCard] = useState(false)

  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={28} />, color: "from-amber-400 to-amber-600", level: 95 },
    { name: "CSS3", icon: <FaCss3Alt size={28} />, color: "from-rose-400 to-rose-600", level: 90 },
    { name: "JavaScript", icon: <FaJs size={28} />, color: "from-purple-400 to-purple-600", level: 88 },
    { name: "React", icon: <FaReact size={28} />, color: "from-teal-400 to-teal-600", level: 85 },
    { name: "Tailwind", icon: <SiTailwindcss size={28} />, color: "from-amber-300 to-amber-500", level: 92 },
    { name: "Bootstrap", icon: <FaBootstrap size={28} />, color: "from-rose-300 to-rose-500", level: 80 },
    { name: "Node.js", icon: <FaNodeJs size={28} />, color: "from-purple-300 to-purple-500", level: 75 },
    { name: "Express", icon: <SiExpress size={28} />, color: "from-gray-400 to-gray-600", level: 72 },
    { name: "MongoDB", icon: <SiMongodb size={28} />, color: "from-teal-300 to-teal-500", level: 78 },
    { name: "GitHub", icon: <FaGithub size={28} />, color: "from-gray-300 to-gray-500", level: 88 },
  ]


const experiences = [
  {
    year: "Apr 2026 – Present",
    title: "MERN Stack Intern – 4 HAND STUDIO",
    desc: "Currently interning as a MERN Stack Developer, building web features using MongoDB, Express.js, React.js, and Node.js, and connecting frontend with backend APIs."
  },
  {
    year: "Jun 2025 - Mar 2026",
    title: "MERN Stack Course – Softronics",
    desc: "Completed a hands-on MERN stack training course covering MongoDB, Express.js, React.js, and Node.js fundamentals."
  },
  {
    year: "2022 – 2025",
    title: "BSc Computer Science",
    desc: "Pilathara Cooperative Arts and Science College, Kannur University."
  },
  {
    year: "2020 – 2022",
    title: "Higher Secondary Education",
    desc: "GHSS Cheruthazham, Kannur."
  }
]
  // Magnetic button effect
  const MagneticButton = ({ children, onClick }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const springX = useSpring(x, { stiffness: 300, damping: 20 })
    const springY = useSpring(y, { stiffness: 300, damping: 20 })

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * 0.3)
      y.set((e.clientY - centerY) * 0.3)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <motion.button
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-8 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase rounded-full overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.3)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500" />
        <span className="relative z-10 text-white flex items-center gap-3">
          {children}
        </span>
      </motion.button>
    )
  }

  return (
    <div id="about" className="min-h-screen bg-cover bg-center py-32 px-5 sm:px-10 relative overflow-hidden"
style={{ background: "#080808" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-transparent to-rose-950/20 pointer-events-none" />
<div className="absolute inset-0 bg-black/60 pointer-events-none" />
      {/* Animated Background Elements */}
      <motion.div
className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-500/15 to-transparent rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-rose-500/15 to-transparent rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-10">
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
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
          />
          
<h1 
  className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
  style={{ fontFamily: "'Playfair Display', serif" }}
>            <span className="bg-gradient-to-r from-white via-amber-100 to-rose-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed"
  style={{ fontFamily: "'Crimson Pro', serif" }}
>
              Discover my journey, skills, and passion for creating
            <br className="hidden sm:block" />
            exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* 3D Flip Card - About Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-24 perspective-1000"
        >
          <motion.div
            className="relative h-[850px] sm:h-[500px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flippedCard ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            onClick={() => setFlippedCard(!flippedCard)}
          >
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden overflow-hidden">
              <div className="h-full backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl shadow-2xl p-10 sm:p-14 cursor-pointer group hover:border-amber-400/40 transition-all duration-500">
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        Who I Am
                      </h2>
                     
                    </div>


<div className="space-y-6 text-gray-200 text-sm sm:text-base leading-relaxed"
style={{ fontFamily: "'Playfair Display', 'Inter', serif" }}
>  <p>    I'm a <span className="text-amber-300 font-semibold">MERN Full Stack Developer</span> with 
    a strong passion for crafting seamless digital experiences from front to back. I specialize 
    in building dynamic, responsive web applications using{" "}
    <span className="text-rose-300">MongoDB, Express.js, React, and Node.js</span>, turning 
    complex ideas into clean and functional products that users genuinely enjoy interacting with.
  </p>

  <p>
    My approach to development is rooted in writing clear, maintainable code while keeping both 
    performance and visual quality at the forefront. I pay close attention to UI details — 
    ensuring every interface feels smooth, intuitive, and polished across all devices and screen 
    sizes. Beyond the frontend, I'm equally comfortable designing REST APIs, managing databases, 
    and handling server-side logic to build complete, production-ready applications. I'm constantly 
    pushing myself to learn new tools and technologies, growing through real-world projects that 
    challenge me to think deeper and build better.
  </p>

</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link to="/contact" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-purple-500/20 border border-amber-400/40 rounded-2xl text-amber-200 font-semibold tracking-wider uppercase text-sm backdrop-blur-xl hover:border-amber-400/60 transition-all shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_50px_rgba(251,191,36,0.4)]"
                      >
                        Let's Connect
                      </motion.button>
                    </Link>
                    
                    <motion.a
                     href="/SHAZNA_SHAFI_Resume.pdf"
                     download="SHAZNA_SHAFI_Resume.pdf"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-8 py-4 bg-white/5 border border-white/20 rounded-2xl text-gray-300 font-semibold tracking-wider uppercase text-sm backdrop-blur-xl hover:border-white/40 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <FaDownload className="text-sm" />
                      Resume
                    </motion.a>
                  </div>

<p className="text-gray-300 text-base mb-8 mt-2 max-w-xl mx-auto leading-relaxed">        
              Click card to see my journey timeline →
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Back Side - Timeline (simplified) */}
            <div className="absolute inset-0 backface-hidden" style={{ transform: "rotateY(180deg)" }}>
<div className="h-full backdrop-blur-2xl bg-gradient-to-br from-purple-900/20 via-rose-900/10 to-transparent border border-purple-400/20 rounded-3xl shadow-2xl p-10 sm:p-14 cursor-pointer overflow-y-auto hide-scrollbar">

                <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-12 text-center"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  My Journey
                </h2>

                <div className="relative max-w-xl mx-auto">
                  {/* simple vertical line */}
                  <div className="absolute left-[4px] top-1 bottom-1 w-px bg-white/15" />

                  <div className="space-y-9">
                    {experiences.map((exp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        className="relative pl-7"
                      >
                        <span className="absolute left-0 top-1.5 w-[9px] h-[9px] rounded-full bg-amber-300" />
                        <p className="text-[11px] uppercase tracking-[0.2em] text-amber-300/70 mb-1.5">
                          {exp.year}
                        </p>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {exp.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-10">
                  ← Click to go back
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack with Interactive Meters */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto backdrop-blur-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl shadow-2xl p-10 sm:p-16"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-purple-300 bg-clip-text text-transparent">
               Tech stack
              </span>
            </motion.h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase">
              Hover to see proficiency levels
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
<motion.div
  key={skill.name}
  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
  whileHover={{ y: -12, scale: 1.1 }}
  whileTap={{ y: -12, scale: 1.05 }}
  onHoverStart={() => setActiveSkill(i)}
  onHoverEnd={() => setActiveSkill(null)}
  onClick={() =>
    setActiveSkill(activeSkill === i ? null : i)
  }
  className="relative group cursor-pointer"
>                {/* Skill Card */}
                <div className={`
                  relative overflow-hidden
                  bg-gradient-to-br ${skill.color} p-[2px] rounded-2xl
                  shadow-lg group-hover:shadow-2xl
                  transition-all duration-500
                `}>
                  <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col items-center justify-center gap-3">
                    

<motion.div
animate={{ rotate: activeSkill === i ? 360 : 0 }}
  transition={{ duration: 0.6 }}
  className="flex items-center justify-center text-white"
>
  {skill.icon}
</motion.div>
                    <p className="text-white text-sm font-semibold tracking-wide text-center">
                      {skill.name}
                    </p>

                    {/* Proficiency Level */}
                    <motion.div
                      className="w-full"
                      initial={{ opacity: 0, height: 0 }}
                   animate={{
  opacity: activeSkill === i ? 1 : 0,
  height: activeSkill === i ? "auto" : 0,
}}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-2">
                        <span className={`text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
animate={{
  width: activeSkill === i ? `${skill.level}%` : 0
}}                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}>
              I'm currently <span className="text-amber-300 font-semibold">open to exciting opportunities</span> where 
              I can contribute, learn, and grow. Let's build something amazing together!
            </p>

            <MagneticButton onClick={() => window.location.href = "/#contact"}
              >
              <span className="text-sm">Start a Conversation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default About
import { useMemo } from "react"
import { motion } from "framer-motion"   // ❗ IMPORTANT
                                             
const ScatteredName = ({ name }) => {
  const letters = name.split("")

  const positions = useMemo(() => {
    const vw = typeof window !== "undefined" ? window.innerWidth  : 1200
    const vh = typeof window !== "undefined" ? window.innerHeight : 800
    return letters.map(() => ({
      x:      (Math.random() - 0.5) * vw  * 0.85,
      y:      (Math.random() - 0.5) * vh  * 0.75,
      rotate: (Math.random() - 0.5) * 600,
      scale:  Math.random() * 0.6 + 0.2,
    }))
  }, [])

  return (
    <h1
      aria-label={name}
      className="flex flex-wrap justify-center text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{
            x: positions[i].x,
            y: positions[i].y,
            rotate: positions[i].rotate,
            scale: positions[i].scale,
            opacity: 0,
          }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
          transition={{
            delay: 0.4 + i * 0.055,
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{
            background: "linear-gradient(135deg, #fde68a, #fda4af, #c4b5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  )
}

export default ScatteredName   // ❗ IMPORTANT
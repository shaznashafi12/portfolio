import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * GlassCard
 *
 * Props:
 *   children        — content
 *   className       — extra Tailwind classes
 *   glowColor       — 'amber' | 'violet' | 'rose' | 'none'  (default: 'amber')
 *   delay           — Framer Motion entrance delay (default: 0)
 *   floating        — add continuous float animation (default: false)
 *   onClick         — click handler
 *   data-cursor     — forwarded for cursor hook
 */
export default function GlassCard({
  children,
  className = '',
  glowColor = 'amber',
  delay     = 0,
  floating  = false,
  onClick,
  ...rest
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const glowMap = {
    amber:  'hover:border-amber-400/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.12),0_20px_60px_rgba(0,0,0,0.5)]',
    violet: 'hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.12),0_20px_60px_rgba(0,0,0,0.5)]',
    rose:   'hover:border-rose-500/30   hover:shadow-[0_0_40px_rgba(244,63,94,0.12),0_20px_60px_rgba(0,0,0,0.5)]',
    none:   '',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={floating ? {} : { y: -6 }}
      onClick={onClick}
      className={`
        glass glass-reflect rounded-3xl
        border border-white/8
        transition-all duration-500
        ${glowMap[glowColor] || glowMap.amber}
        ${onClick ? 'cursor-pointer' : ''}
        ${floating ? (glowColor === 'amber' ? 'animate-float' : glowColor === 'violet' ? 'animate-float-slow' : 'blob-3') : ''}
        ${className}
      `}
      {...rest}
    >
      {/* Top-edge reflection */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent rounded-full pointer-events-none" />

      {children}
    </motion.div>
  )
}

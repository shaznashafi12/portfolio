import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

/* Sample project data — replace with real data or API */
export const PROJECTS = [
  {
    id:          1,
    title:       'Lumina Store',
    tagline:     'Full-stack e-commerce with real-time inventory',
    description: 'A premium MERN e-commerce platform with Stripe payments, JWT auth, and an admin dashboard. Features product filtering, wishlists, and live order tracking.',
    tags:        ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    accent:      'amber',
    gradient:    'from-amber-500/15 via-orange-600/8 to-transparent',
    border:      'rgba(245,158,11,0.25)',
    glow:        'rgba(245,158,11,0.10)',
    icon:        '✦',
  },
  {
    id:          2,
    title:       'Nexus Chat',
    tagline:     'Real-time messaging with AI integrations',
    description: 'WebSocket-powered chat application with channels, DMs, file sharing, and an integrated AI assistant. Built with Socket.io and Express.',
    tags:        ['React', 'Socket.io', 'Express', 'OpenAI', 'Tailwind'],
    accent:      'violet',
    gradient:    'from-violet-600/15 via-purple-700/8 to-transparent',
    border:      'rgba(139,92,246,0.25)',
    glow:        'rgba(139,92,246,0.10)',
    icon:        '◈',
  },
  {
    id:          3,
    title:       'Aura Analytics',
    tagline:     'Data visualization dashboard for SaaS metrics',
    description: 'Interactive analytics platform with real-time charts, cohort analysis, and automated reporting. Handles 100k+ data points with optimized aggregation pipelines.',
    tags:        ['React', 'D3.js', 'MongoDB', 'Chart.js', 'Node.js'],
    accent:      'rose',
    gradient:    'from-rose-500/15 via-pink-600/8 to-transparent',
    border:      'rgba(244,63,94,0.25)',
    glow:        'rgba(244,63,94,0.10)',
    icon:        '◉',
  },
]

/* ─── Single Card ──────────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-60px' })
  const navigate = useNavigate()

  const glowColorMap = {
    amber:  '245,158,11',
    violet: '139,92,246',
    rose:   '244,63,94',
  }
  const rgb = glowColorMap[project.accent]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => navigate('/projects')}
      className="group relative glass glass-reflect rounded-3xl overflow-hidden cursor-pointer
                 border border-white/8 transition-all duration-500"
      style={{
        '--card-border': project.border,
        '--card-glow':   project.glow,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.border
        e.currentTarget.style.boxShadow   = `0 0 50px ${project.glow}, 0 20px 60px rgba(0,0,0,0.5)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.boxShadow   = ''
      }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />

      {/* Top reflection */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl
                       font-display border border-white/10 transition-colors duration-300"
            style={{ background: `rgba(${rgb},0.12)` }}
          >
            {project.icon}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-parchment/40 text-sm font-body group-hover:text-parchment/70 transition-colors"
          >
            View →
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-2xl text-parchment mb-1 leading-tight">
          {project.title}
        </h3>
        <p
          className="font-body text-xs tracking-widest uppercase mb-4"
          style={{ color: `rgba(${rgb},0.8)` }}
        >
          {project.tagline}
        </p>

        <p className="font-body text-sm text-parchment/50 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-body tracking-wider border
                         transition-colors duration-300"
              style={{
                background:   `rgba(${rgb},0.08)`,
                borderColor:  `rgba(${rgb},0.20)`,
                color:        `rgba(${rgb},0.9)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb},0.6), transparent)` }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

/* ─── Projects Preview Section ─────────────────────── */
export default function ProjectPreview() {
  const navigate = useNavigate()
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Section background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[400px] rounded-full bg-violet-600/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-label mb-3"
            >
              Selected work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display font-semibold text-5xl md:text-6xl text-parchment leading-tight"
            >
              Projects
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/projects')}
            className="btn-glass text-parchment/70 font-body text-xs tracking-[0.25em] self-start md:self-auto"
          >
            View All Projects →
          </motion.button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

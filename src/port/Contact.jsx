import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import emailjs from '@emailjs/browser'

/* ─── Floating Label Input ─────────────────────────────────────────────── */
const FloatingField = ({ label, id, value, onChange, onFocus, onBlur, focused, type = 'text', textarea = false }) => {
  const lifted = focused === id || value.length > 0
  const Tag = textarea ? motion.textarea : motion.input

  return (
    <div className="relative">
      <Tag
        id={id}
        type={!textarea ? type : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(id)}
        onBlur={() => onBlur()}
        rows={textarea ? 4 : undefined}
        required
        whileFocus={{ scale: 1.005 }}
        className={`
          w-full pt-6 pb-2 px-4 bg-white/[0.06] border border-white/15
          rounded-xl text-sm text-gray-100 focus:outline-none focus:border-amber-400/70
          transition-colors duration-300 backdrop-blur-md
          ${textarea ? 'resize-none min-h-[110px]' : ''}
        `}
      />
      <motion.label
        htmlFor={id}
        animate={{
          y: lifted ? -10 : 0,
          scale: lifted ? 0.78 : 1,
          color: focused === id ? '#fbbf24' : '#9ca3af',
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-4 text-sm font-medium pointer-events-none origin-left"
      >
        {label}
      </motion.label>
      {/* underline accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: focused === id ? '100%' : 0 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  )
}

/* ─── Contact Card ──────────────────────────────────────────────────────── */
const ContactCard = ({ info }) => (
  <div className="flex items-center gap-4 p-4 backdrop-blur-md bg-white/[0.06] border border-white/15 rounded-2xl hover:border-amber-400/40 transition-all duration-400 group">
    <div className={`w-10 h-10 shrink-0 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white text-base shadow-md`}>
      {info.icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{info.title}</p>
      <p className="text-sm text-gray-200 font-medium truncate">{info.content}</p>
    </div>
  </div>
)

/* ─── Main Component ────────────────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
useEffect(() => {
    emailjs.init('LO5oUqGZp0NAEaCO9')  // paste your public key here
  }, [])
  const bX = useMotionValue(0)
  const bY = useMotionValue(0)
  const bSX = useSpring(bX, { stiffness: 300, damping: 20 })
  const bSY = useSpring(bY, { stiffness: 300, damping: 20 })

  const handleMagneticMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    bX.set((e.clientX - r.left - r.width / 2) * 0.3)
    bY.set((e.clientY - r.top - r.height / 2) * 0.3)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      await emailjs.send(
        'service_7p2dp1h',       // 🔁 replace with your EmailJS Service ID
        'template_pwr1axu',      // 🔁 replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'LO5oUqGZp0NAEaCO9'        // 🔁 replace with your EmailJS Public Key
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)

    } catch (err) {
      console.error('EmailJS error:', err)
      setError(true)
      setTimeout(() => setError(false), 3000)
    } finally {
      setSending(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "shaznashafi21@gmail.com",
      link: "mailto:shaznashafi21@gmail.com",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Payyanur, Kerala, IN",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://www.linkedin.com/in/shazna-shafi-44758736a/",
      color: "from-blue-400 to-cyan-500"
    }
  ]

  const socials = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shazna-shafi-44758736a/", color: "from-blue-400 to-cyan-500" },
    { Icon: IoLogoGithub, href: "https://github.com/shaznashafi12", color: "from-gray-300 to-gray-500" },
  ]

  return (
    <div
      id="contact"
      className="min-h-screen bg-cover bg-center py-24 px-4 sm:px-8 relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      <div className="absolute inset-0 blur-[300px] bg-gradient-to-br from-rose-950/20 via-transparent to-amber-950/20 pointer-events-none" />
      {/* Soft glow blobs */}
      <div className="absolute top-16 right-8 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"/>
      <div className="absolute bottom-16 left-8 w-[480px] h-[480px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"/>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
          <h1
            className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-amber-100 to-rose-200 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Connect
          </h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Crimson Pro', serif" }}>
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
              >
                {info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <ContactCard info={info} />
                  </a>
                ) : (
                  <ContactCard info={info} />
                )}
              </motion.div>
            ))}

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-2 p-6 backdrop-blur-md bg-white/[0.05] border border-white/15 rounded-2xl"
            >
              <span className="text-3xl text-amber-400/30 leading-none block mb-2">"</span>
              <p className="text-gray-400 text-sm leading-relaxed italic"
                style={{ fontFamily: "'Crimson Pro', serif" }}>
                Great things are built through collaboration and communication. Let's create something amazing together.
              </p>
              <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent mt-4" />
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-white/[0.06] border border-white/15 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Success overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-emerald-600/90 backdrop-blur-xl flex flex-col items-center justify-center z-50 rounded-2xl gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-5xl"
                  >✓</motion.div>
                  <p className="text-white text-sm font-medium">Message sent! I'll reply soon.</p>
                </motion.div>
              )}

              {/* Error overlay */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-rose-600/90 backdrop-blur-xl flex flex-col items-center justify-center z-50 rounded-2xl gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-5xl"
                  >✕</motion.div>
                  <p className="text-white text-sm font-medium">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              <h2
                className="text-xl font-semibold mb-6 bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send a Message
              </h2>

              <div className="space-y-5">
                <FloatingField
                  label="Your Name"
                  id="name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  onFocus={setFocused}
                  onBlur={() => setFocused(null)}
                  focused={focused}
                />
                <FloatingField
                  label="Email Address"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  onFocus={setFocused}
                  onBlur={() => setFocused(null)}
                  focused={focused}
                />
                <FloatingField
                  label="Your Message"
                  id="message"
                  textarea
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  onFocus={setFocused}
                  onBlur={() => setFocused(null)}
                  focused={focused}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                style={{ x: bSX, y: bSY }}
                onMouseMove={handleMagneticMove}
                onMouseLeave={() => { bX.set(0); bY.set(0) }}
                whileHover={{ scale: sending ? 1 : 1.03 }}
                whileTap={{ scale: sending ? 1 : 0.97 }}
                className="mt-6 w-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 text-white text-sm font-semibold py-3 rounded-xl shadow-lg hover:shadow-amber-400/30 hover:shadow-xl transition-shadow duration-400 flex items-center justify-center gap-2 tracking-wide uppercase relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {sending ? 'Sending...' : 'Send Message'}
                </span>
                {!sending && (
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10 text-xs"
                  >
                    <FaPaperPlane />
                  </motion.span>
                )}
                {sending && (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="relative z-10 w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                )}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-rose-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ── Footer ── */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 -ml-16 w-[1280px] h-[350px] backdrop-blur-md bg-white/[0.05] h-[300px] border border-white/15 rounded-2xl py-10 px-6 sm:px-10"
        >
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            {/* Name + tagline */}
            <div>
              <h3
                className="text-xl font-bold mb-1.5 bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Shazna Shafi
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Crimson Pro', serif" }}>
                MERN Stack Web Developer passionate about
                building responsive and user-friendly web
                applications using MongoDB, Express, React,
                and Node.js. Focused on creating efficient,
                scalable, and modern digital experiences.
              </p>
            </div>

            {/* Socials */}
            <div className="sm:text-right">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex sm:justify-end gap-3">
                {socials.map(({ Icon, href, color }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white text-base shadow-md`}>
                      <Icon />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-full blur-lg opacity-0 group-hover:opacity-40 -z-10 transition-opacity duration-300`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[1000px] mt-32 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-8" />

          <p className="text-center text-xs text-gray-600 tracking-wider">
            © 2025 Shazna Shafi 
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

export default Contact
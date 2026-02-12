import React from "react";
import img2 from "../images/bacg.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

/* ================= Animation Variants ================= */

const letterContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const skillCard = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={24} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={24} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={24} className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={24} className="text-purple-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={24} className="text-sky-400" /> },
    { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-400" /> },
    { name: "Express", icon: <SiExpress size={24} className="text-white" /> },
    { name: "GitHub", icon: <FaGithub size={24} className="text-gray-300" /> },
  ];

  return (
    <div id="about">
      <div
        className="min-h-screen bg-cover bg-center py-20 px-5 sm:px-10"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* ================= ABOUT ME ================= */}

        <motion.h1
          variants={letterContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold text-gray-200 tracking-wide"
        >
          {"ABOUT ME".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto w-16 border-b-4 border-gray-400 mt-3"
        />

        <motion.h6
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-center mt-6 text-gray-300 leading-relaxed"
        >
          Learn more about who I am, what I do,
          <br className="hidden sm:block" />
          and the skills I bring into development.
        </motion.h6>

        {/* ================= ABOUT CARD ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12"
        >
          <motion.h2
            variants={letterContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-gray-200 mb-6"
          >
            {"Get to know me!".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">
            I'm a{" "}
            <span className="font-bold text-purple-300">
              Frontend-Focused Web Developer
            </span>{" "}
            passionate about building clean, responsive, and engaging user interfaces.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">
            I enjoy sharing my development journey. Connect with me on{" "}
            <a href="https://linkedin.com" className="font-bold text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>{" "}
            and{" "}
            <a href="https://instagram.com" className="font-bold text-pink-400 hover:text-pink-300">
              Instagram
            </a>.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            I'm open to exciting{" "}
            <span className="font-bold text-purple-300">job opportunities</span>.
          </p>

          <Link to="/contact">
            <button className="w-48 h-12 rounded-xl font-bold text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:opacity-90 transition shadow-lg">
              CONTACT
            </button>
          </Link>
        </motion.div>

        {/* ================= TECH STACK ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-200 mb-12">
            Tech Stack
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillCard}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex flex-col items-center justify-center
                  w-24 h-24 sm:w-32 sm:h-32
                  bg-white/5
                  rounded-2xl
                  border border-white/10
                  shadow-md
                  hover:border-purple-400/40
                  hover:shadow-purple-500/30
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="mb-2"
                >
                  {skill.icon}
                </motion.div>

                <p className="text-gray-200 text-sm sm:text-base font-medium tracking-wide">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

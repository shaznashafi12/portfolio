import React from "react";
import img2 from "../images/bacg.jpeg";
import img3 from "../images/frag2.png";
import img4 from "../images/weather.png";
import img5 from "../images/movie.png";
import { motion } from "framer-motion";

/* Animation Variants */

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
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Project = () => {
  return (
    <div id="project">
      <div
        className="min-h-screen bg-cover bg-center pt-[120px] pb-[80px] sm:pt-24 sm:pb-16 px-4 sm:px-10"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-sans text-gray-200 text-5xl sm:text-4xl font-extrabold text-center drop-shadow-md"
        >
          PROJECTS
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto w-10 pt-4 border-b-4 border-gray-400"
        />

        <motion.h6
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl sm:text-lg text-center mt-6 text-stone-300 leading-relaxed"
        >
          Here you will find some of the personal and client projects I've built.
          <br />
          Each project includes a case study with details and insights.
        </motion.h6>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-8 mt-20"
        >
          {[ 
            {
              img: img3,
              title: "Fragrancia",
              desc: `A sleek perfume discovery app with elegant UI.
Explore premium scents with smart filters.
Find fragrances by brand, notes, or mood.
Built for a smooth and luxurious experience.`,
              link: "https://shaznashafi12.github.io/project/",
            },
            {
              img: img4,
              title: "Weather App",
              desc: `Real-time climate updates in one click.
Check temperature, humidity & conditions easily.
Clean UI for smooth weather tracking.
Accuracy and speed built into every feature.`,
              link: "https://weather-8k9i.vercel.app/",
            },
            {
              img: img5,
              title: "Movie App",
              desc: `Explore trending movies instantly.
View ratings, summaries & cast details.
Smart search makes discovery effortless.
Smooth UI for a fun viewing experience.`,
              link: "https://movie-iota-azure.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-[380px] sm:w-full max-w-sm border border-white/30 transition duration-500 cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-[240px] w-[85%] object-cover mx-auto mt-6 rounded-xl"
              />

              <div className="p-6 text-center">
                <h2 className="text-2xl sm:text-xl font-bold text-white mb-3 tracking-wide">
                  {project.title}
                </h2>

                <p className="text-gray-200 text-sm leading-relaxed mb-5 whitespace-pre-line">
                  {project.desc}
                </p>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-36 h-12 sm:w-32 sm:h-10 rounded-lg font-bold font-serif bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 text-slate-300 shadow-lg hover:opacity-90 transition">
                    Case Study
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;

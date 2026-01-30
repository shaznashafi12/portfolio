import React from 'react'
import img2 from '../images/bacg.jpeg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id='about'>

      <div 
        className="min-h-screen bg-cover bg-center py-32 px-10"
        style={{ backgroundImage: `url(${img2})` }}
      >

        <h1 className="text-center text-5xl font-extrabold text-gray-200 drop-shadow-lg tracking-wide">
          ABOUT ME
        </h1>
        <div className="mx-auto w-16 pt-3 border-b-4 border-gray-400 shadow-md"></div>

        <h6 className="text-xl text-center mt-6 text-gray-300 tracking-wide leading-relaxed">
          Learn more about who I am, what I do, <br />
          and the skills I bring into the world of development.
        </h6>

        <div className="flex justify-between mt-20 px-10 backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl py-12 border border-white/20">

          <div className="w-1/2 pr-12">
            <h2 className="text-3xl font-bold text-gray-200 mb-8 tracking-wider">Get to know me!</h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I'm a <span className="font-bold text-purple-300">Frontend-Focused Web Developer</span> passionate about building clean, responsive, and engaging user interfaces.  
              I love crafting meaningful experiences that contribute to a product's success.  
              Explore my work in the <span className="font-bold text-purple-300">Projects</span> section.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I also enjoy sharing my web development journey online to help others grow.  
              Connect with me on 
              <a href="https://linkedin.com" className="font-bold text-blue-400 hover:text-blue-300"> LinkedIn </a>
              and 
              <a href="https://instagram.com" className="font-bold text-pink-400 hover:text-pink-300"> Instagram </a>
              where I post helpful tech content regularly.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm open to exciting <span className="font-bold text-purple-300">job opportunities</span> where I can grow and contribute.  
              If you think I’d be a great fit — feel free to reach out!
            </p>
<Link to="/contact">
  <button
    className="w-56 h-14 rounded-xl font-bold text-white 
    bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700
    hover:opacity-90 shadow-xl hover:shadow-slate-600/40 transition"
  >
    CONTACT
  </button>
</Link>

          </div>

          <div className="w-1/2 pl-12">
            <h2 className="text-3xl font-bold text-gray-200 mb-8 tracking-wider">My Skills</h2>

            <div className="flex flex-wrap gap-4">


  {[
    "HTML", "CSS", "JavaScript", "React",
    "Bootstrap", "Tailwind", "PHP", "GitHub"
  ].map((skill) => (
    <div
      key={skill}
      className="flex items-center justify-center px-6 py-4 
      bg-white/10 backdrop-blur-lg
      text-gray-100 font-semibold rounded-2xl
      border border-white/20 shadow-xl
      hover:bg-white/20 hover:border-purple-400/40 
      hover:shadow-purple-500/40 hover:scale-110
      transition-all duration-300"
    >
      {skill}
    </div>
  ))}

</div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About

import React from 'react'
import img2 from '../images/bacg.jpeg'
import img3 from '../images/frag2.png'
import img4 from '../images/weather.png'
import img5 from '../images/movie.png'

const Project = () => {
  return (
    <div id='project'>
      <div 
        className="min-h-screen bg-cover bg-center pt-[120px] pb-[80px] sm:pt-24 sm:pb-16 px-4 sm:px-10"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1 className="font-sans text-gray-200 text-5xl sm:text-4xl font-extrabold text-center drop-shadow-md">
          PROJECTS
        </h1>

        <div className="mx-auto w-10 pt-4 border-b-4 border-gray-400"></div>

        <h6 className="text-xl sm:text-lg text-center mt-6 text-stone-300 leading-relaxed">
          Here you will find some of the personal and client projects I've built.<br />
          Each project includes a case study with details and insights.
        </h6>

        {/* PROJECT CARDS */}
        <div className="flex justify-center flex-wrap gap-8 mt-20">
          
          {/* CARD 1 */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-[380px] sm:w-full max-w-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition duration-500 cursor-pointer border border-white/30">
            <img src={img3} alt='fragrancia' className="h-[240px] w-[80%] sm:w-[90%] object-cover mx-auto mt-6 rounded-xl" />
            <div className="p-6 text-center">
              <h2 className="text-2xl sm:text-xl font-bold text-white mb-3 tracking-wide">Fragrancia</h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-5">
                A sleek perfume discovery app with elegant UI.<br />
                Explore premium scents with smart filters.<br />
                Find fragrances by brand, notes, or mood.<br />
                Built for a smooth and luxurious experience.
              </p>
              <a href="https://shaznashafi12.github.io/project/" rel="noopener noreferrer">
                <button className="w-36 h-12 sm:w-32 sm:h-10 rounded-lg font-bold font-serif bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 text-slate-300 shadow-lg">
                  Case Study
                </button>
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-[380px] sm:w-full max-w-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition duration-500 cursor-pointer border border-white/30">
            <img src={img4} alt='weather' className="h-[240px] w-[80%] sm:w-[90%] object-cover mx-auto mt-6 rounded-xl" />
            <div className="p-6 text-center">
              <h2 className="text-2xl sm:text-xl font-bold text-white mb-3 tracking-wide">Weather App</h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-5">
                Real-time climate updates in one click.<br />
                Check temperature, humidity & conditions easily.<br />
                Clean UI for smooth weather tracking.<br />
                Accuracy and speed built into every feature.
              </p>
              <a href="https://weather-8k9i.vercel.app/" rel="noopener noreferrer">
                <button className="w-36 h-12 sm:w-32 sm:h-10 rounded-lg font-bold font-serif bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 text-slate-300 shadow-lg">
                  Case Study
                </button>
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-[380px] sm:w-full max-w-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition duration-500 cursor-pointer border border-white/30">
            <img src={img5} alt='movie' className="h-[240px] w-[80%] sm:w-[90%] object-cover mx-auto mt-6 rounded-xl" />
            <div className="p-6 text-center">
              <h2 className="text-2xl sm:text-xl font-bold text-white mb-3 tracking-wide">Movie App</h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-5">
                Explore trending movies instantly.<br />
                View ratings, summaries & cast details.<br />
                Smart search makes discovery effortless.<br />
                Smooth UI for a fun viewing experience.
              </p>
              <a href="https://movie-iota-azure.vercel.app/" rel="noopener noreferrer">
                <button className="w-36 h-12 sm:w-32 sm:h-10 rounded-lg font-bold bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 text-slate-300 font-serif shadow-lg">
                  Case Study
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project

import React from 'react'
import img from '../images/dp.jpg'
import img2 from '../images/bacg.jpeg'
import { Link } from 'react-router-dom';
import img3 from '../images/lapp1.png'

const Project = () => {
  return (
    <div id='project'> 
      {/* 
      <div className='flex items-center pt-8'>
        <img className='h-10 w-10 rounded-full ms-6' src={img} alt='Profile'/>
        <h2 className='flex pl-3 font-bold text-1xl'>SHAZNA SHAFI</h2>
        <ul className='flex pl-[900px] gap-12 font-bold text-1xl'>
          <Link to='/'><button>HOME</button></Link>
          <Link to='/about'><button>ABOUT</button></Link>
          <Link to='/project'><button>PROJECT</button></Link>
          <li>CONTACT</li>
        </ul>
      </div>
      */}

      <div className="h-[1000px] bg-cover bg-center pt-[100px]" style={{ backgroundImage: `url(${img2})` }}>
        <h1 className="font-sans text-gray-300 text-4xl font-bold  text-center">PROJECTS</h1>
        <div className="mx-auto w-8 pt-3 border-b-4 border-gray-500"></div>
        <h6 className="text-xl text-center mt-6 font-normal text-stone-400">
          Here you will find some of the personal and client projects that I created. 
          Each project<br></br> contains its own case study.
        </h6>
      

     <div className="flex justify-center mt-[100px]">
          <div className="bg-stone-200 rounded-2xl shadow-lg overflow-hidden w-[500px] transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            
            <img
              src={img3}
              alt="Fragranzia Project"
              className=" items-center ml-20 mt-10 h-[250px] w-[400px] object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                FRAGRANZIA
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Fragranzia is a modern fragrance website that showcases a curated collection
                of perfumes and scents. It blends elegant design with smooth functionality,
                allowing users to explore and discover the perfect scent for every mood.
              </p>
              <Link to="">
                <button className="w-36 h-12 rounded-lg font-bold bg-violet-500 text-white hover:bg-violet-600 transition-colors duration-300">
                  Case Study
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
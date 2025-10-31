import React from 'react'
import img from '../images/dp.jpg'
import img2 from '../images/gr1.jpg'
import { Link } from 'react-router-dom';
import img3 from '../images/frag.png'

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

      <div className="h-[1000px] bg-cover bg-center pt-[200px]" style={{ backgroundImage: `url(${img2})` }}>
        <h1 className="font-sans text-4xl font-bold text-center">PROJECTS</h1>
        <div className="mx-auto w-8 pt-3 border-b-4 border-purple-500"></div>
        <h6 className="text-xl text-black text-center mt-6 font-normal text-stone-500">
          Here you will find some of the personal and client projects that I created. 
          Each project<br></br> contains its own case study.
        </h6>
      

     <div className="flex items-center mt-[150px] ms-[200px]">
  <img className="h-[400px] w-[600px] rounded-lg object-cover" src={img3} alt="Project Visual"/>
   <div className="ml-[100px] max-w-[500px]">
    <h1 className="text-3xl font-bold text-black-800 mb-4">
      FRAGRANZIA
    </h1>
    <h2 className="text-gray-500  leading-relaxed">
      Fragranzia is a modern fragrance website that showcases a curated collection
      of perfumes and scents. It blends elegant design with smooth functionality,
      allowing users to explore different fragrances, learn their notes, and
      discover the perfect scent for every mood and occasion.
    </h2>
    <Link to="">
            <button className="w-56 h-14 mt-7 rounded-lg font-bold bg-violet-500 text-white hover:bg-violet-600">
              Case Study
            </button>
          </Link>
  </div>
</div>

    </div>
    </div>
  )
}

export default Project

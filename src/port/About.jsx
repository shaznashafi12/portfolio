import React from 'react'
import img from '../images/dp.jpg'
import img2 from '../images/bacg.jpeg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    
        <div id='about'>
              {/* <div className='flex items-center pt-8'>
                <img className='h-10 w-10 rounded-full ms-6'src={img} alt='Profile'/>
                <h2 className='flex pl-3 font-bold text-1xl'>SHAZNA SHAFI</h2>
                <ul className='flex pl-[900px] gap-12 font-bold text-1xl'>
               <Link to='/'><button>HOME</button></Link>
                  <li>ABOUT</li>
                  <li>PROJECT</li>
                  <li>CONTACT</li>
                </ul>
              </div> */}
              <div  className='flex '> 
              <div
  className="h-[900px] bg-cover bg-center pt-32" style={{ backgroundImage: `url(${img2})` }}
>
  <h1 className="font-sans text-4xl text-gray-300 font-bold text-center">ABOUT ME</h1>
  <div className="mx-auto w-8 pt-3 border-b-4 border-gray-500"></div>
  <h6 className="text-xl  text-center mt-6 font-normal text-stone-400">
    Here you will find more information about me, what I do,
    and my current skills <br />
    mostly in terms of programming and technology
  </h6>

  <div className="flex justify-between px-[150px] pt-[100px]">
    <div className="w-1/2">
      <h1 className="font-bold text-gray-300 text-3xl mb-7">Get to know me!</h1>
      <p className="text-stone-400 text-lg mb-4">
        I'm a <span className="font-bold">Frontend Focused Web Developer</span> building and managing the
        Front-end of Websites and Web Applications that lead to the success
        of the overall product. Check out some of my work in the
        <span className="font-bold"> Projects</span> section.
      </p>
      <p className="text-stone-400 text-lg mb-5">
        I also like sharing content related to the stuff that I have learned over the years
        in Web Development so it can help other people of the Dev Community. Feel free to 
        Connect or Follow me on my{" "}
        <u>
          <a href="https://in.linkedin.com/" className="font-bold text-blue-700 visited:text-blue-500">
            Linkedin
          </a>
        </u>{" "}
        and{" "}
        <u>
          <a href="https://in.linkedin.com/" className="font-bold text-blue-700 visited:text-blue-500">
            Instagram
          </a>
        </u>{" "}
        where I post useful content related to{" "}
        <span className="font-bold">Web Development</span> and Programming.
      </p>
      <p className="text-stone-400 text-lg mb-5">
        I'm open to <span className="font-bold">Job</span> opportunities where I can contribute, learn and grow.
        If you have a good opportunity that matches my skills and experience,
        then don't hesitate to contact me.
      </p>
      <Link to="">
        <button className="w-56 h-14 rounded-lg font-bold bg-violet-500 text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700">
          CONTACT
        </button>
      </Link>
    </div>

    <div className="w-1/2 pl-16">
      <h1 className="font-bold text-3xl mb-6 text-gray-300 ml-16 ">My Skills</h1>
      <button className='w-20 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-16'>HTML </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-4'>CSS </button>
          <button className='w-32 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-4'>Javascript </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-4'>React </button>
          <button className='w-32 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-16 mt-6'>Bootstrap </button>
          <button className='w-32 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-4 mt-6'>Tailwind </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-4 mt-6'>PHP </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-300 text-stone-600 ml-4 mt-6'>Github </button>

              </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default About
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const arrow = {
    marginTop : '-70px'
}

const Home = () => {
  return (
    <>
      <div
        id='home'
        className='md:h-screen md:w-4/5 mx-auto flex flex-col items-center md:flex-row md:justify-evenly'
      >
        <div className='left_content md:h-2/3 md:w-[600px] pt-12 mt-20 w-4/5 '>
          <p className='text-4xl md:text-6xl font-bold text-slate-100'>
            Hi There,
          </p>
          <p className='text-4xl md:text-6xl font-bold text-slate-100'>
            I'm Sanket Mane
          </p>
          <p className='text-xl md:text-2xl text-gray-400 font-semibold md:font-bold mt-5'>
            MERN Stack Developer | President - @ Revolution Software Development
            Club, VU | Placement Coordinator @ VU | Ex - Intern @ WESUPP | Java
            enthusiast | Web Dev | UI | Open source enthusiast | B. Tech (3rd
            yr) | VU'25 | JSCOE'22
          </p>
          <div className='flex items-center gap-2 mt-3'>
            <a
              href='https://www.github.com/sanket560'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='text-4xl text-white' />
            </a>
            <a
              href='https://www.linkedin.com/in/sanketmane23/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-4xl text-white' />
            </a>
          </div>
        </div>
        <div className='right_content flex items-center md:h-2/3 my-4'>
          <img
            className='md:w-[400px] w-[300px]'
            src='/Images/pofilepic.png'
            alt=''
            srcSet=''
          />
        </div>
      </div>
      <div className='hidden md:block' style={arrow}>
        <div className='flex justify-center items-center'>
          <a
            href='#education'
            className='bg-indigo-400 text-white w-10 h-10 text-center text-3xl rounded-3xl animate-bounce'
          >
            &darr;
          </a>
        </div>
      </div>
    </>
  );
}

export default Home
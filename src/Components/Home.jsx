import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github-mark-white.png'
import user from '../Images/home-image.png'
import { Button } from '@mui/material'
const arrow = {
  marginTop : '-70px'
}
function Home() {
  return (
    <>
      <div
        id='home'
        className='h-screen md:w-4/5 mx-auto flex flex-col items-center md:flex-row md:justify-evenly'
      >
        <div className='left_content md:h-2/3 md:w-[600px] pt-12 mt-10 w-4/5 '>
          <p className='text-4xl md:text-6xl font-bold text-slate-100'>
            Hi There,
          </p>
          <p className='text-4xl md:text-6xl font-bold text-slate-100'>
            I'm Sanket Mane
          </p>
          <p className='text-xl md:text-2xl text-gray-400 font-semibold md:font-bold mt-5'>
            Intern @ WESUPP | Member @ Revolution Software Club | Campus
            Ambassador @ Teachnook | Java enthusiast | Web Dev | UI | Open
            source enthusiast | B. Tech (3rd yr) | VU'25 | JSCOE'22
          </p>
          <a href='https://www.github.com/sanket560'>
            <img className='my-5 w-10 inline-block' src={github} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/sanketmane23/'>
            <img
              className='my-5 mx-3 w-10 inline-block'
              src={linkedin}
              alt=''
            />
          </a>
          <Button variant="contained" className=' w-32 h-10 rounded-lg text-white flex-shrink-0'>
           <a href="../sanket_mane___resume.pdf" download="sanket-mane-resume.pdf"> Resume <FontAwesomeIcon icon={faEnvelope} /></a>
          </Button>
        </div>
        <div className='right_content md:h-2/3 my-4'>
          <img className='md:w-[600px]' src={user} alt='' />
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
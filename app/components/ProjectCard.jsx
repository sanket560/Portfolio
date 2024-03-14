import Image from 'next/image'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const ProjectCard = ({img ,title, desc, sourceCodeLink, liveLink}) => {
  return (
    <div className='bg-slate-800 w-96 p-4 rounded-lg md:h-72'>
      <div className='group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer'>
        <Image
          className='rounded-lg object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125'
          src= {img}
          alt=''
        />
        <div className='absolute flex items-center justify-center text-white hover:bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80'>
          <div className='w-36 flex justify-around'>
            <div className='bg-white opacity-100 w-10 h-10 flex items-center justify-center rounded-lg'>
              <a
                href={sourceCodeLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='text-black text-4xl'/>
              </a>
            </div>
            <div className='bg-white w-10 h-10 flex items-center justify-center rounded-lg'>
              <a
                href={liveLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLink className='text-black text-3xl'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <p className='text-slate-50 text-xl mb-1'>{title}</p>
        <p className='text-gray-300'>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard
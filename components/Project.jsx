import React from 'react'
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <>
      <div id='project' className='h-14'></div>
      <div className='md:w-11/12 md:mt-5 md:h-screen mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white flex items-center'>
            Project
          </p>
          <p className='w-20 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-wrap gap-12 mt-10 items-center justify-center mx-4'>
          <ProjectCard
            img="/Images/Project/filmjunction.png"
            title='Film Junction'
            desc='Tech Stack : ReactJS, CSS, Redux, API'
            sourceCodeLink='https://github.com/sanket560/FilmJunction'
            liveLink='https://film-junction.vercel.app/'
          />
          <ProjectCard
            img="/Images/Project/echobazar.png"
            title='EchoBazar - E-Commerce'
            desc='Tech Stack : HTML, CSS, BootStrap, PHP'
            sourceCodeLink='https://github.com/sanket560/echobazar'
            liveLink='https://echobazar-ecommerce.000webhostapp.com/'
          />
          <ProjectCard
            img="/Images/Project/youtube-clone.png"
            title='Youtube Clone '
            desc='Tech Stack : Reactjs, Tailwindcss, RapidAPI'
            sourceCodeLink='https://github.com/sanket560/youtube-clone'
            liveLink='https://youtube-clone-reactvite.netlify.app/'
          />
        </div>
      </div>
    </>
  );
}

export default Project
import React from 'react'
import project1 from '../Images/Project/moviesreview.png'
import project2 from '../Images/Project/amazon.png'
import project6 from '../Images/Project/counter.png'
import project5 from '../Images/Project/netflix.png'
import project4 from '../Images/Project/pwskills.png'
import project3 from '../Images/Project/calculator.png'
import ProjectCard from './ProjectCard'


function Project() {
  return (
    <>
      <div id='project' className='h-14'></div>
      <div className='md:w-11/12 md:h-screen mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white flex items-center'>
            <img
              className='bg-slate-50 mx-3 rounded-lg p-1 w-10'
              src='https://img.icons8.com/fluency/48/project.png'
              alt=''
            />
            Project
          </p>
          <p className='w-20 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-wrap gap-12 mt-10 items-center justify-center mx-4'>
          <ProjectCard 
            img={project1}
            title="Movies Reviews App"
            desc="Tech Stack : ReactJS, NodeJS, TailwindCSS, MUI , Firebase"
            sourceCodeLink="https://github.com/sanket560/amazon-page-home-clone"
            liveLink="https://sanket560.github.io/amazon-page-home-clone/"
           />
           <ProjectCard 
            img={project2}
            title="Amazon Home Page Clone"
            desc="Tech Stack : ReactJS, NodeJS, TailwindCSS, MUI"
            sourceCodeLink="https://github.com/sanket560/amazon-page-home-clone"
            liveLink="https://sanket560.github.io/amazon-page-home-clone/"
           />
           <ProjectCard 
            img={project3}
            title="react calculator"
            desc="Tech Stack : ReactJS, NodeJS, TailwindCSS"
            sourceCodeLink="https://github.com/sanket560/react-calculator"
            liveLink="https://sanket560.github.io/react-calculator/"
           />
           <ProjectCard 
            img={project4}
            title="PW Skills Home Page clone"
            desc="Tech Stack : ReactJS, NodeJS, TailwindCSS"
            sourceCodeLink="https://github.com/sanket560/PWskills-clone"
            liveLink="https://pwskills-home-clone.netlify.app/"
           />
           <ProjectCard 
            img={project5}
            title="PW Skills Home Page clone"
            desc="Tech Stack : ReactJS, NodeJS, TailwindCSS"
            sourceCodeLink="https://github.com/sanket560/netlix-home-page-clone"
            liveLink="https://sanket560.github.io/netlix-home-page-clone/"
           />
        </div>
      </div>
    </>
  );
}

export default Project
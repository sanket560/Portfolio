import React from 'react'
import project1 from '../Images/Project/amazon.png'
import project2 from '../Images/Project/counter.png'
import project3 from '../Images/Project/imdb.png'
import project4 from '../Images/Project/netflix.png'
import project5 from '../Images/Project/pwskills.png'
import project6 from '../Images/Project/todo.png'

function Project() {
  return (
    <>
      <div id='project' className='h-14'></div>
      <div className='md:w-11/12 md:h-screen mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white flex items-center'>
              <img className='bg-slate-50 mx-3 rounded-lg p-1 w-10' src="https://img.icons8.com/fluency/48/project.png" alt="" />
            Project
          </p>
          <p className='w-20 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-wrap gap-12 mt-10 items-center justify-center mx-4'>
          <div className='relative w-[400px]'>
            <img className='h-[200px]' src={project1} alt='project1' />
            <div className='opacity-0 absolute top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-90 text-white text-center hover:opacity-100 transition-opacity duration-500'>
              <div className='mt-12 text-2xl'>Amazon Home Page Clone</div>
              <div className='mt-4'>
                <button className='px-4 py-2 mr-2 bg-blue-500 rounded-lg text-white'>
                  <a href="https://sanket560.github.io/amazon-page-home-clone/" target='__blank' >Live run</a> 
                </button>
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white'>
                <a href="https://github.com/sanket560/amazon-page-home-clone" target='__blank'>Source Code</a>
                </button>
              </div>
            </div>
          </div>

          <div className='relative w-[400px]'>
            <img className='h-[200px]' src={project2} alt='project2' />
            <div className='opacity-0 absolute top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-90 text-white text-center hover:opacity-100 transition-opacity duration-500'>
              <div className='mt-12 text-2xl'>Number Guessing Game</div>
              <div className='mt-4'>
                <button className='px-4 py-2 mr-2 bg-blue-500 rounded-lg text-white'>
                  <a href="https://sanket560.github.io/number-guessing/" target='__blank' >Live run</a> 
                </button>
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white'>
                <a href="https://github.com/sanket560/number-guessing" target='__blank'>Source Code</a>
                </button>
              </div>
            </div>
          </div>
          <div className='relative w-[400px]'>
            <img className='h-[200px]' src={project3} alt='project3' />
            <div className='opacity-0 absolute top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-90 text-white text-center hover:opacity-100 transition-opacity duration-500'>
              <div className='mt-12 text-2xl'>IMDB Movies</div>
              <div className='mt-4'>
                <button className='px-4 py-2 mr-2 bg-blue-500 rounded-lg text-white'>
                  <a href="https://vite-imdb-movies.netlify.app/" target='__blank' >Live run</a> 
                </button>
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white'>
                <a href="https://github.com/sanket560/imdb-movies" target='__blank'>Source Code</a>
                </button>
              </div>
            </div>
          </div>
          <div className='relative w-[400px]'>
            <img className='h-[200px]' src={project4} alt='project4' />
            <div className='opacity-0 absolute top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-90 text-white text-center hover:opacity-100 transition-opacity duration-500'>
              <div className='mt-12 text-2xl'>Netflix Home Page Clone</div>
              <div className='mt-4'>
                <button className='px-4 py-2 mr-2 bg-blue-500 rounded-lg text-white'>
                  <a href="https://sanket560.github.io/netlix-home-page-clone/" target='__blank' >Live run</a> 
                </button>
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white'>
                <a href="https://github.com/sanket560/netlix-home-page-clone" target='__blank'>Source Code</a>
                </button>
              </div>
            </div>
          </div>
          <div className='relative w-[400px]'>
            <img className='h-[200px]' src={project5} alt='project5' />
            <div className='opacity-0 absolute top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-90 text-white text-center hover:opacity-100 transition-opacity duration-500'>
              <div className='mt-12 text-2xl'>PW Skills Clone using Tailwindcss</div>
              <div className='mt-4'>
                <button className='px-4 py-2 mr-2 bg-blue-500 rounded-lg text-white'>
                  <a href="https://pwskills-home-clone.netlify.app/" target='__blank' >Live run</a> 
                </button>
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white'>
                <a href="https://github.com/sanket560/PWskills-clone" target='__blank'>Source Code</a>
                </button>
              </div>
            </div>
          </div>
          <div className='relative w-[400px]'>
            <img className='h-[200px]' src={project6} alt='project6' />
            <div className='opacity-0 absolute top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-90 text-white text-center hover:opacity-100 transition-opacity duration-500'>
              <div className='mt-12 text-2xl'>To-Do-App</div>
              <div className='mt-4'>
                <button className='px-4 py-2 mr-2 bg-blue-500 rounded-lg text-white'>
                  <a href="https://sanket560.github.io/to-do-app/" target='__blank' >Live run</a> 
                </button>
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white'>
                <a href="https://github.com/sanket560/to-do-app" target='__blank'>Source Code</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
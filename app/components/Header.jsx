import React from 'react'

const Header = () => {
  return (
    <div className='navbar fixed bg-[#0f172a] bg-opacity-40 dark:bg-grey-900 dark:bg-opacity-40 backdrop-filter backdrop-blur-lg w-full h-20 border-b text-white flex items-center justify-around gap-40 md:gap-72 z-10'>
      <div className='logo flex items-center'>
        <img className='w-full h-14 mr-3' src="/Images/logo.png" alt='logo' />
      </div>
      <div className='hidden md:block'>
        <a className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700' href='#home'>Home</a>
        <a className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700' href='#education'>Education</a>
        <a className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700' href='#experience'>Experience</a>
        <a className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700' href='#skills'>Skills</a>
        <a className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700' href='#project'>Project</a>
        <a className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700' href='#contact'>Contact</a>
      </div>
      <div className='humburger md:hidden'>
         <p className='text-3xl cursor-pointer'></p>
      </div>
    </div>
  )
}

export default Header
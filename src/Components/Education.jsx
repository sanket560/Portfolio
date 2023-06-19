import React from 'react'
import vu from '../Images/vu.png'
import jsp from '../Images/jsp.jpeg'
import hhs from '../Images/hhs.jpg'
function Education() {
  return (
    <>
    <div id='education' className='h-14' >

    </div>
      <div className='md:w-4/5 h-auto mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white'>
            <span className='text-3xl bg-white rounded-lg mr-3'>&#x1F393;</span>
            Education
          </p>
          <p className='w-28 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row bg-slate-600 md:w-full w-4/5 md:items-center mx-auto mt-10 rounded-lg overflow-hidden drop-shadow-xl'>
            <div className='w-43 h-43'>
              <img className='md:w-48 md:h-44 w-screen h-52 ' src={vu} alt='' />
            </div>
            <div className='flex flex-col justify-evenly md:h-28 md:p-8 p-4'>
              <p className='text-xl md:text-2xl font-bold'>
                Bachelor Of Technology in Computer Engineering
              </p>
              <p className='text-lg md:text-xl font-bold'>
                Vishwakarma University, Pune
              </p>
              <p className='font-semibold'>2022 - 2025 | Pursuing</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row bg-slate-600 md:w-full w-4/5 md:items-center mx-auto mt-10 rounded-lg overflow-hidden drop-shadow-xl'>
            <div className='w-43 h-46'>
              <img
                className='md:w-48 md:h-44 w-screen h-52 '
                src={jsp}
                alt=''
              />
            </div>
            <div className='flex flex-col justify-evenly md:h-28 md:p-8 p-4'>
              <p className='text-xl md:text-2xl font-bold'>
                Diploma in Computer Engineering
              </p>
              <p className='text-lg md:text-xl font-bold'>
                Jaywant Sawant Polytechic, Pune
              </p>
              <p className='font-semibold'>2019 - 2022 | Completed</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row bg-slate-600 md:w-full w-4/5 md:items-center mx-auto my-10 rounded-lg overflow-hidden drop-shadow-xl'>
            <div className='w-43 h-46'>
              <img className='md:w-48 md:h-44 w-screen h-52' src={hhs} alt='' />
            </div>
            <div className='flex flex-col justify-evenly md:h-28 md:p-8 p-4'>
              <p className='text-xl md:text-2xl font-bold'>
                Secondary School Certificate
              </p>
              <p className='text-lg md:text-xl font-bold'>
                Hillgreen High School & Junior College, Pune
              </p>
              <p className='font-semibold'>2015 - 2019 | Completed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education
import React from 'react'
import vu from '../Images/vu.png'
import jsp from '../Images/jsp.jpeg'
import hhs from '../Images/hhs.jpg'
import EducationCard from './EducationCard';

const Education_Data  = [
  {
    "id" : 1,
    "img" : vu,
    "Course" : "Bachelor Of Technology in Computer Engineering",
    "College" : "Vishwakarma University, Pune",
    "Duration" : "2022 - 2025 | Pursuing" 
  },
  {
    "id" : 2,
    "img" : jsp,
    "Course" : " Diploma in Computer Engineering",
    "College" : "Jaywant Sawant Polytechic, Pune",
    "Duration" : "2019 - 2022 | Completed"
  },
  {
    "id" : 3,
    "img" : hhs,
    "Course" : "Secondary School Certificate",
    "College" : "Hillgreen High School & Junior College, Pune",
    "Duration" : "2015 - 2019 | Completed" 
  }
]

function Education() {
  return (
    <>
      <div id='education' className='h-14'></div>
      <div className='md:w-4/5 h-auto mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white'>
            <span className='text-3xl bg-white rounded-lg mr-3'>&#x1F393;</span>
            Education
          </p>
          <p className='w-28 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-col'>
          {Education_Data.map((index) => (
            <EducationCard
              img={index.img}
              Course={index.Course}
              College={index.College}
              Duration={index.Duration}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Education
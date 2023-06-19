import React from 'react'

function SkillCard({icon,name}) {
  return (
      <div className='md:w-[120px] md:h-[120px] w-2/5 h-[120px] bg-slate-800 flex flex-col items-center justify-center rounded-xl'>
        <img
          className='w-fit'
          src={icon}
          alt='skills-icons'
        />
        <p className='text-white font-semibold'>{name}</p>
      </div>
  );
}

export default SkillCard
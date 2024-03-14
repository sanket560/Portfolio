import React from 'react'

function SkillCard({icon,name}) {
  return (
      <div className='md:w-[140px] md:h-[120px] w-2/5 h-[120px] bg-slate-800 flex flex-col items-center justify-center rounded-xl hover:scale-110 duration-500'>
        <img
          className='w-14'
          src={icon}
          alt={name}
        />
        <p className='text-white font-semibold mt-2'>{name}</p>
      </div>
  );
}

export default SkillCard
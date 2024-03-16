import React from "react";
import SkillCard from "./SkillCard";
import skillsDb from ".././skillsDb.json";
const Skills = () => {
  return (
    <>
      <div id='skills' className='h-14'></div>
      <div className='md:w-4/5 md:mt-5 md:h-[100vh] mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white'>Tech Stack</p>
          <p className='w-20 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='flex flex-wrap gap-12 mt-10 items-center justify-center mx-4'>
          {skillsDb.map((element) => {
            return (
              <SkillCard
                key={element.id}
                icon={element.icon}
                name={element.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;

import React from 'react';
import StackIcon from 'tech-stack-icons';
import skills from '@/constants/skills';

const Skills = () => {
  return (
    <>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk">&#8220;</span>
        <div className="text-4xl font-textMeOne">Skills...</div>
      </div>
      <div className="h-[70vh] w-full md:overflow-y-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 p-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col justify-center items-center gap-3 text-xl"
            >
              <StackIcon name={skill.name} className='w-12' /> 
              <div>{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
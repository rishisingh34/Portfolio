'use client';
import React from 'react';
import Link from 'next/link';
import projects  from '@/constants/projects';

const Projects = () => {
  return (
    <>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk">&#8220;</span>
        <div className="text-4xl font-textMeOne">Projects...</div>
      </div>

      <div className="h-[70vh] w-full md:overflow-y-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 p-5 text-5xl underline font-light">
          {projects.map((project) => (
            <div key={project.path}>
              <Link href={project.path} className="italic">
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
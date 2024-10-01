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
        <div className="flex flex-wrap justify-center items-center gap-10 p-5 md:text-3xl text-2xl  underline font-light">
          {projects.map((project) => (
            <div key={project.path}>
              <Link href={"/projects"+project.path} className="italic">
                {project.name}
              </Link>
            </div>
          ))}
          <div>
            <a href="https://github.com/rishisingh34/cyber-secure" target='blank'><div className='italic'>cyber secure</div></a>
          </div>
          <div>
            <a href="https://github.com/rishisingh34/cine_student.git" target='blank'><div className='italic'>CINE&apos;24 backend{"(Student)"}</div></a>
          </div>
          <div>
            <a href="https://github.com/rishisingh34/cine_admin.git" target='blank'><div className='italic'>CINE&apos;24 backend{"(Admin)"}</div></a>
          </div>
          <div>
            <a href="https://cine24exam.netlify.app" target='blank'><div className='italic'>CINE&apos;24 Portal</div></a>
          </div>
          <div>
            <a href="https://github.com/rishisingh34/akgec_edu.git" target='blank'><div className='italic'>akgec-edu{"(backend)"}</div></a>
          </div>
          <div>
            <a href="https://cineleaderboard.netlify.app" target='blank'><div className='italic'>cine leaderboard</div></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
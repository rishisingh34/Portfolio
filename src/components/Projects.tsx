import React from 'react';
import projects  from '@/constants/projects';
import TransitionLink from '@/components/TransitionLink';

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
              <TransitionLink href={"/projects"+project.path} className="italic" nav={false}>
                {project.name}
              </TransitionLink>
            </div>
          ))}
          <div>
            <a href="https://github.com/rishisingh34/cyber-secure" target='blank'><div className='italic'>cyber secure</div></a>
          </div>
          <div>
            <a href="https://link-up24.vercel.app" target='blank'><div className='italic'>link-up</div></a>
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
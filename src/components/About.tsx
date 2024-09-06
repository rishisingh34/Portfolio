"use client";

const About = () => {
  return (
    <>
      <div className="flex items-end mb-2">
        <span className="text-6xl font-spaceGrotesk">&#8220;</span>          
        <div className="text-4xl font-textMeOne">About...</div>
      </div>
      <div className='font-textMeOne italic text-xl leading-relaxed mb-20 md:text-right  '>
        <p>
        I thrive at the crossroads of technology and innovation, leveraging my experience with React, Node.js, Express, NestJS, Next.js, and React Native to create impactful solutions.
        </p>
      </div>
      <div className='font-light md:text-center text-xl tracking-wider leading-relaxed mb-20'>
        <p>
        I&apos;m a full-stack developer currently pursuing my B.Tech in Computer Science and Engineering. Recently, I&apos;ve been exploring mobile development with React Native and Expo, aiming to craft engaging, cross-platform applications.
        </p>
      </div>
      <div className='text-lg font-spaceGrotesk italic font-thin text-left tracking-wide mb-10'>
        <p>
        I&apos;m passionate about turning ideas into reality and enjoy collaborating with teams to build dynamic and intuitive products. If you need to build an app or website, let&apos;s connect and turn your vision into reality!
        </p>
      </div>
      <div className='text-lg text-link hover:text-blue-700 underline italic cursor-pointer'>
        <a href="https://docs.google.com/document/d/18c-4xbfgMvR0GVAMbMd2ubsg-Bf8kjA2zxtgHyJkRcM/edit?usp=sharing">Download CV</a>
      </div>
    </>
  )
}

export default About
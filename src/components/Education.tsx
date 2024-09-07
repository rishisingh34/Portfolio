import { school } from '@/constants/images';
import { akg } from '@/constants/images';
import Image from 'next/image';

const Education = () => {
  return (
    <>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk">&#8220;</span>
        <div className="text-4xl font-textMeOne">Education...</div>
      </div>
      <div className='flex flex-col gap-5 mt-10 ml-5 w-full'>
        <div className='flex gap-5 md:flex-row flex-col '>
          <div>
            <Image src={akg} alt="AKGEC" width={100} className='rounded-full' priority/>
          </div>
          <div>
            <div className='text-2xl font-spaceGrotesk'>Ajay Kumar Garg Engineering College, Ghaziabad</div>
            <div className='text-xl font-spaceGrotesk'>November 2022-2026 {"( Currently Studying)"} </div>
            <div className='text-lg font-spaceGrotesk'>B.Tech in Computer Science Engineering {"(AI & ML)"}</div>
            <div className='text-xl font-spaceGrotesk'>8.85 CGPA {"( current )"}</div>
          </div>          
        </div>
        <div className='bg-white w-[80%] h-1 mb-10'></div>
        <div className='flex gap-5 md:flex-row flex-col '>
          <div>
            <Image src={school} alt="AKGEC" width={100} className='rounded-full' priority/>
          </div>
          <div>
            <div className='text-2xl font-spaceGrotesk'>St. Joseph{"'"}s High School, Patna</div>
            <div className='text-xl font-spaceGrotesk'>April 2019- June 2021</div>
            <div className='text-lg font-spaceGrotesk'>Senior Secondary</div>
            <div className='text-xl font-spaceGrotesk'>Got 90.8% - Physics, Chemistry, Maths</div>
          </div>
        </div>
        <div className='bg-white w-[80%] h-1'></div>
      </div>
    </>
  )
}

export default Education
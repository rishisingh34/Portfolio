"use client";

const Profiles = () => {
  return (
    <>
      <div className="flex items-end mb-20">
        <span className="text-6xl font-spaceGrotesk">&#8220;</span>
        <div className="text-4xl font-textMeOne">Profiles...</div>
      </div>
      <div className='h-full ml-5 flex flex-col justify-start md:text-3xl text-xl underline cursor-pointer'>
        <div><a href="https://github.com/rishisingh34" target='blank'>Github</a></div>
        <div><a href="https://leetcode.com/rishi_rajsingh" target="blank">Leetcode</a></div>
        <div><a href="https://www.linkedin.com/in/rishi-raj-singh-4a0679258/" target="blank">LinkedIn</a></div>
        <div><a href="https://www.codechef.com/users/rishi_rajsingh" target="blank">Codechef</a></div>
        <div><a href="https://codeforces.com/profile/rishi_rajsingh" target="blank">Codeforces</a></div>
      </div>
    </>
  )
}

export default Profiles
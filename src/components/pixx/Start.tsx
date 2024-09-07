import Image from "next/image"
import { getstarted } from "@/constants/images"


export default function Start() {
  return (
    <div className="p-10 h-[90%] flex md:flex-row flex-col justify-center items-center  gap-10 md:mt-0 mt-20">
      <div className="md:w-[60%] flex justify-center">
        <Image
          src={getstarted}
          alt="Get Started"
          width={200}
          className="transform md:scale-150 rounded-3xl"
        />
      </div>
      <div className="font-spaceGrotesk ">
          <p className="text-5xl font-medium ">
            Welcome to Pixx<span className="text-3xl md:text-6xl">,</span>
          </p>
          <p className="font-thin mt-4 text-md md:text-2xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dive into the world of boundless creativity with Pixx, the ultimate platform for AI-generated art enthusiasts. <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pixx is where imagination meets technology—where you can discover, share, and celebrate stunning AI-generated images from creators around the globe. <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pixx is your gateway to a vibrant community of digital artists. Join us and redefine the art of tomorrow, today.
          </p>
      </div>
    </div>
  )
}
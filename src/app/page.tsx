import Image from "next/image";
import { rishi, whitelink } from "@/constants/images";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="p-5 flex flex-col md:flex-row justify-center h-full w-full gap-5 md:p-2 md:pt-24">
      <div className="flex flex-col items-center md:mr-4 md:w-[20%] md:items-end font-spaceGrotesk">
        <div className="mb-3">
          <Image 
            src={rishi}
            alt="Rishi"
            width={100}
            height={100}
            priority
            className="rounded-full"  
          />
        </div>
        <div className="font-medium text-3xl mb-3">
          Rishi Raj Singh<span className="text-6xl">,</span>
        </div>
        <div className="font-light text-right md:mt-4 text-xl  cursor-pointer">
          <nav>
            <ul>
              <li className="mt-4">
                <div className="flex items-center justify-end gap-2">
                  <span className="underline">About</span>
                  <span><Image src={whitelink} alt="link" className="filter invert"/></span>
                </div>
              </li>
              <li className="mt-4">
                <div className="flex items-center justify-end gap-2">
                  <span className="underline">Projects</span>
                  <span><Image src={whitelink} alt="link" className="filter invert"/></span>
                </div>
              </li>
              <li className="mt-4">
                <div className="flex items-center justify-end gap-2">
                  <span className="underline">Skills</span>
                  <span><Image src={whitelink} alt="link" className="filter invert"/></span>
                </div>
              </li>
              <li className="mt-4">
                <div className="flex items-center justify-end gap-2">
                  <span className="underline">Socials</span>
                  <span><Image src={whitelink} alt="link" className="filter invert"/></span>
                </div>
              </li>
              <li className="mt-4">
                <div className="flex items-center justify-end gap-2">
                  <span className="underline">Education</span>
                  <span><Image src={whitelink} alt="link" className="filter invert"/></span>
                </div>
              </li>
            </ul> 
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-center md:mx-4 md:w-[1%]">
        <div className="h-0.5 w-full bg-white md:w-[3px] md:h-[80vh] rounded-sm"></div>
      </div>

      <div className="flex items-start justify-start md:ml-4 md:w-[60%] font-openSans">
        <About />
      </div>
    </div>

  );
}

import Image from "next/image";
import { pixx } from '@/constants/images';
import TransitionLink from "../TransitionLink";

export default function Header() {
  return (
    <>
      <div className="ml-5 flex md:flex-row flex-col gap-10 justify-between items-center md:h-[10%]">
        <div className="text-2xl font-spaceGrotesk font-light">
          <TransitionLink href={"/"}>Profile</TransitionLink>
        </div>
        <div>
          <a href="https://github.com/rishisingh34/Pixx-ReactNative" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div>
                <Image
                  src={pixx}
                  width={40} 
                  height={40}
                  className="rounded-e-full"
                  alt="Pixx"
                />
              </div>
              <div>Pixx Github</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
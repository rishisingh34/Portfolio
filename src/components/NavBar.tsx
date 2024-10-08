import Image from "next/image";
import { rishi, whitelink } from "@/constants/images";
import TransitionLink from "@/components/TransitionLink";

type NavBarProps = {
  section: string;
  children: React.ReactNode;
};

export default function NavBar({ section, children }: NavBarProps) {
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
        <div className="font-light text-right md:mt-4 text-xl cursor-pointer">
          <nav>
            <ul>
              <li className="mt-4">
                <TransitionLink href="/" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 ${
                      section === "About" ? "text-active" : ""
                    }`}
                  >
                    <span className="underline">About</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/projects" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 ${
                      section === "Projects" ? "text-active" : ""
                    }`}
                  >
                    <span className="underline">Projects</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/skills" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 ${
                      section === "Skills" ? "text-active" : ""
                    }`}
                  >
                    <span className="underline">Skills</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/profiles" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 ${
                      section === "Profiles" ? "text-active" : ""
                    }`}
                  >
                    <span className="underline">Profiles</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
              <li className="mt-4">
                <TransitionLink href="/education" nav={true}>
                  <div
                    className={`flex items-center justify-end gap-2 ${
                      section === "Education" ? "text-active" : ""
                    }`}
                  >
                    <span className="underline">Education</span>
                    <span>
                      <Image src={whitelink} alt="link" className="filter invert" />
                    </span>
                  </div>
                </TransitionLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center justify-center md:mx-4 md:w-[1%]">
        <div className="h-0.5 w-full bg-white md:w-[3px] md:h-[80vh] rounded-sm"></div>
      </div>

      <section className="flex flex-col items-start justify-start md:ml-4 md:w-[60%] font-openSans">
        {children}
      </section>
    </div>
  );
}
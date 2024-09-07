import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface WelcomeSectionProps {
  imageSrc: StaticImageData; 
  content: {
    title: string;
    paragraphs: string[];
  };
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ imageSrc, content }) => {
  return (
    <div className="p-10 md:h-screen flex md:flex-row flex-col justify-center items-center  gap-10 md:mt-0 mt-40 ">
      <div className="md:w-[60%] flex justify-center">
        <Image
          src={imageSrc}
          alt="Get Started"
          width={200}
          className="transform md:scale-150 rounded-3xl"
        />
      </div>
      <div className="font-spaceGrotesk">
        <p className="text-6xl italic font-medium">
          {content.title}<span className="text-3xl md:6xl">,</span>
        </p>
        <p className="font-thin mt-4 text-md md:text-2xl">
          {content.paragraphs.map((para, index) => (
            <span key={index}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{para}<br /><br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
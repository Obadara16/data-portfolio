import React, { useEffect, useState } from 'react';
import '../styles.css';
import CTA from './others/CTA';
import homeBanner from '../assets/banner.png';
import TypewriterAnimation from './others/TypeWriterAnimation';

const Header = () => {
  const [shouldShowBackgroundImage, setShouldShowBackgroundImage] = useState(window.innerWidth < 768);
  const [isHelloComplete, setIsHelloComplete] = useState(false);
  const [isRoqeebComplete, setIsRoqeebComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowBackgroundImage(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHelloComplete = () => {
    setIsHelloComplete(true);
  };

  const handleRoqeebComplete = () => {
    setIsRoqeebComplete(true);
  };

  return (
    <div id="home" className="w-full h-screen font-poppins mx-auto">
      {/* style={shouldShowBackgroundImage ? { backgroundImage: `url(${homeBanner})`, backgroundSize: 'cover' } : {}} */}
      <div className="w-10/12 mx-auto h-full">
        <div className=" mx-auto w-full md:w-1/2 h-full flex flex-col -mt-12">
          <div className="flex flex-col gap-6 justify-center h-full whitespace-nowrap text-center">
            <TypewriterAnimation text="Hello I'm" speed={100} onComplete={handleHelloComplete} styles="text-md"/>
            {isHelloComplete && <TypewriterAnimation text="Roqeeb Obadara" speed={100} onComplete={handleRoqeebComplete} styles="text-6xl text-mix" />}
            {isRoqeebComplete && <TypewriterAnimation text="Front-End Developer | Data Scientist (In Training)" speed={100} styles="text-md"/>}
            <CTA />
          </div>
        </div>

        {/* {!shouldShowBackgroundImage && (
          <div
            className="md:w-3/5 min-h-[720px]"
            style={{
              backgroundImage: `url(${homeBanner})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        )} */}
      </div>
    </div>
  );
};

export default Header;

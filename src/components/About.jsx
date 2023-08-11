import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import ME from '../assets/me.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 200, // Set delay of 200ms for content div animation
    });
  }, []);

  return (
    <div id="about" className="relative w-10/12 mx-auto mb-10">
      <div className="w-full flex flex-col md:flex-row gap-8 mt-8 mx-auto justify-center items-center">
        <div className="w-full place-items-center flex justify-center items-center z-0" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200">
          <div className="overflow-hidden transition flex bg-white justify-center items-center rounded-full p-8">
            <img src={ME} alt="About Me" className='w-[180px] md:w-[240px] h-[180px] md:h-[240px]'/>
            <div className="after absolute top-4 left-4 right-4 bottom-4 border-white border-3"></div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center" >
          <div className='w-full mx-auto'>
            <h2 className="text-3xl font-bold text-center md:text-left" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">About Me</h2>
            
            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
            I'm a passionate Data Scientist and Full Stack Developer, driven by a love for coding and design. With a knack for crafting user-friendly web experiences, 
            I collaborate seamlessly with cross-functional teams to optimize performance and prioritize users. 
            Engaging with the developer community and valuing user feedback, I'm committed to constant improvement.
            </p>

            <p className='mt-8 text-white' aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
            Beyond technical expertise, I engage with the developer community and value user feedback. 
            Committed to excellence, I look forward to contributing my skills to impactful projects, shaping a better digital world with exciting possibilities.

            </p>

            <a href="#contact" className="btn color-mix mt-8" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

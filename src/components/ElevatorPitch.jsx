import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import ME from '../assets/me.png';

const ElevatorPitch = () => {
  useEffect(() => {
    AOS.init({
      delay: 200, // Set delay of 200ms for content div animation
    });
  }, []);

  return (
    <section id="bio" className="relative w-10/12 mx-auto mb-10">
      <div className="w-full flex flex-col-reverse md:flex-row gap-8 mt-8 mx-auto justify-center items-center">

        <div className="w-full flex flex-col justify-center items-center" >
          <div className='w-1/2 mx-auto'>
            <h2 className="text-3xl font-bold" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">Elevator Pitch</h2>
            
            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
              Hello, I'm Roqeeb Obadara, a dedicated data science student from the University of Ibadan, Nigeria. I'm also an adept full-stack developer proficient in Node.js, React, Express, and MongoDB.
            </p>
            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
              At ALX, I've refined my data analysis skills and demonstrated analytical prowess through an image processing project at university.
            </p>

            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200">
            As a full-stack developer, I create dynamic web applications using modern tools like React and Node.js. My unique blend of data science and full-stack skills allows me to combine insights with seamless user experiences.
            </p>

            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1400">
            I'm excited to contribute to impactful projects at your organization, leveraging my passion for innovation and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitch;

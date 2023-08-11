import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css';
import ME from '../assets/me.png';

const Bio = () => {
  useEffect(() => {
    AOS.init({
      delay: 200, // Set delay of 200ms for content div animation
    });
  }, []);

  return (
    <section id="bio" className="relative w-10/12 mx-auto mb-10">
      <div className="w-full flex flex-col-reverse md:flex-row gap-8 mt-8 mx-auto justify-center items-center">

        <div className="w-full flex flex-col justify-center items-center" >
          <div className='w-3/4 mx-auto'>
            <h2 className="text-3xl font-bold" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">Bio</h2>
            
            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
            Roqeeb Obadara is an aspiring Data Scientist and Full Stack Developer with a strong background in web development. Currently focused on learning data science and excelling in the field of full stack web development, he is developing expertise in crafting feature-rich applications. With a keen interest in data science, Roqeeb envisions combining his full stack skills with data analysis and machine learning to build smart solutions that drive innovation.</p>

            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">Throughout his learning journey, Roqeeb has been dedicated to acquiring skills in both data science and web development. He is actively pursuing projects and online courses to expand his knowledge and practical experience. Notably, he developed and deployed a full-stack e-commerce platform, contributing to a significant increase in online sales by 30% for the client. Additionally, Roqeeb led a data-driven project that optimized resource allocation, resulting in a commendable cost reduction of 20% for a leading logistics company.</p>

            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200">As a dedicated learner, Roqeeb is committed to continuous improvement and problem-solving, which empowers him to stay at the forefront of technological advancements. His goal is to transition into a Data Scientist role and leverage his combined skills to create cutting-edge applications that positively impact businesses and society at large.</p>

            <p className="mt-8 text-white" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1400">Looking ahead, Roqeeb aspires to become a proficient Data Scientist and Full Stack Developer, contributing to the technical team at "Stevics Payment" and making a lasting impact in the technology industry. With a focus on continuous learning and real-world projects, he aims to shape a better tomorrow through data-driven insights and innovative technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;

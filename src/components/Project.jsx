import Aos from 'aos';
import React, { useState, useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import videoSource from "../assets/project.mp4"
import CV from '../assets/cv.pdf'


const Project= ({ experienceData }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  useEffect(() => {
    // Code for reveal effect goes here
  }, []);

  useEffect(() => {
    Aos.init({
      delay: 200, // Set delay of 200ms for content div animation
    });
  }, []);

  const focusTab = () => {
    // Code for focusing tab goes here
  };

  useEffect(() => focusTab(), [tabFocus]);

  const onKeyDown = (e) => {
    // Code for handling arrow key navigation goes here
  };

  return (
    <section id="experience" ref={revealContainer} className="w-10/12  mx-auto" >
        <div className='w-1/2 mx-auto flex flex-col gap-12'>
      <h2 className="numbered-heading ml-4 text-center">Portfolio</h2>
        <div className="relative flex items-center bg-gray-100 shdow-xl p-2" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1800">
          <video
            controls
            className="w-full  h-full"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        <a href="https://docs.google.com/presentation/d/1o-zdKiKCQcxCEOIUKqicMMYtACMkmfOvwZK04yi0u60/edit?usp=drivesdk" open className='btn'>Open Deck</a>

        </div>
          
    </section>
  );
};

export default Project;

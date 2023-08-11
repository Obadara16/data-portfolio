import Aos from 'aos';
import React, { useState, useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import videoSource from "../assets/project.mp4"

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

      <div className="grid grid-cols-1 md:grid-cols-2 py-12">
        <div
          className="relative flex flex-col justify-center z-3 mb-4 md:mb-0 md:h-[320px] overflow-x-auto flex-shrink-0 p-0 m-0 list-none"
          role="tablist"
          aria-label="Experience tabs"
          onKeyDown={(e) => onKeyDown(e)}
          aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600"
        >
      <h2 className="numbered-heading ml-4">Team Project Video</h2>
          
        </div>
          <div className="relative ml-4 flex justify-center items-center bg-gray-100 shdow-xl p-2" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1800">
          <video
            controls
            className="w-full  h-full"
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Project;

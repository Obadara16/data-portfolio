import Aos from 'aos';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { CSSTransition } from 'react-transition-group';

const Contents = ({ contentData }) => {
  const [activeTabId, setActiveTabId] = useState(0);
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

  const onKeyDown = (e) => {
    // Code for handling arrow key navigation goes here
  };

  return (
    <section id="content" ref={revealContainer} className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative flex flex-col z-3 mb-6 md:mb-0 md:h-[300px] overflow-x-auto flex-shrink-0 p-0 m-0 list-none"
          role="tablist"
          aria-label="Experience tabs"
          onKeyDown={(e) => onKeyDown(e)}
          aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600"
        >
          <h2 className="numbered-heading ml-4">More About Me</h2>
          {contentData &&
            contentData.map((content, i) => {
              const { title } = content;
              return (
                <button
                  key={i}
                  className={`${
                    activeTabId === i ? 'text-mix border border-[#E66EBB]' : 'text-slate hover:text-[#E66EBB]'
                  } link flex items-center w-max h-[var(--tab-height)] px-4 pb-2 bg-transparent font-mono text-sm text-left whitespace-nowrap hover:bg-light-navy focus:bg-light-navy`}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? 'true' : 'false'}
                  aria-controls={`panel-${i}`}
                >
                  <span>{title}</span>
                </button>
              );
            })}
          <div
            className="absolute top-0 left-0 z-10 w-2 h-[var(--tab-height)] bg-green transform transition-transform duration-250 delay-100"
            style={{ transform: `translateY(calc(${activeTabId} * var(--tab-height)))` }}
          />
        </div>
        <div className="relative ml-4" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1800">
          {contentData &&
            contentData.map((content, i) => {
              const { description, title, videoSource } = content;

              return (
                <CSSTransition
                  key={i}
                  in={activeTabId === i}
                  timeout={250}
                  classNames="fade"
                  unmountOnExit
                >
                  <div
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                    className="p-2"
                  >
                    <h3 className="mb-2 text-xl font-semibold">
                      <span>{title}</span>
                    </h3>
                    <ul className="mb-8 list-disc list-inside">
                      {description.map((item, index) => (
                        <li key={index} className="flex items-start mb-6">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Conditionally render the video player if videoSource is present */}
                    {videoSource && (
                      <ReactPlayer
                        url={videoSource}
                        controls={true}
                        width="100%"
                        height="100%"
                        playing={false}
                      />
                    )}
                  </div>
                </CSSTransition>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Contents;

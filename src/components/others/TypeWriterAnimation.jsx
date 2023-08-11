import React, { useEffect, useState } from 'react';
import '../../styles.css';

const TypewriterAnimation = ({ text, speed, onComplete, styles }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
        onComplete();
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed, currentIndex, onComplete]);

  return (
    <div className={`typewriter-animation whitespace-normal z-10 ${styles}`}>
      {displayText}
      {isTypingComplete && <br />}
    </div>
  );
};

export default TypewriterAnimation;

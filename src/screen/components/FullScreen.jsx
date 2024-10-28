import React, { useState, useEffect } from 'react';
import Screen from "../../images/screen.png";
import Cross from "../../images/cross.png";

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.classList.add('fullscreen-mode');
    } else {
      document.body.classList.remove('fullscreen-mode');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('fullscreen-mode');
    };
  }, [isFullscreen]);

  const handleEnterFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className='ui form'>
        <button className='screen-button' onClick={handleEnterFullscreen}><img src={!isFullscreen ? Screen : Cross} alt=""/></button>
    </div>
  );
};

export default FullscreenToggle;

// VideoPlayer.js
import React, { useState } from 'react';
import '../Video.css';

const Video = () => {
  const [activeVideo, setActiveVideo] = useState('');
  const videos = ['images/video1.mp4', 'images/video2.mp4', 'images/video1.mp4', 'images/video2.mp4'];

  const handleVideoClick = (videoSrc) => {
    setActiveVideo(videoSrc);
  };

  const handleCloseClick = () => {
    setActiveVideo('');
  };

  return (
    <section className={activeVideo ? 'active' : ''}>
      <div className="video">
        <div className="main-video">
          {activeVideo && (
            <>
              <video src={activeVideo} autoPlay controls></video>
              <i className="bx bx-x close" onClick={handleCloseClick}></i>
            </>
          )}
        </div>
        {videos.map((videoSrc, index) => (
          <div className="videos" key={index} onClick={() => handleVideoClick(videoSrc)}>
            <video src={videoSrc}></video>
            <i className="bx bx-play-circle"></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;

// VideoPlayer.js
import React, { useState } from 'react';
import '../Video.css';

const Video = () => {
  const [activeVideo, setActiveVideo] = useState('');
  const videos = [
    { src: 'images/video1.mp4', poster: 'images/poster1.jpg' },
    { src: 'images/video2.mp4', poster: 'images/poster2.jpg' },
    { src: 'images/video3.mp4', poster: 'images/poster3.jpg' },
    { src: 'images/video4.mp4', poster: 'images/poster4.jpg' },
  ];

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
              <video src={activeVideo} autoPlay controls poster="your-custom-poster.jpg"></video>
              <i className="bx bx-x close" onClick={handleCloseClick}></i>
            </>
          )}
        </div>
        {videos.map((video, index) => (
          <div className="videos" key={index} onClick={() => handleVideoClick(video.src)}>
            <video src={video.src} poster={video.poster}></video>
            <i className="bx bx-play-circle"></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;

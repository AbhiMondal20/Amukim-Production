import React from 'react'
import Video from './Video'

function Portfolio() {
  return (
    <>
          <div className="portfolio-setion">
      <div className="container w-container">
        <div className="portfolio-title-block">
          <div className="section-title-block center-block">
            <div className="section-intro-block">My album</div>
            <h2 className="section-title">
            Captivating Video Creations by Amukim
            </h2>
          </div>
        </div>
        <div className="portfolio-wrapper-block">
          {/* <div className="portfolio-collection-list w-dyn-list">
            <div role="list" className="portfolio-list w-dyn-items">
              <div role="listitem" className="portfolio-item w-dyn-item">
                <div className="single-portfolio-wrapper">
                  <div className="single-portfolio-thumb-block">
                  <video controlsList="nodownload" controls width="570" height="200px" className="single-portfolio-video" >
                    <source src="images/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                </div>
              </div>
              <div role="listitem" className="portfolio-item w-dyn-item">
                <div className="single-portfolio-wrapper">
                  <div className="single-portfolio-thumb-block">
                  <video controlsList="nodownload" controls width="570"  className="single-portfolio-video">
                    <source src="images/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                </div>
              </div>
             
            </div>
          </div> */}
        <Video/>
          <div className="portfolio-link-block">
            <a href="https://www.youtube.com/Amukimproduction" target='_blank' className="portfolio-link w-inline-block">
              <div className="portfolio-link-text">View All Portfolio</div>
              <div className="button-arrow-icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                  <path id="Vector"
                    d="M20.7983 7.97827L13.8631 14.7628C13.614 15.0474 13.1762 15.0806 12.8853 14.8368C12.5943 14.5931 12.5604 14.1648 12.8096 13.8802C12.8329 13.8537 12.8581 13.8289 12.8853 13.8062L18.6345 8.17505H0.693503C0.310515 8.17505 0 7.87128 0 7.49656C0 7.12184 0.310515 6.81813 0.693503 6.81813H18.6345L12.8853 1.19377C12.5943 0.950055 12.5604 0.521748 12.8096 0.237163C13.0588 -0.0474224 13.4966 -0.0805969 13.7875 0.163175C13.8146 0.185913 13.8399 0.210634 13.8631 0.237163L20.7984 7.02173C21.0672 7.28626 21.0672 7.71363 20.7983 7.97827Z"
                    fill="currentColor" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio
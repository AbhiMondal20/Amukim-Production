import React from 'react'

function About() {
  return (
    <>
        <div className="about-section">
      <div className="container w-container">
        <div className="about-wrapper-block">
          <div className="about-image-block">
            <div className="about-image-inner">
              <img src="../assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f1b0cc461fa07846c4df89_about-image.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 86vw, (max-width: 991px) 498px, (max-width: 1279px) 430.1875px, 498px"
                srcSet="
                  https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f1b0cc461fa07846c4df89_about-image-p-500.jpg 500w,
                  https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f1b0cc461fa07846c4df89_about-image.jpg       500w
                " alt="About Image" className="about-image" />
            </div>
          </div>
          <div className="about-contant-block">
            <div className="section-title-block">
              <div className="section-intro-block">About Me</div>
              <h2 className="section-title">
                Transforming Ideas into Compelling Visual Stories through Video
              </h2>
              <p className="section-summary">
              I specialize in crafting engaging and captivating videos that resonate with audiences. With a keen eye for storytelling and a passion for visual communication, I bring ideas to life through dynamic visuals, compelling narratives, and innovative editing techniques. My mission is to help brands, individuals, and organizations effectively convey their messages and stories through the power of video.
              </p>
              <div className="slider-button-block">
                <a href="about" className="button-primary slider-button w-inline-block">
                  <div className="button-text">About us</div>
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
      </div>
    </div>
    </>
  )
}

export default About
import React from 'react'

function Testimonials() {
  return (
    <>
        
    <div className="testimonial-section">
      <div className="container w-container">
        <div className="testimonial-wrapper">
          <div className="testimonial-image-block">
            <img src="images/testi2.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 89vw, (max-width: 991px) 400px, (max-width: 1279px) 368.0625px, 500px" srcSet="
              images/testi2.jpg 500w,
              images/testi2.jpg       500w
              " alt="Testimonial Image" className="testimonial-image" />
          </div>
          <div className="testimonial-content-block">
            <div className="testimonial-title-inner">
              <div className="section-title-block">
                <div className="section-intro-block">TESTIMONIALSt</div>
                <h2 className="section-title">
                Exceptional video content creators! Highly recommend their expertise.
                </h2>
              </div>
            </div>
            <div className="testimonial-slider-block">
              <div data-delay="4000" data-animation="slide" className="testimonial-slider w-slider" data-autoplay="false"
                data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                data-nav-spacing="3" data-duration="500" data-infinite="true">
                <div className="testimonial-slider-mask w-slider-mask">
                  <div className="testimonial-single-item w-slide">
                    <div className="testimonial-text-block">
                      <div className="testimonial-meta-block">
                        <div className="author-name">Bittu Rauth</div>
                        <div className="author-title">Viewer</div>
                        ⭐⭐⭐⭐⭐
                      </div>
                      <p className="testimonial-text">
                        I am delighted to write this testimonial on behalf of Amukim Productions, and I, Bittu Rauth, consider it an honor to share my experiences with this exceptional company.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-single-item w-slide">
                    <div className="testimonial-text-block">
                      <div className="testimonial-meta-block">
                        <div className="author-name">Abhi</div>
                        <div className="author-title">Viewer</div>
                        ⭐⭐⭐⭐⭐
                      </div>
                      <p className="testimonial-text">
                      Amukim Productions has truly redefined entertainment with their innovative approach and exceptional storytelling. From the moment I stepped into their cinematic universe, I was hooked, and my experience has been nothing short of extraordinary.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider-arrow testimonial-arrow nav-right w-slider-arrow-left">
                  <div className="button-arrow-icon w-embed">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path id="Vector"
                        d="M23.7023 11.7015L13.4646 21.6522C13.0968 22.0696 12.4505 22.1182 12.0211 21.7607C11.5917 21.4032 11.5416 20.775 11.9094 20.3577C11.9437 20.3187 11.9811 20.2824 12.0211 20.2491L20.5081 11.9901H1.02374C0.45838 11.9901 0 11.5445 0 10.995C0 10.4454 0.45838 9.99992 1.02374 9.99992H20.5081L12.0211 1.75086C11.5917 1.39341 11.5416 0.765228 11.9094 0.347837C12.2773 -0.0695534 12.9235 -0.11821 13.3529 0.239323C13.393 0.272673 13.4304 0.308929 13.4646 0.347837L23.7024 10.2985C24.0992 10.6865 24.0992 11.3133 23.7023 11.7015Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="slider-arrow testimonial-arrow nav-left w-slider-arrow-right">
                  <div className="button-arrow-icon w-embed">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <path id="Vector"
                        d="M0.297737 10.2985L10.5354 0.347838C10.9032 -0.0695532 11.5495 -0.11821 11.9789 0.239322C12.4083 0.596768 12.4584 1.22495 12.0906 1.64234C12.0563 1.68125 12.0189 1.71759 11.9789 1.75086L3.49187 10.0099H22.9763C23.5416 10.0099 24 10.4555 24 11.005C24 11.5546 23.5416 12.0001 22.9763 12.0001H3.49187L11.9789 20.2491C12.4083 20.6066 12.4584 21.2348 12.0906 21.6522C11.7227 22.0696 11.0765 22.1182 10.6471 21.7607C10.607 21.7273 10.5696 21.6911 10.5354 21.6522L0.297649 11.7015C-0.0992317 11.3135 -0.0992317 10.6867 0.297737 10.2985Z"
                        fill="#currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="slider-nav-none w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials
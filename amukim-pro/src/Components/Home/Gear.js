import React from "react";

function Gear() {
  return (
    <>
      <div className="my-gear-section">
        <div className="container w-container">
          <div className="my-gear-wrapper">
            <div className="my-gear-image-block">
              <div className="my-gear-image-inner">
                <div className="my-gear-single-image-block">
                  <img
                    src="images/1.jpg"
                    loading="lazy"
                    alt="My Gear Single Image"
                    className="my-gear-single-image"
                  />
                </div>
                <div className="my-gear-single-image-inner">
                  <div className="my-gear-single-image-two">
                    <img
                      src="images/2.jpg"
                      loading="lazy"
                      alt="My Gear Single Image"
                      className="my-gear-single-image"
                    />
                  </div>
                  <div className="my-gear-single-image-three">
                    <img
                      src="images/3.jpg"
                      loading="lazy"
                      alt="My Gear Single Image"
                      className="my-gear-single-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="my-gear-content-block">
              <div className="section-title-block">
                <div className="section-intro-block">What’s our gear?</div>
                <h2 className="section-title">
                  We have the experience to make of your photo
                </h2>
              </div>
              <div className="my-gear-list-wrapper">
                <div className="my-gear-list-inner">
                  <div className="my-gear-list-circle-shape">
                    <div className="my-gear-list-dot-shape"></div>
                  </div>
                  <div className="my-gear-list-text">Sony ILME-FX30</div>
                </div>
                <div className="my-gear-list-inner">
                  <div className="my-gear-list-circle-shape">
                    <div className="my-gear-list-dot-shape"></div>
                  </div>
                  <div className="my-gear-list-text">Samsung ILME-FR7</div>
                </div>
                <div className="my-gear-list-inner">
                  <div className="my-gear-list-circle-shape">
                    <div className="my-gear-list-dot-shape"></div>
                  </div>
                  <div className="my-gear-list-text">Alpha 7 IV Full-Frame</div>
                </div>
                <div className="my-gear-list-inner">
                  <div className="my-gear-list-circle-shape">
                    <div className="my-gear-list-dot-shape"></div>
                  </div>
                  <div className="my-gear-list-text">
                    Sony Alpha 330 DSLR-A330
                  </div>
                </div>
                <div className="my-gear-list-inner">
                  <div className="my-gear-list-circle-shape">
                    <div className="my-gear-list-dot-shape"></div>
                  </div>
                  <div className="my-gear-list-text">
                    Lenavo E Lenses LME-FR7
                  </div>
                </div>
                <div className="my-gear-list-inner">
                  <div className="my-gear-list-circle-shape">
                    <div className="my-gear-list-dot-shape"></div>
                  </div>
                  <div className="my-gear-list-text">
                    Sony Wide Angle Lenses
                  </div>
                </div>
              </div>
              <div className="slider-button-block">
                <a href="blog" className="button-primary w-inline-block">
                  <div className="button-text">Read more our blog</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gear;

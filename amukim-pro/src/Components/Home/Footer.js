import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-inner">
          <div className="container w-container">
            <div className="footer-wrapper">
              <div className="footer-logo-block">
                <Link to="/" className="footer-brand w-inline-block">
                  <img
                    src="logo2.png"
                    loading="lazy"
                    alt="Footer Logo"
                    height="256px"
                    width="256px"
                    className="footer-logo"
                  />
                </Link>
                <p className="footer-text">
                Elevating Stories through Captivating Videography, Your Vision, My Lens.
                </p>
                <div className="footer-social-block">
                  <Link
                    to="https://www.facebook.com/AmukimProduction16"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link
                    to="https://www.instagram.com/amukimproduction/"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link
                    to="https://www.youtube.com/Amukimproduction"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  {/* <a
                    to="https://www.linkedin.com/"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <i className="fa-brands fa-threads"></i>
                  </a> */}
                </div>
                <div className="webflow-info-block">
                  <div className="webflow-info-circle"></div>
                  <div className="webflow-info-text">
                    Powered by
                    <Link
                      to="https://abhitechbot.com"
                      target="_blank"
                      className="webflow-info-link"
                    >
                      &nbsp;Abhitechbot
                    </Link>
                  </div>
                </div>
              </div>
              <div className="footer-content-block">
                <div className="footer-block">
                  <div className="footer-title">PAGES</div>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                  <Link to="services" className="footer-link">
                    Our Services
                  </Link>
                  <Link to="gallery" className="footer-link">
                    Gallery
                  </Link>
                  <Link to="blog" className="footer-link">
                    Blog Post
                  </Link>
                  <Link to="team" className="footer-link">
                    Our Team
                  </Link>
                  <Link to="contact" className="footer-link">
                    Contact us
                  </Link>
                </div>
                <div className="footer-block">
                  <div className="footer-title">Other Pages</div>
                  <Link to="#" className="footer-link">
                    Photography
                  </Link>
                  <Link to="#" className="footer-link">
                    Testimonial
                  </Link>
                  <Link to="#" className="footer-link">
                    Change Log
                  </Link>
                  <Link to="#" className="footer-link">
                    License
                  </Link>
                </div>
                <div className="footer-block">
                  <div className="footer-title">Subscribe</div>
                  <div className="contact-number-block">
                    <p className="subscribe-text">
                    Capturing Moments, Crafting Stories, Shaping Memories.
                    </p>
                    <div className="subscribe-form w-form">
                      <form
                        id="wf-form-Hero-Form"
                        name="wf-form-Hero-Form"
                        data-name="Hero Form"
                        method="get"
                        className="subscribe-form-inner"
                        data-wf-page-id="63f05cba0a6a4d0d0eeb5951"
                        data-wf-element-id="03f86ecc-45b1-b0be-cbc0-f4c5e303090d"
                      >
                        <input
                          type="email"
                          className="subscribe-form-field w-input"
                          maxLength="256"
                          name="Hero-Email-4"
                          data-name="Hero Email 4"
                          aria-label="Enter your email"
                          placeholder="Your Email Address"
                          id="Hero-Email-4"
                          required=""
                        />
                        <input
                          type="submit"
                          value="Subscribe"
                          data-wait="Please wait..."
                          className="subscribe-button w-button"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-copyright">
                © 2023
                <Link
                  to="https://abhitechbot.com"
                  target="_blank"
                  className="company-link"
                >
                  &nbsp;Amukim Production
                </Link>
                . All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Link to="https://wa.me/+918906369948?text=Hi%20Amukim%20Production" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp"></i>
      </Link>

    </>
  );
}

export default Footer;

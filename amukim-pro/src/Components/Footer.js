import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-inner">
          <div className="container w-container">
            <div className="footer-wrapper">
              <div className="footer-logo-block">
                <a href="#" className="footer-brand w-inline-block">
                  <img
                    src="logo2.png"
                    loading="lazy"
                    alt="Footer Logo"
                    height="256px"
                    width="256px"
                    className="footer-logo"
                  />
                </a>
                <p className="footer-text">
                  There are many variations passag of Lorem Ipsum available but
                  the
                </p>
                <div className="footer-social-block">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <img
                      src="https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f6e5c1c991f90b9adb0eca_facebook-icon.svg"
                      loading="lazy"
                      alt="Social Icon Link Image"
                      className="social-icon-link-image"
                    />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <img
                      src="https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f6e5d10c83402e4a4a0fa5_twitter-icon.svg"
                      loading="lazy"
                      alt="Social Icon Link Image"
                      className="social-icon-link-image"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <img
                      src="https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f6e5dd46a353139d52a040_derrible.icon.svg"
                      loading="lazy"
                      alt="Social Icon Link Image"
                      className="social-icon-link-image"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="social-icon-link-block w-inline-block"
                  >
                    <img
                      src="https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/63f6e5f170034c633ea7602d_skype-icon.svg"
                      loading="lazy"
                      alt="Social Icon Link Image"
                      className="social-icon-link-image"
                    />
                  </a>
                </div>
                <div className="webflow-info-block">
                  <div className="webflow-info-circle"></div>
                  <div className="webflow-info-text">
                    Powered by
                    <a
                      href="https://abhitechbot.com"
                      target="_blank"
                      className="webflow-info-link"
                    >
                       &nbsp;Abhitechbot
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-content-block">
                <div className="footer-block">
                  <div className="footer-title">PAGES</div>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                  <a href="#" className="footer-link">
                    Our Services
                  </a>
                  <a href="#" className="footer-link">
                    Gallery
                  </a>
                  <a href="#" className="footer-link">
                    Blog Post
                  </a>
                  <a href="#" className="footer-link">
                    Our Team
                  </a>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </div>
                <div className="footer-block">
                  <div className="footer-title">Other Pages</div>
                  <a href="#" className="footer-link">
                    Photography
                  </a>
                  <a href="#" className="footer-link">
                    Testimonial
                  </a>
                  <a href="#" className="footer-link">
                    Style Guide
                  </a>
                  <a href="#" className="footer-link">
                    Change Log
                  </a>
                  <a href="#" className="footer-link">
                    License
                  </a>
                </div>
                <div className="footer-block">
                  <div className="footer-title">Subscribe</div>
                  <div className="contact-number-block">
                    <p className="subscribe-text">
                      There are many variations passag of Lorem Ipsum available.
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
                <a
                  href="https://abhitechbot.com"
                  target="_blank"
                  className="company-link"
                >
                  &nbsp;Amukim Production
                </a>
                . All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

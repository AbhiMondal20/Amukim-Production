import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

function Contact() {
    const styleContact = {
        paddingBottom: '75%',
      };
  return (
    <>
      <Header />
      <div className="contact-info-section">
        <div className="container w-container">
          <div className="contact-info-wrapper">
            <div className="single-info-block">
              <div className="info-icon-block">
                <img
                  src="images/address-icons.png"
                  loading="lazy"
                  alt="Contact Icon"
                  className="contact-info-icon-image"
                />
              </div>
              <div className="single-info-content">
                <h4 className="single-info-title">Address</h4>
                <div className="address-text">
                Shaktigarh Road Number 3, Sukantapally, Pradip Nagar, Siliguri, West Bengal 734005
                </div>
              </div>
            </div>
            <div className="single-info-block">
              <div className="info-icon-block">
                <img
                  src="images/mob-icons.png"
                  loading="lazy"
                  alt="Contact Icon"
                  className="contact-info-icon-image"
                />
              </div>
              <div className="single-info-content">
                <h4 className="single-info-title">Phone</h4>
                <div className="contact-link-block">
                  <div className="single-contact-link">
                    <div className="link-demo-text">Mobile:</div>
                    <a href="tel:+918906369948" className="link-text">
                    +91 8906369948
                    </a>
                  </div>
                  {/* <div className="single-contact-link">
                    <div className="link-demo-text">Hotline:</div>
                    <a href="tel:01234-567890" className="link-text">
                      01234 - 567890
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="single-info-block">
              <div className="info-icon-block">
                <img
                  src="images/mail-icons.png"
                  loading="lazy"
                  alt="Contact Icon"
                  className="contact-info-icon-image"
                />
              </div>
              <div className="single-info-content">
                <h4 className="single-info-title">Email</h4>
                <div className="contact-link-block">
                  {/* <div className="single-contact-link">
                    <a href="#" className="link-text">
                      demo@demo.com
                    </a>
                  </div> */}
                  <div className="single-contact-link">
                    <a href="mailto:amukimproduction@gmail.com" className="link-text">
                    amukimproduction@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="container w-container">
          <div className="section-title-block contact-title-block center-block">
            <div className="section-intro-block">Have Be Any Question?</div>
            <h2 className="section-title">
              Feel Free To Contact With Us Please Send a Message
            </h2>
          </div>
          <div className="contact-form-wrapper">
            <div className="form-block w-form">
              <form
                id="wf-form-Contact-Form"
                name="wf-form-Contact-Form"
                data-name="Wf Form Contact Form"
                method="get"
                className="form"
                data-wf-page-id="63f9d7d269cf80409bf7f52f"
                data-wf-element-id="34aae21c-3ad1-d58e-f2d8-42ee0715f598"
              >
                <div className="contact-form-grid">
                  <div
                    id="w-node-_34aae21c-3ad1-d58e-f2d8-42ee0715f59a-9bf7f52f"
                    className="form-column"
                  >
                    <input
                      type="text"
                      className="form-input-field w-input"
                      maxlength="256"
                      name="First-Name"
                      data-name="First Name"
                      placeholder="First name *"
                      id="First-Name"
                      required=""
                    />
                  </div>
                  <div
                    id="w-node-_34aae21c-3ad1-d58e-f2d8-42ee0715f59c-9bf7f52f"
                    className="form-column"
                  >
                    <input
                      type="text"
                      className="form-input-field w-input"
                      maxlength="256"
                      name="Last-Name"
                      data-name="Last Name"
                      placeholder="Last name *"
                      id="Last-Name"
                      required=""
                    />
                  </div>
                  <div
                    id="w-node-_34aae21c-3ad1-d58e-f2d8-42ee0715f59e-9bf7f52f"
                    className="form-column"
                  >
                    <input
                      type="email"
                      className="form-input-field w-input"
                      maxlength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Email *"
                      id="Email"
                      required=""
                    />
                  </div>
                  <div
                    id="w-node-_34aae21c-3ad1-d58e-f2d8-42ee0715f5a0-9bf7f52f"
                    className="form-column"
                  >
                    <input
                      type="text"
                      className="form-input-field w-input"
                      maxlength="256"
                      name="Subject"
                      data-name="Subject"
                      placeholder="Subject"
                      id="Subject"
                    />
                  </div>
                  <div
                    id="w-node-_34aae21c-3ad1-d58e-f2d8-42ee0715f5a2-9bf7f52f"
                    className="form-column"
                  >
                    <textarea
                      data-name="Message"
                      maxlength="5000"
                      id="Message"
                      name="Message"
                      placeholder="Your Message"
                      className="form-textarea w-input"
                    ></textarea>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  data-wait="Please wait..."
                  className="button-primary contact-button w-button"
                />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="map-section">
        <div className="w-richtext">
          <figure
            style={styleContact}
            className="w-richtext-align-fullwidth w-richtext-figure-type-video"
          >
            <div>
              <iframe
                allowfullscreen="true"
                frameborder="0"
                scrolling="no"
                src="http://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.google.com%2Fmaps%2Fembed%2Fv1%2Fplace%3Fcenter%3D40.7178143%252C-74.0781629%26key%3DAIzaSyD9HrlRuI1Ani0-MTZ7pvzxwxi4pgW0BCY%26zoom%3D13%26q%3DNew%2BYork%2C%2BNY%2C%2BUSA&amp;display_name=Google+Maps&amp;url=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FNew%2BYork%2C%2BNY%2C%2BUSA%2F%4040.7178143%2C-74.0781629%2C13z%2Fdata%3D%214m5%213m4%211s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62%218m2%213d40.7127766%214d-74.0059769%3Fshorturl%3D1&amp;image=http%3A%2F%2Fmaps-api-ssl.google.com%2Fmaps%2Fapi%2Fstaticmap%3Fcenter%3D40.7178143%2C-74.0781629%26zoom%3D15%26size%3D250x250%26sensor%3Dfalse&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=google"
                title="New York, NY, USA"
              ></iframe>
            </div>
          </figure>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default Contact;

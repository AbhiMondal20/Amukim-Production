import React from 'react'
import Header from './Home/Header'
import Footer from './Home/Footer'

function About() {
    return (
        <>
            <Header />
            <br/>   
            <br/>   
            <br/>   
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
                                <div className="section-intro-block">About Us</div>
                                <h2 className="section-title">
                                    Transforming Ideas into Compelling Visual Stories through Video
                                </h2>
                                <p className="section-summary">
                                    We are specialize in crafting engaging and captivating videos that resonate with audiences. With a keen eye for storytelling and a passion for visual communication, We bring ideas to life through dynamic visuals, compelling narratives, and innovative editing techniques. Our mission is to help brands, individuals, and organizations effectively convey their messages and stories through the power of video.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
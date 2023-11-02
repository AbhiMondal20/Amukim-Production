import React from 'react'
import { Link } from 'react-router-dom'


function Slider() {
    return (
        <>
            <div className="slider-section">
                <div data-delay="4000" data-animation="cross" className="slider-wrapper-block w-slider" data-autoplay="true"
                    data-easing="ease-in-out" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                    data-nav-spacing="3" data-duration="1000" data-infinite="true">
                    <div className="slider-mask-block w-slider-mask">
                        <div className="slider-item w-slide">
                            <div className="single-slider">
                                <div className="single-slider-content-inner">
                                    <div className="single-slider-content">
                                        <div className="slider-intro-text">Welcome To Amukim Production</div>
                                        <h1 className="slider-title">
                                            Video Content Creators
                                        </h1>
                                        <p className="slider-summary">
                                        Unlocking creativity through dynamic visuals. I craft engaging video content that captivates, informs, and inspires your audience. Let's tell your story through film.
                                        </p>
                                        <div className="slider-button-block">
                                            <Link to="contact" className="button-primary w-inline-block">
                                                <div className="button-text">Get in touch</div>
                                                <div className="button-arrow-icon w-embed">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                                        <path id="Vector"
                                                            d="M20.7983 7.97827L13.8631 14.7628C13.614 15.0474 13.1762 15.0806 12.8853 14.8368C12.5943 14.5931 12.5604 14.1648 12.8096 13.8802C12.8329 13.8537 12.8581 13.8289 12.8853 13.8062L18.6345 8.17505H0.693503C0.310515 8.17505 0 7.87128 0 7.49656C0 7.12184 0.310515 6.81813 0.693503 6.81813H18.6345L12.8853 1.19377C12.5943 0.950055 12.5604 0.521748 12.8096 0.237163C13.0588 -0.0474224 13.4966 -0.0805969 13.7875 0.163175C13.8146 0.185913 13.8399 0.210634 13.8631 0.237163L20.7984 7.02173C21.0672 7.28626 21.0672 7.71363 20.7983 7.97827Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </Link><Link to="about" className="button-primary slider-button slider-button-two w-inline-block">
                                                <div className="button-text">Read More</div>
                                                <div className="button-arrow-icon w-embed">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                                        <path id="Vector"
                                                            d="M20.7983 7.97827L13.8631 14.7628C13.614 15.0474 13.1762 15.0806 12.8853 14.8368C12.5943 14.5931 12.5604 14.1648 12.8096 13.8802C12.8329 13.8537 12.8581 13.8289 12.8853 13.8062L18.6345 8.17505H0.693503C0.310515 8.17505 0 7.87128 0 7.49656C0 7.12184 0.310515 6.81813 0.693503 6.81813H18.6345L12.8853 1.19377C12.5943 0.950055 12.5604 0.521748 12.8096 0.237163C13.0588 -0.0474224 13.4966 -0.0805969 13.7875 0.163175C13.8146 0.185913 13.8399 0.210634 13.8631 0.237163L20.7984 7.02173C21.0672 7.28626 21.0672 7.71363 20.7983 7.97827Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item w-slide">
                            <div className="single-slider single-slider-two">
                                <div className="single-slider-content-inner">
                                    <div className="single-slider-content">
                                        <div className="slider-intro-text">Welcome To Pixoto World</div>
                                        <h1 className="slider-title">
                                            Video Content Creators
                                        </h1>
                                        <p className="slider-summary">
                                        Unlocking creativity through dynamic visuals. I craft engaging video content that captivates, informs, and inspires your audience. Let's tell your story through film.
                                        </p>
                                        <div className="slider-button-block">
                                            <a href="#" className="button-primary w-inline-block">
                                                <div className="button-text">Get in touch</div>
                                                <div className="button-arrow-icon w-embed">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                                        <path id="Vector"
                                                            d="M20.7983 7.97827L13.8631 14.7628C13.614 15.0474 13.1762 15.0806 12.8853 14.8368C12.5943 14.5931 12.5604 14.1648 12.8096 13.8802C12.8329 13.8537 12.8581 13.8289 12.8853 13.8062L18.6345 8.17505H0.693503C0.310515 8.17505 0 7.87128 0 7.49656C0 7.12184 0.310515 6.81813 0.693503 6.81813H18.6345L12.8853 1.19377C12.5943 0.950055 12.5604 0.521748 12.8096 0.237163C13.0588 -0.0474224 13.4966 -0.0805969 13.7875 0.163175C13.8146 0.185913 13.8399 0.210634 13.8631 0.237163L20.7984 7.02173C21.0672 7.28626 21.0672 7.71363 20.7983 7.97827Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </a><a href="#" className="button-primary slider-button slider-button-two w-inline-block">
                                                <div className="button-text">Read More</div>
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
                        <div className="slider-item w-slide">
                            <div className="single-slider">
                                <div className="single-slider-content-inner">
                                    <div className="single-slider-content">
                                        <div className="slider-intro-text">Welcome To Pixoto World</div>
                                        <h1 className="slider-title">
                                            Video Content Creators
                                        </h1>
                                        <p className="slider-summary">
                                        Unlocking creativity through dynamic visuals. I craft engaging video content that captivates, informs, and inspires your audience. Let's tell your story through film.
                                        </p>
                                        <div className="slider-button-block">
                                            <a href="#" className="button-primary w-inline-block">
                                                <div className="button-text">Get in touch</div>
                                                <div className="button-arrow-icon w-embed">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                                                        <path id="Vector"
                                                            d="M20.7983 7.97827L13.8631 14.7628C13.614 15.0474 13.1762 15.0806 12.8853 14.8368C12.5943 14.5931 12.5604 14.1648 12.8096 13.8802C12.8329 13.8537 12.8581 13.8289 12.8853 13.8062L18.6345 8.17505H0.693503C0.310515 8.17505 0 7.87128 0 7.49656C0 7.12184 0.310515 6.81813 0.693503 6.81813H18.6345L12.8853 1.19377C12.5943 0.950055 12.5604 0.521748 12.8096 0.237163C13.0588 -0.0474224 13.4966 -0.0805969 13.7875 0.163175C13.8146 0.185913 13.8399 0.210634 13.8631 0.237163L20.7984 7.02173C21.0672 7.28626 21.0672 7.71363 20.7983 7.97827Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </a><a href="#" className="button-primary slider-button slider-button-two w-inline-block">
                                                <div className="button-text">Read More</div>
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
                    <div className="slider-nav-none w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                    </div>
                    <div className="slider-nav-none w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                    </div>
                    <div className="slider-dots w-slider-nav w-round"></div>
                </div>
            </div>
        </>
    )
}

export default Slider
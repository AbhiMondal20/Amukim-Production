import React from 'react';
import HomeHeader from "./Home/Header";
import HomeFooter from "./Home/Footer";
import HomeAbout from "./Home/About";
import HomeSlider from "./Home/Slider";
import HomeService from "./Home/Service";
import HomeBlog from "./Home/Blog";
import HomeTestimonials from "./Home/Testimonials";
import HomeGear from "./Home/Gear";
import HomeCall from "./Home/Call";
import HomePortfolio from "./Home/Portfolio";
function Home() {
    return (
        <>
            <div className="page-wrapper">
                <HomeHeader />
                <HomeSlider />
                <HomeAbout />
                <HomeService />
                <HomePortfolio />
                <HomeCall />
                <HomeGear />
                <HomeTestimonials />
                <HomeBlog />
                <HomeFooter />
            </div>
        </>
    )
}

export default Home;

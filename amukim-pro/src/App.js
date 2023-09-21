import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Slider from "./Components/Slider";
import Service from "./Components/Service";
import Blog from "./Components/Blog";
import Testimonials from "./Components/Testimonials";
import Gear from "./Components/Gear";
import Call from "./Components/Call";
import Portfolio from "./Components/Portfolio";
function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Slider/>
        <About/>
        <Service/>
        <Portfolio/>
        <Call/>
        <Gear/>
        <Testimonials/>
        <Blog/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

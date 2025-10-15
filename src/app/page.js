'use client'
import { useTawkTo } from "../helperFunction/useTawkTo";
// import  Nav from "../components/Nav" 
import HeroSection from "../components/HeroSection";
import MileStone from "../components/MileStone";
import About from "../components/About"
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
// import Pricing from "../components/Pricing";
// import Footer from "../components/Footer";
import OurProcess from "../components/OurProcess";
import CallToAction from "../components/CallToAction";


export default function Home() {
  // function to display live chat, please note it is already in a useeffect hook
  useTawkTo();

  return (
    <div>
      {/* <Nav /> */}
      <HeroSection />
      <MileStone />
      <About />
      <Services />
      {/* <Pricing /> */}
      <Testimonial />
      <Contact />
      <OurProcess />
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
}

'use client'
import { useTawkTo } from "../helperFunction/useTawkTo";
import  Nav from "../components/Nav" 
import HeroSection from "../components/HeroSection";
import MileStone from "../components/MileStone";
import Tawk from "../components/Tawk";
import About from "../components/About"
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import OurProcess from "../components/OurProcess";
import CallToAction from "../components/CallToAction"; 


export default function Home() {
  // function to display live chat, please note it is already in a useeffect hook
  useTawkTo();

  return (
    <div>
      <Nav />
      <Tawk />
      <HeroSection />
      <MileStone />
      <About />
      <Services />
      <Pricing />
      <Testimonial />
      <OurProcess />
      <CallToAction />
      <Footer />
    </div>
  );
}

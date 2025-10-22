'use client'
import { useTawkTo } from "../helperFunction/useTawkTo";
import HeroSection from "../components/HeroSection";
import ViewBlogsCTA from "../components/ViewBlogsCTA";
import MileStone from "../components/MileStone";
import PastWorks from "../components/PastWorks";
import About from "../components/About"
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import OurProcess from "../components/OurProcess";
import CallToAction from "../components/CallToAction";


export default function Home() {
  // function to display live chat, please note it is already in a useeffect hook
  useTawkTo();

  return (
    <div>
      <HeroSection />
      <MileStone />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <OurProcess />
      <PastWorks />
      <ViewBlogsCTA />
      <CallToAction />
    </div>
  );
}

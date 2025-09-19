'use client'
import { useTawkTo } from "@/helper function/useTawkTo";
import { Nav, HeroSection, MileStone, Tawk, About, Services, Testimonial, Pricing, Footer, OurProcess, CallToAction } from "../AllFiles"


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
      < CallToAction />
      <Footer />
    </div>
  );
}

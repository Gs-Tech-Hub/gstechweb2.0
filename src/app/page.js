'use client'
import Image from "next/image";
import { Nav, HeroSection, MileStone, ChatWoot, About, Services, Testimonial, Pricing, Footer, OurProcess, CallToAction } from "../AllFiles"


export default function Home() {
  return (
    <div>

      {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
      <Nav />
      {/* <ChatWoot /> */}
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

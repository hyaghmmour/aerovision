"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUsSection } from "@/components/sections/how-it-works-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";

import { PortfolioSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <FeaturesSection />
        <ServicesSection />

        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

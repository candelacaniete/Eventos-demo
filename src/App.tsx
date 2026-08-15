import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SpaceSection } from "./components/SpaceSection";
import { EventCategories } from "./components/EventCategories";
import { Proposals } from "./components/Proposals";
import { Experiences } from "./components/Experiences";
import { Testimonials } from "./components/Testimonials";
import { AvailabilityForm } from "./components/AvailabilityForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppBar } from "./components/WhatsAppBar";
import { bindSmoothAnchors } from "./lib/smoothScroll";

export default function App() {
  useEffect(() => bindSmoothAnchors(), []);

  return (
    <div className="page-shell overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SpaceSection />
        <EventCategories />
        <Proposals />
        <Experiences />
        <Testimonials />
        <AvailabilityForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppBar />
    </div>
  );
}

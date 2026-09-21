import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TechnicianSection from "../components/TechnicianSection.jsx";
import FutureProofBanner from "../components/FutureProofBanner.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import WhyChooseSection from "../components/WhyChooseSection.jsx";
import PlansSection from "../components/PlansSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <TechnicianSection />
      <FutureProofBanner />
      <ServicesSection />
      <GallerySection />
      <WhyChooseSection />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

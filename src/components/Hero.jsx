import { Link } from "react-router-dom";
import { SITE } from "../siteConfig";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <section className="relative bg-brand-dark">
      <div className="relative h-[725px] md:h-[725px] overflow-hidden">
        <img
          src="/images/hero-car.jpg"
          alt="Hybrid vehicle serviced by HCC Mechatronics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-[1440px] mx-auto h-full px-5 md:px-[140px] flex flex-col justify-center pt-24">
          <Reveal>
            <h1 className="font-heading font-bold text-white text-[32px] leading-tight md:text-[48px] max-w-[649px]">
              Certified Hybrid, EV &amp; Automotive Specialist
            </h1>
          </Reveal>
          <p className="font-body text-white text-[16px] leading-relaxed max-w-[517px] mt-6">
            11 years of surgical precision in high-voltage diagnostics, battery rebuilds, and
            complex mechatronic systems for Nigeria's evolving mobility landscape
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/hire-service"
              className="bg-brand hover:bg-brand-bright transition-colors text-white font-bold text-[16px] px-[30px] py-[15px]"
            >
              Hire Service
            </Link>
            <a
              href="#services"
              className="border-2 border-white text-white font-bold text-[16px] px-[30px] py-[15px] hover:bg-white hover:text-brand-dark transition-colors"
            >
              View Technical Services
            </a>
          </div>
        </div>
      </div>

      <div className="bg-brand">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] py-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <Stat value="11" label="Years Experience" />
          <Stat value="200+" label="Vehicles Serviced" />
          <Stat value="100%" label="Certified Diagnostics" />
          <Stat value="24/7" label="Technical Support" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-body font-bold text-[20px]">{value}</p>
      <p className="font-body text-[16px]">{label}</p>
    </div>
  );
}

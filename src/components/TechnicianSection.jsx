import Reveal from "../components/Reveal";
export default function TechnicianSection() {
  return (
    <section id="technician" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] py-[120px] md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-[20px] overflow-hidden">
          <img
            src="/images/technician.png"
            alt="Oluseun Adeola-Olushola, Lead Hybrid & Automotive Electrical Technician"
            className="w-full h-full object-cover max-h-[573px]"
          />
        </div>

        <div>
          <p className="font-heading font-bold text-brand text-[16px] mb-3">Meet The Technician</p>
          <Reveal>
            <h2 className="font-heading font-bold text-black text-[32px] md:text-[48px] leading-tight mb-3">
              Oluseun Adeola-Olushola
            </h2>
          </Reveal>
          <p className="font-body italic font-semibold text-brand text-[16px] mb-6">
            Lead Hybrid &amp; Automotive Electrical Technician
          </p>
          <div className="font-body text-[16px] leading-relaxed text-black space-y-4">
            <p>
              With 11 years of hands-on experience in hybrid and automotive electrical systems,
              Oluseun Gabriel Adeola-Olushola is one of Lagos's most experienced certified hybrid
              technicians. His specialisation spans the full hybrid lifecycle, from complex fault
              diagnosis to high-voltage battery rebuilding, HVAC system installation, PHEV (Plugin Hybrid Electric Vehicle)
              and apprentice training.
            </p>
            <p>
              What separates Oluseun from the Lagos market is not just experience, it is
              documented, certified expertise. When your hybrid vehicle arrives at HCC
              Mechatronics, it is assessed by a technician who has been formally trained and
              certified, who can read technical schematics, and who has rebuilt hybrid
              high-voltage battery packs from the cell level up. That is not common in Nigeria. At
              HCC, it is the standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

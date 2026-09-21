import { Star } from "lucide-react";
import { TESTIMONIALS } from "../siteConfig";
import Reveal from "../components/Reveal";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] pt-[90px] pb-[110px] md:py-35">
        <div className="text-center mb-14">
          <p className="font-heading font-bold text-brand text-[16px] mb-3">What We Do | Our Expertise</p>
          <Reveal>
            <h2 className="font-heading font-bold text-black text-[32px] md:text-[48px]">
              What <span className="text-brand">Customers</span> Are Saying
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white border border-[#d7d7d7] rounded-[5px] p-8 flex flex-col">
              <div className="flex gap-1 mb-4 text-brand-bright">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <h3 className="font-heading font-semibold text-[20px] text-black mb-3">{t.title}</h3>
              <p className="font-body text-[16px] text-black/80 leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <hr className="border-[#e2e2e2] mb-6" />
              <div className="flex items-center gap-4">
                <div className="bg-brand-plum text-white font-heading font-semibold text-[20px] rounded-full size-[49px] flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-[16px] text-black">{t.name}</p>
                  <p className="font-body text-[10px] text-[#434343]">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import certifiedIcon from "../assets/icons/certified-trainer.svg";
import batteryrebuildIcon from "../assets/icons/star.svg";
import diagnosticsIcon from "../assets/icons/advanced-diagnostics.svg";
import documentationIcon from "../assets/icons/document.svg";
import Reveal from "../components/Reveal";

const ICONS = [certifiedIcon, batteryrebuildIcon, diagnosticsIcon, documentationIcon];
import { WHY_HCC } from "../siteConfig";


export default function WhyChooseSection() {
  return (
    <section id="why-hcc" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-heading font-bold text-brand text-[16px] mb-3">Why Choose HCC</p>
          <Reveal>
            <h2 className="font-heading font-bold text-black text-[28px] md:text-[48px] leading-tight mb-6">
              Not Every Workshop <span className="text-brand">Understands Hybrid &amp; EV</span>
            </h2>
          </Reveal>
          <p className="font-body text-black text-[16px] leading-relaxed mb-10 max-w-[560px]">
            Every Lagos car owner has a story about a mechanic who guessed wrong, charged too
            much, or returned the vehicle worse than it arrived. Oluseun built HCC Mechatronics
            specifically to be the exception, a workshop where the diagnosis is based on certified
            knowledge, the pricing is honest, and the work is documented.
          </p>

          <div className="space-y-8">
            {WHY_HCC.map((item, i) => {
              const iconSrc = ICONS[i];
              return (
                <div key={item.title} className="flex gap-5">
                  <div className="bg-brand rounded-[5px] size-[60px] shrink-0 flex items-center justify-center">
                    <img src={iconSrc} alt={item.title} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-brand text-[16px] mb-1">{item.title}</p>
                    <p className="font-body text-black text-[16px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[20px] overflow-hidden h-[320px] lg:h-[703px]">
          <img
            src="/images/why-choose.png"
            alt="HCC Mechatronics technician diagnosing a hybrid vehicle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

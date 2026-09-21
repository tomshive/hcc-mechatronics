import { CheckCircle2 } from "lucide-react";
import { PLANS, buildWhatsAppLink } from "../siteConfig";
import Reveal from "../components/Reveal";

export default function PlansSection() {
  return (
    <section id="packages" className="bg-brand-soft">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] py-[90px] md:py-24">
        <div className="text-center mb-14">
          <p className="font-heading font-bold text-brand text-[16px] mb-3">Protect Your Vehicle Upfront</p>
          <Reveal>
            <h2 className="font-heading font-bold text-black text-[32px] md:text-[48px]">
              Annual <span className="text-brand">Maintenance</span> Plans
            </h2>
          </Reveal>
          <p className="font-body text-black text-[16px] max-w-[565px] mx-auto mt-4">
            Protect your investment for hybrid and conventional vehicles. Priority booking.
            Documented service history. Peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[20px] p-8 flex flex-col ${
                plan.dark
                  ? "bg-brand-panel border border-brand text-white"
                  : "border border-brand text-black"
              }`}
            >
              <h3 className="font-heading font-bold text-[20px] mb-2">{plan.name}</h3>
              <p className={`font-heading font-bold text-[24px] mb-6 ${plan.dark ? "text-brand-bright" : "text-brand"}`}>
                {plan.price} <span className="font-body font-normal text-[16px]">/ year</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-body text-[16px]">
                    <CheckCircle2 size={18} className="text-brand-bright shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink(
                  `Hi HCC Mechatronics, I'd like to enquire about the ${plan.name} (${plan.price} / year).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand hover:bg-brand-bright transition-colors text-white font-bold text-[16px] text-center px-[30px] py-[15px]"
              >
                Enquire via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

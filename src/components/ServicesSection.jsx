import batteryIcon from "../assets/icons/hybrid-vector.svg";
import evIcon from "../assets/icons/ev-diagnostics.svg";
import hybridIcon from "../assets/icons/thunderbolt-hybrid.svg";
import inspectionIcon from "../assets/icons/inspect.svg";
import hvacIcon from "../assets/icons/frost.svg";
import maintenanceIcon from "../assets/icons/spanner.svg";
import Reveal from "../components/Reveal";

const ICONS = [batteryIcon, evIcon, hybridIcon, inspectionIcon, hvacIcon, maintenanceIcon];

import { SERVICES } from "../siteConfig";


export default function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] py-[90px] md:py-24">
        <Reveal>
          <div className="text-center mb-14">
            <p className="font-heading font-bold text-brand text-[16px] mb-3">What We Do | Our Expertise</p>
            <h2 className="font-heading font-bold text-black text-[32px] md:text-[48px]">
              Precision Engineering <span className="text-brand">Solutions</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service, i) => {
            const iconSrc = ICONS[i];
            return (
              <Reveal key={service.title} delay={i * 100} from="bottom">
                <div
                  key={service.title}
                  className="h-full flex flex-col bg-white border-2 border-brand/20 rounded-[5px] p-8 hover:border-brand transition-colors"
                  >
                  <img src={iconSrc} alt="" className="w-[30px] h-[30px] mb-5" />
                  <h3 className="font-heading font-semibold text-[20px] text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-[16px] text-black/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
            </Reveal>);
          })}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";
import batteryStatIcon from "../assets/icons/battery.svg";
import thunderboltIcon from "../assets/icons/thunderbolt.svg";
import Reveal from "../components/Reveal";

const POINTS = [
  "Battery Health State (SOH) Assessments",
  "On-board Charger (OBC) Diagnostics",
  "Thermal Management System Repairs",
];

export default function FutureProofBanner() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/images/gallery-1.jpg')] bg-cover bg-center" />
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-[140px] pt-[90px] pb-[110px] md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[48px] leading-tight mb-6">
              Future-Proof Vehicle Management
            </h2>
          </Reveal>
          <p className="font-body text-white/85 text-[16px] leading-relaxed max-w-[475px] mb-8">
            As the automotive world shifts toward electrification, HCC Mechatronics provides the
            infrastructure and expertise to keep your high-voltage investment on the road. We
            don't just repair; we optimize.
          </p>
          <ul className="space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-white font-body text-[16px]">
                <CheckCircle2 size={22} className="text-brand-bright shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white/10 backdrop-blur-sm rounded-[5px] p-6 flex flex-col gap-3">
            <img src={batteryStatIcon} alt="" className="w-8 h-8" />
            <p className="font-body font-semibold text-white text-[16px]">98% Efficient</p>
            <p className="font-body text-white/80 text-[14px]">
              Average battery cell balance precision post-rebuild
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-[5px] p-6 flex flex-col gap-3 mt-8">
            <img src={thunderboltIcon} alt="" className="w-8 h-8" />
            <p className="font-body font-semibold text-white text-[16px]">Safe Discharge</p>
            <p className="font-body text-white/80 text-[14px]">
              Protocols for 400V+ high-voltage systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

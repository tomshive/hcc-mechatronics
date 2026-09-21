import whatsappIcon from "../assets/icons/whatsapp.svg";
import phoneIcon from "../assets/icons/phone-2.svg";
import locationIcon from "../assets/icons/location-pin.svg";
import facebookIcon from "../assets/icons/facebook.svg";
const ICONS = [whatsappIcon, phoneIcon, locationIcon, facebookIcon];

import { SITE, NAV_LINKS } from "../siteConfig";

export default function Footer() {
  return (
    <footer className="bg-brand-tint text-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] py-20 grid grid-cols-1 md:grid-cols-[360px_1fr_1fr_1fr] gap-12">
        <div>
          <a href="/" className="flex items-baseline gap-1 mb-4">
            <span className="font-heading font-bold text-2xl text-brand">HCC</span>
            <span className="font-body text-lg text-black">Mechatronics</span>
          </a>
          <p className="font-body text-[16px] text-black/70 mb-6">
            Lagos's certified hybrid and automotive electrical specialist. 11 years of documented
            expertise. HV battery, HVAC, and electrical diagnostics for Toyota, Lexus, and all
            conventional vehicles.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="border border-brand rounded-[5px] bg-brand/10 text-brand text-[10px] font-bold uppercase px-[10px] py-[5px]">
              Automedics Certified
            </span>
            <span className="border border-brand rounded-[5px] bg-brand/10 text-brand text-[10px] font-bold uppercase px-[10px] py-[5px]">
              OVH Energy Trained
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand mb-4">Services</h4>
          <ul className="space-y-3 font-body text-[16px] text-black/80">
            <li>HV Battery Services</li>
            <li>HVAC / Air Conditioning</li>
            <li>Electrical Diagnostics</li>
            <li>Pre-Purchase Inspection</li>
            <li>General Maintenance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand mb-4">Workshop</h4>
          <ul className="space-y-3 font-body text-[16px] text-black/80">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-brand transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand mb-4">Contact Info</h4>
          <ul className="space-y-3 font-body text-[16px] text-black/80">
          <li className="flex items-center gap-3">
            <img src={ICONS[0]} alt="" className="w-[18px] h-[18px]" />
            <a href={`https://wa.me/${SITE.phoneWhatsApp}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              {SITE.phoneDisplay}
            </a>
          </li>
            <li className="flex items-center gap-3">
              <img src={ICONS[1]} alt="" className="w-[18px] h-[18px]" />
              <a href={`tel:${SITE.phoneDisplay}`} className="hover:text-brand transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src={ICONS[2]} alt="" className="w-[22px] h-[22px]" />
              {SITE.address}
            </li>
            <li className="flex items-center gap-3">
              <img src={ICONS[3]} alt="" className="w-[18px] h-[18px]" />
              <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              {SITE.facebook}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="bg-brand-navy py-4">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] flex flex-col md:flex-row items-center justify-between gap-2 text-[14px] text-white/60 font-body">
          <p className="text-align-left md:text-align-center">
            © {new Date().getFullYear()} Hybrid & Conventional Cars Mechatronics Limited. All rights reserved. {SITE.address}.
          </p>
          <p><a href="https://tomshivehq.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">Designed by Toms Hive</a></p>
        </div>
      </div>
    </footer>
  );
}

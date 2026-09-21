import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../siteConfig";

export default function Navbar({ transparent = true }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-30 ${
        transparent ? "" : "bg-brand-dark"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 md:px-[140px] py-6">
        <a href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="font-heading font-bold text-2xl text-brand">HCC</span>
          <span className="font-body text-lg text-white">Mechatronics</span>
        </a>

        <nav className="hidden lg:flex items-center gap-[60px] font-body text-white text-[16px]">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-brand-tint transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/hire-service"
          className="hidden lg:inline-flex items-center justify-center bg-brand hover:bg-brand-bright transition-colors text-white font-bold text-[16px] px-[30px] py-[15px]"
        >
          Hire Service
        </Link>

        <button
          className="lg:hidden text-white relative z-50 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          >
          <span className="block transition-transform duration-300">
            {open ? <X size={28} /> : <Menu size={28} />}
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ease-out ${
          open
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="px-5 py-6 flex flex-col font-body text-white">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group flex items-center justify-between py-4 border-b border-white/10 transition-all duration-200 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
              }}
            >
              <span className="text-[16px] group-hover:text-brand-tint transition-colors">
                {link.label}
              </span>

              <span className="text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                →
              </span>
            </a>
          ))}

          <Link
            to="/hire-service"
            onClick={() => setOpen(false)}
            className={`mt-6 inline-flex items-center justify-center bg-brand hover:bg-brand-bright active:scale-[0.98] transition-all duration-200 text-white font-bold text-[16px] px-[30px] py-[15px] w-full ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{
              transitionDelay: open ? `${NAV_LINKS.length * 50}ms` : "0ms",
            }}
          >
            Hire Service
          </Link>
        </nav>
      </div>
    </header>
  );
}

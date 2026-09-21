import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { buildWhatsAppLink } from "../siteConfig";
import whatsappIcon from "../assets/icons/whatsapp.svg";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`bg-white border-2 border-brand text-brand rounded-full size-11 flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp */}
        <a
        href={buildWhatsAppLink("Hi HCC Mechatronics, I'd like to enquire about a service.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-brand hover:bg-brand-bright transition-colors rounded-full size-14 flex items-center justify-center shadow-lg"
      >
        <img src={whatsappIcon} alt="" className="w-7 h-7 brightness-0 invert" />
      </a>
    </div>
  );
}
import { useState } from "react";
import phoneIcon from "../assets/icons/phone.svg";
import { SITE, SERVICE_OPTIONS, buildWhatsAppLink } from "../siteConfig";
import { useLeadSubmit } from "../useLeadSubmit";

const initialForm = { name: "", phone: "", vehicle: "", service: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const { submitLead, status } = useLeadSubmit();

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const message = [
      `Hi HCC Mechatronics, I'd like to enquire about a service.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.vehicle ? `Vehicle: ${form.vehicle}` : null,
      form.service ? `Service: ${form.service}` : null,
      form.message ? `Problem: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await submitLead({ formData: form, whatsappMessage: message, source: "homepage-contact-form" });
    setForm(initialForm);
  }

  return (
    <section id="contact" className="relative bg-brand-deep">
      <div className="max-w-[1440px] mx-auto my-auto px-5 md:px-[140px] pt-[120px] md:pt-0 pb-[90px] md:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h2 className="font-heading font-bold text-white text-[28px] md:text-[48px] leading-tight mb-6">
            Fix &amp; Maintain Your Hybrid, EV Today!
          </h2>
          <p className="font-body text-white/80 text-[16px] leading-relaxed max-w-[475px] mb-8">
            Get started with quality service from a certified EV specialist and never have to deal
            with your vehicle headaches anymore. Contact us today for a quality fix.
          </p>
          <div className="flex flex-wrap gap-10 items-center">
            <a
              href={`tel:${SITE.phoneWhatsApp}`}
              className="bg-brand hover:bg-brand-bright transition-colors text-white font-bold text-[16px] px-[30px] py-[15px] inline-flex items-center gap-2"
            >
              Contact Us
            </a>
            <a
              href={`tel:${SITE.phoneWhatsApp}`}
              className="text-white font-bold text-[16px] inline-flex items-center gap-2"
            >
              <img src={phoneIcon} alt="Phone" className="w-5 h-5 text-brand-bright" />
              Call: {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="bg-brand-navy rounded-[10px] md:rounded-[20px] p-8 md:p-10 shadow-2xl mt-0 md:-mt-16">
          <h3 className="font-heading font-bold text-white text-[28px] mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Your Name">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={update("name")}
                  className="input"
                />
              </Field>
              <Field label="Phone">
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={update("phone")}
                  className="input"
                />
              </Field>
            </div>

            <Field label="Your Vehicle">
              <input
                type="text"
                placeholder="e.g 2015 Toyota Prius, 2018 Camry Hybrid"
                value={form.vehicle}
                onChange={update("vehicle")}
                className="input"
              />
            </Field>

            <Field label="Service Required">
              <select value={form.service} onChange={update("service")} className="input">
                <option value="">Select Service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Describe the Problem">
              <textarea
                rows={4}
                placeholder="What is your vehicle doing? When did it start? Any warning lights on?"
                value={form.message}
                onChange={update("message")}
                className="input resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-[5px] bg-brand hover:bg-brand-bright transition-colors text-white font-bold text-[16px] px-[30px] py-[15px] inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              
              {status === "submitting" ? "Sending..." : "Send & Continue on WhatsApp"}
            </button>
            {status === "error" && (
              <p className="text-red-300 text-sm">
                Message logging had an issue, but WhatsApp should have opened — please send the message there.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-body text-white text-[16px] mb-2 block">{label}</span>
      {children}
    </label>
  );
}

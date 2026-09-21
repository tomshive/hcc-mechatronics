import { useState } from "react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";  
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { SITE, SERVICE_OPTIONS } from "../siteConfig";
import { useLeadSubmit } from "../useLeadSubmit";

const BUDGET_OPTIONS = [
  "Under ₦50,000",
  "₦50,000 – ₦150,000",
  "₦150,000 – ₦400,000",
  "₦400,000 – ₦800,000",
  "Above ₦800,000",
  "Not sure yet",
];

const URGENCY_OPTIONS = [
  "Emergency — vehicle is not drivable",
  "Urgent — within the next 2–3 days",
  "This week",
  "Just getting a quote / planning ahead",
];

const CONTACT_TIME_OPTIONS = ["Morning (8am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–7pm)", "Anytime"];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  service: "",
  budget: "",
  urgency: "",
  contactTime: "",
  description: "",
};

export default function HireService() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { submitLead, status } = useLeadSubmit();

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.phone.trim()) next.phone = "Please enter a WhatsApp-reachable phone number";
    if (!form.service) next.service = "Please select the service you need";
    if (!form.description.trim()) next.description = "Please describe the issue or request";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMessage() {
    const vehicle = [form.vehicleYear, form.vehicleMake, form.vehicleModel].filter(Boolean).join(" ");
    return [
      `Hi HCC Mechatronics, I'd like to hire your service.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      vehicle ? `*Vehicle:* ${vehicle}` : null,
      `*Service Needed:* ${form.service}`,
      form.budget ? `*Budget Range:* ${form.budget}` : null,
      form.urgency ? `*Urgency:* ${form.urgency}` : null,
      form.contactTime ? `*Best Time to Contact:* ${form.contactTime}` : null,
      ``,
      `*Description:*`,
      form.description,
    ]
      .filter((line) => line !== null)
      .join("\n");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    await submitLead({
      formData: form,
      whatsappMessage: buildMessage(),
      source: "hire-service-page",
    });
  }

  const submitted = status === "success" || status === "error";

  return (
    <div className="font-body bg-brand-soft min-h-screen">
      <Navbar transparent={false} />
      <div className="h-24 bg-brand-dark" />

      <section className="bg-brand-dark pb-16">
        <div className="max-w-content mx-auto px-5 md:px-[140px]">
          <p className="font-heading font-bold text-brand-bright text-[16px] mb-3">Hire Service</p>
          <h1 className="font-heading font-bold text-white text-[28px] md:text-[42px] leading-tight mb-4 max-w-[700px]">
            Tell Us About Your Vehicle &amp; What It Needs
          </h1>
          <p className="font-body text-white/75 text-[16px] max-w-[600px]">
            Fill in the details below — the more specific you are, the faster and more accurate
            our diagnosis will be. When you submit, we'll open WhatsApp with everything pre-filled
            so you can send it straight to our team.
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-[140px] -mt-10 pb-24">
        {submitted ? (
          <ConfirmationCard onReset={() => { setForm(initialForm); window.location.reload(); }} />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[10px] p-6 md:p-12 space-y-12"
          >
            <FormSection number="01" title="Your Contact Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Full Name" required error={errors.name}>
                  <input
                    type="text"
                    placeholder="e.g. Adebayo Ogundimu"
                    value={form.name}
                    onChange={update("name")}
                    className="input"
                  />
                </Field>
                <Field label="WhatsApp / Phone Number" required error={errors.phone}>
                  <input
                    type="tel"
                    placeholder="e.g. 0803 123 4567"
                    value={form.phone}
                    onChange={update("phone")}
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Email (optional)">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update("email")}
                  className="input"
                />
              </Field>
            </FormSection>

            <FormSection number="02" title="Your Vehicle">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Field label="Make">
                  <input
                    type="text"
                    placeholder="e.g. Toyota"
                    value={form.vehicleMake}
                    onChange={update("vehicleMake")}
                    className="input"
                  />
                </Field>
                <Field label="Model">
                  <input
                    type="text"
                    placeholder="e.g. Prius"
                    value={form.vehicleModel}
                    onChange={update("vehicleModel")}
                    className="input"
                  />
                </Field>
                <Field label="Year">
                  <input
                    type="text"
                    placeholder="e.g. 2016"
                    value={form.vehicleYear}
                    onChange={update("vehicleYear")}
                    className="input"
                  />
                </Field>
              </div>
            </FormSection>

            <FormSection number="03" title="What Do You Need?">
              <Field label="Service Required" required error={errors.service}>
                <select value={form.service} onChange={update("service")} className="input">
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Estimated Budget">
                  <select value={form.budget} onChange={update("budget")} className="input">
                    <option value="">Select a range</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="How Urgent Is This?">
                  <select value={form.urgency} onChange={update("urgency")} className="input">
                    <option value="">Select urgency</option>
                    {URGENCY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Best Time to Contact You">
                <select value={form.contactTime} onChange={update("contactTime")} className="input">
                  <option value="">Select a time</option>
                  {CONTACT_TIME_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
            </FormSection>

            <FormSection number="04" title="Describe the Problem or Request">
              <Field
                label="What is your vehicle doing? When did it start? Any warning lights on?"
                required
                error={errors.description}
              >
                <textarea
                  rows={6}
                  placeholder="Be as detailed as you can — e.g. 'Hybrid warning light came on 3 days ago, car goes into limp mode above 60km/h, no unusual noises.'"
                  value={form.description}
                  onChange={update("description")}
                  className="input resize-none"
                />
              </Field>
            </FormSection>

            <div className="pt-4 border-t border-[#eee]">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto bg-brand hover:bg-brand-bright transition-colors text-white font-bold text-[16px] px-10 py-4 inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <MessageCircle size={20} />
                {status === "submitting" ? "Preparing your request..." : "Submit & Continue on WhatsApp"}
              </button>
              <p className="font-body text-[14px] text-black/60 mt-4">
                Your details are logged with us and simultaneously sent to WhatsApp so you can
                confirm and chat with our team directly.
              </p>
            </div>
          </form>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-black/60 font-body text-[15px]">
          <span>Prefer to talk first?</span>
          <a href={`tel:${SITE.phoneWhatsApp}`} className="inline-flex items-center gap-2 text-brand font-semibold">
            <Phone size={16} /> Call {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FormSection({ number, title, children }) {
  return (
    <div>
      <div className="mb-6">
        <span className="font-heading font-bold text-brand text-[14px] border border-brand rounded-full size-7 flex items-center justify-center mb-3">
          {number}
        </span>
        <h2 className="font-heading font-bold text-black text-[20px]">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="font-body text-black text-[15px] font-medium mb-2 block">
        {label} {required && <span className="text-brand-bright">*</span>}
      </span>
      {children}
      {error && <span className="text-red-500 text-[13px] mt-1 block">{error}</span>}
    </label>
  );
}

function ConfirmationCard({ onReset }) {
  return (
    <div className="bg-white rounded-[20px] shadow-xl p-10 md:p-16 text-center">
      <CheckCircle2 size={56} className="text-brand mx-auto mb-6" />
      <h2 className="font-heading font-bold text-[28px] text-black mb-4">Request Sent!</h2>
      <p className="font-body text-black/70 text-[16px] max-w-[480px] mx-auto mb-8">
        We've opened WhatsApp with your details pre-filled. If it didn't open automatically, tap
        the button below or call us directly and one of our technicians will get back to you
        shortly.
      </p>
      <button onClick={onReset} className="font-body text-brand font-semibold underline">
        Submit another request
      </button>
    </div>
  );
}

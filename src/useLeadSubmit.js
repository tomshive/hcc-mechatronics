import { useState } from "react";
import { buildWhatsAppLink } from "./siteConfig";

// Endpoint on your cPanel hosting that logs the lead (see /php/submit-lead.php).
// Update this to the absolute URL once deployed, e.g. "https://yourdomain.com/php/submit-lead.php"
export const LEAD_ENDPOINT = "https://hccmechatronics.com/php/submit-lead.php";

/**
 * Handles a lead form submit:
 * 1. POSTs the lead to the PHP backend so it's logged server-side.
 * 2. Opens WhatsApp with a pre-filled message, regardless of whether step 1 succeeds,
 *    so the customer's request is never blocked by a backend hiccup.
 */
export function useLeadSubmit() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function submitLead({ formData, whatsappMessage, source }) {
    setStatus("submitting");

    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source, submittedAt: new Date().toISOString() }),
      });
      setStatus("success");
    } catch (err) {
      // We still proceed to WhatsApp even if logging failed — don't block the customer.
      console.error("Lead logging failed:", err);
      setStatus("error");
    } finally {
      window.open(buildWhatsAppLink(whatsappMessage), "_blank", "noopener,noreferrer");
    }
  }

  return { submitLead, status };
}

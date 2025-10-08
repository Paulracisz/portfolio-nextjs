"use client";

import { useState } from "react";

/* --------------------------------------------------------------
   Helper – only adds a query‑parameter when the supplied value
   is a non‑empty string.
   -------------------------------------------------------------- */
function setIfString(
  params: URLSearchParams,
  key: string,
  value: string | undefined
) {
  if (value && value.trim().length > 0) {
    params.set(key, value);
  }
}

/* --------------------------------------------------------------
   Build a mailto: URL with proper encoding.
   -------------------------------------------------------------- */
function buildMailtoLink({
  to,
  subject,
  body,
}: {
  to: string;
  subject?: string;
  body?: string;
}) {
  const params = new URLSearchParams();
  setIfString(params, "subject", subject);
  setIfString(params, "body", body);
  return `mailto:${to}?${params.toString()}`;
}

/* --------------------------------------------------------------
   Contact form component
   -------------------------------------------------------------- */
export default function Contact() {
  // -----------------------------------------------------------------
  // 1️⃣ Form state – always a string (never undefined after init)
  // -----------------------------------------------------------------
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // -----------------------------------------------------------------
  // 2️⃣ Click handler – creates the mailto link and opens it
  // -----------------------------------------------------------------
  const handleSendEmail = () => {
    // Assemble the body that will appear in the mail client
    const bodyLines: string[] = [];

    if (name.trim()) bodyLines.push(`From: ${name.trim()}`);
    if (message.trim()) {
      bodyLines.push("\nMessage:\n");
      bodyLines.push(message.trim());
    }

    const mailto = buildMailtoLink({
      to: "paulracisz@proton.me",
      subject: subject.trim(),
      body: bodyLines.join("\n"),
    });

    // Open the link – browsers treat this as a normal mailto navigation
    window.open(mailto);

    setName('');
    setSubject('');
    setMessage('');
  };

  // -----------------------------------------------------------------
  // 3️⃣ Render the UI
  // -----------------------------------------------------------------
  return (
    <section className="">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Contact</h1>

      <div className="space-y-4 max-w-xs">
        {/* Optional name --------------------------------------------------- */}
        <div>
          <span className="asterisk" >* </span> Denotes a required field. <br />
          <label htmlFor="name" id="name" className="mt-1 text-lg font-semibold text-[#00674F] group-hover:text-[#D4AF37] transition-colors">
            Your name (optional)
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded border-[#D4AF37] shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Your name"
          />
        </div>

        {/* Subject (required) ----------------------------------------------- */}
        <div>
          <label htmlFor="subject" className="mt-1 text-lg font-semibold text-[#00674F] group-hover:text-[#D4AF37] transition-colors">
            Subject <span className="asterisk">*</span>
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full rounded border-[#D4AF37] shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Quick question about …"
          />
        </div>

        {/* Message (required) ----------------------------------------------- */}
        <div>
          <label htmlFor="message" className="mt-1 text-lg font-semibold text-[#00674F] group-hover:text-[#D4AF37] transition-colors">
            Message <span className="asterisk">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded border-[#D4AF37] shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Write your message here…"
          />
        </div>

        {/* Send button ------------------------------------------------------ */}
        <button
          type="button"
          onClick={handleSendEmail}
          disabled={!subject.trim() || !message.trim()}
          className="inline-flex items-center justify-center rounded bg-white px-4 py-2 text-[#00674F] hover:bg-primary-700 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send Mail
        </button>
      </div>
    </section>
  );
}

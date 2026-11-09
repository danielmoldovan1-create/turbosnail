"use client";

import { useState } from "react";

const EMAIL = "hello@turbosnail.ro";
const SEND_ERROR = `We could not send the form. Please try again or email us at ${EMAIL}.`;

// Formularul de contact al paginilor în engleză. Trimite prin Web3Forms, ca formularul de pe homepage,
// cu subiectul „[EN contact]”, ca mesajele în engleză să se vadă din prima în inbox.
export default function EnglishContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit() {
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email address.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("That email address does not look right. Please check it.");
      return;
    }
    if (botcheck) return;
    setError("");
    setSending(true);
    // Paginile vizitei, salvate de VisitTracker: ne spun ce pagină a adus mesajul.
    let visit = { pagina_intrare: "", sursa: "", pagina_anterioara: "" };
    try {
      const store = window.sessionStorage;
      visit = {
        pagina_intrare: store.getItem("ts_landing") || "",
        sursa: store.getItem("ts_referrer") || "",
        pagina_anterioara: store.getItem("ts_prev") || "",
      };
    } catch {
      // Fără sessionStorage, mesajul pleacă fără paginile vizitei.
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f2d92ef1-727d-47b9-bbe2-f30548f4c010",
          subject: `[EN contact] ${name.trim()}`,
          from_name: "turbosnail.ro (English)",
          formular: "Contact (EN)",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || "-",
          message: msg.trim(),
          ...visit,
        }),
      });
      if (res.ok) setSent(true);
      else setError(SEND_ERROR);
    } catch {
      setError(SEND_ERROR);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div style={{ padding: "32px 24px", borderRadius: 20, border: "1px solid rgba(255,106,0,0.25)", background: "linear-gradient(180deg, rgba(255,106,0,0.06), rgba(255,106,0,0.02))", textAlign: "center" }}>
        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 10, color: "#eae8e3" }}>Thank you, {name.trim()}.</h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#a8a6a1" }}>We have your message and will reply within two business days.</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
      <style>{`
        .cf-field { background: #0f1119; border: 1px solid #1a1d2a; color: #eae8e3; padding: 15px 18px; border-radius: 12px; font-family: 'Instrument Sans', sans-serif; font-size: 15px; outline: none; width: 100%; }
        .cf-field:focus { border-color: rgba(255,106,0,0.5); box-shadow: 0 0 0 3px rgba(255,106,0,0.08); }
        .cf-field::placeholder { color: #555566; }
        .cf-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
        .cf-btn { background: linear-gradient(135deg, #ff8c33, #ff6a00); color: #fff; border: none; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px; padding: 18px 30px; width: 100%; cursor: pointer; margin-top: 6px; }
        .cf-btn:disabled { opacity: 0.6; cursor: wait; }
      `}</style>
      <input className="cf-field" aria-label="Your name" placeholder="Your name *" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="cf-field" type="email" aria-label="Email" placeholder="Email *" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="cf-field" type="tel" aria-label="Phone (optional)" placeholder="Phone (optional)" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <textarea className="cf-field" aria-label="Your message" placeholder="Which process takes your team the most time?" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} style={{ resize: "vertical" }} />
      <input className="cf-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
      <button type="button" className="cf-btn" onClick={submit} disabled={sending}>
        {sending ? "Sending…" : "Send message →"}
      </button>
      {error && <span role="alert" style={{ fontSize: 13, color: "#ff6a00" }}>{error}</span>}
      <span style={{ fontSize: 12, color: "#555566", lineHeight: 1.6 }}>
        We reply within two business days. How we handle your data: <a href="/en/legal" target="_blank" rel="noopener" style={{ color: "#888899", textDecoration: "underline" }}>legal notice and privacy</a>.
      </span>
    </div>
  );
}

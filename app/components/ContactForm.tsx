"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EMAIL = "hello@turbosnail.ro";
const SEND_ERROR = `Nu am putut trimite formularul. Încearcă din nou sau scrie-ne la ${EMAIL}.`;

type Props = {
  // Apare în subiectul emailului și în câmpul „formular”, ca să știm de unde vine cererea.
  formular: string;
  // Opțional: serviciul paginii pe care e formularul.
  serviciu?: string;
  buton?: string;
};

// Formularul de contact în română, refolosit pe /programare și pe alte pagini.
// Trimite prin Web3Forms, ca formularul de pe homepage, apoi duce vizitatorul pe /multumim:
// o vizită pe /multumim e o cerere trimisă, deci se vede ca o conversie în Vercel Analytics.
export default function ContactForm({ formular, serviciu = "", buton = "Înscrie-te pe lista de așteptare →" }: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit() {
    if (!name.trim() || !email.trim()) {
      setError("Completează numele și adresa de email.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Adresa de email nu pare corectă. Verific-o, te rog.");
      return;
    }
    if (botcheck) return;
    setError("");
    setSending(true);
    // Paginile vizitei, salvate de VisitTracker: ne spun ce pagină a adus cererea.
    let visit = { pagina_intrare: "", sursa: "", pagina_anterioara: "" };
    try {
      const store = window.sessionStorage;
      visit = {
        pagina_intrare: store.getItem("ts_landing") || "",
        sursa: store.getItem("ts_referrer") || "",
        pagina_anterioara: store.getItem("ts_prev") || "",
      };
    } catch {
      // Fără sessionStorage, cererea pleacă fără paginile vizitei.
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f2d92ef1-727d-47b9-bbe2-f30548f4c010",
          subject: `[${formular}] ${name.trim()}`,
          from_name: "turbosnail.ro",
          formular,
          ...(serviciu ? { serviciu } : {}),
          pagina_formular: window.location.pathname,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || "-",
          message: msg.trim(),
          ...visit,
        }),
      });
      if (res.ok) {
        router.push("/multumim");
        return;
      }
      setError(SEND_ERROR);
    } catch {
      setError(SEND_ERROR);
    }
    setSending(false);
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
      <input className="cf-field" aria-label="Numele tău" placeholder="Numele tău *" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="cf-field" type="email" aria-label="Email" placeholder="Email *" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="cf-field" type="tel" aria-label="Telefon (opțional)" placeholder="Telefon (opțional)" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <textarea className="cf-field" aria-label="Ce proces vrei să discutăm?" placeholder="Ce proces îi ia echipei cel mai mult timp?" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} style={{ resize: "vertical" }} />
      <input className="cf-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
      <button type="button" className="cf-btn" onClick={submit} disabled={sending}>
        {sending ? "Se trimite…" : buton}
      </button>
      {error && <span role="alert" style={{ fontSize: 13, color: "#ff6a00" }}>{error}</span>}
      <span style={{ fontSize: 12, color: "#555566", lineHeight: 1.6 }}>
        Îți scriem în cel mult 2 zile lucrătoare dacă putem prelua firma ta luna aceasta. Cum folosim datele: <a href="/politica-de-confidentialitate" target="_blank" rel="noopener" style={{ color: "#888899", textDecoration: "underline" }}>politica de confidențialitate</a>.
      </span>
    </div>
  );
}

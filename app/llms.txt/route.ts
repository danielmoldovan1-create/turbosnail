import { DOMAINS } from "../domenii/data";

// Generated from app/domenii/data.ts so new domain pages show up here automatically.
export const dynamic = "force-static";

const BEFORE = `# TurboSnail

> Agenție de automatizări AI din Timișoara, care ajută firmele din România să economisească timp și bani prin automatizarea proceselor repetitive.

Conținutul site-ului este în limba română și se adresează antreprenorilor și managerilor din România. Punctul de intrare pentru orice discuție comercială este lista de așteptare pentru auditul gratuit: https://turbosnail.ro/#contact

## Servicii

- [Servicii (prezentare generală)](https://turbosnail.ro/servicii): toate serviciile TurboSnail într-un singur loc.
- [Automatizări AI](https://turbosnail.ro/servicii/automatizari-ai): automatizarea proceselor repetitive din firmă (email, CRM, facturare, raportare).
- [Consultanță AI](https://turbosnail.ro/servicii/consultanta-ai): audit operațional și plan clar de implementare înainte de orice investiție.
- [Chatbot AI în Română](https://turbosnail.ro/servicii/chatbot-ai-romania): asistent virtual pentru site care răspunde clienților în limba română.
- [Cold Email & Outbound](https://turbosnail.ro/servicii/cold-email-outbound): infrastructură de email, secvențe și generare de meetinguri B2B.
- [Paid Ads cu AI](https://turbosnail.ro/servicii/paid-ads-ai): campanii Google și Meta optimizate cu AI, cu tracking complet.
- [SEO bazat pe AI](https://turbosnail.ro/servicii/seo-ai): audit tehnic, cercetare de cuvinte cheie și conținut în română.
- [Raportare & Analytics](https://turbosnail.ro/servicii/raportare-analytics): dashboarduri automate conectate la sursele de date ale firmei.

`;

const AFTER = `## Blog

- [Ce este inteligența artificială](https://turbosnail.ro/blog/ce-este-inteligenta-artificiala): ghid pentru antreprenori despre cum funcționează AI și ce poate face în afacere.
- [Automatizări AI pentru afaceri](https://turbosnail.ro/blog/automatizari-ai-pentru-afaceri-romania): ghid practic cu exemple și pași de implementare.
- [Automatizare procese afaceri](https://turbosnail.ro/blog/automatizare-procese-afaceri-romania): cum automatizezi procesele repetitive și cât timp economisești.
- [Automatizare procese firme](https://turbosnail.ro/blog/automatizare-procese-firme): automatizare în contabilitate, HR și vânzări pentru IMM-uri.
- [Sisteme de control pentru procese](https://turbosnail.ro/blog/sisteme-control-procese-afaceri): monitorizare, alerte și audit automat pentru procesele critice.
- [Automatizarea completă a unei afaceri](https://turbosnail.ro/blog/automatizare-completa-afacere): de unde începi și cum măsori impactul real.
- [Chatbot AI pentru site](https://turbosnail.ro/blog/chatbot-ai-pentru-site-romania): ce automatizează, cum alegi un furnizor și cum măsori rezultatele.
- [Consultanță AI pentru firme](https://turbosnail.ro/blog/consultanta-ai-ce-include-cum-alegi): ce include un angajament, cum alegi consultantul și ce să eviți.
- [Automatizare rapoarte](https://turbosnail.ro/blog/automatizare-rapoarte-saptamanale-lunare): cum elimini munca manuală din rapoartele săptămânale și lunare.
- [Automatizare procese business](https://turbosnail.ro/blog/automatizare-procese-business-ghid-2026): 12 fluxuri concrete, pe industrii.
- [Cold email B2B în România](https://turbosnail.ro/blog/cold-email-b2b-romania-ghid-complet): deliverability, secvențe și tool-uri.
- [Cum să automatizezi emailurile firmei](https://turbosnail.ro/blog/cum-sa-automatizezi-emailurile-firmei): ce emailuri preiei automat, ce rămâne personal și pașii de început.
- [Agent AI pentru vânzări în România](https://turbosnail.ro/blog/agent-ai-pentru-vanzari-romania): ce face un agent AI pentru echipa de vânzări și cum îl implementezi.
- [Întreabă inteligența artificială](https://turbosnail.ro/blog/intreaba-inteligenta-artificiala): ce asistent AI folosești, cum formulezi întrebarea și ce date nu-i dai.
- [Automatizare date](https://turbosnail.ro/blog/automatizare-date): cum scapi de introducerea manuală, ce fluxuri automatizezi primele și ce pregătești înainte.
- [Ce este un agent AI](https://turbosnail.ro/blog/ce-este-un-agent-ai): explicat simplu, diferența față de chatbot și automatizare, când merită.
- [Automatizare documente](https://turbosnail.ro/blog/automatizare-documente): ce documente automatizezi primele, cum le citește AI-ul și unde rămâne verificarea umană.
- [Agenți AI în firmă: reguli de siguranță](https://turbosnail.ro/blog/agenti-ai-reguli-siguranta): aprobare umană, plafoane, jurnal, test pe date de probă și oprire de urgență pentru agenții AI dintr-o firmă mică.
- [AI Act și chatbotul firmei](https://turbosnail.ro/blog/ai-act-chatbot-firme): ce cere articolul 50 de la 2 august 2026, cine răspunde când chatbotul e făcut de altcineva și ce pași faci.

## English

- [AI consulting in Romania](https://turbosnail.ro/en/ai-consulting-romania): AI consultancy in English for companies in Romania: process audit, prioritised plan, automations and conversational AI.

## Contact

- Sediu: Timișoara, România
- Email: hello@turbosnail.ro
- Lista de așteptare (audit gratuit): https://turbosnail.ro/#contact
- Sitemap: https://turbosnail.ro/sitemap.xml
`;

export function GET() {
  const domenii = [
    "## Domenii",
    "",
    "- [Domenii (prezentare generală)](https://turbosnail.ro/domenii): ce automatizăm concret în fiecare domeniu de activitate.",
    ...DOMAINS.map((d) => `- [${d.name}](https://turbosnail.ro/domenii/${d.slug}): ${d.summary}`),
    "",
    "",
  ].join("\n");
  return new Response(BEFORE + domenii + AFTER, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

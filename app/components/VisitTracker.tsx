"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Ține minte, doar în tab-ul curent, pagina de intrare, sursa vizitei și pagina de dinaintea formularului.
// Formularul de pe homepage le trimite odată cu mesajul; altfel nu pleacă nicăieri.
export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const store = window.sessionStorage;
      if (!store.getItem("ts_landing")) {
        store.setItem("ts_landing", window.location.pathname + window.location.search);
        store.setItem("ts_referrer", document.referrer || "direct");
      }
      const current = store.getItem("ts_current");
      if (current && current !== pathname) store.setItem("ts_prev", current);
      store.setItem("ts_current", pathname);
    } catch {
      // Fără sessionStorage (navigare privată, setări de browser), formularul merge și așa.
    }
  }, [pathname]);

  return null;
}

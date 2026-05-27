"use client";
import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

import { MainProvider } from "@/context/Main";

export default function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem("lang-avionica") || "en";
    setLocale(storedLocale);

    import(`../dictionaries/${storedLocale}.json`).then((mod) => {
      setMessages(mod.default);
    });
  }, []);

  if (!messages) return null;

  return (
    <MainProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </MainProvider>
  );
}

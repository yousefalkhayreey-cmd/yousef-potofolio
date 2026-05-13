import { createContext, useContext, useState } from 'react';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });
export const useLang = () => useContext(LangContext);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

// Helper: return the correct text based on current lang
export function t(en, ar, lang) {
  return lang === 'ar' ? ar : en;
}

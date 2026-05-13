import { useLang } from '../LangContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div id="lang-toggle">
      <button
        className={lang === 'en' ? 'on' : ''}
        onClick={() => setLang('en')}
      >EN</button>
      <button
        className={lang === 'ar' ? 'on' : ''}
        onClick={() => setLang('ar')}
      >AR</button>
    </div>
  );
}

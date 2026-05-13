import { useEffect, useRef } from 'react';
import { useLang, t } from '../LangContext';
import { heroImg } from '../data/images';

export default function Hero() {
  const { lang } = useLang();
  const imgRef = useRef(null);

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (imgRef.current) {
        const y = window.scrollY * 0.18;
        imgRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" data-component="hero" aria-label="Hero">
      <img ref={imgRef} className="hero-bg-img" src={heroImg} alt="Yousef Sliem" />
      <div className="hero-fade" />
      <div className="hero-glow" />
      <div className="hero-c">
        <div className="hero-eye">
          <div className="hero-line" />
          <span>{t('Graphic Designer · Visual Creator · Egypt', 'مصمم جرافيك · مبدع بصري · مصر', lang)}</span>
        </div>
        <h1 className="hero-h1">
          <span className="ln">YOUSEF</span>
          <span className="ln g">SLIEM</span>
        </h1>
        <div className="hero-sub">
          {t('6+ Years Crafting Visuals That Command Attention', 'أكثر من 6 سنوات في صنع تصاميم تستوقف الأنظار', lang)}
        </div>
        <div className="hero-tl">
          <span>{t('Design that ', 'تصميم ', lang)}</span>
          <span className="out">{t('SELLS,', 'يبيع،', lang)}</span><br />
          <span>{t('not just shows.', 'لا مجرد يُعرض.', lang)}</span>
        </div>
        <div className="hero-btns">
          <a href="#contact" className="btn-gold">
            {t("Let's Work Together →", "لنعمل معاً ←", lang)}
          </a>
          <a href="https://www.behance.net/yousefsliem" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            {t('Behance Portfolio', 'محفظة Behance', lang)}
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scl-ln" />
        <span>{t('Scroll to explore', 'مرر للاستكشاف', lang)}</span>
      </div>
    </section>
  );
}

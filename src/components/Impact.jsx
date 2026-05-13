import { useEffect, useRef, useState } from 'react';
import { useLang, t } from '../LangContext';
import { SliemLogoSVG } from '../LogoSVG';

const COUNTERS = [
  { target: 6,   labelEn: 'Years of Experience', labelAr: 'سنوات خبرة' },
  { target: 100, labelEn: 'Clients Served',      labelAr: 'عملاء' },
  { target: 3,   labelEn: 'Countries',            labelAr: 'دول' },
];

function Counter({ target, labelEn, labelAr }) {
  const { lang } = useLang();
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2200;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className="nblock r" ref={ref}>
      <span className="cnt">{value}+</span>
      <div className="cnt-lbl">{t(labelEn, labelAr, lang)}</div>
    </div>
  );
}

export default function Impact() {
  const { lang } = useLang();
  const logoRef = useRef(null);
  const closingRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        triggerLogo();
      } else {
        triggered.current = false;
      }
    }, { threshold: 0.3 });
    if (closingRef.current) obs.observe(closingRef.current);
    return () => obs.disconnect();
  }, []);

  const triggerLogo = () => {
    const logo = logoRef.current;
    if (!logo) return;
    logo.classList.remove('show');

    const paths = logo.querySelectorAll('path, polygon, line, circle');
    paths.forEach(p => {
      try {
        const len = p.getTotalLength ? p.getTotalLength() : 100;
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
        p.style.transition = 'none';
      } catch (e) {}
    });

    requestAnimationFrame(() => requestAnimationFrame(() => {
      logo.classList.add('show');
      paths.forEach((p, i) => {
        setTimeout(() => {
          p.style.transition = `stroke-dashoffset 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 40}ms`;
          p.style.strokeDashoffset = '0';
        }, 200);
      });
      setTimeout(() => {
        const name = document.getElementById('cl-name');
        const sub = document.getElementById('cl-sub');
        if (name) name.classList.add('show');
        if (sub) sub.classList.add('show');
      }, 700);
    }));
  };

  return (
    <section id="numbers" data-component="the-impact" aria-label="The Impact">
      <div style={{ textAlign: 'center' }}>
        <div className="stag r">{t('By The Numbers', 'بالأرقام', lang)}</div>
        <div className="stitle r">
          {t('THE ', '', lang)}<span className="g">{t('IMPACT', 'التأثير', lang)}</span>
        </div>
      </div>

      <div className="ngrid">
        {COUNTERS.map((c, i) => <Counter key={i} {...c} />)}
      </div>

      <div className="closing" id="closing" ref={closingRef}>
        <div className="cl-logo" ref={logoRef} id="cl-logo">
          <SliemLogoSVG id="cl-logo-svg" />
        </div>
        <div className="cl-name" id="cl-name">SLIEM</div>
        <div className="cl-sub" id="cl-sub">
          {t('CREATIVE DIRECTION · DESIGN · VISION', 'التوجيه الإبداعي · التصميم · الرؤية', lang)}
        </div>
      </div>
    </section>
  );
}

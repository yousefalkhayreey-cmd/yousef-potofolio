import { useEffect, useRef } from 'react';
import { useLang, t } from '../LangContext';
import { work3dImgs } from '../data/images';

export default function Work3D({ onOpenModal }) {
  const { lang } = useLang();
  const orbRef = useRef(null);

  useEffect(() => {
    const strip = document.getElementById('light-strip');
    if (!strip || !orbRef.current) return;
    const onMove = (e) => {
      const r = strip.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      if (orbRef.current) {
        orbRef.current.style.left = x + '%';
        orbRef.current.style.top = y + '%';
      }
    };
    strip.addEventListener('mousemove', onMove);
    return () => strip.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="work3d" data-component="3d-work" aria-label="3D Work">
      <div className="w3d-hdr">
        <div className="stag r">Blender · 3D Visualization · Compositing</div>
        <div className="stitle r">
          {t('3D ', 'أعمال ', lang)}<span className="g">{t('WORK', 'ثلاثية الأبعاد', lang)}</span>
        </div>
      </div>

      {/* Marble Reborn — light strip */}
      <div className="light-strip" id="light-strip">
        <img className="light-img" src={work3dImgs[0]?.src} alt="3D Marble Statue" loading="lazy" />
        <div ref={orbRef} className="light-orb" id="light-orb" />
        <div className="ls-overlay" />
        <div className="ls-txt rl">
          <div className="s-tag">3D · AI · Digital Sculpture</div>
          <div className="s-title">MARBLE<br />REBORN</div>
        </div>
      </div>

      {/* Feel It. Wear It. — Fragrance */}
      <div className="strip">
        <img src={work3dImgs[1]?.src} alt="Fragrance 3D" loading="lazy" />
        <div className="s-shade l" />
        <div className="s-bg-num l">02</div>
        <div className="stxt l rl">
          <div className="s-tag">Blender · Product · Fragrance</div>
          <div className="s-title">FEEL IT.<br />WEAR IT.</div>
        </div>
      </div>

      {/* Ferrari In Tokyo */}
      <div
        className="strip ferrari-strip"
        onClick={() => onOpenModal('ferrari')}
        style={{ cursor: 'pointer' }}
      >
        <div className="s-shade r" />
        <div className="s-bg-num r">03</div>
        <img className="ferrari-hero-img" src={work3dImgs[2]?.src} alt="Ferrari in Tokyo" loading="lazy" />
        <div className="stxt r rl">
          <div className="s-tag">Blender · Automotive · Scene Study</div>
          <div className="s-title">FERRARI<br />IN TOKYO</div>
          <div className="s-sub">
            {t(
              'Photorealistic Blender scene — Ferrari 488 GT3 in neon-lit rainy Tokyo night. 7 cinematic renders.',
              'مشهد بلندر واقعي — فيراري في ليل طوكيو الممطر.',
              lang
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

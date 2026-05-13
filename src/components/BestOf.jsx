import { useEffect, useRef } from 'react';
import { useLang, t } from '../LangContext';
import { bestOfImgs } from '../data/images';

const CARDS = [
  { img: 0, tag: 'Commercial · 2D',     name: 'AMG POWER',      desc: 'High-impact automotive campaign',    modal: 'amg' },
  { img: 1, tag: 'Fragrance · Luxury',  name: 'HISTORY GOLD',   desc: 'Dark editorial luxury perfume',     modal: 'history' },
  { img: 2, tag: 'Stone · Interior',    name: 'BLACK MARQUINA', desc: 'Architectural stone visualization', modal: null },
  { img: 3, tag: 'Fitness · Campaign',  name: 'GRAVITY & IRON', desc: 'Raw energy fitness campaign',       modal: 'gravity' },
  { img: 4, tag: 'Automotive · Arabic', name: 'BLACK TIGER',    desc: 'Bilingual Arabic oil campaign',     modal: 'blacktiger' },
];

export default function BestOf({ onOpenModal }) {
  const { lang } = useLang();
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.bpc');
    if (!cards) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="best-section" data-component="best-of-sliem" ref={sectionRef}>
      <div className="sec-hd">
        <div>
          <div className="stag r">{t('Selected Work', 'أعمال مختارة', lang)}</div>
          <div className="stitle r">
            {t('BEST OF ', 'أفضل أعمال ', lang)}
            <span className="g">SLIEM</span>
          </div>
        </div>
        <div className="sec-hd-sub r">
          {t("Five defining projects that shaped the studio's identity.", 'خمسة مشاريع تحدد هوية الاستوديو.', lang)}
        </div>
      </div>

      <div className="pgrid best-pgrid">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="pc bpc r"
            onClick={() => card.modal && onOpenModal(card.modal)}
            style={{ cursor: card.modal ? 'pointer' : 'default' }}
          >
            <img src={bestOfImgs[card.img]?.src} alt={card.name} loading="lazy" />
            <div className="pinfo">
              <div className="ptag">{card.tag}</div>
              <div className="pname">{card.name}</div>
              <div className="pdesc">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

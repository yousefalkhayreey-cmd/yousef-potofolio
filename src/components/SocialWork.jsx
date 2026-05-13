import { useLang, t } from '../LangContext';
import { commercialImgs } from '../data/images';

const PROJECTS = [
  { modal: 'amg',        alt: 'AMG' },
  { modal: 'gravity',    alt: 'Gravity Iron' },
  { modal: 'sonata',     alt: 'Sonata' },
  { modal: 'blacktiger', alt: 'Black Tiger' },
  { modal: 'history',    alt: 'History Perfume' },
  { modal: null,         alt: '3D Fragrance' },
];

export default function SocialWork({ onOpenModal }) {
  const { lang } = useLang();
  return (
    <section id="commercial" data-component="social-media-work" aria-label="Social Media Work">
      <div className="sec-hd">
        <div>
          <div className="stag r">{t('2D Commercial & Social Media', 'تجاري ثنائي الأبعاد', lang)}</div>
          <div className="stitle r">
            {t('SOCIAL MEDIA ', 'أعمال ', lang)}
            <span className="g">{t('WORK', 'السوشيال ميديا', lang)}</span>
          </div>
        </div>
      </div>
      <div className="pgrid">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="pc r"
            onClick={() => p.modal && onOpenModal(p.modal)}
            style={{ cursor: p.modal ? 'pointer' : 'default' }}
          >
            <img src={commercialImgs[i]?.src} alt={p.alt} loading="lazy" />
            <div className="pinfo">
              <div className="ptag">{commercialImgs[i]?.alt || p.alt}</div>
              <div className="pname">{p.alt}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

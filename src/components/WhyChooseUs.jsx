import { useLang, t } from '../LangContext';
import { whyImg } from '../data/images';

const WHY_ITEMS = [
  { icon: '◆', titleEn: 'Strategy First',   titleAr: 'الاستراتيجية أولاً',    descEn: 'Every design decision is backed by market research and brand positioning — not just aesthetics.', descAr: 'كل قرار تصميمي مدعوم ببحث السوق وتحديد مكانة العلامة.' },
  { icon: '◈', titleEn: 'Bilingual Native', titleAr: 'ثنائي اللغة',           descEn: 'Fluent in Arabic and English visual language — campaigns that resonate across MENA and global markets.', descAr: 'إتقان اللغة البصرية العربية والإنجليزية للوصول لأسواق الشرق الأوسط والعالم.' },
  { icon: '◉', titleEn: '3D + 2D Mastery',  titleAr: 'إتقان ثلاثي وثنائي',    descEn: 'From Blender renders to Photoshop composites — complete visual production under one roof.', descAr: 'من تصيير بلندر إلى فوتوشوب — إنتاج بصري كامل تحت سقف واحد.' },
  { icon: '◇', titleEn: 'Ad-Optimized',     titleAr: 'محسّن للإعلانات',       descEn: 'Designs built to stop scrolls, drive clicks, and convert — not just to look good in a portfolio.', descAr: 'تصاميم بُنيت لتوقف التمرير وتحريك النقرات وتحقيق التحويلات.' },
];

export default function WhyChooseUs() {
  const { lang } = useLang();
  return (
    <section id="why" data-component="why-choose-us" aria-label="Why Choose Us">
      <div className="why-img">
        <img src={whyImg} alt="Yousef Sliem" loading="lazy" />
      </div>
      <div className="why-c">
        <div className="stag rr">{t('Why Choose Us', 'لماذا تختارنا', lang)}</div>
        <div className="stitle rr">
          {t('WHERE STRATEGY ', 'حيث الاستراتيجية ', lang)}
          <span className="g">{t('MEETS', 'تلتقي', lang)}</span>
          {t(' STYLE', ' بالأسلوب', lang)}
        </div>
        <div className="why-quote rr">
          <span className="q">"</span>
          {t(
            'The difference between good design and great design is intention.',
            'الفرق بين التصميم الجيد والعظيم هو النية.',
            lang
          )}
          <span className="q">"</span>
        </div>
        <div className="why-list">
          {WHY_ITEMS.map((item, i) => (
            <div key={i} className="witem rr">
              <div className="wi-icon">{item.icon}</div>
              <div>
                <div className="wi-t">{t(item.titleEn, item.titleAr, lang)}</div>
                <div className="wi-d">{t(item.descEn, item.descAr, lang)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

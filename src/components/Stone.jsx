import { useState } from 'react';
import { useLang, t } from '../LangContext';
import { stoneImgs, cineImgs } from '../data/images';

const TABS = [
  { id: 'bm',       en: 'Black Marquina', ar: 'الرخام الأسود' },
  { id: 'vip',      en: 'VIP Residence',  ar: 'مسكن VIP' },
  { id: 'grey',     en: 'Grey Marble',    ar: 'الرخام الرمادي' },
  { id: 'palace',   en: 'Islamic Palace', ar: 'القصر الإسلامي' },
  { id: 'terrazzo', en: 'Terrazzo HQ',    ar: 'المقر الإداري' },
];

const PANEL_CAPTIONS = {
  bm:       [['Exterior','Black Marquina Facade'],['Night · Interior','Corridor View'],['Day · Interior','Living Area'],['Mezzanine','Open Plan Living'],['Aerial · Night','Night Overview'],['Bedroom','Master Suite'],['Kitchen · Night','Kitchen Glow'],['Interior · Night','Night Ambiance']],
  vip:      [['Night · Exterior','VIP Private Residence'],['Balcony','Balcony Perspective'],['Day · Living','Grand Living Space'],['Night · Living','Night Ambiance'],['Kitchen','Kitchen Island'],['Wellness','Spa & Pool Area']],
  grey:     [['Exterior · Day','Marble Facade'],['Interior · Day','Window Facing View'],['Aerial · Day','Top-Down Interior'],['Living','Furniture Grouping'],['Aerial · Night','Night Overview'],['Night · Interior','Night Window View'],['Dining','Dining Room'],['Atrium','Marble Atrium']],
  palace:   [['Exterior · Day','Palace Entrance'],['Night','Night Illumination'],['Interior','Royal Majlis'],['Interior','Reception Hall']],
  terrazzo: [['Day','Facade Detail'],['Interior','Executive Spaces']],
};

const CINE_ITEMS = [
  { tag: 'Stone · Luxury Residential',   title: 'BLACK MARQUINA\nVILLA',             desc: 'Ultra-modern luxury residence clad entirely in Black Marquina stone. Dramatic exterior contrasted with warmly lit interiors.' },
  { tag: 'Stone · VIP Private Residence', title: 'VIP PRIVATE\nRESIDENCE AL NADA',   desc: 'Dark taupe stone exterior, grand living spaces, wellness suite — visual storytelling that sells properties.' },
  { tag: 'Stone · Multi-Residential',    title: 'GREY MARBLE\nAPARTMENT TOWER',      desc: 'Multi-floor residential tower. Day and night photography showcasing the full lifestyle proposition.' },
];

export default function Stone() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState('bm');

  return (
    <section id="stone" data-component="stone-interior" aria-label="Stone and Interior">
      <div className="stag r">{t('Nassar Stone · Visual Design · E-commerce', 'نصار ستون · التصميم البصري', lang)}</div>
      <div className="stitle r">
        {t('STONE & ', 'الحجر ', lang)}<span className="g">{t('INTERIOR', 'والديكور', lang)}</span>
      </div>

      <div className="stone-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`stab${activeTab === tab.id ? ' on' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {t(tab.en, tab.ar, lang)}
          </button>
        ))}
      </div>

      {TABS.map(tab => (
        <div
          key={tab.id}
          className={`spanel${activeTab === tab.id ? ' on' : ''}`}
          style={{ display: activeTab === tab.id ? '' : 'none' }}
        >
          {(stoneImgs[tab.id] || []).map((img, i) => {
            const caps = PANEL_CAPTIONS[tab.id]?.[i] || ['', ''];
            return (
              <div key={i} className="sc r">
                <img src={img.src} alt={img.alt || caps[1]} loading="lazy" />
                <div className="scap">
                  <div className="scap-sub">{caps[0]}</div>
                  <div className="scap-title">{caps[1]}</div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Cinematic highlights */}
      <div className="cine-items-wrap">
        {CINE_ITEMS.map((item, i) => (
          <div key={i} className="cine-item r">
            <img src={cineImgs[i]} alt={item.title} loading="lazy" />
            <div className="cine-ov" />
            <div className="cine-num-bg">0{i + 1}</div>
            <div className="cine-info">
              <div className="cine-tag">{item.tag}</div>
              <div className="cine-title" dangerouslySetInnerHTML={{ __html: item.title.replace('\n', '<br/>') }} />
              <div className="cine-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

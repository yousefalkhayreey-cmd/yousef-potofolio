import { useLang, t } from '../LangContext';
import { SliemLogoSVG } from '../LogoSVG';

const TOOLS = ['Photoshop', 'Blender', 'Illustrator', 'After Effects', 'AI Workflows', 'Camera Raw'];
const PALETTE = [
  { hex: '#060606', label: '#060606', dark: false },
  { hex: '#C9A84C', label: '#C9A84C', dark: true },
  { hex: '#F0EDE8', label: '#F0EDE8', dark: true },
  { hex: '#6B3FA0', label: '#6B3FA0', dark: false },
];

export default function Identity() {
  const { lang } = useLang();
  return (
    <section id="identity" data-component="visual-identity" aria-label="Visual Identity">
      <div className="stag r">{t('Brand Identity · Logo Design · Visual System', 'هوية العلامة التجارية', lang)}</div>
      <div className="stitle r">
        {t('VISUAL ', 'الهوية ', lang)}<span className="g">{t('IDENTITY', 'البصرية', lang)}</span>
      </div>
      <div className="id-grid">
        <div className="logo-box rl">
          <div className="logo-bg-txt">SLIEM</div>
          <div style={{ width: '100%', maxWidth: 320, position: 'relative', zIndex: 1 }}>
            <SliemLogoSVG width="100%" />
          </div>
          <div className="logo-sep" />
          <div className="logo-name">SLIEM</div>
          <div className="logo-sep" />
          <div className="logo-sub">{t('CREATIVE DIRECTION · DESIGN · VISION', 'التوجيه الإبداعي · التصميم · الرؤية', lang)}</div>
        </div>
        <div className="rr">
          <div className="id-title">
            BRAND <span className="g">BUILT</span><br />TO LAST
          </div>
          <div className="palette">
            {PALETTE.map(p => (
              <div key={p.hex} className="swatch" style={{ background: p.hex, border: p.hex === '#060606' ? '1px solid #222' : 'none' }}>
                <span className="sw-lbl" style={{ color: p.dark ? 'rgba(0,0,0,.4)' : undefined }}>{p.label}</span>
              </div>
            ))}
          </div>
          <div className="tools">
            {TOOLS.map(tool => <span key={tool} className="tool">{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

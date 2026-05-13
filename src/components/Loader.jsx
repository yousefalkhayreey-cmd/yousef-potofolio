import { useEffect, useState } from 'react';
import { SliemLogoSVG } from '../LogoSVG';

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 800);
    }, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      id="loader"
      style={{
        position: 'fixed', inset: 0,
        background: 'var(--black)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 28,
        opacity: visible ? 1 : 0,
        transition: 'opacity .8s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="ld-logo">
        <SliemLogoSVG width={120} />
      </div>
      <div className="ld-bar" />
      <div className="ld-txt">Loading Experience</div>
    </div>
  );
}

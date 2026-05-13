import { useEffect, useState } from 'react';

const NAV_SECTIONS = [
  { id: 'hero',         label: 'Home' },
  { id: 'best-section', label: 'Best Of' },
  { id: 'commercial',   label: 'Social' },
  { id: 'work3d',       label: '3D Work' },
  { id: 'stone',        label: 'Stone' },
  { id: 'why',          label: 'Why Us' },
  { id: 'identity',     label: 'Identity' },
  { id: 'numbers',      label: 'Impact' },
  { id: 'contact',      label: 'Contact' },
];

export default function SideNav() {
  const [active, setActive] = useState('hero');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);

    const observers = NAV_SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      clearTimeout(timer);
      observers.forEach(o => o?.disconnect());
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id="snav" className={visible ? 'vis' : ''}>
      {NAV_SECTIONS.map(({ id, label }) => (
        <div
          key={id}
          className={`dot${active === id ? ' on' : ''}`}
          data-l={label}
          data-s={id}
          onClick={() => scrollTo(id)}
          title={label}
        />
      ))}
    </nav>
  );
}

import { useState, useCallback, useEffect } from 'react';
import { LangProvider } from './LangContext';

import Loader         from './components/Loader';
import Cursor         from './components/Cursor';
import SideNav        from './components/SideNav';
import LanguageToggle from './components/LanguageToggle';
import Hero           from './components/Hero';
import BestOf         from './components/BestOf';
import SocialWork     from './components/SocialWork';
import Work3D         from './components/Work3D';
import Stone          from './components/Stone';
import WhyChooseUs    from './components/WhyChooseUs';
import Identity       from './components/Identity';
import Impact         from './components/Impact';
import Contact        from './components/Contact';
import Modal          from './components/Modal';

export default function App() {
  const [loaded, setLoaded]     = useState(false);
  const [modalKey, setModalKey] = useState(null);

  const openModal  = useCallback((key) => setModalKey(key), []);
  const closeModal = useCallback(() => setModalKey(null), []);

  // Scroll reveal observer (replaces GSAP .r class animations)
  useEffect(() => {
    if (!loaded) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translate(0,0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    // Init all .r .rl .rr elements (they start invisible via CSS)
    document.querySelectorAll('.r, .rl, .rr').forEach(el => {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [loaded]);

  return (
    <LangProvider>
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <SideNav />
      <LanguageToggle />

      <main>
        <Hero />
        <BestOf     onOpenModal={openModal} />
        <SocialWork onOpenModal={openModal} />
        <Work3D     onOpenModal={openModal} />
        <Stone />
        <WhyChooseUs />
        <Identity />
        <Impact />
        <Contact />
      </main>

      {modalKey && <Modal projectKey={modalKey} onClose={closeModal} />}
    </LangProvider>
  );
}

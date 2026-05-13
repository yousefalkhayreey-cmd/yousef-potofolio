import { useEffect, useRef, useState } from 'react';
import { useLang, t } from '../LangContext';
import { projects } from '../data/images';

export default function Modal({ projectKey, onClose }) {
  const { lang } = useLang();
  const [activeImg, setActiveImg] = useState(0);
  const overlayRef = useRef(null);

  const project = projects[projectKey];

  useEffect(() => {
    if (projectKey) {
      document.body.style.overflow = 'hidden';
      setActiveImg(0);
    }
    return () => { document.body.style.overflow = ''; };
  }, [projectKey]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  const imgCount = project.imgs.length;
  const isSingle = imgCount === 1;

  return (
    <div
      ref={overlayRef}
      id="modal"
      className="open"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div id="mi">
        {/* Close */}
        <button className="m-close" onClick={onClose} aria-label="Close">× CLOSE</button>

        {/* Header */}
        <div className="m-tag">{project.tag}</div>
        <div className="m-title">{project.title}</div>

        {/* Case study */}
        <div className="ms">
          <div className="ms-lbl">THE BRIEF</div>
          <div className="ms-txt">{project.brief}</div>
        </div>
        <div className="ms">
          <div className="ms-lbl">THE SOLUTION</div>
          <div className="ms-txt">{project.solution}</div>
        </div>
        <div className="ms">
          <div className="ms-lbl">RESULTS &amp; IMPACT</div>
          <div className="ms-txt">{project.results}</div>
        </div>

        {/* Gallery */}
        <div className="ms">
          <div className="ms-lbl">FINAL DESIGNS</div>

          {isSingle ? (
            <div className="mgal mgal-single">
              <img src={project.imgs[0]} alt={project.title} loading="lazy" />
            </div>
          ) : (
            <>
              {/* Lightbox main view */}
              <div className="modal-main-img">
                <img
                  src={project.imgs[activeImg]}
                  alt={`${project.title} ${activeImg + 1}`}
                  loading="lazy"
                />
                {imgCount > 1 && (
                  <>
                    <button
                      className="modal-nav prev"
                      onClick={() => setActiveImg(i => (i - 1 + imgCount) % imgCount)}
                    >‹</button>
                    <button
                      className="modal-nav next"
                      onClick={() => setActiveImg(i => (i + 1) % imgCount)}
                    >›</button>
                    <div className="modal-counter">{activeImg + 1} / {imgCount}</div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {imgCount > 1 && (
                <div className={`mgal ${imgCount === 4 ? 'mgal-4' : ''}`}>
                  {project.imgs.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      loading="lazy"
                      className={i === activeImg ? 'active-thumb' : ''}
                      onClick={() => setActiveImg(i)}
                      style={{ cursor: 'pointer', opacity: i === activeImg ? 1 : 0.55, transition: 'opacity .2s' }}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const anim = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.1;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.1;
      ring.style.left = pos.current.rx + 'px';
      ring.style.top = pos.current.ry + 'px';
      rafRef.current = requestAnimationFrame(anim);
    };

    const onEnterLink = () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--gold)';
    };
    const onLeaveLink = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(201,168,76,.5)';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button,.pc,.bpc,.cine-item').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    rafRef.current = requestAnimationFrame(anim);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={dotRef} />
      <div id="cur-r" ref={ringRef} />
    </>
  );
}

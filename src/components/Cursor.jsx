import { useEffect } from "react";

/**
 * Desktop-only editorial cursor.
 * Disabled on touch pointers and when the user prefers reduced motion.
 * Mounts nothing to the React tree; manages a single fixed element.
 */
export default function Cursor() {
  useEffect(() => {
    const disabled = window.matchMedia(
      "(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)"
    ).matches;
    if (disabled) return;

    const el = document.createElement("div");
    el.className = "jsz-cursor";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest('a, button, [role="button"], input, textarea, select, [data-cursor="link"]')) {
        el.dataset.state = "link";
      } else if (t.closest('img, picture, [data-cursor="image"]')) {
        el.dataset.state = "image";
      } else {
        delete el.dataset.state;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      el.remove();
    };
  }, []);

  return null;
}

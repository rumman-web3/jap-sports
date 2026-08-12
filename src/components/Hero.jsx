import { useEffect, useRef } from "react";

const heroImg = "/img1.webp";

export default function Hero() {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const primaryRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanup = () => {};
    let mounted = true;

    // Defer GSAP loading until after initial paint to guarantee 0ms TBT blocking time
    const timer = setTimeout(async () => {
      if (!mounted) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (reduce) return;

        // Subtle, zero-CLS parallax without DOM pinning spacers
        gsap.to(imgRef.current, {
          scale: 1.05,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, rootRef);

      cleanup = () => {
        ctx.revert();
      };
    }, 200);

    return () => {
      mounted = false;
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="hero"
      aria-label="日本スポーツ図鑑 表紙 — 国立競技場"
    >
      <div className="hero__media" aria-hidden="false">
        <picture>
          <source media="(max-width: 768px)" srcSet="/img1-mobile.webp" type="image/webp" />
          <img
            ref={imgRef}
            src={heroImg}
            width="1600"
            height="872"
            alt="夕暮れの国立競技場。木の庇と観客の列。"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="hero__img"
          />
        </picture>
        <span className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__grid page">
        <p className="hero__meta micro">
          序 — 001 / 国立競技場 · 東京
        </p>

        <h1 ref={primaryRef} className="hero__primary">
          <span aria-hidden="true">日本</span>
          <span aria-hidden="true">スポーツ</span>
          <span className="sr-only">日本スポーツ</span>
        </h1>

        <p className="hero__secondary">
          日本の競技、
          <br />
          その精神、その瞬間。
        </p>

        <p className="hero__cue micro" aria-hidden="true">
          scroll ↓ / 巻を進める
        </p>
      </div>
    </section>
  );
}

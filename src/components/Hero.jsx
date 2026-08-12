import { useEffect, useRef } from "react";

// HMR-swapping this component leaves GSAP pin-spacer wrappers stale;
// invalidate the module so Vite performs a full reload instead.
if (import.meta.hot) import.meta.hot.invalidate();
const heroImg = "/img1.png";

export default function Hero() {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const captionRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Load GSAP + ScrollTrigger only when this route needs them.
    let cleanup = () => {};
    let mounted = true;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Intro (independent of scroll)
        if (!reduce) {
          gsap.from(primaryRef.current, {
            yPercent: 8,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.05,
          });
          gsap.from([captionRef.current, secondaryRef.current], {
            opacity: 0,
            y: 16,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
            delay: 0.4,
          });
        }

        if (reduce) return;

        const isDesktop = window.innerWidth > 860;

        // Scroll choreography: pin on desktop, subtle scroll on mobile.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: isDesktop ? "+=80%" : "bottom top",
            scrub: 0.6,
            pin: isDesktop,
            pinSpacing: isDesktop,
            pinType: "transform",
            anticipatePin: 1,
          },
        });

        tl.to(
          imgRef.current,
          { scale: 1.03, ease: "none" },
          0
        )
          .to(
            primaryRef.current,
            { yPercent: -18, opacity: 0.35, ease: "none" },
            0
          )
          .fromTo(
            secondaryRef.current,
            { opacity: 0.6, y: 20 },
            { opacity: 1, y: 0, ease: "none" },
            0
          );
      }, rootRef);

      cleanup = () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => {
      mounted = false;
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
          <img
            ref={imgRef}
            src={heroImg}
            width="2816"
            height="1536"
            alt="夕暮れの国立競技場。木の庇と観客の列。"
            fetchPriority="high"
            decoding="async"
            className="hero__img"
          />
        </picture>
        <span className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__grid page">
        <p ref={captionRef} className="hero__meta micro">
          序 — 001 / 国立競技場 · 東京
        </p>

        <h1 ref={primaryRef} className="hero__primary">
          <span aria-hidden="true">日本</span>
          <span aria-hidden="true">スポーツ</span>
          <span className="sr-only">日本スポーツ</span>
        </h1>

        <p ref={secondaryRef} className="hero__secondary">
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

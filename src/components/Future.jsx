import { useEffect, useRef } from "react";

// NOTE: No 7th "sunrise athletes" asset ships in /public.
// Reusing img3 with a wide panoramic top-crop that emphasises the
// warm horizon rather than the batter — reads as morning light over
// athletes. Swap this src when a dedicated asset is provided.
const sunriseImg = "/img3.png";

// HMR-swapping a pinned component leaves GSAP pin-spacer wrappers stale;
// invalidate this module so Vite performs a full reload instead.
if (import.meta.hot) import.meta.hot.invalidate();

export default function Future() {
  const rootRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 861px)").matches;
    let mounted = true;
    let cleanup = () => {};

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const root = rootRef.current;
        const image = root.querySelector(".future__img");
        const word = root.querySelector(".future__word");
        const secondary = root.querySelector(".future__secondary");
        const meta = root.querySelector(".future__meta");

        if (reduce) return;

        gsap.set(image, { scale: 1 });
        gsap.set(meta, { opacity: 0, y: 8 });
        gsap.set(word, { opacity: 0, y: 20 });
        gsap.set(secondary, { opacity: 0, y: 16 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: desktop ? "top top" : "top 80%",
            end: desktop ? "+=110%" : "bottom top",
            scrub: 0.6,
            pin: desktop,
            pinSpacing: desktop,
            pinType: "transform",
            anticipatePin: 1,
          },
        });

        // Very quiet reveal — long, opacity-led.
        tl.to(meta, { opacity: 1, y: 0, ease: "power1.out" }, 0.05)
          .to(word, { opacity: 1, y: 0, ease: "power1.out" }, 0.2)
          .to(
            secondary,
            { opacity: 1, y: 0, ease: "power1.out" },
            0.4
          )
          // Image scale drifts only slightly across the whole pin.
          .to(image, { scale: 1.02, ease: "none" }, 0)
          // Fade the wordmark out near the end so the footer takes over softly.
          .to(word, { opacity: 0.7, ease: "power1.in" }, 0.85);

        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, rootRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      mounted = false;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="future"
      aria-labelledby="future-heading"
    >
      <img
        className="future__img"
        src={sunriseImg}
        width="2752"
        height="1536"
        alt="朝の光を受ける競技場と若い選手たち。地平線に射す暖かい光。"
        loading="lazy"
        decoding="async"
      />

      <div className="future__grid page">
        <p className="future__meta micro">終章 — 007 / 未来</p>

        <h2 id="future-heading" className="future__word" lang="ja">
          未来へ。
        </h2>

        <p className="future__secondary">
          受け継がれるもの。
          <br />
          変わっていくもの。
          <br />
          その先に、新しいスポーツの風景がある。
        </p>
      </div>
    </section>
  );
}

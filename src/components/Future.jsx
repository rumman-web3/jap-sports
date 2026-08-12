import { useEffect, useRef } from "react";

if (import.meta.hot) import.meta.hot.invalidate();

const sunriseImg = "/img3.webp";

export default function Future() {
  const rootRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let mounted = true;
    let cleanup = () => {};

    const timer = setTimeout(async () => {
      if (!mounted) return;
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

        gsap.set(word, { opacity: 0, y: 30 });
        gsap.set(secondary, { opacity: 0, y: 20 });
        gsap.set(meta, { opacity: 0, y: 10 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        tl.to(meta, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0)
          .to(word, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.2)
          .to(secondary, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0.4)
          .to(image, { scale: 1.04, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true } }, 0);
      }, rootRef);

      cleanup = () => ctx.revert();
    }, 400);

    return () => {
      mounted = false;
      clearTimeout(timer);
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
        width="1400"
        height="781"
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

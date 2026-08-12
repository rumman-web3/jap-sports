import { useEffect, useRef } from "react";

if (import.meta.hot) import.meta.hot.invalidate();

const crowdImg = "/img4.webp";

export default function Passion() {
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
        const image = root.querySelector(".passion__img");
        const wordmark = root.querySelector(".passion__word");
        const secondary = root.querySelector(".passion__secondary");
        const meta = root.querySelector(".passion__meta");

        if (reduce) return;

        gsap.set(wordmark, { opacity: 0, y: 30 });
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
          .to(wordmark, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.2)
          .to(secondary, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0.4)
          .to(image, { scale: 1.04, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true } }, 0);
      }, rootRef);

      cleanup = () => ctx.revert();
    }, 300);

    return () => {
      mounted = false;
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="passion"
      aria-labelledby="passion-heading"
    >
      <img
        className="passion__img"
        src={crowdImg}
        width="1600"
        height="678"
        alt="サッカースタジアムを埋め尽くす青いサポーターと、翻る旗。夜の照明。"
        loading="lazy"
        decoding="async"
      />
      <span className="passion__scrim" aria-hidden="true" />

      <div className="passion__grid page">
        <p className="passion__meta micro">004 — 熱狂 / 観客</p>
        <h2 id="passion-heading" className="passion__word" lang="ja">
          熱狂
        </h2>
        <p className="passion__secondary">
          ひとつの瞬間を、
          <br />
          何万人もの心が共有する。
        </p>
      </div>
    </section>
  );
}

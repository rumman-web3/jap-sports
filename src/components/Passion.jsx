import { useEffect, useRef } from "react";

// HMR-swapping this component leaves GSAP pin-spacer wrappers stale;
// invalidate the module so Vite performs a full reload instead.
if (import.meta.hot) import.meta.hot.invalidate();

const crowdImg = "/img4.webp";

export default function Passion() {
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
        const image = root.querySelector(".passion__img");
        const wordmark = root.querySelector(".passion__word");
        const secondary = root.querySelector(".passion__secondary");
        const meta = root.querySelector(".passion__meta");

        if (reduce) {
          gsap.set([wordmark, secondary, meta], { opacity: 1, x: 0, y: 0 });
          return;
        }

        const pinLen = desktop ? "+=180%" : "+=100%";

        gsap.set(image, { scale: 1 });
        gsap.set(wordmark, { opacity: 0, y: desktop ? 40 : 24 });
        gsap.set(secondary, { opacity: 0, x: desktop ? -60 : -20 });
        gsap.set(meta, { opacity: 0, y: 12 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: desktop ? "top top" : "top 80%",
            end: desktop ? pinLen : "bottom top",
            scrub: 0.6,
            pin: desktop,
            pinSpacing: desktop,
            pinType: "transform",
            anticipatePin: 1,
          },
        });

        // 0–25% — meta enters
        tl.to(meta, { opacity: 1, y: 0, ease: "power2.out" }, 0);
        // 25–50% — 熱狂 rises
        tl.to(wordmark, { opacity: 1, y: 0, ease: "power2.out" }, 0.25);
        // 50–75% — secondary drifts across
        tl.to(
          secondary,
          { opacity: 1, x: desktop ? 40 : 0, ease: "none" },
          0.5
        );
        // 75–100% — typography exits, image scales subtly
        tl.to(wordmark, { opacity: 0, y: -30, ease: "power2.in" }, 0.75)
          .to(
            secondary,
            { opacity: 0, x: desktop ? 120 : 40, ease: "power2.in" },
            0.75
          )
          .to(image, { scale: 1.025, ease: "none" }, 0.75);

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
      className="passion"
      aria-labelledby="passion-heading"
    >
      <img
        className="passion__img"
        src={crowdImg}
        width="3168"
        height="1344"
        alt="サッカースタジアムを埋め尽くす青いサポーターと、翻る旗。夜の照明。"
        loading="eager"
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

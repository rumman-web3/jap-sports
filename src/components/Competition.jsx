import { useEffect, useRef } from "react";

const sumoImg = "/img3.webp";

export default function Competition() {
  const rootRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
        const image = root.querySelector(".comp__img");
        const wordmark = root.querySelector(".comp__word");
        const secondary = root.querySelector(".comp__secondary");
        const note = root.querySelector(".comp__note");
        const rule = root.querySelector(".comp__rule");
        const meta = root.querySelector(".comp__meta");

        if (reduce) return;

        // Initial states
        gsap.set(image, { clipPath: "inset(0 100% 0 0)" });
        gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(meta, { opacity: 0, x: -12 });
        gsap.set(wordmark, { opacity: 0, y: 24 });
        gsap.set([secondary, note], { opacity: 0, y: 20 });

        // Enter timeline — plays once on scroll-into-view
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.to(rule, { scaleX: 1, duration: 0.8, ease: "power2.out" }, 0)
          .to(meta, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }, 0.05)
          .to(
            image,
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.35,
              ease: "power3.inOut",
            },
            0.15
          )
          .to(
            wordmark,
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            0.55
          )
          .to(
            secondary,
            { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
            0.95
          )
          .to(
            note,
            { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
            1.05
          );

        // Subtle opposing scroll parallax (transform-only, ~10–18px)
        gsap.to(image, {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.to(wordmark, {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

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
      className="comp"
      aria-labelledby="comp-heading"
    >
      <header className="comp__head page">
        <span className="comp__rule" aria-hidden="true" />
        <p className="comp__meta micro">003 — 競技 / 野球</p>
      </header>

      <figure className="comp__figure">
        <img
          className="comp__img"
          src={baseballImg}
          width="2752"
          height="1536"
          alt="夕暮れの球場で打席に立つ、東京の打者。観客席は光に霞む。"
          loading="lazy"
          decoding="async"
        />
        <h2 id="comp-heading" className="comp__word">
          野球
        </h2>
      </figure>

      <div className="comp__text page">
        <p className="comp__secondary">
          日常の中に、
          <br />
          競技がある。
        </p>
        <p className="comp__note">
          日本で育まれた野球文化は、
          <br />
          競技場の外にも広がっている。
        </p>
      </div>
    </section>
  );
}

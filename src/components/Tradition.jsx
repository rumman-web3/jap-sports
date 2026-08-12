import { useEffect, useRef } from "react";

const kendoImg = "/img2.webp";

export default function Tradition() {
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
        const image = root.querySelector(".trad__img");
        const vertical = root.querySelector(".trad__vertical");
        const label = root.querySelector(".trad__label");
        const heading2 = root.querySelector(".trad__heading2");
        const copy = root.querySelector(".trad__copy");
        const caption = root.querySelector(".trad__caption");

        if (reduce) {
          gsap.set([image, vertical, label, heading2, copy, caption], {
            clearProps: "all",
            opacity: 1,
          });
          return;
        }

        // Initial state
        gsap.set(image, { clipPath: "inset(100% 0% 0% 0%)" });
        gsap.set(vertical, { y: 40, opacity: 0 });
        gsap.set([label, heading2], { opacity: 0, y: 12 });
        gsap.set([copy, caption], { opacity: 0, y: 18 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl.to(label, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0)
          .to(
            image,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.4,
              ease: "power3.inOut",
            },
            0.1
          )
          .to(
            vertical,
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
            0.25
          )
          .to(
            heading2,
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            0.9
          )
          .to(
            copy,
            { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
            1.0
          )
          .to(
            caption,
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
            1.15
          );

        // Very small parallax on the vertical typography (transform only)
        gsap.to(vertical, {
          yPercent: -4,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }, rootRef);

      // Recompute positions in case a pinned scene above changed layout.
      requestAnimationFrame(() => ScrollTrigger.refresh());

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
      className="trad"
      aria-labelledby="trad-heading"
    >
      <span className="trad__label" aria-hidden="true">
        <em>伝統</em>
        <span>/</span>
        <em>02</em>
      </span>

      <figure className="trad__figure">
        <div className="trad__frame">
          <img
            src={kendoImg}
            width="1856"
            height="2304"
            alt="道場に整列する剣道の稽古者たち。窓から差し込む静かな朝の光。"
            loading="lazy"
            decoding="async"
            className="trad__img"
          />
        </div>
        <figcaption className="trad__caption">
          剣道 —{" "}
          <span>静けさの中にある、競技者の集中。</span>
        </figcaption>
      </figure>

      <h2
        id="trad-heading"
        className="trad__vertical"
        lang="ja"
      >
        武道
      </h2>

      <div className="trad__text">
        <p className="trad__heading2">道を究める。</p>
        <p className="trad__copy">
          競技の中にあるのは、
          <br />
          勝敗だけではない。
          <br />
          <span>礼、集中、鍛錬。</span>
          <br />
          日本の武道は、身体と精神の両方を磨いてきた。
        </p>
      </div>
    </section>
  );
}

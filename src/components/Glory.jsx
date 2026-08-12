import { useEffect, useRef } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const trophyImg = "/img6.png";

const ACHIEVEMENTS = [
  {
    year: "1964",
    title: "東京オリンピック",
    desc: "アジア初の夏季五輪開催。柔道が正式種目に採用され、日本武道が世界の舞台へ。戦後復興の象徴として、国民に希望を与えた大会。",
    stat: "163カ国参加",
  },
  {
    year: "1972",
    title: "札幌冬季オリンピック",
    desc: "笠谷幸生が70m級ジャンプで金メダル。日の丸飛行隊が表彰台を独占し、冬季スポーツの歴史に残る快挙を達成。",
    stat: "日の丸飛行隊",
  },
  {
    year: "2021",
    title: "東京2020オリンピック",
    desc: "困難を乗り越えて開催された二度目の東京五輪。空手が初採用され、日本は史上最多の27個の金メダルを獲得した。",
    stat: "金メダル27個",
  },
];

const LEGENDS = [
  { name: "嘉納治五郎", title: "柔道の父", desc: "講道館柔道の創始者。「精力善用・自他共栄」の理念で武道を教育へと昇華させた。近代オリンピックのアジア初の委員でもある。" },
  { name: "大山倍達", title: "極真空手の創始者", desc: "素手で牛を倒す逸話で知られる伝説の武道家。「頭は低く、目は高く、口を慎んで心広く」を座右の銘とした。" },
  { name: "植芝盛平", title: "合気道の開祖", desc: "「和合の武道」を説き、相手を傷つけず制する理想を追求。世界130カ国以上に道場が広がる武道の礎を築いた。" },
  { name: "山下泰裕", title: "柔道家", desc: "203連勝無敗の伝説。1984年ロサンゼルス五輪では負傷した右足を引きずりながらも金メダルを獲得し、世界を感動させた。" },
];

const TROPHY_STATS = [
  { num: "583", label: "オリンピックメダル総数" },
  { num: "27", label: "2021年大会 金メダル" },
  { num: "48", label: "柔道 五輪金メダル" },
  { num: "130+", label: "武道普及国数" },
];

export default function Glory() {
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
        if (reduce) return;
        const root = rootRef.current;

        gsap.set(".glory-col", { opacity: 0, y: 30 });

        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        })
          .to(".glory-col-left", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0)
          .to(".glory-col-center", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.25)
          .to(".glory-col-right", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.5);

        /* Slow trophy scale on scroll */
        const img = root.querySelector(".glory-trophy__img");
        if (img) {
          gsap.fromTo(img, { scale: 0.96 }, {
            scale: 1.02,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1.2 },
          });
        }

        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, rootRef);

      cleanup = () => ctx.revert();
    })();

    return () => { mounted = false; cleanup(); };
  }, []);

  return (
    <section ref={rootRef} className="glory-full" aria-labelledby="glory-heading">
      {/* Header */}
      <header className="glory-full__header">
        <span className="glory-full__tag">006 — 栄光 / 勝利の殿堂</span>
        <h2 id="glory-heading" className="glory-full__title">栄光。</h2>
        <p className="glory-full__subtitle">
          勝利は一瞬で生まれるものではない。数千日の鍛錬が、たった一つの瞬間に結実する。
          ここに刻まれた記録は、汗と涙の結晶である。
        </p>
      </header>

      {/* Stats Bar */}
      <div className="glory-stats-bar">
        {TROPHY_STATS.map((s, i) => (
          <div key={i} className="glory-stats-bar__item">
            <span className="glory-stats-bar__num">{s.num}</span>
            <span className="glory-stats-bar__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Main 3-Column Grid */}
      <div className="glory-full__grid">
        {/* LEFT: Trophy Exhibit + Caption */}
        <div className="glory-col glory-col-left">
          <figure className="glory-trophy">
            <div className="glory-trophy__frame">
              <img
                className="glory-trophy__img"
                src={trophyImg}
                width="2048"
                height="2048"
                alt="コンクリートと障子光の展示室に置かれた優勝トロフィー。"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="glory-trophy__caption">
              優勝トロフィー — 収蔵品 第006号
            </figcaption>
          </figure>

          {/* Quote */}
          <blockquote className="glory-quote">
            <p>「勝ちに不思議の勝ちあり、負けに不思議の負けなし。」</p>
            <cite>— 松浦静山（江戸時代の剣術家）</cite>
          </blockquote>

          <button
            type="button"
            className="glory-sound-btn"
            onClick={() => audioEngine.playTaiko(0.3)}
          >
            🥁 勝利の太鼓を鳴らす
          </button>
        </div>

        {/* CENTER: Olympic Achievements Timeline */}
        <div className="glory-col glory-col-center">
          <div className="glory-timeline">
            <h3 className="glory-section-title">日本スポーツの栄光の瞬間</h3>
            <p className="glory-section-intro">
              明治維新以降、日本のスポーツは世界の舞台で数々の偉業を成し遂げてきた。
              以下は、日本スポーツ史に永遠に刻まれる三つの転換点である。
            </p>
            <div className="glory-timeline__items">
              {ACHIEVEMENTS.map((a, idx) => (
                <div key={idx} className="glory-achievement">
                  <div className="glory-achievement__year-col">
                    <span className="glory-achievement__year">{a.year}</span>
                    {idx < ACHIEVEMENTS.length - 1 && <div className="glory-achievement__line" />}
                  </div>
                  <div className="glory-achievement__body">
                    <div className="glory-achievement__head">
                      <h4 className="glory-achievement__title">{a.title}</h4>
                      <span className="glory-achievement__stat">{a.stat}</span>
                    </div>
                    <p className="glory-achievement__desc">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Legends of Japanese Sports */}
        <div className="glory-col glory-col-right">
          <div className="glory-legends">
            <h3 className="glory-section-title">伝説の競技者たち</h3>
            <p className="glory-section-intro">
              日本スポーツの歴史を語る上で欠かせない、道を切り拓いた先駆者たち。
              彼らの精神は、現代のアスリートにも脈々と受け継がれている。
            </p>
            <div className="glory-legends__list">
              {LEGENDS.map((l, idx) => (
                <div key={idx} className="glory-legend-card">
                  <div className="glory-legend-card__head">
                    <span className="glory-legend-card__name">{l.name}</span>
                    <span className="glory-legend-card__title">{l.title}</span>
                  </div>
                  <p className="glory-legend-card__desc">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="glory-closing">
            <span className="glory-closing__kanji">勝</span>
            <p className="glory-closing__text">
              真の勝利とは、相手に勝つことではない。昨日の自分を超えること——それが日本武道の教える「勝」の本質である。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

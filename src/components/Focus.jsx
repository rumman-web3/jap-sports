import { useEffect, useRef } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const athleteImg = "/img5.webp";

const SCHEDULE = [
  { time: "05:00", kanji: "黎明", title: "静寂と呼吸", desc: "日の出前の道場で、ただ呼吸だけに集中する。外界の音を遮断し、己の心拍と向き合う瞑想の時間。" },
  { time: "09:00", kanji: "基本", title: "千回の素振り", desc: "同じ動きを千回繰り返す。筋肉が覚え、意識せずとも体が動くまで。退屈こそが上達の道。" },
  { time: "14:00", kanji: "突破", title: "限界への挑戦", desc: "肉体が悲鳴を上げる瞬間、精神が肉体を超える。その一瞬の突破が、数年分の成長をもたらす。" },
  { time: "19:00", kanji: "残心", title: "感謝と振り返り", desc: "道具を丁寧に磨き、道場に一礼する。今日の稽古に感謝し、明日の課題を心に刻む。" },
];

const MINDSET = [
  { label: "集中力", val: 98, desc: "雑念を排し、一点に全神経を注ぐ力" },
  { label: "忍耐力", val: 95, desc: "苦痛の中でも折れない精神の強靱さ" },
  { label: "礼節", val: 100, desc: "対戦相手への敬意と感謝の心" },
  { label: "無心", val: 92, desc: "結果への執着を捨て、過程に没頭する境地" },
];

const PRINCIPLES = [
  { kanji: "守", reading: "しゅ", meaning: "師の教えを忠実に守り、基本を体に刻む段階" },
  { kanji: "破", reading: "は", meaning: "基本を土台に、自らの工夫と応用を加える段階" },
  { kanji: "離", reading: "り", meaning: "型を超え、独自の境地を切り拓く最終段階" },
];

export default function Focus() {
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

        gsap.set(".focus-col", { opacity: 0, y: 30 });

        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        })
          .to(".focus-col-left", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0)
          .to(".focus-col-center", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.2)
          .to(".focus-col-right", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.4);

        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, rootRef);

      cleanup = () => ctx.revert();
    })();

    return () => { mounted = false; cleanup(); };
  }, []);

  return (
    <section ref={rootRef} className="focus-full" aria-labelledby="focus-heading">
      {/* Section Header */}
      <header className="focus-full__header">
        <span className="focus-full__tag">005 — 集中 / 孤独な鍛錬の記録</span>
        <h2 id="focus-heading" className="focus-full__title">一人の競技者。</h2>
        <p className="focus-full__subtitle">
          歓声が去り、照明が消えた後も稽古は続く。一瞬の栄光のために積み重ねる、数千時間の静寂。
        </p>
      </header>

      {/* Main 3-Column Grid — Full Width */}
      <div className="focus-full__grid">
        {/* LEFT COLUMN: Portrait +守破離 */}
        <div className="focus-col focus-col-left">
          <figure className="focus-portrait">
            <div className="focus-portrait__frame">
              <img
                className="focus-portrait__img"
                src={athleteImg}
                width="1856"
                height="2304"
                alt="稽古後、汗と共に呼吸を整える若い競技者の肖像。"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="focus-portrait__caption">
              一人の朝、一人の稽古。誰も見ていない場所での努力が、舞台の上で花開く。
            </figcaption>
          </figure>

          {/* Metrics Row */}
          <div className="focus-stats-row">
            <div className="focus-stat">
              <span className="focus-stat__num">42</span>
              <span className="focus-stat__unit">安静時心拍数</span>
            </div>
            <div className="focus-stat">
              <span className="focus-stat__num">14</span>
              <span className="focus-stat__unit">修練年数</span>
            </div>
            <div className="focus-stat">
              <span className="focus-stat__num">3,650</span>
              <span className="focus-stat__unit">連続稽古日数</span>
            </div>
          </div>

          {/* 守破離 Cards */}
          <div className="focus-shuhari">
            <h3 className="focus-shuhari__title">守破離 — 上達の三段階</h3>
            <div className="focus-shuhari__cards">
              {PRINCIPLES.map((p, i) => (
                <div key={i} className="shuhari-card">
                  <span className="shuhari-card__kanji">{p.kanji}</span>
                  <span className="shuhari-card__reading">{p.reading}</span>
                  <p className="shuhari-card__meaning">{p.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: 24-Hour Schedule */}
        <div className="focus-col focus-col-center">
          <div className="focus-schedule">
            <h3 className="focus-schedule__title">競技者の一日 — 二十四時間の記録</h3>
            <p className="focus-schedule__intro">
              真の強さは、誰にも見られていない時間の過ごし方で決まる。以下は、ある剣道家の一日を追った記録である。
            </p>
            <div className="focus-schedule__timeline">
              {SCHEDULE.map((item, idx) => (
                <div key={idx} className="schedule-block">
                  <div className="schedule-block__time-col">
                    <span className="schedule-block__time">{item.time}</span>
                    <span className="schedule-block__kanji">{item.kanji}</span>
                    {idx < SCHEDULE.length - 1 && <div className="schedule-block__line" />}
                  </div>
                  <div className="schedule-block__content">
                    <h4 className="schedule-block__title">{item.title}</h4>
                    <p className="schedule-block__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="focus-quote">
            <p>「人は歓声のために走るのではない。昨日の自分を一ミリ超えるために汗を流す。」</p>
            <cite>— 無名の剣士</cite>
          </blockquote>

          {/* Audio Button */}
          <button
            type="button"
            className="focus-zen-btn"
            onClick={() => audioEngine.playChime(0.25)}
          >
            🔊 瞑想の音景を聴く
          </button>
        </div>

        {/* RIGHT COLUMN: Mindset Matrix + Philosophy */}
        <div className="focus-col focus-col-right">
          {/* Mindset Bars */}
          <div className="focus-mindset">
            <h3 className="focus-mindset__title">精神性の四要素</h3>
            <p className="focus-mindset__intro">
              日本の武道における精神修養の核心。技術だけでなく、心の鍛錬こそが真の強さを生む。
            </p>
            <div className="focus-mindset__bars">
              {MINDSET.map((m, idx) => (
                <div key={idx} className="mindset-row">
                  <div className="mindset-row__header">
                    <span className="mindset-row__label">{m.label}</span>
                    <span className="mindset-row__val">{m.val}%</span>
                  </div>
                  <div className="mindset-row__track">
                    <div className="mindset-row__fill" style={{ width: `${m.val}%` }} />
                  </div>
                  <p className="mindset-row__desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Block */}
          <div className="focus-philosophy">
            <h3 className="focus-philosophy__title">武道哲学 — 道の探求</h3>
            <div className="focus-philosophy__text">
              <p>
                武道とは、単なる戦闘技術ではない。「道」という字が示す通り、それは人生そのものの歩み方を問う哲学である。
              </p>
              <p>
                剣道の竹刀は相手を倒すためではなく、自分の弱さを斬るために振る。柔道の「柔よく剛を制す」は、力に頼らず、相手の力を利用する知恵を説く。
              </p>
              <p>
                稽古場で流す汗の一滴一滴が、人格を磨く砥石となる。勝敗を超えた先にある「不動心」——それこそが、日本武道が世界に伝える最も深い教えである。
              </p>
            </div>
          </div>

          {/* Final Stat Badge */}
          <div className="focus-badge">
            <span className="focus-badge__kanji">不動心</span>
            <span className="focus-badge__meaning">何事にも動じない、揺るぎなき心の境地</span>
          </div>
        </div>
      </div>
    </section>
  );
}

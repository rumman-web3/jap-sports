import { useState } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const CULTURE_PRINCIPLES = [
  {
    num: "01",
    jp: "礼",
    en: "Rei — Courtesy & Respect",
    calligraphy: "礼",
    tagline: "「礼に始まり、礼に終わる」",
    body: "勝敗以前に、相手、審判、そして競技場への深い敬意を表す。頭を下げる動作一つに、自己の傲慢さを打ち消す心が宿る。",
    quote: "相手が存在するからこそ、己の技を試すことができる。",
  },
  {
    num: "02",
    jp: "心技体",
    en: "Shin-Gi-Tai — Mind, Technique, Body",
    calligraphy: "心",
    tagline: "「心が体を動かし、技を結実させる」",
    body: "技術や筋力だけでは真のアスリートとは言えない。ブレない精神（心）、練り上げられた技術（技）、鍛え抜かれた肉体（体）の三位一体。",
    quote: "心なき技は暴力を生み、体なき心は空想に終わる。",
  },
  {
    num: "03",
    jp: "修練",
    en: "Shuren — Endless Practice",
    calligraphy: "練",
    tagline: "「千日の稽古を鍛とし、万日の稽古を錬とす」",
    body: "同じ動作を何千回、何万回と繰り返す。勝利の快楽のためではなく、所作が呼吸と同調する領域まで自分を磨き上げるプロセスの尊重。",
    quote: "今日行う一回の振りが、10年後の姿を創る。",
  },
  {
    num: "04",
    jp: "和",
    en: "Wa — Harmony & Collective Spirit",
    calligraphy: "和",
    tagline: "「個の力を、和の大きな潮流へ」",
    body: "駅伝のタスキ、野球のベンチの合唱、スタンドの拍手。個人のエゴを超えて全員がひとつの目標に心を合わせる日本独特の共鳴文化。",
    quote: "一人で走れば速いが、共に走れば遠くまで届く。",
  },
  {
    num: "05",
    jp: "道",
    en: "Dō — The Lifelong Way",
    calligraphy: "道",
    tagline: "「ゴールではなく、歩み続ける姿勢そのもの」",
    body: "スポーツを単なるゲーム（遊戯）ではなく「道」と呼ぶ。引退や年齢に関係なく、生涯をかけて探求し続ける自己完成の旅。",
    quote: "道に終わりはない。歩む足跡こそが答である。",
  },
  {
    num: "06",
    jp: "残心",
    en: "Zanshin — Lingering Awareness",
    calligraphy: "残",
    tagline: "「技を終えた後も、心を残し途切れさせない」",
    body: "一撃を決めた後、ガッツポーズで誇示するのではなく、静かに次の変化に備える美徳。勝利の瞬間こそ最も謙虚であるべきだという教え。",
    quote: "静けさの中にこそ、真の強さが宿る。",
  },
  {
    num: "07",
    jp: "風土",
    en: "Fudo — Local Community Roots",
    calligraphy: "風",
    tagline: "「河原のグラウンド、学校の体育館、土地の記憶」",
    body: "日本のスポーツは地域の学校、企業チーム、地元の道場に深く根ざしている。地域の人々が世代を超えて選手を見守り育てる風土。",
    quote: "グラウンドの土の匂いが、故郷の記憶となる。",
  },
];

export default function Culture() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <article className="doc" aria-labelledby="culture-title">
      <header className="doc__head page">
        <span className="doc__eyebrow micro">PHILOSOPHY / スポーツと日本の文化</span>
        <h1 id="culture-title" className="doc__title">
          スポーツと、
          <br />
          日本の精神。
        </h1>
        <p className="doc__intro">
          勝利の数値には表れない、競技を支える七つの精神的価値観。
          カードに触れて精神の真髄を体験してください。
        </p>
      </header>

      {/* Philosophy Cards Interactive Grid */}
      <section className="culture-grid-section page">
        <div className="culture-cards-container">
          {CULTURE_PRINCIPLES.map((c, idx) => (
            <div
              key={c.num}
              className={`culture-card glass-panel ${idx === activeCard ? "is-active" : ""}`}
              onClick={() => {
                audioEngine.playWoodClick(0.12);
                setActiveCard(idx);
              }}
              onMouseEnter={() => audioEngine.playWoodClick(0.06)}
              tabIndex={0}
              role="button"
              aria-label={`${c.jp}の精神詳細`}
            >
              <div className="culture-card-calligraphy" aria-hidden="true">
                {c.calligraphy}
              </div>

              <div className="culture-card-head">
                <span className="culture-card-num">{c.num}</span>
                <h2 className="culture-card-jp">{c.jp}</h2>
                <span className="culture-card-en">{c.en}</span>
              </div>

              <p className="culture-card-tagline">{c.tagline}</p>
              <p className="culture-card-body">{c.body}</p>

              <blockquote className="culture-card-quote">
                “{c.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Calligraphy Quote Banner */}
      <section className="culture-quote-banner page">
        <div className="quote-banner-box glass-panel">
          <span className="micro">SUMMARY STATEMENT / 日本のスポーツ観</span>
          <p className="quote-banner-text">
            「勝敗は一時のもの。しかし、鍛錬を通じて培った心と作法は、生涯失われることがない。」
          </p>
          <button
            type="button"
            className="culture-sound-btn"
            onClick={() => audioEngine.playChime(0.3)}
          >
            🔔 精神の響き（鐘音）を聴く
          </button>
        </div>
      </section>
    </article>
  );
}

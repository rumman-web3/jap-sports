import { useState } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const LEGENDARY_MOMENTS = [
  {
    year: "1964",
    title: "国立競技場の青空とファンファーレ",
    venue: "旧・国立競技場（東京）",
    img: "/img1.png",
    sport: "1964 東京オリンピック",
    body: "ブルーインパルスが東京の秋空に描いた五つの輪。終戦からわずか19年、スポーツを通じて日本が世界へ平和と復活を誓った開会式。",
    quote: "その日、日本の空はひとつになった。",
  },
  {
    year: "1998",
    title: "白馬の雪原とフライングジャンプ",
    venue: "白馬ジャンプ競技場（長野）",
    img: "/img2.png",
    sport: "長野冬季オリンピック",
    body: "吹雪の中で行われた団体ジャンプ。1回目の失敗を乗り越え、原田雅彦選手が放った大ジャンプと「ふなき、ふなき…」の祈り。",
    quote: "雪の中に散った涙と、金色の歓喜。",
  },
  {
    year: "2011",
    title: "震災の夏の甲子園球場",
    venue: "阪神甲子園球場（兵庫）",
    img: "/img3.png",
    sport: "高校野球 / 甲子園",
    body: "東日本大震災の年。白球を全力で追いかける球児たちの姿が、傷ついた人々の心に勇気と希望の灯を点した夏。",
    quote: "ボールが空に上がり続ける限り、僕たちは前を向く。",
  },
  {
    year: "2019",
    title: "桜のジャージとワンチームのスクラム",
    venue: "東京スタジアム（東京）",
    img: "/img4.png",
    sport: "ラグビーワールドカップ",
    body: "多様なルーツを持つ選手たちが「ONE TEAM」となり、強豪アイルランドやスコットランドを破り史上初のベスト8進出を果たした夜。",
    quote: "4年の血と汗が結実した、日本ラグビーの奇跡。",
  },
  {
    year: "2021",
    title: "無観客の会場に残ったアスリートの呼吸",
    venue: "新国立競技場（東京）",
    img: "/img5.png",
    sport: "東京2020大会",
    body: "静寂に包まれた会場。大歓声のない空間だからこそ、選手の息遣い、床を蹴る音、勝利と敗北の純粋な瞬間が際立った競技大会。",
    quote: "声援はなくとも、全世界の視線がそこにあった。",
  },
];

export default function Moments() {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const openLightbox = (m) => {
    audioEngine.playTaiko(0.2);
    setSelectedMoment(m);
  };

  const closeLightbox = () => {
    audioEngine.playWoodClick(0.12);
    setSelectedMoment(null);
  };

  return (
    <article className="doc" aria-labelledby="moments-title">
      <header className="doc__head page">
        <span className="doc__eyebrow micro">CINEMA / 記憶に残る瞬間</span>
        <h1 id="moments-title" className="doc__title">
          名場面
          <br />
          ギャラリー。
        </h1>
        <p className="doc__intro">
          記録の数字ではなく、人々の心に深く刻まれた伝説のドラマ。
          写真を選択すると、拡大シネマビューが開きます。
        </p>
      </header>

      {/* Grid of Cinema Cards */}
      <section className="moments-grid-section page">
        <div className="moments-grid">
          {LEGENDARY_MOMENTS.map((m) => (
            <div
              key={m.year}
              className="moment-card glass-panel"
              onClick={() => openLightbox(m)}
              onMouseEnter={() => audioEngine.playWoodClick(0.06)}
              tabIndex={0}
              role="button"
              aria-label={`${m.title}の詳細を見る`}
            >
              <div className="moment-card-media">
                <img src={m.img} alt={m.title} loading="lazy" decoding="async" />
                <span className="moment-card-year micro">{m.year}</span>
                <span className="moment-card-sport-badge">{m.sport}</span>
              </div>

              <div className="moment-card-body">
                <h2 className="moment-card-title">{m.title}</h2>
                <p className="moment-card-venue">📍 {m.venue}</p>
                <p className="moment-card-desc">{m.body}</p>
                <blockquote className="moment-card-quote">
                  “{m.quote}”
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Cinema Overlay */}
      {selectedMoment && (
        <div className="moment-lightbox-backdrop" onClick={closeLightbox}>
          <div
            className="moment-lightbox glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="moment-lightbox-close"
              onClick={closeLightbox}
              aria-label="閉じる"
            >
              ✕
            </button>

            <div className="moment-lightbox-img-container">
              <img src={selectedMoment.img} alt={selectedMoment.title} />
            </div>

            <div className="moment-lightbox-content">
              <span className="micro">{selectedMoment.year} — {selectedMoment.sport}</span>
              <h2>{selectedMoment.title}</h2>
              <p className="lightbox-venue">📍 {selectedMoment.venue}</p>
              <p className="lightbox-body">{selectedMoment.body}</p>
              <blockquote className="lightbox-quote">
                “{selectedMoment.quote}”
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

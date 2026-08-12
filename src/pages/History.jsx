import { useState } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const ERAS = [
  {
    year: "古代 ~ 飛鳥",
    title: "神事と力くらべ",
    kanji: "神",
    summary: "五穀豊穣と国家安泰を祈る儀式として、相撲や騎射が行われた原初の時代。",
    detail: "『古事記』や『日本書紀』に記された建御雷神（タケミカヅチ）の力競べが相撲の起源とされ、農耕儀礼や神への奉納として競技が生まれました。",
    quote: "神々に捧げる力の技が、日本の競技の原点である。",
    highlight: "相撲・弓矢の神事化",
  },
  {
    year: "中世 (鎌倉・戦国)",
    title: "武道の形成と稽古",
    kanji: "武",
    summary: "戦の技術が「道」へと昇華し、型と作法が体系化された武士の時代。",
    detail: "弓馬の道（流鏑馬）、剣術、柔術などの戦技が磨かれました。単なる殺傷技術から、心身を鍛える「稽古（古きを考える）」の思想が確立します。",
    quote: "勝つことより先に、己の心を整えよ。",
    highlight: "流鏑馬・古流柔術・剣術流派の確立",
  },
  {
    year: "江戸",
    title: "庶民文化と勧進相撲",
    kanji: "泰",
    summary: "泰平の世において、競技が観客を魅了する大衆娯楽・スポーツへと花開く。",
    detail: "勧進相撲が定期開催され、大相撲の土俵作法や横綱制度が完成。剣術においても竹刀と防具が発明され、安全に打ち合える競技剣道が誕生しました。",
    quote: "土俵の熱狂と、道場の静寂が同居した時代。",
    highlight: "防具剣道の普及・勧進相撲の定着",
  },
  {
    year: "明治 · 大正",
    title: "近代化と西洋スポーツの渡来",
    kanji: "新",
    summary: "文明開化の波に乗って野球や陸上が渡来し、「体育」と「武道」が交錯する。",
    detail: "1872年にアメリカ人お雇い外国人お雇い教師によって野球が伝来。学校教育に「体育」が組み込まれ、武道も講道館柔道や現代剣道へと再編されました。",
    quote: "海を渡ってきた球戯が、日本の風土に根を張る。",
    highlight: "野球伝来・講道館柔道創設・箱根駅伝誕生",
  },
  {
    year: "1964",
    title: "東京オリンピックの衝撃",
    kanji: "光",
    summary: "戦後復興の象徴。アジア初のオリンピックで柔道が正式種目へ。",
    detail: "東洋の魔女（女子バレー）の金メダル、国立競技場での開会式。世界に日本のスポーツの力と「おもてなし」の美徳を示した歴史的転換点。",
    quote: "国立競技場に響いたファンファーレが、時代を塗り替えた。",
    highlight: "柔道の五輪種目化・東洋の魔女・インフラ整備",
  },
  {
    year: "現代",
    title: "グローバル化と多様性",
    kanji: "飛",
    summary: "世界で躍動する日本人アスリートと、日常に溶け込むスポーツカルチャー。",
    detail: "大谷翔平や三笘薫ら世界最高峰で躍進する選手たち、パラスポーツの発展、スケートボードやクライミングなどアーバンスポーツの台頭。",
    quote: "受け継ぐ伝統と、世界へ挑む新しい翼。",
    highlight: "WBC優勝・パラスポーツ発展・新競技の台頭",
  },
];

export default function History() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeEra = ERAS[selectedIdx];

  return (
    <article className="doc" aria-labelledby="history-title">
      <header className="doc__head page">
        <span className="doc__eyebrow micro">CHRONOLOGY / 日本スポーツの歴史</span>
        <h1 id="history-title" className="doc__title">
          日本のスポーツ、
          <br />
          その歩み。
        </h1>
        <p className="doc__intro">
          古代の神事から現代のグローバル舞台まで。年代のカードを選択して時代の物語を辿ります。
        </p>
      </header>

      {/* Timeline Nav Selector */}
      <section className="history-era-selector page" aria-label="時代選択">
        <div className="era-bar">
          {ERAS.map((e, idx) => (
            <button
              key={e.year}
              type="button"
              className={`era-step-btn ${idx === selectedIdx ? "is-active" : ""}`}
              onClick={() => {
                audioEngine.playWoodClick(0.12);
                setSelectedIdx(idx);
              }}
            >
              <span className="era-step-year">{e.year}</span>
              <span className="era-step-dot" />
              <span className="era-step-kanji">{e.kanji}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Active Era Spotlight Card */}
      <section className="history-spotlight-section page">
        <div className="era-spotlight-card glass-panel">
          <div className="era-spotlight-watermark" aria-hidden="true">
            {activeEra.kanji}
          </div>

          <div className="era-spotlight-header">
            <span className="era-badge micro">{activeEra.year}</span>
            <h2 className="era-title">{activeEra.title}</h2>
            <p className="era-summary">{activeEra.summary}</p>
          </div>

          <blockquote className="era-quote">
            “{activeEra.quote}”
          </blockquote>

          <div className="era-body">
            <h3>時代の詳細</h3>
            <p>{activeEra.detail}</p>
            <div className="era-highlight-tag">
              ⚡ 歴史的トピック: {activeEra.highlight}
            </div>
          </div>
        </div>
      </section>

      {/* Full Timeline List */}
      <section className="history-timeline-section page">
        <h2 className="section-subhead">歴史の年表一覧</h2>
        <ol className="timeline-interactive" aria-label="歴史年表">
          {ERAS.map((e, idx) => (
            <li
              key={e.year}
              className={`timeline-row-item ${idx === selectedIdx ? "is-selected" : ""}`}
              onClick={() => {
                audioEngine.playWoodClick(0.1);
                setSelectedIdx(idx);
              }}
            >
              <div className="timeline-time">
                <span className="timeline-year">{e.year}</span>
                <span className="timeline-kanji-sm">{e.kanji}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{e.title}</h3>
                <p className="timeline-desc">{e.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}

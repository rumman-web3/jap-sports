import { useState } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const QUESTIONS = [
  {
    id: 1,
    title: "あなたの求める境地は？",
    subtitle: "Which ideal state of mind do you seek in athletic pursuit?",
    options: [
      { label: "静寂と絶対の集中 (Unshakeable Focus & Zen)", trait: "zen" },
      { label: "仲間との一体感と熱狂 (Unbreakable Team Unity)", trait: "team" },
      { label: "瞬間の爆発力と相手への敬意 (Explosive Precision & Respect)", trait: "budo" },
    ],
  },
  {
    id: 2,
    title: "理想的な鍛錬の場所は？",
    subtitle: "Where does your athletic spirit feel most alive?",
    options: [
      { label: "朝の静けさに包まれた木造の道場 (Serene Wooden Dojo)", trait: "zen" },
      { label: "夕暮れの歓声が響く巨大スタジアム (Sunlit Stadium Arena)", trait: "team" },
      { label: "神聖な土俵と幾重の伝統 (Sacred Ring of Sacred Traditions)", trait: "budo" },
    ],
  },
  {
    id: 3,
    title: "最も重んじる価値観は？",
    subtitle: "Which core Japanese athletic value resonates deepest?",
    options: [
      { label: "礼に始まり礼に終わる精神 (Rei — Courteous Respect)", trait: "budo" },
      { label: "タスキをつなぐ強い絆 (Kizuna — Unbroken Trust & Harmony)", trait: "team" },
      { label: "自己を極める修練の道 (Shuren — Continuous Self-Mastery)", trait: "zen" },
    ],
  },
];

const RESULTS = {
  budo: {
    sport: "剣道 · 柔道",
    en: "Kendo & Judo",
    tagline: "「交剣知愛」— 相手を敬い、心を鍛える武道の精神。",
    desc: "あなたの中に息づくのは、言葉を超えた敬意と極限の集中。技の正確さだけでなく、礼義と心の静けさを重んじる生粋の武道家タイプです。",
    color: "#bc002d",
    kanji: "道",
  },
  team: {
    sport: "野球 · 駅伝",
    en: "Baseball & Ekiden",
    tagline: "「一球入魂」— 個の力を和のなかに捧げる熱狂。",
    desc: "あなたを動かすのは、仲間と想いをつなぐ強い絆とパッション。一人の力だけでなく、チーム全員で限界を超える瞬間に最大の輝きを放ちます。",
    color: "#263a52",
    kanji: "和",
  },
  zen: {
    sport: "弓道 · 相撲",
    en: "Kyudo & Sumo",
    tagline: "「正射必中」— 無心となり、天地と一体化する。",
    desc: "あなたを満たすのは、ブレない体幹と静謐な精神。周囲の雑音を断ち切り、たった一度の機会に魂を込める凛とした求道者タイプです。",
    color: "#b9974a",
    kanji: "心",
  },
};

export default function SpiritQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleSelect = (trait) => {
    audioEngine.playTaiko(0.25);
    const newAns = [...answers, trait];
    setAnswers(newAns);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate winner
      const counts = { budo: 0, team: 0, zen: 0 };
      newAns.forEach((t) => counts[t]++);
      let top = "budo";
      if (counts.team > counts[top]) top = "team";
      if (counts.zen > counts[top]) top = "zen";
      setResult(RESULTS[top]);
      audioEngine.playChime(0.3);
    }
  };

  const handleReset = () => {
    audioEngine.playWoodClick(0.2);
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="spirit-quiz-section page" aria-label="あなたのスポーツ精神 診断">
      <div className="spirit-quiz-container glass-panel">
        {!result ? (
          <>
            <header className="spirit-quiz-head">
              <span className="spirit-quiz-badge micro">SPIRIT FINDER / 精神診断</span>
              <h2 className="spirit-quiz-title">
                あなたのスポーツ精神を診断する
              </h2>
              <p className="spirit-quiz-sub">
                三つの質問に答え、あなたの中に眠る日本の競技の精神を見つけます。
              </p>
              <div className="spirit-quiz-progress" aria-hidden="true">
                {QUESTIONS.map((_, i) => (
                  <span
                    key={i}
                    className={`quiz-dot ${i === step ? "is-current" : i < step ? "is-done" : ""}`}
                  />
                ))}
              </div>
            </header>

            <div className="spirit-quiz-body">
              <div className="quiz-q-num">
                QUESTION 0{step + 1} / 0{QUESTIONS.length}
              </div>
              <h3 className="quiz-q-title">{QUESTIONS[step].title}</h3>
              <p className="quiz-q-sub">{QUESTIONS[step].subtitle}</p>

              <div className="quiz-options">
                {QUESTIONS[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="quiz-opt-btn"
                    onClick={() => handleSelect(opt.trait)}
                    onMouseEnter={() => audioEngine.playWoodClick(0.08)}
                  >
                    <span className="quiz-opt-idx">0{idx + 1}</span>
                    <span className="quiz-opt-label">{opt.label}</span>
                    <span className="quiz-opt-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="spirit-quiz-result">
            <span className="spirit-quiz-badge micro">DIAGNOSIS RESULT / 診断結果</span>
            <div className="spirit-result-kanji" aria-hidden="true">
              {result.kanji}
            </div>
            <h3 className="spirit-result-sport">{result.sport}</h3>
            <p className="spirit-result-en">{result.en}</p>
            <p className="spirit-result-tagline">{result.tagline}</p>
            <p className="spirit-result-desc">{result.desc}</p>
            <div className="spirit-result-actions">
              <a href="#/sports" className="quiz-action-btn primary" onClick={() => audioEngine.playTaiko(0.2)}>
                競技図鑑を見る →
              </a>
              <button type="button" className="quiz-action-btn secondary" onClick={handleReset}>
                もう一度診断する
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

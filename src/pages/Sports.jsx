import { useState, useMemo } from "react";
import { audioEngine } from "../utils/audioEngine.js";

const SPORTS_DATA = [
  {
    num: "01",
    jp: "相撲",
    en: "Sumo Wrestling",
    category: "traditional",
    catLabel: "伝統神事",
    kanji: "土",
    tagline: "土俵の上に、千年以上の作法が生きている。",
    img: "/img1.png",
    origin: "奈良時代以前の神事・五穀豊穣を祈る儀式に由来し、江戸時代に勧進相撲として体系化。",
    philosophy: "勝負の前に礼を重んじ、土俵という神聖な空間で全身全霊をぶつけ合う「心技体」の極み。",
    equipment: "土俵（吊り屋根）、まわし、塩、力水",
    venue: "両国国技館（東京）、大阪府立体育会館",
    quote: "土俵には金が落ちている。それを拾うのは稽古だ。",
  },
  {
    num: "02",
    jp: "剣道",
    en: "Kendo",
    category: "budo",
    catLabel: "武道",
    kanji: "剣",
    tagline: "竹刀と面と、静けさの音。気剣体の一致。",
    img: "/img2.png",
    origin: "日本の武士階級による刀剣技術（剣術）が、江戸中期の防具開発を経て近代競技へ発展。",
    philosophy: "「交剣知愛」。剣を通じて互いの人格を高め合い、相手を尊重する精神の練磨。",
    equipment: "竹刀、防具（面・胴・甲手・垂）、剣道着・袴",
    venue: "日本武道館（東京）、京都武道センター",
    quote: "打って反省、打たれて感謝。",
  },
  {
    num: "03",
    jp: "野球",
    en: "Baseball",
    category: "ball",
    catLabel: "球技",
    kanji: "球",
    tagline: "地域と球場を結ぶ、日本の国民的競技。",
    img: "/img3.png",
    origin: "明治5年（1872年）にアメリカから渡来し、甲子園大会の創設と共に独自の精神文化を形成。",
    philosophy: "一球入魂。白球を追う姿の中に、規律、結束、そして土を愛する美学が宿る。",
    equipment: "木製・金属バット、グラブ、硬式球、ベース",
    venue: "阪神甲子園球場、明治神宮野球場、東京ドーム",
    quote: "一球一球に魂を込めて投げる。",
  },
  {
    num: "04",
    jp: "サッカー",
    en: "Football / Soccer",
    category: "ball",
    catLabel: "球技",
    kanji: "蹴",
    tagline: "スタジアムの歌声が街まで響く、熱き青の軌跡。",
    img: "/img4.png",
    origin: "明治時代に海軍関係者を通じて伝来。1993年のJリーグ開幕により国民的大熱狂へ。",
    philosophy: "ピッチ上の90分間、数万人のサポーターと選手が一体となり「青い絆」を紡ぐ。",
    equipment: "サッカーボール、スパイク、シンガード、ユニフォーム",
    venue: "国立競技場、埼玉スタジアム2002、日産スタジアム",
    quote: "夢は自分を諦めない限り終わらない。",
  },
  {
    num: "05",
    jp: "柔道",
    en: "Judo",
    category: "budo",
    catLabel: "武道",
    kanji: "柔",
    tagline: "精力善用・自他共栄。相手の力を活かす理。",
    img: "/img5.png",
    origin: "嘉納治五郎が古流柔術を再編し、1882年に講道館柔道を開創。1964年東京五輪で正式種目に。",
    philosophy: "「柔よく剛を制す」。自己の能力を最大限に活かし、世の中に貢献する。",
    equipment: "柔道衣（白・青）、畳、帯",
    venue: "講道館（東京）、日本武道館",
    quote: "人に勝つより、自分に勝つ。",
  },
  {
    num: "06",
    jp: "弓道",
    en: "Kyudo / Japanese Archery",
    category: "budo",
    catLabel: "武道",
    kanji: "弓",
    tagline: "正射必中。的ではなく、己の心と向き合う。",
    img: "/img6.png",
    origin: "和弓による射術が禅の影響を受け、精神修養としての弓道へ高められた。",
    philosophy: "正しい射を行えば自然と的に当たる。結果への執着を手放す「無心」の境地。",
    equipment: "和弓（竹弓）、矢、弽（かけ）、弓道着",
    venue: "三十三間堂（京都）、全日本弓道連盟弓道場",
    quote: "射は進退周還必ず礼に中る。",
  },
  {
    num: "07",
    jp: "空手",
    en: "Karate",
    tagline: "型と組手、そして呼吸。空手に先手なし。",
    category: "budo",
    catLabel: "武道",
    kanji: "空",
    img: "/img2.png",
    origin: "琉球王国（沖縄）の「手（ティー）」と中国武術が融合し、昭和期に本土へと伝わる。",
    philosophy: "武器を持たぬ素手空拳の術。己を厳しく律し、平和を護る武徳の追求。",
    equipment: "空手衣、帯、拳サポーター（組手用）",
    venue: "沖縄空手会館、日本武道館",
    quote: "空手道は礼に始まり礼に終わる。",
  },
  {
    num: "08",
    jp: "駅伝 · 陸上",
    en: "Ekiden & Athletics",
    category: "athletics",
    catLabel: "陸上・水泳",
    kanji: "走",
    tagline: "一本のタスキに想いを込め、路を駆け抜ける。",
    img: "/img3.png",
    origin: "1917年の「東海道駅伝徒歩競走」に始まり、箱根駅伝などの独特な伝統競技へ発展。",
    philosophy: "個人の極限の走りを、次走者への信頼の証である一本の絆（タスキ）で繋ぐ。",
    equipment: "タスキ、ランニングシューズ、ユニフォーム",
    venue: "箱根駅伝コース（東京〜箱根）、国立競技場",
    quote: "タスキは汗と涙と希望の重量。",
  },
  {
    num: "09",
    jp: "フィギュアスケート",
    en: "Figure Skating",
    category: "athletics",
    catLabel: "陸上・水泳",
    kanji: "氷",
    tagline: "銀盤に描く美しさと、氷を割る刃の尖鋭。",
    img: "/img5.png",
    origin: "仙台の五色沼に始まり、表現力と技術が高次元で融合した国民的人気競技へ。",
    philosophy: "氷上の厳格な技術要素と、観客を魅了する叙情詩的アプローチの完璧な融合。",
    equipment: "フィギュアスケート靴、衣装、氷上リンク",
    venue: "代々木第一体育館、さいたまスーパーアリーナ",
    quote: "氷の上では自分自身だけが表現者だ。",
  },
];

const CATEGORIES = [
  { id: "all", label: "すべて / ALL" },
  { id: "budo", label: "武道 / BUDO" },
  { id: "ball", label: "球技 / BALL" },
  { id: "athletics", label: "陸上 / ATHLETICS" },
  { id: "traditional", label: "伝統 / TRADITIONAL" },
];

export default function Sports() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  const filteredSports = useMemo(() => {
    return SPORTS_DATA.filter((s) => {
      const matchCat = selectedCat === "all" || s.category === selectedCat;
      const matchSearch =
        s.jp.includes(search) ||
        s.en.toLowerCase().includes(search.toLowerCase()) ||
        s.tagline.includes(search);
      return matchCat && matchSearch;
    });
  }, [selectedCat, search]);

  const openDrawer = (sport) => {
    audioEngine.playTaiko(0.25);
    setActiveModal(sport);
  };

  const closeDrawer = () => {
    audioEngine.playWoodClick(0.15);
    setActiveModal(null);
  };

  return (
    <article className="doc" aria-labelledby="sports-title">
      <header className="doc__head page">
        <span className="doc__eyebrow micro">EXHIBITION / 日本のスポーツ</span>
        <h1 id="sports-title" className="doc__title">
          日本のスポーツ
          <br />
          図鑑。
        </h1>
        <p className="doc__intro">
          九つの競技を、歴史・道具・精神の物語として解き明かします。
          カードを選択すると、より深い収蔵品解説が開きます。
        </p>
      </header>

      {/* Filter & Search Bar */}
      <section className="sports-controls page" aria-label="競技の検索と絞り込み">
        <div className="sports-filter-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`filter-tab-btn ${selectedCat === c.id ? "is-active" : ""}`}
              onClick={() => {
                audioEngine.playWoodClick(0.1);
                setSelectedCat(c.id);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="sports-search-box">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            className="sports-search-input"
            placeholder="競技名・キーワードで検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="競技検索"
          />
        </div>
      </section>

      {/* Interactive 3D Card Grid */}
      <section className="sports-grid-section page">
        <div className="sports-card-grid">
          {filteredSports.map((s) => (
            <div
              key={s.num}
              className="sport-card glass-panel"
              tabIndex={0}
              role="button"
              aria-label={`${s.jp}の詳細を見る`}
              data-cursor-text="EXPLORE"
              onClick={() => openDrawer(s)}
              onKeyDown={(e) => e.key === "Enter" && openDrawer(s)}
              onMouseEnter={() => audioEngine.playWoodClick(0.08)}
            >
              <div className="sport-card__media">
                <img
                  src={s.img}
                  alt={s.jp}
                  loading="lazy"
                  decoding="async"
                  className="sport-card__img"
                />
                <span className="sport-card__kanji" aria-hidden="true">
                  {s.kanji}
                </span>
                <span className="sport-card__cat-badge micro">{s.catLabel}</span>
              </div>

              <div className="sport-card__content">
                <div className="sport-card__header">
                  <span className="sport-card__num">{s.num}</span>
                  <div>
                    <h2 className="sport-card__jp">{s.jp}</h2>
                    <span className="sport-card__en">{s.en}</span>
                  </div>
                </div>

                <p className="sport-card__tagline">{s.tagline}</p>

                <div className="sport-card__foot">
                  <span className="sport-card__link">物語を読む →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSports.length === 0 && (
          <div className="sports-empty-state">
            <p>該当する競技が見つかりませんでした。</p>
            <button
              type="button"
              className="filter-reset-btn"
              onClick={() => {
                setSelectedCat("all");
                setSearch("");
              }}
            >
              すべての競技を表示
            </button>
          </div>
        )}
      </section>

      {/* Modal Detail Drawer */}
      {activeModal && (
        <div className="sport-drawer-backdrop" onClick={closeDrawer}>
          <div
            className="sport-drawer glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <button
              type="button"
              className="sport-drawer-close"
              onClick={closeDrawer}
              aria-label="閉じる"
            >
              ✕
            </button>

            <header className="sport-drawer-head">
              <span className="micro">EXHIBITION ITEM NO. {activeModal.num}</span>
              <h2 id="drawer-title" className="sport-drawer-title">
                {activeModal.jp}
              </h2>
              <p className="sport-drawer-en">{activeModal.en}</p>
            </header>

            <div className="sport-drawer-media">
              <img src={activeModal.img} alt={activeModal.jp} />
              <div className="sport-drawer-quote">
                “{activeModal.quote}”
              </div>
            </div>

            <div className="sport-drawer-body">
              <div className="drawer-info-block">
                <h3>歴史と由来</h3>
                <p>{activeModal.origin}</p>
              </div>

              <div className="drawer-info-block">
                <h3>競技精神と哲学</h3>
                <p>{activeModal.philosophy}</p>
              </div>

              <div className="drawer-info-grid">
                <div>
                  <h4>主要道具</h4>
                  <p>{activeModal.equipment}</p>
                </div>
                <div>
                  <h4>聖地・会場</h4>
                  <p>{activeModal.venue}</p>
                </div>
              </div>

              <div className="drawer-audio-trigger">
                <button
                  type="button"
                  className="drawer-sound-btn"
                  onClick={() => audioEngine.playTaiko(0.35)}
                >
                  🔊 競技の音景（和太鼓）を聴く
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

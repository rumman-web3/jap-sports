export default function About() {
  return (
    <article className="doc" aria-labelledby="about-title">
      <header className="doc__head page">
        <p className="doc__eyebrow micro">私たちについて / About</p>
        <h1 id="about-title" className="doc__title">
          私たちは、
          <br />
          スポーツを
          <br />
          記録する。
        </h1>
      </header>

      <div className="doc__body page">
        <p className="doc__lead">
          日本スポーツ図鑑は、日本のスポーツを、情報ではなく物語として記録するために生まれた、静かな編集プロジェクトです。
        </p>

        <section className="doc__section">
          <h2 className="doc__h2">この図鑑について</h2>
          <p>
            試合結果や順位表は、他の場所にあります。
            ここに残したいのは、選手の呼吸、道場の光、観客席のざわめき、
            そして、それらを支えてきた日本という土地の記憶です。
          </p>
          <p>
            写真、余白、日本語のタイポグラフィ。
            必要以上の装飾を持たない、ひとつの展示会として構成しました。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">なぜ、この形なのか</h2>
          <p>
            スポーツは競技であり、同時に文化です。
            武道の礼、野球の応援、地域に根ざした練習場のリズム。
            そうしたものを、カードやランキングで語るのは難しいと考えました。
          </p>
          <p>
            紙の雑誌や美術館の図録が持つ、静けさと余白。
            それをデジタルへ持ち込むことが、この図鑑の姿勢です。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">編集の姿勢</h2>
          <ul className="doc__list">
            <li>過度な装飾を避ける。</li>
            <li>写真と余白を、同じ強さで扱う。</li>
            <li>読み手の時間を尊重する。</li>
            <li>断定せず、静かに書く。</li>
          </ul>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">これから</h2>
          <p>
            競技、歴史、文化、名場面。
            それぞれの章を、ひとつずつ丁寧に組み上げていきます。
            図鑑は完成品ではなく、育っていく本のようなものです。
          </p>
        </section>

        <p className="doc__coda">
          スポーツを、情報ではなく物語として見る。
        </p>
      </div>
    </article>
  );
}

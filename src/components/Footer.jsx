const PRIMARY = [
  { href: "#/", label: "ホーム" },
  { href: "#/sports", label: "日本のスポーツ" },
  { href: "#/history", label: "歴史" },
  { href: "#/culture", label: "文化" },
  { href: "#/moments", label: "名場面" },
];

const META = [
  { href: "#/about", label: "私たちについて" },
  { href: "#/contact", label: "お問い合わせ" },
];

const LEGAL = [
  { href: "#/privacy", label: "プライバシーポリシー" },
  { href: "#/terms", label: "利用規約" },
  { href: "#/sitemap", label: "サイトマップ" },
];

export default function Footer() {
  return (
    <footer className="foot" role="contentinfo">
      <div className="page">
        <div className="foot__grid">
          <div className="foot__brand">
            <p className="foot__brand-title">日本スポーツ図鑑</p>
            <p className="foot__tag">
              スポーツを、情報ではなく物語として。
            </p>
          </div>

          <div className="foot__cols">
            <nav aria-label="主なページ">
              <p className="foot__col-title">目次</p>
              <ul className="foot__list">
                {PRIMARY.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="foot__link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="この図鑑について">
              <p className="foot__col-title">図鑑について</p>
              <ul className="foot__list">
                {META.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="foot__link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="規約">
              <p className="foot__col-title">規約</p>
              <ul className="foot__list">
                {LEGAL.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="foot__link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="foot__bottom">
          <span>© 2026 日本スポーツ図鑑</span>
          <span>編集 · 東京</span>
        </div>
      </div>
    </footer>
  );
}

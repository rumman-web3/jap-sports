const groups = [
  {
    title: "本編",
    items: [
      { href: "#/", label: "ホーム" },
      { href: "#/sports", label: "日本のスポーツ" },
      { href: "#/history", label: "歴史" },
      { href: "#/culture", label: "文化" },
      { href: "#/moments", label: "名場面" },
    ],
  },
  {
    title: "図鑑について",
    items: [
      { href: "#/about", label: "私たちについて" },
      { href: "#/contact", label: "お問い合わせ" },
    ],
  },
  {
    title: "規約",
    items: [
      { href: "#/privacy", label: "プライバシーポリシー" },
      { href: "#/terms", label: "利用規約" },
      { href: "#/sitemap", label: "サイトマップ" },
    ],
  },
];

export default function Sitemap() {
  return (
    <article className="doc" aria-labelledby="sitemap-title">
      <header className="doc__head page">
        <p className="doc__eyebrow micro">サイトマップ / Sitemap</p>
        <h1 id="sitemap-title" className="doc__title">
          サイトマップ
        </h1>
      </header>

      <nav className="doc__body page sitemap" aria-label="サイトマップ">
        {groups.map((g) => (
          <section key={g.title} className="sitemap__group">
            <h2 className="sitemap__title">{g.title}</h2>
            <ul className="sitemap__list">
              {g.items.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="doc__inline-link">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </article>
  );
}

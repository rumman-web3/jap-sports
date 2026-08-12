import { useEffect, useState } from "react";
import SoundscapeToggle from "./SoundscapeToggle.jsx";
import { audioEngine } from "../utils/audioEngine.js";

const LINKS = [
  { href: "#/", label: "ホーム" },
  { href: "#/sports", label: "日本のスポーツ" },
  { href: "#/history", label: "歴史" },
  { href: "#/culture", label: "文化" },
  { href: "#/moments", label: "名場面" },
];

const META_LINKS = [
  { href: "#/about", label: "私たちについて" },
  { href: "#/contact", label: "お問い合わせ" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => {
    const saved = localStorage.getItem("jsz-theme");
    return saved ? saved === "dark" : true;
  });
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || "#/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onHash = () => setCurrentHash(window.location.hash || "#/");
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkTheme ? "dark" : "light");
    localStorage.setItem("jsz-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    audioEngine.playWoodClick(0.15);
    setDarkTheme((prev) => !prev);
  };

  const closeMenu = () => setOpen(false);
  const allLinks = [...LINKS, ...META_LINKS];

  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>

      <header
        className="nav"
        data-scrolled={scrolled ? "true" : "false"}
        role="banner"
      >
        <div className="nav__inner">
          <a
            href="#/"
            className="nav__brand"
            aria-label="日本スポーツ図鑑 — ホームへ"
            onClick={(e) => {
              audioEngine.playTaiko(0.2);
              if (currentHash === "#/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <span className="nav__brand-mark">和</span>
            <span className="nav__brand-text">日本スポーツ図鑑</span>
          </a>

          <nav
            className="nav__menu"
            aria-label="サイト内ナビゲーション"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav__link ${currentHash === l.href ? "is-active" : ""}`}
                onClick={() => audioEngine.playWoodClick(0.1)}
              >
                {l.label}
              </a>
            ))}
            <span className="nav__divider" aria-hidden="true" />
            {META_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav__link ${currentHash === l.href ? "is-active" : ""}`}
                onClick={() => audioEngine.playWoodClick(0.1)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__controls">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={darkTheme ? "和紙モードにする (Light)" : "夜陣モードにする (Dark)"}
              aria-label="テーマ切替"
            >
              {darkTheme ? "🌙 夜陣" : "☀️ 和紙"}
            </button>

            <button
              type="button"
              className="nav__trigger"
              aria-expanded={open}
              aria-controls="menu-overlay"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              onClick={() => {
                audioEngine.playWoodClick(0.2);
                setOpen((v) => !v);
              }}
            >
              <span aria-hidden="true">{open ? "閉じる" : "目次"}</span>
              <span className="nav__trigger-glyph" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <SoundscapeToggle />

      <div
        id="menu-overlay"
        className="menu"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
      >
        <div className="menu__inner page">
          <p className="micro">目次 — EXHIBITION INDEX</p>
          <ul className="menu__list">
            {allLinks.map((l, i) => (
              <li key={l.href} className="menu__row">
                <span className="menu__idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={l.href}
                  className={`menu__link ${currentHash === l.href ? "is-active" : ""}`}
                  onClick={() => {
                    audioEngine.playTaiko(0.2);
                    closeMenu();
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="menu__foot">
            <a href="#/privacy" onClick={closeMenu}>
              プライバシーポリシー
            </a>
            <a href="#/terms" onClick={closeMenu}>
              利用規約
            </a>
            <a href="#/sitemap" onClick={closeMenu}>
              サイトマップ
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

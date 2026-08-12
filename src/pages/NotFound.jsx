export default function NotFound() {
  return (
    <section className="page-section page" style={{ paddingTop: "120px", textAlign: "center", minHeight: "60vh" }}>
      <p className="micro">404 — NOT FOUND / ページが見つかりません</p>
      <h1 style={{ fontFamily: "Shippori Mincho, serif", fontSize: "48px", margin: "24px 0" }}>
        該当するページが存在しません
      </h1>
      <p style={{ color: "var(--color-ink-soft)", marginBottom: "32px" }}>
        お探しのページは移動または削除された可能性があります。
      </p>
      <a href="#/" className="quiz-action-btn primary" style={{ display: "inline-block" }}>
        トップページに戻る →
      </a>
    </section>
  );
}

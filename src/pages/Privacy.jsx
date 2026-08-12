export default function Privacy() {
  return (
    <article className="doc" aria-labelledby="privacy-title">
      <header className="doc__head page">
        <p className="doc__eyebrow micro">プライバシーポリシー / Privacy</p>
        <h1 id="privacy-title" className="doc__title">
          プライバシー
          <br />
          ポリシー
        </h1>
        <p className="doc__intro">
          日本スポーツ図鑑(以下「当サイト」)は、ご利用いただくみなさまの個人情報を大切に扱うため、以下の方針を定めています。最終更新日：2026年8月13日。
        </p>
      </header>

      <div className="doc__body page">
        <section className="doc__section">
          <h2 className="doc__h2">1. 収集する情報</h2>
          <p>
            当サイトでは、原則として個人を特定できる情報を積極的に収集することはありません。
            ただし、お問い合わせフォームをご利用いただく場合、
            お名前、メールアドレス、件名、メッセージ本文をお預かりします。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">2. 利用目的</h2>
          <p>
            お預かりした情報は、以下の目的にのみ使用いたします。
          </p>
          <ul className="doc__list">
            <li>お問い合わせへの返信のため。</li>
            <li>ご要望に関する連絡のため。</li>
            <li>当サイトの品質改善のため(統計的な集計に限る)。</li>
          </ul>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">3. 第三者提供</h2>
          <p>
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">4. Cookie(クッキー)について</h2>
          <p>
            当サイトは、標準的なブラウザ機能の範囲を超える追跡目的のCookieを設置しておりません。
            将来的にアクセス解析を導入する場合には、事前に本ポリシーを更新し、必要に応じて同意の取得を行います。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">5. 外部サービス</h2>
          <p>
            当サイトの日本語書体は、Google Fonts より配信されています。
            そのため、ページ表示時にフォント配信元のサーバーへブラウザからアクセスが発生します。
            当該サーバーの取り扱いについては、各提供元のポリシーをご参照ください。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">6. 情報の保存期間</h2>
          <p>
            お問い合わせに関する情報は、対応の完了後、
            必要と判断される期間を経たのち、適切に破棄いたします。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">7. セキュリティ</h2>
          <p>
            お預かりした情報の漏えい、紛失、改ざんを防止するため、
            合理的な範囲で必要な安全管理措置を講じます。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">8. ご本人からのご請求</h2>
          <p>
            ご本人からの、保有する個人情報の開示、訂正、削除のご請求に応じます。
            <a href="#/contact" className="doc__inline-link">お問い合わせ</a>
            よりご連絡ください。
          </p>
        </section>

        <section className="doc__section">
          <h2 className="doc__h2">9. 本ポリシーの変更</h2>
          <p>
            本ポリシーは、必要に応じて改定することがあります。
            重要な変更がある場合は、当サイト上で告知いたします。
          </p>
        </section>

        <p className="doc__coda">
          © 2026 日本スポーツ図鑑 編集部
        </p>
      </div>
    </article>
  );
}

import { useState } from "react";

const initial = { name: "", email: "", subject: "", message: "" };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "お名前を入力してください。";
  if (!v.email.trim()) e.email = "メールアドレスを入力してください。";
  else if (!emailRe.test(v.email.trim()))
    e.email = "正しい形式のメールアドレスを入力してください。";
  if (!v.subject.trim()) e.subject = "件名を入力してください。";
  if (!v.message.trim()) e.message = "メッセージを入力してください。";
  else if (v.message.trim().length < 10)
    e.message = "メッセージは10文字以上でお願いします。";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (touched[k]) {
      setErrors(validate({ ...values, [k]: e.target.value }));
    }
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eObj = validate(values);
    setErrors(eObj);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(eObj).length) {
      // Move focus to the first invalid field.
      const first = ["name", "email", "subject", "message"].find((k) => eObj[k]);
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    // No backend wired; simulate sending. Replace with fetch when ready.
    setState("sending");
    setTimeout(() => {
      setState("sent");
      setValues(initial);
      setTouched({});
    }, 700);
  };

  return (
    <article className="doc" aria-labelledby="contact-title">
      <header className="doc__head page">
        <p className="doc__eyebrow micro">お問い合わせ / Contact</p>
        <h1 id="contact-title" className="doc__title">
          お問い合わせ
        </h1>
        <p className="doc__intro">
          取材、掲載、ご質問など、静かなお声もお受けしています。
          必要に応じて、数日以内に編集部よりお返事いたします。
        </p>
      </header>

      <div className="doc__body page">
        {state === "sent" ? (
          <div className="form__sent" role="status" aria-live="polite">
            <p className="doc__h2">お送りいただき、ありがとうございました。</p>
            <p>
              内容を確認のうえ、折り返しご連絡いたします。
            </p>
            <button
              type="button"
              className="link"
              onClick={() => setState("idle")}
            >
              もう一度書く →
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <Field
              id="f-name"
              label="お名前"
              value={values.name}
              onChange={set("name")}
              onBlur={blur("name")}
              error={touched.name && errors.name}
              autoComplete="name"
            />
            <Field
              id="f-email"
              label="メールアドレス"
              type="email"
              value={values.email}
              onChange={set("email")}
              onBlur={blur("email")}
              error={touched.email && errors.email}
              autoComplete="email"
              inputMode="email"
            />
            <Field
              id="f-subject"
              label="件名"
              value={values.subject}
              onChange={set("subject")}
              onBlur={blur("subject")}
              error={touched.subject && errors.subject}
            />
            <Field
              id="f-message"
              label="メッセージ"
              as="textarea"
              rows={6}
              value={values.message}
              onChange={set("message")}
              onBlur={blur("message")}
              error={touched.message && errors.message}
            />

            <div className="form__foot">
              <button
                type="submit"
                className="link link--send"
                disabled={state === "sending"}
              >
                {state === "sending" ? "送信中…" : "送信する →"}
              </button>
              <p className="caption">
                送信いただいた情報は、返信の目的以外に使用いたしません。
              </p>
            </div>

            {state === "error" && (
              <p className="form__error-summary" role="alert">
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}
          </form>
        )}
      </div>
    </article>
  );
}

function Field({
  id,
  label,
  as = "input",
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  ...rest
}) {
  const Tag = as;
  const errId = `${id}-err`;
  return (
    <label className="field" htmlFor={id}>
      <span className="field__label">{label}</span>
      <Tag
        id={id}
        className="field__input"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errId : undefined}
        required
        {...rest}
      />
      {error ? (
        <span id={errId} className="field__error" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

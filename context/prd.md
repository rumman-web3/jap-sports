Absolutely. I would lock the requirements much more strictly now so there is no ambiguity during implementation—especially around Japanese-only content, required pages, performance, and the fact that this is an editorial website rather than a template.

日本スポーツ図鑑
Product Requirements Document — v3.0
Premium Editorial Website / Performance-First Edition 01. プロジェクト概要

日本スポーツ図鑑 is a premium editorial website exploring Japanese sports through photography, typography, history, culture, and interactive storytelling.

This is not a sports news website.

It should feel like a beautifully designed Japanese sports exhibition or an independent Japanese magazine translated into a digital experience.

The website must feel:

人間らしい — Human
静か — Calm
洗練された — Refined
編集的 — Editorial
日本的 — Japanese
没入感のある — Immersive
意図的 — Intentional

The visitor should never feel that they are navigating a generic AI-generated React website.

2.  Core Product Principle

The website must not be built using the conventional:

Hero
↓
3 Cards
↓
Features
↓
Statistics
↓
Testimonials
↓
CTA
↓
Footer

structure.

Instead, the website is composed of editorial scenes.

Each scene has its own:

composition
typography
whitespace
image treatment
interaction
scroll behavior
visual rhythm

The transition between scenes should feel like turning pages in a premium Japanese magazine.

3.  Primary Objectives
    Visual Objective

Create a premium Japanese sports editorial experience that feels handcrafted by a human art director.

Performance Objective

Performance is a hard requirement, not an optional optimization.

Target:

Lighthouse Category Target
Performance 100
Accessibility 100
Best Practices 100
SEO 100

The implementation should be optimized for both mobile and desktop Lighthouse testing.

A visually impressive website that performs poorly is considered a failed implementation.

4.  Language Requirement
    Japanese Only

The entire user-facing website must be written in Japanese.

This is a strict requirement.

Japanese must be used for:

Navigation
Page titles
Headings
Body copy
Captions
Buttons
Forms
Form validation
Error messages
Empty states
Footer
Legal pages
Privacy policy
Terms and conditions
Contact page
About page
404 page
Accessibility labels
Image descriptions
SEO titles
Meta descriptions
Open Graph text
Structured content where applicable

There should be no visible English UI text.

Examples:

ホーム
日本のスポーツ
歴史
文化
名場面
私たちについて
お問い合わせ

English may exist internally in:

source code
variable names
file names
routes
technical comments
package names

but never as visible interface content.

5.  Required Pages

Every required page must be fully implemented.

There must be no placeholder pages.

01 — ホーム

The primary editorial experience.

Purpose:

Introduce the world of Japanese sports through cinematic storytelling.

02 — 日本のスポーツ

A curated exploration of Japanese sports.

Content can explore:

野球
サッカー
相撲
柔道
剣道
空手
水泳
陸上競技
その他の競技

The presentation should not become a conventional sports card grid.

03 — 歴史

Explore the evolution of Japanese sports.

Possible narrative:

古代
↓
武道の形成
↓
近代化
↓
戦後
↓
国際大会
↓
現代
↓
未来

Use typography, timeline-like compositions, editorial spacing, and subtle interactions rather than a generic timeline component.

04 — 文化

Explore the relationship between Japanese sports and Japanese culture.

Topics can include:

礼儀
精神性
修練
集団意識
道
伝統
地域文化
05 — 名場面

A collection of memorable moments from Japanese sporting history.

The page should feel like an archive/exhibition, not a news feed.

06 — 私たちについて

The About page.

Must explain:

日本スポーツ図鑑とは何か
Why it exists
Editorial philosophy
Purpose of the project
Approach to Japanese sports and culture

It should remain editorial rather than corporate.

07 — お問い合わせ

A complete Japanese contact page.

Must include:

お名前
メールアドレス
件名
メッセージ

Validation must be implemented.

Example validation:

お名前を入力してください。
正しいメールアドレスを入力してください。
メッセージを入力してください。

Form must be keyboard accessible.

08 — プライバシーポリシー

A complete Japanese privacy policy page.

It must clearly explain applicable data handling, such as:

collected information
purpose of collection
contact-form information
cookies if used
analytics if introduced
third-party services if introduced
security
retention
user rights/contact
policy updates

No placeholder text.

09 — 利用規約

A complete Japanese Terms and Conditions page.

Should cover appropriate topics such as:

適用
禁止事項
著作権
コンテンツ利用
免責事項
サービス変更
リンク
規約変更
準拠法
10 — 404

Custom Japanese 404 experience.

Example direction:

ページが見つかりません。

お探しのページは
存在しないか、移動した可能性があります。

ホームへ戻る

It should visually belong to the exhibition.

11 — サイトマップ

Japanese HTML sitemap.

It should link to all important pages.

6.  Navigation

Minimal Japanese navigation.

Desktop:

日本スポーツ図鑑

ホーム
競技
歴史
文化
名場面

私たちについて
お問い合わせ

The navigation should remain visually lightweight.

Initial state

Transparent.

After scrolling

Subtle paper-colored background.

No huge navbar.

No hamburger menu on desktop.

Mobile navigation should become a compact editorial menu.

7.  Visual Direction

The visual language should combine:

Japanese editorial design
Museum catalogues
Sports photography
Japanese typography
Contemporary Japanese architecture
Traditional paper
Olympic-inspired graphic systems
Large negative space

The design should feel expensive without relying on excessive effects.

8.  Anti-AI Design Rules

The website must avoid recognizable AI/template patterns.

Forbidden

❌ Three-card layouts

❌ Generic feature grids

❌ SaaS hero sections

❌ Gradient backgrounds

❌ Glassmorphism

❌ Floating UI cards everywhere

❌ Dashboard-style statistics

❌ Testimonial sliders

❌ Pricing-style layouts

❌ Generic icon grids

❌ Repeated image/text/image/text patterns

❌ Giant CTA sections

❌ Excessive rounded corners

❌ Excessive shadows

❌ Animated gradients

❌ Particle backgrounds

❌ Generic loading screens

❌ AI-style glowing effects

9.  Layout Philosophy

The website uses an editorial grid rather than a component grid.

Desktop:

12–14 column flexible grid

Maximum content width:

1440–1480px

Large outer margins.

Sections should intentionally break the grid.

Example:

┌───────────────────────────────────────────────┐
│ │
│ TEXT │
│ │
│ ┌────────────────────┐ │
│ │ │ │
│ │ IMAGE │ │
│ │ │ │
│ └────────────────────┘ │
│ │
└───────────────────────────────────────────────┘

The next scene should use a completely different composition.

10. Image Strategy

Maximum:

7 original photographs

Images:

国立競技場
剣道
野球
サッカーの観客
アスリート
優勝トロフィー
朝日の中で練習する若い選手たち

Each image should have a specific narrative purpose.

There should be no decorative image spam.

11. Image Performance

Images must be generated/compressed specifically for web usage.

Preferred:

AVIF

Fallback:

WebP

Every image must have:

width
height
alt
loading
decoding
srcset
sizes

Hero:

preload
fetchpriority="high"

Non-critical:

loading="lazy"
decoding="async"

Every image must reserve its dimensions to prevent CLS.

12. Animation Architecture

Animation must enhance storytelling rather than exist for decoration.

Primary

Native CSS.

Complex scenes

GSAP + ScrollTrigger.

Smooth scrolling

Optional Lenis.

Lenis is not mandatory.

If native scrolling provides the required experience without it, Lenis should not be included.

No
Framer Motion
Three.js
Lottie
WebGL
particle systems
video backgrounds

unless future performance testing proves a compelling need.

13. Animation Principles

Animations should primarily use:

transform
opacity
clip-path
mask
scale
translate

Avoid animating:

top
left
width
height
filter
box-shadow

No scroll-jacking.

No infinite decorative animations.

No animation on every element.

14. Editorial Interaction System

Possible interactions:

Image reveal

Photograph gradually revealed through a mask.

Pinning

Certain scenes remain fixed while typography changes.

Subtle parallax

Very small movement.

Horizontal editorial movement

Used selectively.

Typography choreography

Large Japanese words move through the composition.

Cursor

Desktop-only custom cursor.

Magnetic interaction

Only on important interactive elements.

Every animation must have a narrative purpose.

15. Responsive Design

Responsive design is not:

Desktop
↓
shrink everything

Instead:

Desktop

デジタル展示会

Large editorial compositions.

Tablet

雑誌

Balanced layouts.

Mobile

縦型の物語

Large typography.

Simplified pinning.

Different image crops.

Reduced animation complexity.

16. Accessibility

Target:

Lighthouse Accessibility 100

Requirements:

semantic HTML
correct heading hierarchy
keyboard navigation
visible focus states
accessible forms
descriptive Japanese alt text
sufficient color contrast
accessible navigation
accessible buttons
accessible links
aria-label where required
reduced-motion support 17. Reduced Motion

Respect:

prefers-reduced-motion: reduce

When enabled:

disable smooth scrolling
disable parallax
disable complex pin animations
simplify masks
remove unnecessary transitions

The content must remain fully usable.

18. Technical Stack
    Required
    React
    Vite
    Tailwind CSS
    GSAP
    ScrollTrigger
    Optional
    Lenis

Only if testing demonstrates that it materially improves the experience without violating performance requirements.

Avoid
Framer Motion
Three.js
Lottie
UI libraries
icon libraries
large animation libraries
unnecessary dependencies

Custom SVG icons should be used where necessary.

19. Performance Requirements

Performance is a release blocker.

Target:

Performance 100
Accessibility 100
Best Practices 100
SEO 100

Primary metrics:

LCP < 2.0s
CLS < 0.02
INP < 200ms
TBT As close to 0ms as practical

No major long tasks during initial page load.

20. JavaScript Budget

Initial JavaScript target:

<150 KB gzipped

Animation code should be loaded only when required.

Use:

route-level code splitting
dynamic imports
tree shaking
production minification

Do not load every page's animation code on initial load.

21. CSS Budget

Target:

<35 KB initial CSS

Tailwind must be properly purged.

Avoid unnecessary global CSS.

22. Font Strategy

Primary font:

Noto Sans JP

Use only required weights.

Japanese glyphs should be subset where practical.

Use:

font-display: swap;

Preload only the critical font.

Avoid loading multiple font families.

23. Third-Party Resources

Default:

Zero third-party scripts.

No:

tracking scripts
social embeds
video embeds
external widgets
unnecessary analytics

If analytics are eventually required, they must be deferred and separately evaluated against the performance budget.

24. SEO

Every page requires:

unique Japanese <title>
unique Japanese meta description
canonical URL
Open Graph metadata
structured data where appropriate
semantic headings
descriptive Japanese image alt text
sitemap
robots configuration
internal linking
appropriate Japanese language metadata

HTML:

<html lang="ja">
25. Security & Best Practices

Target:

Lighthouse Best Practices 100

Requirements include:

HTTPS deployment
no console errors
no broken resources
no deprecated APIs
secure external resources
proper form handling
correct image loading
production build optimization 26. Contact Form

The contact page must be fully designed.

Fields:

お名前
メールアドレス
件名
メッセージ
送信

States:

入力中
エラー
送信中
送信完了
送信失敗

All states must be Japanese.

No English fallback UI.

27. Legal Pages

The website must ship with:

プライバシーポリシー

Complete Japanese content.

利用規約

Complete Japanese content.

These pages cannot be placeholders such as:

Lorem ipsum
Coming soon
Content goes here

They must be styled consistently with the rest of the website.

28. Architecture

Recommended structure:

src/
│
├── app/
│
├── pages/
│ ├── Home/
│ ├── Sports/
│ ├── History/
│ ├── Culture/
│ ├── Moments/
│ ├── About/
│ ├── Contact/
│ ├── Privacy/
│ ├── Terms/
│ ├── Sitemap/
│ └── NotFound/
│
├── components/
│ ├── Navigation/
│ ├── Footer/
│ ├── EditorialScene/
│ ├── ImageReveal/
│ ├── PinScene/
│ └── ...
│
├── animations/
│
├── styles/
│
├── assets/
│ └── images/
│
└── routes/ 29. Code Quality

Requirements:

no unnecessary React state
no unnecessary re-renders
semantic HTML
reusable animation primitives
animation cleanup on unmount
no memory leaks
no console warnings
no dead components
no unused imports
no unused CSS
no duplicated page structures where unnecessary 30. Lighthouse Acceptance Process

Lighthouse must be tested against the production build.

Not:

npm run dev

Instead:

production build
↓
production server
↓
Lighthouse
↓
optimization
↓
repeat

The project is not considered finished until the agreed Lighthouse targets are achieved.

31. Final Acceptance Criteria

The website is complete only when:

Content
Entire website is Japanese
All required pages exist
About page exists
Contact page exists
Privacy Policy exists
Terms & Conditions exist
Sitemap exists
404 exists
No placeholder pages
Design
Premium Japanese editorial aesthetic
No generic card-grid design
No AI-style visual patterns
Unique compositions
Seven-image maximum
Responsive editorial layouts
Interaction
Pin animations
Image reveals
Typography choreography
Subtle parallax
Carefully selected interactive moments
Reduced-motion support
Performance
Lighthouse Performance target: 100
Lighthouse Accessibility target: 100
Lighthouse Best Practices target: 100
Lighthouse SEO target: 100
Optimized AVIF images
Code splitting
Minimal dependencies
No unnecessary third-party scripts
Quality
No console errors
No broken links
No layout shift
No unfinished sections
No English visible in the interface
Fully responsive
Production-ready
Final Product Definition

日本スポーツ図鑑 should ultimately feel less like a "website" and more like a digital Japanese sports exhibition.

The user should scroll through:

写真 → 余白 → 文字 → 動き → 写真 → 静けさ → 物語

rather than:

Hero → Cards → Features → CTA.

The visual sophistication comes from composition, typography, photography, whitespace, and restrained interaction, while the technical sophistication comes from aggressive performance optimization.

This is now the locked PRD I would use as the source of truth for implementation.

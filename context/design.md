Yes. Below is the single source-of-truth design file that should sit alongside the PRD. It focuses on how the website looks, behaves, moves, and responds, without turning the site into a generic component system.

日本スポーツ図鑑
Design System & Visual Direction
Premium Editorial Website — v1.0
01. Design Intent

日本スポーツ図鑑 is designed as a digital exhibition of Japanese sports.

It should feel like:

日本のスポーツを一冊の美しい雑誌として体験する。

The website should communicate:

静けさ — Calm
緊張感 — Tension
情熱 — Passion
伝統 — Tradition
精神 — Spirit
栄光 — Glory
未来 — Future

The design should never feel like a conventional website assembled from UI components.

The visitor should feel that every element has been deliberately placed by a human designer.

02. Design Principle
「余白もデザインである。」

Whitespace is not unused space.

Whitespace controls:

pacing
emotion
hierarchy
attention
transition
visual breathing

Large empty areas should be intentionally used throughout the website.

03. Visual Personality

The visual identity is:

Editorial
      +
Japanese
      +
Museum
      +
Sports
      +
Cinematic
      +
Minimal

Not:

Startup
+
Dashboard
+
Cards
+
Gradients
+
AI aesthetics
04. Design References

The visual direction draws inspiration from:

Japanese editorial magazines
Japanese museum catalogues
contemporary Japanese posters
traditional Japanese print layouts
Olympic visual identities
premium sports photography
architectural photography
minimalist Japanese packaging

These are visual references, not templates to copy.

05. Color System

The palette should remain restrained.

Japanese red is an accent, not the dominant background color.

Primary Background
#FAF8F4

和紙 / Washi

Primary page background.

Secondary Background
#F3EFE8

Used for subtle scene transitions.

Ink
#111111

Primary text.

Soft Ink
#4A4945

Secondary text.

Japanese Red
#BC002D

Use for:

tiny indicators
selected states
editorial numbers
small lines
occasional typography

Do not use as a large background.

Indigo
#263A52

Used sparingly for selected sports imagery and accent compositions.

Deep Green
#465A4B

Secondary accent.

Gold
#B9974A

Extremely limited use.

Primarily associated with:

victory
achievement
historical moments
06. Color Ratio

Approximate visual ratio:

Washi / Cream
████████████████████████ 75%

Ink
██████                   15%

Photography
████                     8%

Accent colors
█                        2%

The site should never become a colorful sports dashboard.

07. Typography
Primary Typeface

Noto Sans JP

Use one family throughout the site.

No unnecessary font combinations.

08. Typography Hierarchy
Display

Desktop:

96–140px

Weight:

700

Line height:

0.95–1.05

Used for:

hero titles
major scene titles
editorial statements
Large Heading
64–88px

Used for major page transitions.

Section Heading
40–56px
Body

Desktop:

17–19px

Line height:

1.8–2

Reading width:

680–760px
Caption
12–14px
Micro Typography
10–12px

Used for:

section numbers
editorial labels
metadata
coordinates
navigation indicators
09. Japanese Typography Rules

Japanese typography must have room to breathe.

Avoid excessive letter spacing.

Do not use decorative Japanese fonts everywhere.

Use vertical writing selectively.

Example:

日
本
の
精
神

Vertical typography should act as a visual object rather than ordinary body text.

10. Grid
Desktop

12-column editorial grid.

Maximum content width:

1440–1480px

Outer margins:

64–96px
Tablet

8-column grid.

Mobile

4-column grid.

Padding:

20–24px
11. Grid Philosophy

The grid exists to provide structure.

It should not be visible everywhere.

Elements are allowed to:

overlap columns
break alignment
extend beyond the text column
sit asymmetrically
intentionally occupy unusual proportions
12. Layout Principle

Never create a page where every section follows:

Image
Text
Image
Text
Image
Text

Instead:

Full bleed
↓
Asymmetric
↓
Typography-only
↓
Pinned image
↓
Quiet portrait
↓
Horizontal scene
↓
Panorama

Visual rhythm must constantly change.

13. Section Spacing

Large sections:

180–260px

Medium:

100–160px

Small:

48–80px

Mobile:

80–140px

Whitespace should generally increase around major editorial moments.

14. Corner Radius

Default:

0–4px

Avoid rounded cards.

The visual language is architectural rather than app-like.

15. Borders

Use extremely thin borders:

1px solid

Usually low contrast.

Borders should structure compositions, not decorate them.

16. Shadows

Shadows are almost nonexistent.

If elevation is necessary:

0 6px 20px rgba(0,0,0,.06)

No:

glowing shadows
giant shadows
colored shadows
glass effects
17. Image Philosophy

Photography is the emotional engine of the website.

Images should feel:

documentary
authentic
cinematic
slightly imperfect
naturally lit
editorial
human

Avoid overly polished AI imagery.

Avoid:

HDR
excessive saturation
impossible lighting
plastic skin
perfect symmetry
unrealistic crowds
18. Seven-Image System

The entire website uses a maximum of seven primary photographs.

01

国立競技場

Role:

Opening / scale

02

剣道

Role:

Tradition / discipline

03

野球

Role:

Competition / modern Japan

04

サッカー観客

Role:

Passion / collective emotion

05

アスリート

Role:

Human / dedication

06

優勝トロフィー

Role:

Achievement / glory

07

朝日の中の若い選手

Role:

Future / hope

19. Image Composition

Every image should have a different composition.

01 — Full bleed
02 — Tall portrait
03 — Wide landscape
04 — Full-screen panorama
05 — Small editorial portrait
06 — Isolated square
07 — Ultra-wide panorama

This prevents visual repetition.

20. Image Treatment

Never put every image into a card.

Possible treatments:

Full Bleed

Image touches both edges.

Offset

Image deliberately breaks the grid.

Cropped

Important visual subject partially exits the frame.

Floating

Image appears inside large whitespace.

Pinned

Image remains fixed while content moves.

Masked

Image is revealed progressively.

21. Image Captions

Captions should feel like magazine annotations.

Example:

剣道
静けさの中にある、競技者の集中。

Small.

Quiet.

Never a conventional card description.

22. Navigation

The navigation should be extremely restrained.

Desktop
日本スポーツ図鑑

ホーム    競技    歴史    文化    名場面

私たちについて    お問い合わせ
23. Navigation Behavior

Initial:

Transparent

After scrolling:

Washi background

Transition:

background
0 → 100%

No oversized sticky navbar.

24. Mobile Navigation

Mobile should use a minimal menu trigger.

Opening the menu should feel like opening an editorial index.

Example:

MENU

ホーム

日本のスポーツ

歴史

文化

名場面

私たちについて

お問い合わせ

Large Japanese typography.

No giant icon grid.

25. Cursor

Desktop only.

Default:

○

Image:

◎

Interactive element:

●

The cursor should remain subtle.

No oversized animated blobs.

26. Buttons

Buttons should look like editorial links.

Example:

詳しく見る →
────────────

Hover:

詳しく見る →
━━━━━━━━━━

Use underline expansion rather than pill-shaped buttons.

27. Animation Philosophy

Animation should feel like physical movement of printed material.

Not like an application UI.

Think:

paper
photograph
page
ink
exhibition
28. Animation Hierarchy
Level 01 — CSS

Used for:

hover
underline
opacity
small transforms
menu transitions
Level 02 — GSAP

Used for:

pinned scenes
scroll choreography
image masks
typography sequences
horizontal scenes
Level 03 — No animation

Some scenes should intentionally remain completely static.

Silence creates contrast.

29. Pin Animation

Pinning should be used only for major storytelling scenes.

Example:

┌─────────────────────────────┐
│                             │
│       STADIUM IMAGE         │
│                             │
│          日本               │
│                             │
└─────────────────────────────┘
             │
             │ scroll
             ▼

Image remains pinned.

Typography changes.

Then the next scene enters.

30. Hero Animation

Initial:

Image
+
large Japanese title

Scroll:

Image scale
1.00 → 1.03

Title
100% → 0%

Secondary text
0% → 100%

No excessive effects.

31. Image Reveal

Use:

clip-path

or CSS masking.

Example:

██████████████
████████
████
██

revealing:

██████████████
██████████████
██████████████
██████████████

The animation should feel like a photograph being uncovered.

32. Typography Motion

Large Japanese words may move vertically or horizontally.

Example:

        精
        神

moves slowly through the composition.

Body copy remains mostly static.

Do not animate every character.

33. Parallax

Very restrained.

Maximum typical movement:

8–20px

The user should feel depth without consciously noticing the effect.

34. Horizontal Scene

Use once or twice.

Vertical scrolling drives horizontal editorial movement.

Example:

野球
──────────────→──────────────→

This should never become a horizontal-scroll gimmick.

35. Football Scene

The football crowd should be one of the most immersive scenes.

Structure:

Full viewport image
        +
Large Japanese typography
        +
Pinned scroll sequence

Animation:

0%    Image enters

25%   熱狂 appears

50%   Typography crosses image

75%   Image subtly scales

100%  Scene transitions
36. Quiet Scene

After the intense football scene, deliberately reduce motion.

Athlete portrait.

Large whitespace.

Small caption.

This creates emotional contrast.

37. Trophy Scene

The trophy should feel like a museum exhibit.

Composition:

             優勝

                ○
              TROPHY

          栄光の瞬間

Very slow scale.

Almost no other movement.

38. Final Scene

Final image:

young Japanese athletes at sunrise.

Full-width panoramic composition.

Typography:

未来へ。

The phrase should appear slowly.

No CTA explosion.

No newsletter.

No giant footer.

39. Footer Design

Minimal.

────────────────────────────────

日本スポーツ図鑑

ホーム
日本のスポーツ
歴史
文化
名場面

私たちについて
お問い合わせ

プライバシーポリシー
利用規約

© 2026 日本スポーツ図鑑

────────────────────────────────

Large whitespace around it.

40. About Page Design

The About page should feel like an editorial statement.

No team-member cards.

No corporate profile grid.

Structure:

巨大なタイトル

私たちは、
スポーツを
記録する。

        ↓

Editorial statement

        ↓

Why this project exists

        ↓

Design philosophy

        ↓

Closing typography
41. Contact Page Design

Minimal form.

Large title:

お問い合わせ

Then:

お名前
────────────────

メールアドレス
────────────────

件名
────────────────

メッセージ
────────────────

送信 →

Large whitespace.

No form card.

42. Privacy Page

The legal pages should not suddenly become ugly utility pages.

Use:

same typography
same navigation
same background
readable content width
generous spacing
Japanese headings

Reading width:

680–760px
43. Terms Page

Same editorial legal-page system.

Clear hierarchy:

利用規約

第1条　総則

第2条　利用について

第3条　禁止事項

第4条　著作権

...

No accordion.

Everything readable immediately.

44. 404 Design

Minimal but memorable.

404

ページが
見つかりません。

静かな場所へ
戻りましょう。

ホームへ →

Potential subtle background typography:

404
404
404

No animated error gimmicks.

45. Sitemap Design

Simple editorial index.

サイトマップ

ホーム

日本のスポーツ

歴史

文化

名場面

私たちについて

お問い合わせ

プライバシーポリシー

利用規約
46. Mobile Design

Mobile is treated as its own composition.

Do not simply stack desktop elements.

Mobile typography

Hero:

52–72px

Major headings:

40–52px

Body:

16–18px
47. Mobile Animation

Simplify.

Desktop:

Pin
+
Parallax
+
Typography
+
Horizontal movement

Mobile:

Short pin
+
Mask
+
Typography

Avoid expensive or awkward horizontal scenes on small screens.

48. Mobile Image Cropping

Each image receives a deliberate mobile crop.

Do not simply use:

object-fit: cover;

without defining the focal point.

Example:

Desktop focal point
        ↓
      Center

Mobile focal point
        ↓
      Subject
      shifted
49. Accessibility Visual Rules

Focus state:

2px visible outline

Never remove browser focus indication without replacement.

Text must maintain appropriate contrast.

Important information cannot depend solely on color.

50. Reduced Motion Design

When reduced motion is enabled:

Pinning        → simplified
Parallax       → removed
Image scaling  → removed
Mask           → instant reveal
Smooth scroll  → native

The composition should still look beautiful.

51. Loading Experience

Do not create an elaborate loading screen.

The page should render useful content immediately.

Preferred:

HTML
↓
critical typography
↓
hero image
↓
interaction enhancement

Not:

LOADING...
████████████
100%
ENTER
52. Performance-Conscious Design

Every visual decision must respect performance.

Avoid:

video backgrounds
WebGL
particle systems
huge images
excessive blur
animated filters
multiple font families
unnecessary DOM elements
continuous animations

Use:

CSS
SVG
optimized AVIF
transforms
opacity
clip-path
small animation timelines
53. Component Philosophy

Components should represent design behavior, not generic boxes.

Good:

PinScene
ImageReveal
EditorialTitle
VerticalLabel
SceneTransition
EditorialLink

Avoid building everything around:

Card
Card
Card
Card
54. Design Tokens
--color-paper: #FAF8F4;
--color-paper-soft: #F3EFE8;
--color-ink: #111111;
--color-ink-soft: #4A4945;
--color-red: #BC002D;
--color-indigo: #263A52;
--color-green: #465A4B;
--color-gold: #B9974A;

--page-max: 1480px;

--space-xs: 16px;
--space-sm: 32px;
--space-md: 64px;
--space-lg: 120px;
--space-xl: 200px;

--radius: 2px;
--border: 1px;
55. Scene Composition Rule

Every major scene must answer:

What is the visual subject?
What is the emotional purpose?
Where does the eye go first?
What changes during scrolling?
What stays still?
What is intentionally empty?
How does the scene transition into the next one?

If these questions cannot be answered, the section should not be implemented yet.

56. Page Rhythm

The entire website should follow an emotional rhythm:

          静
          ↓
        期待
          ↓
        伝統
          ↓
        競技
          ↓
        熱狂
          ↓
        集中
          ↓
        栄光
          ↓
        未来
          ↓
          静

The experience starts quietly, builds energy, reaches emotional intensity, then resolves peacefully.

57. Visual Rhythm

The page should alternate between:

IMAGE
↓
TEXT
↓
EMPTY SPACE
↓
IMAGE
↓
MOVEMENT
↓
SILENCE
↓
IMAGE
↓
TYPOGRAPHY
↓
PANORAMA

This prevents the website from feeling mechanically generated.

58. Anti-Template Checklist

Before approving a design section:

□ Is this just a card?
□ Is this just a centered hero?
□ Is this just image + text?
□ Is this visually identical to another section?
□ Does this look like a SaaS template?
□ Does this look AI-generated?
□ Is there unnecessary decoration?
□ Could whitespace replace an element?
□ Does the animation have a purpose?
□ Does the composition feel editorial?

If the answer to the first five is yes, redesign the section.

59. Quality Bar

The final website should look convincing at:

1440px desktop
1920px desktop
768px tablet
390px mobile

At every breakpoint:

typography must remain intentional
images must remain correctly composed
spacing must remain balanced
navigation must remain usable
animations must remain smooth
no horizontal overflow
no visual collisions
60. Final Art Direction

The finished website should communicate:

「スポーツを、情報ではなく物語として見る。」

The visitor should not feel that they are browsing a collection of website sections.

They should feel that they are moving through a carefully curated exhibition:

国立競技場
      ↓
伝統
      ↓
剣道
      ↓
野球
      ↓
熱狂
      ↓
アスリート
      ↓
栄光
      ↓
未来

The final experience should be quiet when it needs to be quiet, intense when it needs to be intense, and always deliberate.

The design system's most important rule is:

Do less, but make every detail matter.
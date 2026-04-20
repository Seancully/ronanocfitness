# RONANOCfitness Design System

## Company Overview

**RONANOCfitness** is an online transformation and fitness coaching brand. The offering centres on personalised nutrition guides, training guides, and accountability-driven coaching — all delivered digitally. The primary product is a **mobile-optimised one-page website** designed to convert visitors into coaching clients via a central sign-up form.

The brand is solo-coach led (similar in structure to dylanbarryfitness.com, used as inspiration). The tone is direct, motivating, and personal — not corporate.

**Inspiration URLs reviewed:**
- https://www.dylanbarryfitness.com (layout + content structure reference)
- https://districtagym.ie/membership/ (colour/theme reference — was inaccessible at time of build; user-provided as mood reference)

No codebase or Figma was provided. This system was built from the brief and inspiration site analysis.

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Marketing Website** | Mobile-first one-pager. Hero → Testimonials → FAQs. Sign-up form is the hero centrepiece. |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Direct and punchy** — short sentences, no fluff. Headlines are declarative statements or bold questions.
- **Personal** — written as "I" / "my" from the coach's perspective; the client is "you". E.g. *"I'll build a plan around your life"*, not *"We provide tailored plans"*.
- **Motivating without being cheesy** — avoids clichés like "smash your goals" in favour of plain-spoken confidence: *"Real results. No excuses."*
- **All-caps used sparingly** for section labels / eyebrow text only (e.g. `TRANSFORMATION COACHING`).
- **No emoji** in body copy or UI. Stars (★★★★★) used only in testimonial ratings.
- **Irish context** — metric units (kg), relatable everyday language, no Americanisms.

### Casing
- Headlines: Title Case or ALL CAPS (display only)
- Body: Sentence case
- Eyebrow labels: ALL CAPS, tracked out
- CTAs: Title Case (e.g. "Get Started", "Sign Up Now")

### Examples of good copy
- Hero headline: **"TRANSFORM YOUR BODY. TRANSFORM YOUR LIFE."**
- Sub-headline: *"Online fitness coaching built around you — nutrition, training, and real accountability."*
- CTA: **"Start Your Transformation"**
- Testimonial label: `WHAT CLIENTS SAY`

---

## VISUAL FOUNDATIONS

### Colour System
| Role | Dark Mode | Light Mode |
|---|---|---|
| Background primary | `#0D0D0D` | `#FFFFFF` |
| Background secondary | `#1A1A1A` | `#F2F2F2` |
| Surface / card | `#1F1F1F` | `#FFFFFF` |
| Foreground / text | `#FFFFFF` | `#0D0D0D` |
| Foreground muted | `#888888` | `#666666` |
| Brand Red | `#D42B2B` | `#D42B2B` |
| Brand Red hover | `#B82424` | `#B82424` |
| Border | `#2A2A2A` | `#E0E0E0` |
| Star / accent gold | `#F5C518` | `#F5C518` |

### Typography
- **Display / Headings**: Bebas Neue (Google Fonts) — condensed, bold, high-impact. Used for hero H1, section titles, stat numbers.
- **UI / Body**: Inter or DM Sans (Google Fonts) — clean, readable, professional.
- **Eyebrow labels**: Inter, uppercase, letter-spacing 0.15em, muted colour, font-weight 600, 11–12px.
- Type scale (mobile-first):
  - H1 display: 56–72px / Bebas Neue
  - H2 section: 36–48px / Bebas Neue
  - H3 sub: 20–24px / DM Sans 600
  - Body: 16px / DM Sans 400
  - Small / caption: 13px / DM Sans 400

### Backgrounds
- Dark: near-black `#0D0D0D` — no gradients as primary bg. Occasional red accent stripe or horizontal rule.
- Section alternation: primary bg → secondary bg (`#1A1A1A`) → primary bg to create visual rhythm without colour overload.
- No gradient backgrounds. No textures or patterns.
- Hero section: full-viewport height, dark bg, large display type centred, sign-up form below/inline.

### Spacing & Layout
- Mobile-first. Max content width: 480px on mobile, 720px on tablet, 960px on desktop.
- Consistent section padding: 80px top/bottom mobile, 120px desktop.
- Grid: single column mobile, 2-col max.
- Generous white-space. Content does not feel cramped.

### Borders & Corners
- Minimal border-radius: **4px** for form inputs and small elements; **0px** for cards/sections (sharp, bold).
- CTA buttons: 0px border-radius (sharp rectangle) or 2px max — brand avoids pill buttons.
- Thin 1px borders in border colour for dividers and card outlines.

### Shadows & Elevation
- Minimal shadow use. Cards: no shadow in dark mode; subtle `0 1px 4px rgba(0,0,0,0.12)` in light mode.
- No complex layered shadow systems.

### Animations & Motion
- Subtle fade-in on scroll for sections (opacity 0→1, translateY 20px→0, 400ms ease-out).
- No bounces, springs, or elaborate transitions. Motion is calm and professional.
- Button hover: background darkens (red hover), no scale transform.
- Link hover: opacity 0.75 or underline.

### Imagery
- Coach photography: high-contrast, dark background preferred. B&W or desaturated with a warm undertone.
- Before/after transformation photos: side-by-side, minimal styling.
- No stock imagery. No hand-drawn illustrations.
- No decorative SVGs or icons beyond functional use.

### Iconography
See ICONOGRAPHY section below.

### Cards
- Testimonial cards: Dark surface (`#1F1F1F`), 1px border, 4px radius, generous padding (24px). Stars in gold. Quote in body text. Name in small caps / muted.
- FAQ items: borderless accordion on dark/light bg. Divider lines between items.

### Logo
- Wordmark: `RONANOC` in **Brand Red** + `fitness` in white (dark mode) or black (light mode).
- Font: Bebas Neue for both words, same size, side by side or stacked.
- No icon/mark beyond the wordmark at this stage.

---

## ICONOGRAPHY

- **No custom icon set** established at this stage.
- **No emoji** in the UI.
- **Stars** for ratings: unicode ★ or SVG stars in `#F5C518`.
- **Chevrons** for FAQ accordion: simple SVG inline (▼ / ▲) or CSS border trick.
- If icons are needed for feature lists (training, nutrition, accountability), use **Lucide Icons** via CDN (`https://unpkg.com/lucide@latest`) — clean, consistent stroke-based set. Flag: this is a suggestion; confirm with brand owner if an existing icon set is preferred.
- No icon font established.

---

## ASSETS

All brand assets live in `assets/`.

| File | Description |
|---|---|
| `assets/logo-dark.svg` | Wordmark on dark background (RONANOC red + fitness white) |
| `assets/logo-light.svg` | Wordmark on light background (RONANOC red + fitness black) |

---

## FILE INDEX

```
README.md                    ← This file
SKILL.md                     ← Agent skill descriptor
colors_and_type.css          ← All CSS custom properties (tokens)
assets/
  logo-dark.svg              ← Brand wordmark (dark mode)
  logo-light.svg             ← Brand wordmark (light mode)
preview/
  colors-primary.html        ← Primary colour swatches
  colors-semantic.html       ← Semantic / state colours
  type-display.html          ← Display type specimens
  type-body.html             ← Body / UI type specimens
  spacing-tokens.html        ← Spacing + radius tokens
  component-buttons.html     ← Button states
  component-forms.html       ← Input / form elements
  component-cards.html       ← Testimonial + FAQ cards
  brand-logo.html            ← Logo on dark/light
ui_kits/
  website/
    README.md                ← Website UI kit notes
    index.html               ← Full interactive one-pager prototype
    Hero.jsx                 ← Hero + signup section
    Testimonials.jsx         ← Scrolling testimonials
    FAQ.jsx                  ← Accordion FAQ
    Footer.jsx               ← Footer
```

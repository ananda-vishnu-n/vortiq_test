# Vortiq Dynamics — Website Design System

## 1. Purpose

This document is the visual source of truth for the Vortiq Dynamics website.

All pages, components, layouts, and future design changes MUST follow this document unless a deliberate design decision is explicitly approved.

The website should position Vortiq Dynamics as a serious **deep-tech engineering and intelligent systems company**, not as a generic software agency, IT outsourcing company, or web-development company.

### Core design direction

> **Minimalist · White · Editorial · Product-first · Deep-tech · Cinematic**

The visual language may take inspiration from the high-level design philosophy of premium robotics and deep-tech product companies such as Boston Dynamics, but the implementation must remain an original Vortiq Dynamics design.

Do NOT copy:
- Boston Dynamics logos
- Boston Dynamics brand assets
- Boston Dynamics text/copy
- Boston Dynamics proprietary imagery/video
- Exact layouts or page compositions
- Exact animations or interactions
- Any copyrighted visual assets

Use the reference only for broad principles such as visual restraint, product-first storytelling, whitespace, large imagery, technical credibility, and progressive disclosure of complexity.

---

# 2. Brand Positioning

Vortiq Dynamics should communicate:

- Deep engineering capability
- Intelligent physical systems
- Hardware + firmware + software integration
- Robotics and automation
- AI and machine perception
- Embedded systems
- Control systems
- Edge computing
- Industrial technology
- Research and development
- Prototyping and deployment
- Real-world engineering

The website should make the visitor think:

> **"Vortiq Dynamics builds technology."**

It should NOT make the visitor think:

> "Vortiq Dynamics is a software services company."

Avoid generic positioning such as:
- "We provide innovative IT solutions."
- "We deliver cutting-edge software solutions."
- "Your trusted technology partner."
- "We offer end-to-end digital transformation."
- "Our team of experts provides..."

Prefer language around:
- Engineering
- Systems
- Intelligence
- Products
- Technology
- Automation
- Research
- Prototyping
- Deployment
- Physical-world applications

---

# 3. Color System

## Primary brand palette

| Role | Color | HEX |
|---|---|---|
| Primary background | White | `#FEFFFF` |
| Primary text | Very dark navy | `#0E3659` |
| Accent / link blue | Bright blue | `#1191C9` |
| Black | Black | `#000000` |
| Light gray | Neutral gray | `#F2F2F2` |
| Medium gray | Gray | `#D9D9D9` |

## Color rules

### White — `#FEFFFF`

This is the dominant canvas.

Use for:
- Main page backgrounds
- Header
- Navigation
- Hero backgrounds where appropriate
- Product sections
- Content sections

The site should feel predominantly white.

### Navy — `#0E3659`

Primary brand/text color.

Use for:
- Main headings
- Navigation
- Important labels
- Technical content
- Product titles
- Major CTAs where appropriate
- Diagrams
- Footer elements

### Blue — `#1191C9`

Accent only.

Use for:
- Links
- Hover states
- Small highlights
- Active navigation states
- Arrows
- Technical indicators
- Small visual accents
- Selected UI states

Do NOT make blue the dominant page background.

### Black — `#000000`

Use sparingly for:
- High-contrast micro-elements
- Certain technical/typographic elements
- Image overlays when required

Do not use black as a full-page theme.

### Light gray — `#F2F2F2`

Use for:
- Alternating sections
- Technical specification areas
- Subtle visual separation
- Supporting panels

### Medium gray — `#D9D9D9`

Use for:
- Thin borders
- Dividers
- Grid lines
- Input borders
- Subtle separators

## Strict restrictions

DO NOT introduce:
- Dark-mode sections
- Purple
- Green
- Orange
- Red
- Neon colors
- Gradients
- Glassmorphism
- Excessive color decoration

The website is **light-theme only**.

---

# 4. Color Distribution

Target visual distribution:

- White: approximately 80–90%
- Navy: approximately 5–10%
- Light gray: approximately 3–5%
- Blue: approximately 1–3%
- Black: minimal

The website should NOT look like a blue corporate website.

The product imagery and photography should provide most of the visual richness.

---

# 5. Typography

## Primary font

Use a modern sans-serif.

Preferred order:

1. Inter
2. Manrope
3. IBM Plex Sans

If a local font is not available, use a robust system fallback.

Recommended CSS:

```css
font-family:
    "Inter",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
```

## Typography character

Typography should feel:

- Technical
- Editorial
- Confident
- Clean
- Premium
- Spacious

Avoid:
- Decorative fonts
- Futuristic novelty fonts
- Excessive italic text
- Excessive uppercase copy
- Excessive font weights

## Suggested hierarchy

| Element | Size | Weight |
|---|---:|---:|
| Hero headline | 72–96px | 700 |
| H1 | 56–72px | 700 |
| H2 | 42–56px | 650–700 |
| H3 | 28–36px | 600 |
| H4 | 20–24px | 600 |
| Body | 17–19px | 400 |
| Small body | 14–16px | 400 |
| Eyebrow/label | 12–14px | 600 |

Responsive sizes MUST reduce appropriately on tablet and mobile.

Use CSS `clamp()` where practical.

Example:

```css
.hero-title {
    font-size: clamp(3.5rem, 7vw, 6rem);
}
```

---

# 6. Layout Philosophy

The layout must feel editorial rather than template-based.

Prefer:
- Large whitespace
- Large typography
- Wide compositions
- Asymmetric layouts
- Full-width imagery
- Split layouts
- Strong vertical rhythm
- Thin separators
- Large visual anchors
- Clear content hierarchy

Avoid:
- Dense dashboards
- Repetitive 3-column card grids
- Excessive rounded containers
- Excessive shadows
- Excessive icon grids
- Every section looking identical

---

# 7. Container and Grid

Use a consistent maximum content width.

Recommended:

```css
--container-width: 1440px;
--page-padding: clamp(20px, 4vw, 64px);
```

Content should breathe.

Use:
- 12-column desktop grid
- Flexible tablet grid
- Single-column mobile layouts where appropriate

Grid gutters should remain consistent throughout the site.

---

# 8. Spacing System

Use generous whitespace.

Recommended base spacing:

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
120px
160px
```

Major sections should generally have:

```text
80–160px vertical spacing on desktop
48–96px on tablet
48–72px on mobile
```

Do not compress sections simply to fit more information.

Whitespace is part of the brand.

---

# 9. Header / Navigation

The header must be clean and restrained.

Suggested navigation:

```text
VORTIQ DYNAMICS

Technology
Solutions
Products
Industries
Projects
Company

Contact
```

Rules:
- White background
- Navy text
- Blue hover/active state
- Thin bottom border using `#D9D9D9`
- No gradient
- No oversized navigation elements
- No excessive icons
- No dark navigation theme
- Keep the logo visually strong but compact

The header may become sticky on scroll.

If sticky:
- Maintain white background
- Add a subtle border/shadow only if necessary
- Do not introduce a dark sticky header

---

# 10. Hero Sections

Hero sections are one of the most important elements of the website.

They should feel cinematic and confident.

Preferred structure:

```text
EYEBROW / CATEGORY

Large headline

Short supporting statement

Primary CTA

Large visual / image / video
```

Example positioning:

> ENGINEERING INTELLIGENCE

> **Building intelligent systems for the physical world.**

> Vortiq Dynamics engineers hardware, embedded intelligence, autonomy and connected systems for real-world applications.

> Explore Technology →

The hero should communicate what Vortiq IS, not simply what services it sells.

---

# 11. Cinematic Imagery

Imagery is a primary component of the interface.

Prefer:
- Real engineering
- Robotics
- Industrial machinery
- Electronics
- PCBs
- Sensors
- Motors
- Autonomous systems
- Engineering laboratories
- Field deployments
- Engineers working with physical technology
- Product prototypes
- Industrial environments

Avoid:
- Generic business meetings
- Handshake photos
- Generic office stock images
- Generic laptop photos
- Generic "teamwork" stock photography
- Overused SaaS illustrations

Images should demonstrate technology.

The ideal visual sequence is:

> Technology → Demonstration → Capability → Trust

not:

> Claim → Claim → Claim → Contact

---

# 12. Image Treatment

Images should usually be:
- Large
- High resolution
- Cleanly cropped
- Edge-to-edge where appropriate
- Visually dominant

Avoid:
- Excessive rounded image corners
- Tiny decorative images
- Heavy image filters
- Excessive overlays
- Artificial gradients

Use subtle cropping and composition rather than decorative effects.

---

# 13. Editorial Split Sections

A major reusable pattern is:

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│      LARGE IMAGE     │       EYEBROW        │
│                      │       TITLE          │
│                      │       BODY           │
│                      │       CTA            │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

Use alternating image/text positioning:

- Image left / text right
- Text left / image right

Do not use the same arrangement for every section.

---

# 14. Product-First Presentation

Products and systems should be visually prioritized.

Prefer:

```text
Product
↓
What it does
↓
Why it matters
↓
Technology underneath
↓
Application
↓
Evidence
```

Avoid:

```text
Service
↓
Service
↓
Service
↓
Technology list
↓
Contact
```

The website should feel like a technology/product company.

---

# 15. Technology Sections

Technology should be presented as engineering capability.

Example:

```text
TECHNOLOGY

01  EMBEDDED SYSTEMS
    MCU • RTOS • Firmware • BSP

02  INTELLIGENT MACHINES
    Robotics • Control • Motion

03  AI & PERCEPTION
    Computer Vision • Edge AI

04  CONNECTED SYSTEMS
    IoT • Wireless • Industrial Networks
```

Prefer editorial lists, grids, technical diagrams, and visual storytelling over generic service cards.

---

# 16. Cards

Cards should be restrained.

Preferred:
- Flat white background
- Thin `#D9D9D9` border where needed
- Minimal radius
- Little or no shadow
- Strong typography
- Generous whitespace
- Image-led cards when appropriate

Avoid:
- Large rounded cards
- Heavy drop shadows
- Gradient cards
- Floating glass cards
- Icon-heavy cards
- Decorative badges everywhere

Use lines and whitespace instead of boxes whenever possible.

---

# 17. Buttons

Buttons should be simple and confident.

### Primary

- Navy background
- White text
- Minimal radius
- Strong typography
- Comfortable padding

### Secondary

- White background
- Navy text
- Thin navy/gray border

### Text link

- Navy text
- Blue arrow/accent
- No large container

Example:

```text
EXPLORE TECHNOLOGY →
```

Do not use:
- Pill-shaped buttons everywhere
- Gradient buttons
- Glowing buttons
- Excessive button variations

---

# 18. Borders

Use thin borders deliberately.

Preferred:
- `1px solid #D9D9D9`
- `1px solid #0E3659`

Avoid:
- Thick borders
- Decorative borders
- Multiple nested borders

---

# 19. Border Radius

The site should feel precise rather than overly rounded.

Recommended:
- Buttons: 2–4px
- Cards: 0–6px
- Images: 0–4px where appropriate
- Inputs: 2–4px

Large pill shapes should be avoided except where there is a specific UX reason.

---

# 20. Shadows

Use very little shadow.

Default:

```css
box-shadow: none;
```

If a shadow is necessary for a floating UI element, keep it subtle.

Do not use shadows as a primary visual styling technique.

---

# 21. Animation

Animation should support storytelling, not decoration.

Preferred:
- Subtle reveal animations
- Image fade/slide
- Text reveal
- Hover movement
- Gentle parallax where appropriate
- Navigation transitions

Avoid:
- Excessive bouncing
- Constant floating elements
- Spinning icons
- Distracting animations
- Animation on every element

Animation should feel engineered and controlled.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 22. Technical Credibility

Technical information should be progressively disclosed.

The initial experience should be simple.

Deeper sections can reveal:
- Architecture
- Specifications
- Hardware
- Firmware
- Sensors
- Communication
- Control
- AI models
- Processing
- Interfaces
- Deployment
- Testing

Principle:

> **Simple surface → deep technology underneath**

Do not overwhelm the first-time visitor with engineering terminology.

---

# 23. Footer

The footer should be clean and structured.

Suggested groups:

```text
VORTIQ DYNAMICS

Technology
Solutions
Products
Industries
Projects
Company

Resources
Contact

© Vortiq Dynamics
```

White or very light gray is preferred.

If a darker footer is ever required, use navy `#0E3659`, not black or a dark-mode aesthetic.

---

# 24. Responsive Design

The website must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Desktop:
- Large typography
- Wide imagery
- Multi-column grids
- Asymmetric compositions

Tablet:
- Reduced typography
- Reduced gutters
- Two-column layouts where practical

Mobile:
- Single-column layouts
- Smaller hero typography
- Stacked content
- Full-width imagery
- Simplified navigation
- Comfortable touch targets

Never simply shrink desktop content.

Layouts should be intentionally redesigned for smaller screens.

---

# 25. Accessibility

Maintain:
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Alt text
- Sufficient contrast
- Accessible forms
- Reduced-motion support

Do not sacrifice accessibility for visual minimalism.

---

# 26. Strict "Do Not" Rules

Do NOT create:
- Dark-mode pages
- Purple gradients
- Neon technology aesthetics
- Glassmorphism
- Generic SaaS dashboards
- Generic IT-service layouts
- Excessive rounded cards
- Excessive shadows
- Excessive icons
- Generic corporate stock photography
- Excessive animations
- Huge blocks of marketing copy
- Dense hero sections
- Service-list-first homepage
- Fake statistics
- Fake customer logos
- Fake product claims

---

# 27. AI Implementation Rules

When an AI coding assistant modifies the website:

1. Read this file before making design decisions.
2. Preserve the existing design system.
3. Reuse existing CSS variables.
4. Reuse existing components and classes.
5. Do not introduce new colors without explicit approval.
6. Do not introduce new component styles unnecessarily.
7. Do not redesign unrelated sections.
8. Maintain the light-only visual system.
9. Prefer the simpler solution when uncertain.
10. Maintain consistent spacing.
11. Maintain responsive behavior.
12. Test desktop and mobile layouts.
13. Do not use placeholder stock-business imagery when appropriate engineering imagery exists.
14. Do not turn the site into a generic agency template.
15. Do not add dark sections merely to create contrast.
16. Do not add gradients.
17. Do not add excessive rounded cards.
18. Preserve semantic HTML and accessibility.

When uncertain between two design choices:

> **Choose the cleaner, quieter, more editorial option.**

---

# 28. Design Quality Test

Before considering a page complete, ask:

### Minimalist
Is there anything visually unnecessary?

### White
Does white remain the dominant canvas?

### Editorial
Does the typography create a strong visual hierarchy?

### Product-first
Does the page show what Vortiq builds?

### Deep-tech
Does the page communicate genuine engineering capability?

### Cinematic
Are the major visual elements large and impactful?

### Premium
Does the interface feel precise rather than decorated?

### Technical
Can deeper engineering information be discovered without overwhelming the first impression?

If the answer to these questions is yes, the page is aligned with the Vortiq Dynamics design system.

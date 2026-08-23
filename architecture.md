# Vortiq Dynamics — Website Architecture

## 1. Purpose

This document is the structural source of truth for the Vortiq Dynamics website.

It defines:
- Pages
- Navigation
- Page hierarchy
- Section order
- Content responsibilities
- Relationships between Products, Technology, Solutions, Industries and Projects
- Calls to action
- Reusable page patterns

Visual styling belongs in `design.md`.

Do NOT use this file to introduce new colors, typography, button styles, spacing rules, or visual components. Those decisions belong in `design.md`.

---

# 2. Website Strategy

The website must position Vortiq Dynamics as a:

> **Deep-tech engineering and intelligent systems company**

The website should not primarily communicate:

> "We provide technology services."

Instead, the narrative should communicate:

> **We engineer intelligent physical systems.**

The visitor should understand:

1. What Vortiq builds
2. What technology enables those systems
3. Where the systems are applied
4. What engineering capability exists underneath
5. What projects demonstrate the capability
6. How to engage Vortiq

---

# 3. Primary Navigation

Use the following primary navigation:

```text
Technology
Solutions
Products
Industries
Projects
Company
Contact
```

Logo:

```text
VORTIQ DYNAMICS
```

Do not make "Services" the dominant primary navigation item.

Engineering/service capabilities can be represented inside Technology and Solutions.

---

# 4. Page Map

```text
/
├── index.html
├── technology.html
├── solutions.html
├── products.html
├── industries.html
├── projects.html
├── company.html
└── contact.html
```

Optional future pages:

```text
/resources.html
/careers.html
/blog.html
/case-study-*.html
/product-*.html
/technology-*.html
```

Do not create these optional pages until there is real content for them.

---

# 5. Global Page Structure

Every primary page should follow:

```text
Global Header
        ↓
Page Hero
        ↓
Primary Content
        ↓
Supporting Content
        ↓
Relevant Proof / Projects
        ↓
CTA
        ↓
Global Footer
```

Not every page needs every component.

The page should feel like a narrative, not a collection of widgets.

---

# 6. Homepage — index.html

## Objective

The homepage should answer:

> What is Vortiq Dynamics and why should I believe it builds serious technology?

## Section order

### 01 — Hero

Purpose:
- Establish deep-tech positioning immediately
- Explain Vortiq in one strong statement
- Introduce a major visual

Content structure:

```text
Eyebrow
Large headline
Short supporting statement
Primary CTA
Cinematic image/video
```

Example direction:

> ENGINEERING INTELLIGENCE

> **Building intelligent systems for the physical world.**

CTA:
- Explore Technology
- View Projects

Do not start with a generic "Our Services" section.

---

### 02 — Capability Statement

Purpose:
Quickly communicate the engineering domains.

Potential categories:

```text
Embedded Systems
AI & Computer Vision
Robotics & Control
Connected Systems
Power & Energy
Industrial Automation
```

Keep the content concise.

---

### 03 — Featured Product / System

Purpose:
Show something Vortiq actually builds.

Structure:

```text
Large visual
Product/system name
One-line description
Short explanation
Explore CTA
```

Products should be real.

Do not invent product names or capabilities.

---

### 04 — Technology

Purpose:
Explain the engineering foundation.

Possible categories:

```text
Embedded Systems
AI & Perception
Robotics
Control Systems
Edge Computing
Connectivity
Power Electronics
```

The section should link to `technology.html`.

---

### 05 — Solutions

Purpose:
Explain what the technology enables.

Potential solution categories:

```text
Industrial Automation
Autonomous Systems
Intelligent Monitoring
Energy Systems
Connected Infrastructure
Precision Automation
```

The section should link to `solutions.html`.

---

### 06 — Industries

Purpose:
Show where Vortiq's systems are applied.

Potential industries:

```text
Manufacturing
Energy
Agriculture
Mobility
Marine
Infrastructure
```

Only publish industries that are actually relevant to Vortiq.

Link to `industries.html`.

---

### 07 — Featured Projects

Purpose:
Provide evidence.

Display:
- Real projects
- Real engineering
- Real images
- Short technical summaries

Each project should link to `projects.html` or a future case-study page.

Do not fabricate:
- Customer names
- Performance numbers
- Deployment numbers
- Awards
- Certifications
- Partnerships

---

### 08 — Engineering Approach

Purpose:
Explain how Vortiq moves from idea to deployed system.

Preferred narrative:

```text
Research
   ↓
Architecture
   ↓
Engineering
   ↓
Prototype
   ↓
Validation
   ↓
Deployment
```

This communicates engineering maturity.

---

### 09 — Final CTA

Example direction:

> **Build what's next.**

Supporting text:
A concise invitation to discuss a technology or engineering project.

CTA:

```text
Start a Project →
```

---

# 7. Technology — technology.html

## Objective

Answer:

> What technologies does Vortiq engineer with?

## Sections

### Hero

Headline focused on engineering capability.

Example:

> **Technology engineered for the physical world.**

---

### Technology Overview

Explain that Vortiq works across multiple engineering layers.

Potential structure:

```text
Hardware
↓
Firmware
↓
Compute
↓
Intelligence
↓
Control
↓
Connectivity
↓
System
```

---

### Embedded Systems

Potential topics:
- Microcontrollers
- RTOS
- Firmware
- Drivers
- BSP
- Communication interfaces
- Device control

---

### AI & Computer Vision

Potential topics:
- Edge AI
- Computer vision
- Perception
- Machine learning
- Sensor processing

---

### Robotics & Control

Potential topics:
- Motion control
- Robotics
- Autonomous systems
- Control algorithms
- Actuation

---

### Connected Systems

Potential topics:
- IoT
- Wireless
- Industrial networking
- Gateways
- Remote monitoring

---

### Power & Energy

Only include if this is an active Vortiq capability.

Potential topics:
- Power electronics
- Battery systems
- Energy management
- BMS

---

### Engineering Integration

Explain how these technologies become complete systems.

CTA:

```text
Explore Solutions →
```

---

# 8. Solutions — solutions.html

## Objective

Answer:

> What real-world problems can Vortiq's technology solve?

Potential solutions:

### Industrial Automation

Automation, sensing, control, monitoring and intelligent machinery.

### Autonomous Systems

Perception, decision-making, control and autonomous operation.

### Intelligent Monitoring

Connected sensing, edge processing, analytics and remote monitoring.

### Energy Systems

Energy management, power electronics, battery and intelligent control systems where applicable.

### Precision Automation

Agriculture and other physical environments requiring sensing and automation where applicable.

### Connected Infrastructure

Distributed sensing, gateways, industrial communication and monitoring.

Each solution should follow:

```text
Problem
↓
System
↓
Technology
↓
Application
↓
Outcome
```

Avoid presenting solutions as generic consulting services.

---

# 9. Products — products.html

## Objective

Answer:

> What does Vortiq actually build?

This page is extremely important for product-first positioning.

## Product page structure

```text
Hero
↓
Product/System overview
↓
Major capabilities
↓
Technology underneath
↓
Applications
↓
Technical details
↓
Projects / deployment evidence
↓
CTA
```

Only show real products, prototypes, platforms or systems.

If the company does not yet have public products, use:

```text
Systems
Platforms
Engineering Prototypes
```

rather than inventing product claims.

---

# 10. Industries — industries.html

## Objective

Answer:

> Where can Vortiq's engineering be applied?

Potential industries:

```text
Manufacturing
Energy
Agriculture
Mobility
Marine
Infrastructure
```

Each industry should have:

```text
Large visual
Industry title
Problem context
Relevant Vortiq capabilities
Example applications
Related projects
CTA
```

Do not create an industry simply because it sounds impressive.

---

# 11. Projects — projects.html

## Objective

Answer:

> Has Vortiq actually built and engineered real systems?

This is the primary proof page.

## Project listing

Each project should include:

```text
Project image
Project name
Category
Short description
Technology tags
View project →
```

Technology tags can include:

```text
Embedded
AI
Robotics
IoT
Control
Computer Vision
Power
```

Avoid turning this into a generic portfolio gallery.

Projects should feel like engineering case studies.

---

# 12. Future Case Study Structure

When individual case studies are created:

```text
Case Study Hero
↓
Problem
↓
System Overview
↓
Engineering Challenge
↓
Architecture
↓
Hardware
↓
Firmware / Software
↓
AI / Control
↓
Testing
↓
Deployment
↓
Results
↓
Related Projects
↓
CTA
```

Use real technical information.

---

# 13. Company — company.html

## Objective

Answer:

> Who is Vortiq Dynamics and how does it think?

Recommended sections:

### Hero

A concise statement about the company.

### Mission

Why Vortiq exists.

### Engineering Philosophy

How Vortiq approaches complex physical-world problems.

### Research & Development

Explain R&D orientation.

### Engineering Capabilities

A concise overview linking to Technology.

### Journey / Milestones

Only use real milestones.

### Team

Add only when there is appropriate public team information.

### CTA

Invite engineering/project discussions.

---

# 14. Contact — contact.html

## Objective

Convert interest into a serious engineering enquiry.

Avoid making the contact page look like a generic web-agency contact form.

## Structure

### Hero

Example:

> **Let's engineer what's next.**

### Project Enquiry

Fields:

```text
Name
Company
Email
Phone (optional)
Project / Requirement
Technology area
Budget / Timeline (optional)
Attachment (if implemented)
```

Keep the form simple.

### Technology Areas

Optional selection:

```text
Embedded Systems
AI / Computer Vision
Robotics
Automation
IoT
Power / Energy
Other
```

### Contact Information

Use real Vortiq information only.

Do not invent:
- Address
- Phone number
- Email
- Social links

---

# 15. Global CTA Strategy

Use a small number of meaningful CTAs.

Primary CTAs:

```text
Explore Technology →
View Projects →
Explore Solutions →
View Products →
Start a Project →
```

Avoid repeated:

```text
Learn More
Contact Us
Get Started
```

on every section.

CTA wording should describe the next action.

---

# 16. Content Hierarchy

The website narrative should follow:

```text
WHAT WE BUILD
      ↓
WHAT TECHNOLOGY ENABLES IT
      ↓
WHERE IT IS USED
      ↓
PROOF
      ↓
HOW WE ENGINEER IT
      ↓
ENGAGEMENT
```

This is the primary strategic architecture.

---

# 17. Services Positioning

A dedicated `services.html` page is NOT required for the initial architecture.

Reason:

A dominant Services page can make Vortiq look like an engineering contractor or software agency.

Instead:

```text
Technology
    ↓
Capabilities

Solutions
    ↓
Applications

Products
    ↓
What Vortiq builds

Projects
    ↓
Proof
```

If Vortiq later needs a service-oriented page for B2B customers, it can be added without changing the primary navigation.

---

# 18. Cross-Linking

Pages should naturally connect.

Examples:

```text
Technology
    → Products
    → Solutions
    → Projects

Products
    → Technology
    → Solutions
    → Projects

Solutions
    → Industries
    → Technology
    → Projects

Industries
    → Solutions
    → Projects

Projects
    → Technology
    → Products
    → Contact
```

The user should never reach a dead-end page.

---

# 19. Shared Components

All pages should reuse:

```text
Header
Navigation
Mobile navigation
Hero
Section heading
Editorial split section
Technology list
Product feature
Project card
Industry feature
CTA
Footer
```

Do not independently recreate the same component in every HTML file.

---

# 20. File Structure

Recommended static project:

```text
vortiq-website/
│
├── index.html
├── technology.html
├── solutions.html
├── products.html
├── industries.html
├── projects.html
├── company.html
├── contact.html
│
├── design.md
├── architecture.md
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── assets/
    ├── images/
    │   ├── hero/
    │   ├── technology/
    │   ├── products/
    │   ├── solutions/
    │   ├── industries/
    │   └── projects/
    │
    ├── icons/
    └── fonts/
```

Keep the visual system centralized in `css/style.css`.

---

# 21. Shared HTML Requirements

Every page should include:

- Semantic HTML5
- Correct `<title>`
- Meta description
- Responsive viewport
- Open Graph metadata where appropriate
- Accessible navigation
- Semantic headings
- Descriptive image alt text
- Consistent header/footer
- Consistent CSS classes

Example:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Avoid using `<div>` for every semantic element.

---

# 22. Responsive Architecture

Desktop:

```text
Wide editorial compositions
Large images
12-column grid
Large typography
```

Tablet:

```text
Reduced grid
Reduced typography
Two-column layouts where practical
```

Mobile:

```text
Single column
Stacked sections
Simplified navigation
Full-width images
Readable typography
```

The content order must remain logical when stacked.

---

# 23. Content Rules

All factual content must be based on real Vortiq information.

Do not invent:
- Customers
- Products
- Revenue
- Employee counts
- Certifications
- Awards
- Partnerships
- Deployment statistics
- Performance metrics
- Testimonials

Use placeholders only during development and clearly mark them.

---

# 24. AI Implementation Rules

When an AI coding assistant creates or edits a page:

1. Read `architecture.md` first.
2. Read `design.md` before implementing the visual design.
3. Determine the page's role before adding sections.
4. Follow the defined section order.
5. Reuse shared components.
6. Reuse existing CSS.
7. Do not invent content.
8. Do not add pages unless requested.
9. Do not introduce a generic services-agency structure.
10. Do not redesign unrelated pages.
11. Maintain cross-page consistency.
12. Keep navigation consistent.
13. Keep the same header and footer across pages.
14. Ensure all internal links point to existing pages.
15. Ensure mobile layouts remain coherent.

---

# 25. Page Completion Checklist

Before considering a page complete:

### Purpose
- Does the page have a clear purpose?
- Does the visitor understand why the page exists?

### Architecture
- Does it follow this document?
- Does it link naturally to related pages?

### Positioning
- Does it reinforce deep-tech positioning?
- Does it avoid generic agency language?

### Evidence
- Does it use real projects/products where appropriate?

### UX
- Is the next action obvious?
- Are there no dead ends?

### Consistency
- Does it use the shared header/footer?
- Does it follow `design.md`?
- Does it work on mobile?

---

# 26. Final Information Architecture

The initial Vortiq Dynamics website should therefore be:

```text
                         VORTIQ DYNAMICS
                                │
        ┌───────────────┬───────┼────────┬───────────┐
        ↓               ↓       ↓        ↓           ↓
   TECHNOLOGY       SOLUTIONS PRODUCTS INDUSTRIES PROJECTS
        │               │       │        │           │
        │               │       │        │           │
        └───────────────┴───────┴────────┴───────────┘
                                │
                                ↓
                             COMPANY
                                │
                                ↓
                            CONTACT
```

The homepage connects all major areas:

```text
                    HOMEPAGE
                        │
        ┌───────────────┼────────────────┐
        ↓               ↓                ↓
   TECHNOLOGY       PRODUCTS         SOLUTIONS
        │               │                │
        └───────────────┼────────────────┘
                        ↓
                    INDUSTRIES
                        │
                        ↓
                     PROJECTS
                        │
                        ↓
                     COMPANY
                        │
                        ↓
                     CONTACT
```

This structure keeps the site **product-first, technology-led, evidence-driven, and deep-tech oriented**.

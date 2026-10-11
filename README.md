# Page & Pine Booksellers

An independent bookstore website built with semantic HTML5 and modern responsive CSS3 (no external frameworks or libraries).

## Overview

**Page & Pine Booksellers** is a single-page storefront showcasing:
- **Curated Book Catalog**: Grouped into Fiction, Nonfiction, and Staff Picks.
- **Community Events**: Calendar of book clubs, author readings, and writing workshops.
- **Editorial Storefront Experience**: Inspired by modern boutique bookstore aesthetics with warm paper tones, literary typography, and responsive grid layouts.

---

## Technical Highlights & Assessment Compliance

| Requirement | Implementation Detail |
|---|---|
| **Frameworks** | Pure HTML5 & CSS3 only. Zero external UI frameworks or JS libraries. |
| **Commit History** | Built using small, incremental, descriptive Git commits. |
| **Heading Hierarchy** | Exactly one `<h1>` in the Hero section (`#home`), followed by semantic `<h2>`, `<h3>`, and `<h4>` elements. |
| **Navigation** | Working internal anchor links (`#home`, `#catalog`, `#events`, `#contact`) with smooth scrolling (`scroll-behavior: smooth`). |
| **Semantic Landmarks** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`, `<form>`, and `<footer>`. |
| **CSS Reset & Global Sizing** | `* { box-sizing: border-box; }` applied globally to all elements and pseudo-elements. |
| **CSS Custom Properties** | Comprehensive `:root` tokens for color palette, badge themes, typography, spacing, and shadows. |
| **CSS Grid Usage** | Product grid (`.book-grid`), event listings (`.events-grid`), and multi-column footer (`.footer-grid`). |
| **CSS Flexbox Usage** | Sticky navigation header (`.nav-wrapper`), card internals and alignment (`.book-card`, `.book-footer`), hero highlights, and event metadata. |
| **Responsiveness** | Responsive design with `@media` breakpoints for desktop, tablet, and mobile (zero horizontal scrolling). |

---

## File Structure

```text
practicum-bookstore/
├── index.html          # Semantic HTML5 document structure
├── styles.css          # CSS custom properties, grid, flexbox, and responsive rules
├── images/             # Vector SVG book cover artwork (100% offline-compatible)
│   ├── fiction-1.svg
│   ├── fiction-2.svg
│   ├── fiction-3.svg
│   ├── fiction-4.svg
│   ├── nonfiction-1.svg
│   ├── nonfiction-2.svg
│   ├── nonfiction-3.svg
│   ├── nonfiction-4.svg
│   ├── pick-1.svg
│   ├── pick-2.svg
│   ├── pick-3.svg
│   └── pick-4.svg
└── README.md           # Project documentation and architecture guide
```

---

## How to View the Project

Open `index.html` directly in any modern web browser:
```bash
# On Linux
xdg-open index.html

# Or start a simple local server
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

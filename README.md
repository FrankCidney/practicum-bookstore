# Page & Pine Booksellers

An independent bookstore storefront built with React, Vite, and Tailwind CSS.

## Overview

**Page & Pine Booksellers** is a responsive single-page storefront showcasing:
- **Curated Book Catalog**: Interactive category filtering for Fiction, Nonfiction, and Bookseller Staff Picks, with per-item quantity steppers.
- **Community Events**: Calendar of book clubs, author readings, and writing workshops.
- **Editorial Storefront**: Inspired by modern boutique bookstore design with warm tones, literary typography, and mobile-first responsive layouts.

## Built With

- **React 19 & Vite**: Component-based UI and fast module bundling
- **Tailwind CSS v4**: Mobile-first utility styling and custom design tokens
- **JavaScript (ES6+)**: Centralized data structures and React `useState` state management

## File Structure

```text
practicum-bookstore/
├── public/
│   └── images/               # Vector SVG book cover illustrations
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Sticky navigation bar and bag indicator
│   │   ├── Hero.jsx          # Welcome banner and store highlights
│   │   ├── Catalog.jsx       # Category filter (useState) and book grid
│   │   ├── BookCard.jsx      # Individual book card component
│   │   ├── QuantityStepper.jsx # Controlled quantity stepper component
│   │   ├── Events.jsx        # Events grid and parlor reservation banner
│   │   └── Footer.jsx        # Store hours, contact info, and newsletter form
│   ├── data/
│   │   └── books.js          # Centralized book and event data arrays
│   ├── App.jsx               # Root application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Tailwind directives and custom theme tokens
├── index.html
├── package.json
└── vite.config.js
```

## How to Run Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

# Implementation Plan - Reading Modes & Premium UI Updates

We will add a premium "Reading Mode" toggle (Engineer vs. Consultant), update the work section to include a portrait placeholder, and add typing animations to the contact header.

## User Review Required

> [!IMPORTANT]
> The **Consultant Mode** will transition the website to a premium light theme with high-contrast readable cards.
> The **Featured Projects** section will dynamically render in two modes:
> * **Engineer Mode (Dark)**: The high-fidelity developer dashboard console displaying SVG architecture nodes, details, and code variables.
> * **Consultant Mode (Light)**: A sleek carousel pitch-deck showing slide cards for Business Problem, Discovery, and ROI Metrics with quick slider transitions.

> [!NOTE]
> The portrait image is saved at `public/naman_portrait.png`. You can overwrite this file in your directory to change the image.

## Proposed Changes

### Theme Extensions

#### [MODIFY] [src/index.css](file:///d:/Projects/portfolio_t1/src/index.css)
* Define root variables for light theme under `.mode-consultant`:
  * `--bg-color: #F8F9FA`
  * `--text-primary: #1A1A1A`
  * `--text-secondary: #4A4A4A`
  * `--border-color: rgba(0, 0, 0, 0.08)`
  * `--glass-bg: rgba(255, 255, 255, 0.8)`
* Add smooth transition properties for theme variables on the `html` and `body` nodes.
* Add typing animation keyframes.

---

### Navbar Integration

#### [MODIFY] [src/components/Navbar.tsx](file:///d:/Projects/portfolio_t1/src/components/Navbar.tsx)
* Pass `viewMode` and `setViewMode` down to the Navbar.
* Add a sleek mode toggle switcher button: `[ Engineer ⚙️ | Consultant 💼 ]` which switches themes and project layouts.

---

### Work & Portrait Placement

#### [MODIFY] [src/components/MyStory.tsx](file:///d:/Projects/portfolio_t1/src/components/MyStory.tsx)
* Wrap the timeline inside a 2-column grid layout.
* Left side (8 columns): The vertical story timeline.
* Right side (4 columns): A sticky glass container displaying `public/naman_portrait.png` under a glowing border frame.

---

### Double-mode Projects

#### [MODIFY] [src/components/FeaturedProjects.tsx](file:///d:/Projects/portfolio_t1/src/components/FeaturedProjects.tsx)
* Update parameters to accept the current `viewMode`.
* Render **Developer Console** in `'engineer'` mode (computer compiling style dashboard).
* Render **Pitch Deck Slider** in `'consultant'` mode (horizontal slides displaying problem, metrics, and business outcomes).

---

### Typing Text Reveal

#### [MODIFY] [src/components/Contact.tsx](file:///d:/Projects/portfolio_t1/src/components/Contact.tsx)
* Create a typing text simulator for "Let's build intelligent products together!" that simulates key-by-key typing with a blinking vertical terminal caret.

---

## Verification Plan

### Automated Tests
* Run `npm run build` to verify compiling checks pass.

### Manual Verification
* Start dev server (`npm run dev`).
* Toggle between Engineer and Consultant mode to inspect light/dark layouts.
* Click project slide arrows in Consultant mode and inspect metrics text alignment.
* Scroll to the footer and check the typing text loop.

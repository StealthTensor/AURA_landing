# AURA Club Recruitment Website (2026)

A high-performance, modern web application for **AURA** (Autonomous, Unified, Resilient & Artistic Guild) club recruitment drive.

## Key Features

1. **Hero Section**
   - Dynamic HTML5 `<canvas>` interactive glowing aura particle field.
   - Dual Call-to-Action: **"Apply for Recruitment"** & **"Explore 8 Domains"**.
   - Real-time recruitment status pill and stats counter (450+ members, 35+ shipped projects, 12+ flagship events).

2. **About Club & Recruitment Roadmap**
   - 4 Foundational Pillars (Production-Grade Engineering, Multidisciplinary Synergy, High-Impact Mentorship, Hackathons & Summits).
   - 4-Phase Recruitment Roadmap (Application &rarr; Domain Challenge &rarr; Interview &rarr; Grand Induction).

3. **Interactive Domains Showcase**
   - 8 In-depth Domain wings:
     - Web & Mobile Engineering
     - AI & Machine Learning
     - Cybersecurity & Systems
     - UI/UX & Product Design
     - 3D Motion & Creative Media
     - Events & Operations
     - Corporate Relations & Sponsorship
     - Content, Editorial & Social PR
   - Category filtering (All, Tech & Engineering, AI & Data, Design & Media, Operations & PR).
   - Real-time search filter for skills, technologies, and roles.
   - Direct "Apply to Domain" button preselecting the wing in the application portal.

4. **Recruitment Application Portal Modal**
   - Multi-field student details form (Name, College Email, Phone, Roll No, Branch, Year, Primary/Secondary Domain, Portfolio/GitHub, Motivation).
   - Instant client-side validation and responsive feedback.
   - Application Reference ID generation (`AURA-2026-XXXX`).
   - LocalStorage persistence under `aura_recruitment_applications`.

5. **Organizer Review Dashboard (Admin Drawer)**
   - Hidden organizer access via top bar badge or keyboard shortcut (`Ctrl+Shift+A` or `Alt+A`).
   - Search & domain filter across all candidate submissions.
   - Detailed applicant viewer and CSV export functionality.

6. **Campus Posters Gallery & FAQ**
   - High-resolution showcase of campus flyers with lightbox zoom and download action.
   - Expandable interactive accordion for eligibility, time commitments, and selection criteria.

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Architecture Diagram

The Excalidraw UI & component interaction diagram is available at [`docs/architecture-ui.excalidraw`](docs/architecture-ui.excalidraw).

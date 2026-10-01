import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const elements = [
  // 1. Hero Container
  {
    id: "rect-hero",
    type: "rectangle",
    x: 100,
    y: 80,
    width: 320,
    height: 160,
    strokeColor: "#00f2fe",
    backgroundColor: "#0f172a",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    roundness: { type: 3 },
    seed: 101
  },
  {
    id: "text-hero",
    type: "text",
    x: 120,
    y: 105,
    width: 280,
    height: 110,
    text: "Hero Section (AURA)\n• Canvas Aura Particle Field\n• 450+ Members / Stats\n• CTA: Apply for Recruitment\n• CTA: Explore 8 Domains",
    originalText: "Hero Section (AURA)\n• Canvas Aura Particle Field\n• 450+ Members / Stats\n• CTA: Apply for Recruitment\n• CTA: Explore 8 Domains",
    fontSize: 16,
    fontFamily: 3,
    textAlign: "left",
    verticalAlign: "top",
    strokeColor: "#f8fafc",
    backgroundColor: "transparent",
    opacity: 100,
    seed: 102
  },

  // 2. About & Roadmap
  {
    id: "rect-about",
    type: "rectangle",
    x: 100,
    y: 290,
    width: 320,
    height: 150,
    strokeColor: "#38bdf8",
    backgroundColor: "#0f172a",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    roundness: { type: 3 },
    seed: 201
  },
  {
    id: "text-about",
    type: "text",
    x: 120,
    y: 315,
    width: 280,
    height: 100,
    text: "About & Roadmap\n• 4 Club Pillars\n• 4-Phase Recruitment Flow\n• Phase 1 Online App\n• Phase 2 Domain Task",
    originalText: "About & Roadmap\n• 4 Club Pillars\n• 4-Phase Recruitment Flow\n• Phase 1 Online App\n• Phase 2 Domain Task",
    fontSize: 16,
    fontFamily: 3,
    textAlign: "left",
    verticalAlign: "top",
    strokeColor: "#f8fafc",
    backgroundColor: "transparent",
    opacity: 100,
    seed: 202
  },

  // 3. Domains Section
  {
    id: "rect-domains",
    type: "rectangle",
    x: 480,
    y: 80,
    width: 360,
    height: 200,
    strokeColor: "#a855f7",
    backgroundColor: "#0f172a",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    roundness: { type: 3 },
    seed: 301
  },
  {
    id: "text-domains",
    type: "text",
    x: 500,
    y: 105,
    width: 320,
    height: 150,
    text: "All 8 Domains Showcase\n• Category Tabs (Tech, AI, Design, Ops)\n• Live Search Filter\n• Openings count ('6 Open Seats')\n• Responsibilities & Tech Stack\n• Direct 'Apply to Domain' Button",
    originalText: "All 8 Domains Showcase\n• Category Tabs (Tech, AI, Design, Ops)\n• Live Search Filter\n• Openings count ('6 Open Seats')\n• Responsibilities & Tech Stack\n• Direct 'Apply to Domain' Button",
    fontSize: 16,
    fontFamily: 3,
    textAlign: "left",
    verticalAlign: "top",
    strokeColor: "#f8fafc",
    backgroundColor: "transparent",
    opacity: 100,
    seed: 302
  },

  // 4. Recruitment Portal Modal
  {
    id: "rect-modal",
    type: "rectangle",
    x: 900,
    y: 80,
    width: 340,
    height: 220,
    strokeColor: "#ec4899",
    backgroundColor: "#18181b",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    roundness: { type: 3 },
    seed: 401
  },
  {
    id: "text-modal",
    type: "text",
    x: 920,
    y: 105,
    width: 300,
    height: 170,
    text: "Recruitment Portal Modal\n• Multi-field Validation\n• Domain Auto-Preselection\n• Student Email / Roll / Branch\n• Generates 'AURA-2026-XXXX'\n• Instant Copy & Next Steps",
    originalText: "Recruitment Portal Modal\n• Multi-field Validation\n• Domain Auto-Preselection\n• Student Email / Roll / Branch\n• Generates 'AURA-2026-XXXX'\n• Instant Copy & Next Steps",
    fontSize: 16,
    fontFamily: 3,
    textAlign: "left",
    verticalAlign: "top",
    strokeColor: "#f8fafc",
    backgroundColor: "transparent",
    opacity: 100,
    seed: 402
  },

  // 5. LocalStorage & Admin Drawer
  {
    id: "rect-admin",
    type: "rectangle",
    x: 900,
    y: 340,
    width: 340,
    height: 190,
    strokeColor: "#10b981",
    backgroundColor: "#0f172a",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    roundness: { type: 3 },
    seed: 501
  },
  {
    id: "text-admin",
    type: "text",
    x: 920,
    y: 365,
    width: 300,
    height: 140,
    text: "Organizer Admin Dashboard\n• Storage: 'aura_recruitment_applications'\n• Live Search & Domain Filter\n• Expand Candidate Details\n• CSV Export for Leads\n• Hotkey: Ctrl+Shift+A",
    originalText: "Organizer Admin Dashboard\n• Storage: 'aura_recruitment_applications'\n• Live Search & Domain Filter\n• Expand Candidate Details\n• CSV Export for Leads\n• Hotkey: Ctrl+Shift+A",
    fontSize: 16,
    fontFamily: 3,
    textAlign: "left",
    verticalAlign: "top",
    strokeColor: "#f8fafc",
    backgroundColor: "transparent",
    opacity: 100,
    seed: 502
  },

  // 6. Posters & FAQ
  {
    id: "rect-posters",
    type: "rectangle",
    x: 480,
    y: 320,
    width: 360,
    height: 160,
    strokeColor: "#f59e0b",
    backgroundColor: "#0f172a",
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    roundness: { type: 3 },
    seed: 601
  },
  {
    id: "text-posters",
    type: "text",
    x: 500,
    y: 345,
    width: 320,
    height: 110,
    text: "Campaign Posters & FAQ\n• High-Res Image Lightbox\n• Zoom & Download Assets\n• Interactive Accordions for Eligibility,\n  Commitment & Selection Criteria",
    originalText: "Campaign Posters & FAQ\n• High-Res Image Lightbox\n• Zoom & Download Assets\n• Interactive Accordions for Eligibility,\n  Commitment & Selection Criteria",
    fontSize: 16,
    fontFamily: 3,
    textAlign: "left",
    verticalAlign: "top",
    strokeColor: "#f8fafc",
    backgroundColor: "transparent",
    opacity: 100,
    seed: 602
  },

  // Connection Arrows
  {
    id: "arrow-hero-domains",
    type: "arrow",
    x: 420,
    y: 160,
    width: 60,
    height: 0,
    strokeColor: "#00f2fe",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    points: [[0, 0], [60, 0]],
    startArrowhead: null,
    endArrowhead: "arrow",
    seed: 701
  },
  {
    id: "arrow-domains-modal",
    type: "arrow",
    x: 840,
    y: 170,
    width: 60,
    height: 0,
    strokeColor: "#ec4899",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    points: [[0, 0], [60, 0]],
    startArrowhead: null,
    endArrowhead: "arrow",
    seed: 702
  },
  {
    id: "arrow-modal-admin",
    type: "arrow",
    x: 1070,
    y: 300,
    width: 0,
    height: 40,
    strokeColor: "#10b981",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: 0,
    opacity: 100,
    points: [[0, 0], [0, 40]],
    startArrowhead: null,
    endArrowhead: "arrow",
    seed: 703
  }
];

const diagram = {
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements,
  appState: {
    viewBackgroundColor: "#07090e",
    gridSize: 20
  },
  files: {}
};

fs.mkdirSync(path.join(rootDir, 'docs'), { recursive: true });
fs.writeFileSync(
  path.join(rootDir, 'docs/architecture-ui.excalidraw'),
  JSON.stringify(diagram, null, 2),
  'utf-8'
);
console.log('Successfully generated docs/architecture-ui.excalidraw');

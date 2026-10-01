import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const gateIndex = args.indexOf('--gate');
if (gateIndex === -1 || !args[gateIndex + 1]) {
  console.error('Usage: node scripts/verify-gates.mjs --gate <1..8>');
  process.exit(1);
}

const gate = parseInt(args[gateIndex + 1], 10);

function fileExists(relPath) {
  return fs.existsSync(path.join(rootDir, relPath));
}

function fileContains(relPath, substrings) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) return false;
  const content = fs.readFileSync(fullPath, 'utf-8');
  return substrings.every(sub => content.toLowerCase().includes(sub.toLowerCase()));
}

try {
  switch (gate) {
    case 1: {
      // Scaffolding & dependencies
      const requiredFiles = ['package.json', 'index.html', 'vite.config.js', 'src/main.jsx', 'src/App.jsx'];
      for (const file of requiredFiles) {
        if (!fileExists(file)) {
          throw new Error(`Missing required file: ${file}`);
        }
      }
      const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8'));
      if (!pkg.dependencies?.react || !pkg.dependencies?.['lucide-react']) {
        throw new Error('Missing react or lucide-react in dependencies');
      }
      console.log('gate 1 passed: project scaffolding and dependencies verified');
      process.exit(0);
    }

    case 2: {
      // Hero section
      if (!fileExists('src/components/Hero.jsx')) {
        throw new Error('src/components/Hero.jsx not found');
      }
      if (!fileContains('src/components/Hero.jsx', ['aura', 'recruitment', 'canvas', 'domain'])) {
        throw new Error('Hero.jsx does not contain required AURA branding, recruitment CTA, or canvas aura effect');
      }
      console.log('gate 2 passed: hero section verified');
      process.exit(0);
    }

    case 3: {
      // About & Roadmap
      if (!fileExists('src/components/About.jsx')) {
        throw new Error('src/components/About.jsx not found');
      }
      if (!fileContains('src/components/About.jsx', ['mission', 'roadmap', 'phase', 'induction'])) {
        throw new Error('About.jsx does not contain club mission and recruitment roadmap phases');
      }
      console.log('gate 3 passed: about and recruitment roadmap verified');
      process.exit(0);
    }

    case 4: {
      // Domains
      if (!fileExists('src/components/Domains.jsx') || !fileExists('src/data/domainsData.js')) {
        throw new Error('src/components/Domains.jsx or src/data/domainsData.js not found');
      }
      const domainsContent = fs.readFileSync(path.join(rootDir, 'src/data/domainsData.js'), 'utf-8') + 
                             fs.readFileSync(path.join(rootDir, 'src/components/Domains.jsx'), 'utf-8');
      const required = ['technical', 'ai', 'design', 'cybersecurity', 'filter', 'apply'];
      for (const req of required) {
        if (!domainsContent.toLowerCase().includes(req.toLowerCase())) {
          throw new Error(`Domains missing keyword: ${req}`);
        }
      }
      console.log('gate 4 passed: domains section verified');
      process.exit(0);
    }

    case 5: {
      // Recruitment portal & admin drawer
      if (!fileExists('src/components/RecruitmentModal.jsx') || !fileExists('src/components/AdminDrawer.jsx')) {
        throw new Error('src/components/RecruitmentModal.jsx or AdminDrawer.jsx not found');
      }
      if (!fileContains('src/components/RecruitmentModal.jsx', ['name', 'email', 'domain', 'submit', 'localstorage'])) {
        throw new Error('RecruitmentModal missing essential form fields or storage logic');
      }
      console.log('gate 5 passed: recruitment portal verified');
      process.exit(0);
    }

    case 6: {
      // Posters gallery & FAQ
      if (!fileExists('src/components/PostersGallery.jsx') || !fileExists('src/components/FAQ.jsx')) {
        throw new Error('PostersGallery or FAQ component not found');
      }
      if (!fileContains('src/components/PostersGallery.jsx', ['058f63c87cdf0c279097fe473d0f1724.jpg', 'dc9190d959dffa7a9384241fc60f90f3.jpg'])) {
        throw new Error('PostersGallery does not reference the recruitment poster images');
      }
      console.log('gate 6 passed: posters gallery and faq verified');
      process.exit(0);
    }

    case 7: {
      // Excalidraw diagram
      const diagPath = path.join(rootDir, 'docs/architecture-ui.excalidraw');
      if (!fs.existsSync(diagPath)) {
        throw new Error('docs/architecture-ui.excalidraw not found');
      }
      const raw = fs.readFileSync(diagPath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (!parsed.elements || parsed.elements.length < 5) {
        throw new Error('Excalidraw diagram has insufficient elements');
      }
      console.log('gate 7 passed: excalidraw diagram verified');
      process.exit(0);
    }

    case 8: {
      // Production build
      console.log('Running npm run build...');
      execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });
      if (!fileExists('dist/index.html')) {
        throw new Error('dist/index.html not generated after build');
      }
      console.log('gate 8 passed: production build verified');
      process.exit(0);
    }

    default:
      throw new Error(`Unknown gate: ${gate}`);
  }
} catch (err) {
  console.error(`Gate verification failed: ${err.message}`);
  process.exit(1);
}

export const DOMAIN_CATEGORIES = [
  { id: 'all', label: 'All Domains' },
  { id: 'tech', label: 'Engineering & Tech' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'design', label: 'Design & Media' },
  { id: 'operations', label: 'Operations & PR' },
];

export const DOMAINS = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Engineering',
    category: 'tech',
    iconName: 'Code',
    accentColor: 'from-cyan-500 to-blue-600',
    borderColor: 'group-hover:border-cyan-500/50',
    glowColor: 'rgba(0, 242, 254, 0.15)',
    openings: '6 Open Seats',
    badge: 'Core Technical',
    summary: 'Build scalable web platforms, high-performance APIs, and cross-platform mobile apps powering campus-wide products and hackathons.',
    responsibilities: [
      'Architect robust web applications with React, Next.js, and TypeScript',
      'Deploy backend microservices and REST/GraphQL APIs with Node.js & Go',
      'Optimize database queries and maintain scalable cloud CI/CD pipelines',
      'Collaborate with UI/UX designers to translate Figma tokens into clean code'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Docker', 'PostgreSQL'],
    perks: ['GitHub Enterprise access', 'Deploy production systems', 'Direct senior engineering mentorship']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    category: 'ai',
    iconName: 'Cpu',
    accentColor: 'from-purple-500 to-pink-600',
    borderColor: 'group-hover:border-purple-500/50',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    openings: '5 Open Seats',
    badge: 'Research & Labs',
    summary: 'Develop generative AI agents, fine-tune open weights LLMs, train computer vision pipelines, and publish state-of-the-art campus projects.',
    responsibilities: [
      'Design neural network models using PyTorch, Hugging Face, and TensorFlow',
      'Build agentic retrieval workflows with LangChain, LlamaIndex, and Vector DBs',
      'Work on dataset curations, automated synthetic data pipelines, and evaluation harnesses',
      'Deliver interactive AI demos at internal tech expos and research symposiums'
    ],
    skills: ['Python', 'PyTorch', 'Hugging Face', 'LangChain', 'FastAPI', 'Vector DBs', 'Pandas'],
    perks: ['GPU compute clusters', 'Research paper publication support', 'Hands-on LLM hackathons']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Systems',
    category: 'tech',
    iconName: 'Shield',
    accentColor: 'from-emerald-400 to-cyan-600',
    borderColor: 'group-hover:border-emerald-500/50',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    openings: '4 Open Seats',
    badge: 'Security & Infrastructure',
    summary: 'Uncover vulnerabilities, simulate offensive and defensive red-team/blue-team scenarios, master CTFs, and secure club digital infrastructure.',
    responsibilities: [
      'Conduct code security audits and web application penetration tests',
      'Participate in national and international Capture The Flag (CTF) challenges',
      'Develop custom security tooling and network monitoring scripts in Python & Rust',
      'Manage club servers, hardened Linux environments, and credential vaults'
    ],
    skills: ['Linux', 'Wireshark', 'Burp Suite', 'Python', 'Rust', 'Reverse Engineering', 'Cryptography'],
    perks: ['CTF competition sponsorships', 'Lab environment access', 'Security certifications study circle']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    category: 'design',
    iconName: 'Palette',
    accentColor: 'from-pink-500 to-rose-600',
    borderColor: 'group-hover:border-pink-500/50',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    openings: '5 Open Seats',
    badge: 'Creative & Product',
    summary: 'Craft captivating user journeys, intuitive interfaces, and cohesive design systems for high-visibility student and community tools.',
    responsibilities: [
      'Conduct user interviews, heuristic audits, and design wireframes in Figma',
      'Establish and maintain AURA Club unified Design System and UI component library',
      'Produce interactive high-fidelity prototypes and micro-interactions',
      'Partner closely with frontend developers for pixel-perfect implementations'
    ],
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Information Architecture', 'Design Tokens'],
    perks: ['Figma Pro license', 'Design critique workshops', 'Showcase designs to 5,000+ students']
  },
  {
    id: 'media-motion',
    title: '3D Motion & Creative Media',
    category: 'design',
    iconName: 'Video',
    accentColor: 'from-amber-400 to-orange-600',
    borderColor: 'group-hover:border-amber-500/50',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    openings: '4 Open Seats',
    badge: 'Visual Arts',
    summary: 'Create cinematic event trailers, viral motion graphics, 3D brand assets, and captivating event recap aftermovies.',
    responsibilities: [
      'Animate title sequences, promotional teasers, and 3D renders using Blender and After Effects',
      'Produce reels and cinematic event highlight reels capturing club milestones',
      'Design brand merchandise, badges, and high-impact key visuals for flagship summits',
      'Direct visual storytelling across social platforms'
    ],
    skills: ['Blender', 'Adobe After Effects', 'Premiere Pro', 'Cinema 4D', 'Motion Graphics', 'Sound Design'],
    perks: ['Production equipment access', 'Club studio gear', 'Creative portfolio highlight']
  },
  {
    id: 'events-operations',
    title: 'Events & Operations',
    category: 'operations',
    iconName: 'CalendarCheck',
    accentColor: 'from-blue-500 to-indigo-600',
    borderColor: 'group-hover:border-blue-500/50',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    openings: '6 Open Seats',
    badge: 'Core Logistics',
    summary: 'Orchestrate 36-hour hackathons, industry keynotes, tech workshops, and ensure flawless execution across campus and digital spaces.',
    responsibilities: [
      'Manage end-to-end event planning, stage setup, and technical audiovisual logistics',
      'Coordinate participant hospitality, registrations, and volunteer rosters',
      'Maintain event timelines, campus venue permits, and vendor procurement',
      'Resolve on-ground crisis situations and ensure smooth execution'
    ],
    skills: ['Event Planning', 'Crisis Management', 'Team Leadership', 'Budgeting', 'Vendor Relations'],
    perks: ['Direct leadership experience', 'Networking with university leadership', 'Organize 1000+ attendee events']
  },
  {
    id: 'corporate-sponsorship',
    title: 'Corporate Relations & Sponsorship',
    category: 'operations',
    iconName: 'Handshake',
    accentColor: 'from-teal-400 to-emerald-600',
    borderColor: 'group-hover:border-teal-500/50',
    glowColor: 'rgba(20, 184, 166, 0.15)',
    openings: '4 Open Seats',
    badge: 'Growth & Partnerships',
    summary: 'Pitch to industry leaders, secure corporate sponsorships, invite keynote speakers, and forge partnerships with top tech companies.',
    responsibilities: [
      'Draft sponsorship brochures and pitch decks tailored for tech companies',
      'Negotiate financial sponsorships, cloud credits, and swag grants',
      'Maintain relations with university alumni working at top tech firms',
      'Coordinate corporate judge panels and mentor booths at club hackathons'
    ],
    skills: ['Cold Outreach', 'Pitch Deck Design', 'Negotiation', 'CRM', 'Professional Communication'],
    perks: ['Direct contact with tech recruiters', 'Corporate networking', 'Executive leadership skills']
  },
  {
    id: 'editorial-pr',
    title: 'Content, Editorial & Social PR',
    category: 'operations',
    iconName: 'FileText',
    accentColor: 'from-violet-400 to-purple-600',
    borderColor: 'group-hover:border-violet-500/50',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    openings: '5 Open Seats',
    badge: 'Voice of AURA',
    summary: 'Lead technical blogging, newsletter curation, witty social media campaigns, and craft the voice that reaches thousands of tech enthusiasts.',
    responsibilities: [
      'Write compelling technical articles, developer tutorials, and event recaps',
      'Curate the monthly AURA tech newsletter sent to 3,000+ student subscribers',
      'Craft high-engagement copy for Instagram, Twitter/X, and LinkedIn campaigns',
      'Collaborate with media designers for synchronized campaign rollouts'
    ],
    skills: ['Technical Writing', 'Copywriting', 'SEO', 'Community Management', 'Social Media Strategy'],
    perks: ['Byline on official publications', 'Published reach across 10k+ followers', 'Media training']
  }
];

export const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Online Application',
    timeline: 'Phase 1: Open Now',
    description: 'Submit your profile, choose your primary and secondary domains, and share your portfolio or past projects.'
  },
  {
    step: '02',
    title: 'Domain Assessment',
    timeline: 'Phase 2: Oct 10 - Oct 14',
    description: 'A hands-on challenge or creative task designed to test your problem-solving approach and enthusiasm, not just rote knowledge.'
  },
  {
    step: '03',
    title: 'Technical & Fit Interview',
    timeline: 'Phase 3: Oct 16 - Oct 18',
    description: 'A casual, interactive discussion with domain leads to understand your aspirations, teamwork spirit, and growth potential.'
  },
  {
    step: '04',
    title: 'Induction & Welcome',
    timeline: 'Phase 4: Oct 20',
    description: 'Official welcome ceremony, team orientation, club swag handover, and immediate onboarding to active projects.'
  }
];

export const CLUB_STATS = [
  { value: '450+', label: 'Active Members' },
  { value: '35+', label: 'Shipped Projects' },
  { value: '12+', label: 'Flagship Events' },
  { value: '₹2.5M+', label: 'Hackathon Prizes' }
];

export const FAQS = [
  {
    q: 'Who is eligible to apply for AURA Club?',
    a: 'Students from all academic years (1st, 2nd, 3rd, and 4th year) and all branches/majors are encouraged to apply! We value curiosity, passion, and eagerness to build above everything else.'
  },
  {
    q: 'Can I apply for more than one domain?',
    a: 'Yes! In the application form you can designate a Primary Domain and an optional Secondary Domain. You will be evaluated based on your primary choice with cross-domain opportunities welcomed.'
  },
  {
    q: 'Do I need prior experience or advanced portfolio projects?',
    a: 'Not necessarily! For 1st and 2nd year students, we look for fundamental problem-solving curiosity, willingness to learn, and grit. For specialized senior roles, past works and hands-on exposure are appreciated.'
  },
  {
    q: 'What is the time commitment expected from members?',
    a: 'Members typically contribute 4-7 hours per week during regular semesters, with flexible scheduling during exams. We prioritize academic excellence while building real-world projects.'
  },
  {
    q: 'How does the selection process work?',
    a: 'After reviewing your initial application, shortlisted candidates receive a domain-specific task followed by a friendly discussion with our team leads. Decisions are announced within a week.'
  }
];

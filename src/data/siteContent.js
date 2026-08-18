// Single source of truth for everything shown on the page.
// Update these values instead of editing markup.

export const site = {
  name: 'Pawan',
  role: 'Frontend Developer',
  email: 'info@pawanpatelweb.com',
  phone: '+91 95894 34372',
  availability: 'Open for freelance & project work',
  responseTime: 'Within 24 hours',
  // TODO: add real studio/office locations, or leave empty to hide the block.
  // Shape: { city: 'Miami', address: '78 SW Seventh St, FL 33130' }
  locations: [],
  socials: [
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/pawan-patel-5a6417172/',
    },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/ipawanpatel/' },
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/pawan.patel.33234/' },
    // wa.me needs country code, no spaces or +.
    { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/919589434372' },
  ],
}

export const hero = {
  kicker: "I'm a",
  title: 'Full Stack Software Developer',
  description:
    'I build fast, accessible web products end to end — from the interface a visitor touches to the API behind it. Clear structure, honest performance, and code that stays easy to change.',
  primaryCta: { label: 'Contact Us', href: '#contact' },
  secondaryCta: { label: 'Our Services', href: '#services' },
}

export const about = {
  eyebrow: 'About me',
  title: 'Bridging complex functionality and human-centric design',
  paragraphs: [
    'As a Full Stack Developer, I specialize in building robust, high-performance web and mobile applications from the ground up — turning abstract concepts into pixel-perfect, interactive realities.',
    'Beyond the screen, I am a professional actor and model. That creative background gives me a different perspective on UX and visual communication: I understand how to capture an audience and hold their attention, both in front of the camera and through the interfaces I code.',
  ],
  quote:
    'Whether I am deploying clean, efficient code or stepping into a new character, my focus is always on precision, storytelling, and delivering a high-quality final product.',
  image:
    'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Responsive website layouts shown on a laptop and phone',
  // `value` counts up from zero when the block scrolls into view.
  stats: [
    {
      value: 7,
      suffix: '+',
      label: 'Years Experience',
      description: 'Building and shipping web products across agencies and freelance work.',
    },
    {
      value: 45,
      suffix: '+',
      label: 'Custom Design',
      description: 'Websites, design, materials, and branding built from scratch.',
    },
    {
      value: 250,
      suffix: '+',
      label: 'Projects Complete',
      description: 'Delivered end to end, from first wireframe through to launch.',
    },
  ],
}

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const projectsIntro = {
  eyebrow: 'Our Work',
  title: 'Projects built to earn attention and keep it',
  description:
    'A short selection of recent builds. Each one shipped end to end — design, front end, back end, and launch.',
}

// Platform tags below were confirmed from each live site's markup.
// TODO: replace the placeholder `image` values with real screenshots of each build.
export const projects = [
  {
    title: 'Di Stavnitser',
    description:
      'A fashion storefront on a heavily customised Shopify theme, built around large editorial imagery and a checkout that stays out of the way.',
    href: 'https://distavnitser.com/',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fashion e-commerce storefront',
  },
  {
    title: 'Ecoway Smart Toilets',
    description:
      'A Shopify build for an eco-friendly smart bathroom brand, with product pages that carry a lot of spec detail without overwhelming the buyer.',
    href: 'https://ecowaybath.com/',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright modern bathroom with a wall-hung toilet',
  },
  {
    title: 'KOA LIFE',
    description:
      'A Shopify storefront for a virtual skin and body clinic, pairing a programme-led content structure with straightforward booking and purchase flows.',
    href: 'https://thatkoalife.com/',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Skincare products arranged on a light surface',
  },
  {
    title: "Gavin's Herbal Remedies",
    description:
      'A WooCommerce store on WordPress and Elementor selling herbal pet products, structured so the owner can manage the catalogue and page layouts without touching code.',
    href: 'https://gavinsherbalremedies.com/',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A dog beside natural herbal pet care products',
  },
  {
    title: 'Thor Technologies',
    description:
      'A WordPress and WooCommerce site for an Australian technology supplier, structured so a large product range stays easy to browse and maintain.',
    href: 'https://www.thortechnologies.com.au/',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Technology hardware components',
  },
  {
    title: 'Applied Aeronautics',
    description:
      'A Wix site for an aerospace engineering consultancy, built around a clean services overview and a direct request-a-consultation call to action.',
    href: 'https://www.appliedaeronautics.com/',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aircraft wing in flight above the clouds',
  },
]

export const servicesIntro = {
  eyebrow: 'Popular services',
  title: 'Elevating your brand at every touchpoint',
}

// `icon` maps to a key in components/ServiceIcon.jsx.
export const services = [
  {
    icon: 'monitor',
    title: 'Web Development',
    description:
      'Fast, responsive websites built from scratch — designed at every breakpoint rather than squeezed down from the desktop view.',
  },
  {
    icon: 'mobile',
    title: 'App Development',
    description:
      'Cross-platform apps with native-feeling navigation, offline-aware data, and interfaces that stay quick on mid-range devices.',
  },
  {
    icon: 'cart',
    title: 'E-Commerce Development',
    description:
      'Storefronts built around the checkout: clear product pages, fewer steps to buy, and payment flows that do not lose customers.',
  },
  {
    icon: 'database',
    title: 'ERP & CRM Solution',
    description:
      'Custom internal tools that fit how your team already works — customer pipelines, inventory, invoicing, and reporting in one place instead of five spreadsheets.',
  },
  {
    icon: 'search',
    title: 'SEO Optimization',
    description:
      'Technical SEO done properly — semantic markup, clean metadata, fast Core Web Vitals, and content structured the way search engines read it.',
  },
  {
    icon: 'users',
    title: 'Social Media Management',
    description:
      'Consistent posting, on-brand visuals, and a content calendar that keeps your channels active without eating your week.',
  },
  {
    icon: 'brand',
    title: 'Brand Building',
    description:
      'Logo, palette, type, and voice pulled into one system, so everything you publish looks like it came from the same place.',
  },
  {
    icon: 'uiux',
    title: 'UI/UX Design',
    description:
      'Wireframes through to polished interfaces, grounded in how people actually move through a page rather than how it looks in isolation.',
  },
  {
    icon: 'support',
    title: 'Maintenance & Support',
    description:
      'Updates, backups, security patches, and a person to call when something breaks — so the site keeps working after launch day.',
  },
]

export const techIntro = {
  eyebrow: 'Tech stack',
  title: 'Technologies I build with',
  description:
    'Full stack means I can take a project from the first pixel to the deployed server without handing it off.',
}

// Tabbed tech stack. `kind` is the one-word role shown under each name —
// it is what stops the grid reading as an undifferentiated list of nouns.
export const techCategories = [
  {
    id: 'frontend',
    label: 'Front End',
    items: [
      { name: 'React', kind: 'Library' },
      { name: 'Next.js', kind: 'Framework' },
      { name: 'TypeScript', kind: 'Language' },
      { name: 'JavaScript', kind: 'Language' },
      { name: 'Tailwind CSS', kind: 'Styling' },
      { name: 'Redux', kind: 'State' },
      { name: 'GSAP', kind: 'Animation' },
      { name: 'Vite', kind: 'Tooling' },
    ],
  },
  {
    id: 'backend',
    label: 'Back End',
    items: [
      { name: 'Node.js', kind: 'Runtime' },
      { name: 'Express', kind: 'Framework' },
      { name: 'NestJS', kind: 'Framework' },
      { name: 'Python', kind: 'Language' },
      { name: 'Django', kind: 'Framework' },
      { name: 'PHP', kind: 'Language' },
      { name: 'REST APIs', kind: 'Architecture' },
      { name: 'GraphQL', kind: 'Query layer' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      { name: 'MongoDB', kind: 'Document' },
      { name: 'PostgreSQL', kind: 'Relational' },
      { name: 'MySQL', kind: 'Relational' },
      { name: 'Redis', kind: 'Cache' },
      { name: 'Prisma', kind: 'ORM' },
      { name: 'Firebase', kind: 'Realtime' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: [
      { name: 'React Native', kind: 'Cross-platform' },
      { name: 'Expo', kind: 'Tooling' },
      { name: 'Flutter', kind: 'Cross-platform' },
      { name: 'PWA', kind: 'Web app' },
    ],
  },
  {
    id: 'cms',
    label: 'CMS',
    items: [
      { name: 'WordPress', kind: 'Traditional' },
      { name: 'Drupal', kind: 'Enterprise' },
      { name: 'Shopify', kind: 'Commerce' },
      { name: 'Webflow', kind: 'Visual builder' },
      { name: 'Framer', kind: 'Design to site' },
      { name: 'Wix', kind: 'Site builder' },
      { name: 'Squarespace', kind: 'Site builder' },
      { name: 'Strapi', kind: 'Headless' },
      { name: 'Sanity', kind: 'Headless' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    items: [
      { name: 'Git', kind: 'Version control' },
      { name: 'Docker', kind: 'Containers' },
      { name: 'AWS', kind: 'Cloud' },
      { name: 'Vercel', kind: 'Hosting' },
      { name: 'CI/CD', kind: 'Pipelines' },
      { name: 'Nginx', kind: 'Web server' },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    items: [
      { name: 'Figma', kind: 'UI design' },
      { name: 'Adobe XD', kind: 'Prototyping' },
      { name: 'Photoshop', kind: 'Raster' },
      { name: 'Illustrator', kind: 'Vector' },
    ],
  },
]

// Featured testimonials. The card cycles through these on a timer instead of
// showing one fixed quote — set to an empty array (or remove the section in
// App.jsx) to hide it entirely.
// TODO: swap in real client quotes and headshots before going live.
export const testimonials = [
  {
    quote:
      'Pawan turned a messy brief into a storefront that actually converts. The whole build stayed on schedule and every revision came back the same day.',
    name: 'Elena Duarte',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "Our product pages carry a lot of technical detail and he still made them easy to scan. Support requests dropped within the first month of launch.",
    name: 'Marcus Feld',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Booking and checkout finally feel like one flow instead of two bolted-on tools. Clients notice, and so does our conversion rate.',
    name: 'Priya Nair',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      "He handed the site back with a CMS I can actually manage myself — new products and pages go up without a single call to a developer.",
    name: 'Gavin Ross',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'A huge catalogue that used to be a headache to maintain is now organised and quick to update. Exactly what we needed for a technical audience.',
    name: 'Ana Whitfield',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
]

export const contact = {
  title: "Let's build something great together.",
  // Used by the header button only; the footer CTA was removed.
  ctaLabel: "Let's Talk",
}

export const footerGroups = [
  {
    title: 'Links',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'App Development', href: '#services' },
      { label: 'E-Commerce Development', href: '#services' },
      { label: 'ERP & CRM Solution', href: '#services' },
      { label: 'SEO Optimization', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
]

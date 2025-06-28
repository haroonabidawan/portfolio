export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  logo?: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    title: "Laha Bahrain",
    description: "A multi-vendor fashion marketplace with mobile APIs, payment gateways, and delivery integration.",
    tech: ["Laravel", "Vue.js", "AWS", "Stripe", "Benefit"],
    link: "https://lahabh.com",
    featured: true,
  },
  {
    title: "Awal Gas",
    description: "Backend API and admin for Bahrain gas delivery company, integrated with mobile ordering.",
    tech: ["Laravel", "Vue.js", "S3", "DevOps"],
    link: "https://awalgas.com",
    featured: true,
  },
  {
    title: "Arcane Gaming",
    description: "E-commerce store for PC components and Pokémon cards, built with WooCommerce and custom checkout.",
    tech: ["WordPress", "WooCommerce", "PayPal"],
    link: "https://arcanegaming.bh",
  },
  {
    title: "Excellentia Energy",
    description: "CMS website for oil & gas services company with easy content management for the client.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://excellentiaenergy.com",
  },
  {
    title: "Bahrain Artistic Frames Centre",
    description: "Online platform for artists to showcase and sell artwork, including artist ratings and profiles.",
    tech: ["Laravel", "Vue.js", "Bootstrap"],
    link: "https://bahrainartframing.com",
    featured: true,
  },
  {
    title: "Vogue Boutique Bahrain",
    description: "Fashion e-commerce store with Benefit and EasyPay integration for secure checkouts.",
    tech: ["Laravel", "Vue.js", "EasyPay", "Benefit"],
  },
  {
    title: "ForwardChess",
    description: "Implemented Single Sign-On between Laravel app and WordPress blog.",
    tech: ["Laravel", "SSO", "WordPress"],
  },
  {
    title: "IMAGE SHIELD",
    description: "Built Vue frontend and Laravel backend for image copyright protection and S3 monitoring.",
    tech: ["Laravel", "Vue.js", "S3", "Image Tracking"],
  },
  {
    title: "S2C Compliance",
    description: "Redesigned main layout for engine compliance reporting system in the U.S.",
    tech: ["Laravel", "Vue.js"],
  },
  {
    title: "Sunshine Meat Market",
    description: "Custom grocery e-commerce with POS system integration and kitchen display systems.",
    tech: ["Laravel", "Vue.js", "CardKnox", "Socialite"],
    featured: true,
  },
  {
    title: "Diabetes TeleCare Project",
    description: "Booking system for diabetic patients to manage appointments and health profiles online.",
    tech: ["Laravel", "Vue.js", "Auth", "MySQL"],
  },
  {
    title: "Juffair Gables",
    description: "Support and maintenance of the Building Management System (BMS) with accounting & invoicing tools.",
    tech: ["Laravel", "MS SQL", "Vue.js"],
  },
  {
    title: "Food Lab – Bahrain Airport",
    description: "Modern POS system with Laravel & Vue for food service and stock validation.",
    tech: ["Laravel", "Vue.js", "POS"],
  },
  {
    title: "Inbox Freedom",
    description: "Built tools for inbox automation and spam control (no public link provided).",
    tech: ["Laravel", "Node.js"],
  },
];

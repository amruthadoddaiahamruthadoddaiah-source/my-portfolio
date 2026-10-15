/**
 * ===========================================================================
 *  PORTFOLIO CONTENT — this is the file you edit to update the website.
 * ===========================================================================
 *  Everything the website displays comes from here.
 *  Search for "TODO" to find the details that still need to be filled in.
 *  Anything set to `null` (or an empty list) is simply hidden on the page,
 *  so it is safe to leave blank until you have the real information.
 * ===========================================================================
 */

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export type IconKey =
  | "code"
  | "terminal"
  | "braces"
  | "palette"
  | "globe"
  | "leaf"
  | "sparkles"
  | "book"
  | "graduation"
  | "rocket"
  | "target"
  | "lightbulb"
  | "heart"
  | "shapes"
  | "compass"
  | "laptop"
  | "sprout";

export type Profile = {
  name: string;
  wordmark: string;
  initials: string;
  role: string;
  label: string;
  headline: string;
  intro: string;
  about: string;
  badge: string;
  photo: { src: string | null; alt: string };
  email: string | null;
  location: string | null;
};

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: IconKey;
  skills: { name: string; icon: IconKey; note: string }[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string | null;
  solution: string | null;
  technologies: string[];
  contribution: string | null;
  status: string | null;
  imageSrc: string | null;
  imageAlt: string;
  repoUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
};

export type LearningEntry = {
  id: string;
  title: string;
  description: string;
  meta: string | null;
  icon: IconKey;
};

export type Interest = {
  label: string;
  icon: IconKey;
};

export type SocialLink = {
  label: string;
  href: string | null;
  icon: "github" | "linkedin";
};

/* -------------------------------------------------------------------------- */
/*  Site / navigation                                                         */
/* -------------------------------------------------------------------------- */

export const site = {
  /** Used for SEO links (Open Graph). Set NEXT_PUBLIC_SITE_URL on Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://amrutha-portfolio.vercel.app",
  title: "Amrutha | Student Developer Portfolio",
  description:
    "Explore Amrutha's portfolio, programming skills, web development learning journey, and Smart Waste Segregation project.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  About you                                                                 */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: "Amrutha",
  wordmark: "Amrutha.",
  initials: "A",
  role: "Student",
  label: "HELLO WORLD! I'M",
  headline: "Student, beginner developer & curious problem solver.",
  intro:
    "I'm learning to turn ideas into code, exploring programming with Python and C, and building my web development skills with HTML and CSS.",
  about:
    "Hi, I'm Amrutha! I'm a student exploring the world of programming and web development. I enjoy learning how technology works, experimenting with new ideas, and turning what I learn into small projects. I'm currently building my foundation in Python, C, HTML, and CSS, and I'm excited to keep growing as a developer.",
  badge: "Always learning, always building",
  photo: {
    // TODO: put your photo in the `public/images/` folder (for example
    // "amrutha.jpg") and change null to "/images/amrutha.jpg".
    src: null,
    alt: "Portrait of Amrutha",
  },
  email: null, // TODO: add your real email address, e.g. "you@example.com"
  location: null, // TODO (optional): add your city/country if you want to share it
};

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    blurb: "Languages I'm building my fundamentals with.",
    icon: "code",
    skills: [
      {
        name: "Python",
        icon: "terminal",
        note: "Practising the basics of programming and problem solving.",
      },
      {
        name: "C",
        icon: "braces",
        note: "Learning how programs work closer to the machine.",
      },
    ],
  },
  {
    id: "web",
    title: "Web development",
    blurb: "The foundations of the web I'm learning now.",
    icon: "palette",
    skills: [
      {
        name: "HTML",
        icon: "code",
        note: "Structuring content with clean, semantic markup.",
      },
      {
        name: "CSS",
        icon: "palette",
        note: "Styling layouts and making designs responsive.",
      },
    ],
  },
];

export const skillsNote = "Building strong fundamentals, one project at a time.";

/* -------------------------------------------------------------------------- */
/*  Interests (generic placeholders — replace with your own)                  */
/* -------------------------------------------------------------------------- */

// TODO: swap these generic placeholders for interests that are truly yours.
export const interests: Interest[] = [
  { label: "Learning new things", icon: "sprout" },
  { label: "Experimenting with ideas", icon: "lightbulb" },
  { label: "Building small projects", icon: "shapes" },
  { label: "Design & creativity", icon: "heart" },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: "smart-waste-segregation",
    title: "Smart Waste Segregation",
    tagline: "Making waste sorting more organised",
    description:
      "A project focused on exploring how technology can help make waste sorting more organized and support more responsible waste management.",
    // TODO: add the problem your project solves, once you are ready to share it.
    problem: null,
    // TODO: add the solution / approach you are exploring.
    solution: null,
    // TODO: list the technologies you actually used (leave empty until confirmed).
    technologies: [],
    // TODO: describe your contribution to the project.
    contribution: null,
    // TODO: add the current status, e.g. "Idea", "In progress", "Prototype".
    status: null,
    // TODO: add a screenshot or diagram to `public/images/` and link it here.
    imageSrc: null,
    imageAlt: "Illustration representing the Smart Waste Segregation project",
    repoUrl: null, // TODO: add the GitHub repository URL
    demoUrl: null, // TODO: add a live demo URL, if one exists
    featured: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Learning journey                                                          */
/* -------------------------------------------------------------------------- */

export const learningJourney: LearningEntry[] = [
  {
    id: "education",
    title: "Current education",
    description:
      "Studying and building a strong foundation in programming and web development.",
    meta: null, // TODO: add your course/institution here if you want it public
    icon: "graduation",
  },
  {
    id: "programming",
    title: "Programming fundamentals",
    description:
      "Learning Python and C — writing my first programs and understanding core concepts.",
    meta: null,
    icon: "code",
  },
  {
    id: "web",
    title: "Web development",
    description: "Practising HTML and CSS to build and style my own pages.",
    meta: null,
    icon: "laptop",
  },
  {
    id: "projects",
    title: "Personal projects",
    description:
      "Turning what I learn into small projects, like Smart Waste Segregation.",
    meta: null,
    icon: "rocket",
  },
];

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Have an idea? Let's connect!",
  description:
    "I'm always happy to learn, collaborate, and connect with people who love building things.",
  openTo: [
    "Learning together",
    "Collaborating on small projects",
    "Sharing feedback and ideas",
  ],
};

// TODO: replace `null` with your full profile URLs, e.g.
// "https://github.com/your-username".
export const socials: SocialLink[] = [
  { label: "GitHub", href: null, icon: "github" },
  { label: "LinkedIn", href: null, icon: "linkedin" },
];

/** Only links that have a URL are shown on the website. */
export function activeSocials(): SocialLink[] {
  return socials.filter((social): social is SocialLink & { href: string } =>
    Boolean(social.href),
  );
}

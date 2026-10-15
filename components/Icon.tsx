"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Asterisk,
  AtSign,
  BookOpen,
  Bot,
  Braces,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  Code,
  Compass,
  Cpu,
  ExternalLink,
  Flower2,
  Globe,
  GraduationCap,
  Hand,
  Heart,
  Info,
  Laptop,
  Layers,
  Leaf,
  Lightbulb,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Pencil,
  Quote,
  Recycle,
  Rocket,
  Send,
  Shapes,
  Sparkle,
  Sparkles,
  Sprout,
  Star,
  Target,
  Terminal,
  TriangleAlert,
  User,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

/**
 * Icons live in a small client component so the rest of the site can stay
 * server-rendered. Lucide icons are then only shipped where they are used.
 */
const icons = {
  // Content icons (these keys match the ones used in data/portfolio.ts)
  code: Code,
  terminal: Terminal,
  braces: Braces,
  palette: Palette,
  globe: Globe,
  leaf: Leaf,
  sparkles: Sparkles,
  book: BookOpen,
  graduation: GraduationCap,
  rocket: Rocket,
  target: Target,
  lightbulb: Lightbulb,
  heart: Heart,
  shapes: Shapes,
  compass: Compass,
  laptop: Laptop,
  sprout: Sprout,
  // Interface icons
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  arrowUp: ArrowUp,
  chevronDown: ChevronDown,
  mail: Mail,
  send: Send,
  loader: LoaderCircle,
  check: CircleCheck,
  alert: CircleAlert,
  warning: TriangleAlert,
  info: Info,
  external: ExternalLink,
  user: User,
  pencil: Pencil,
  message: MessageCircle,
  mapPin: MapPin,
  recycle: Recycle,
  star: Star,
  flower: Flower2,
  zap: Zap,
  sparkle: Sparkle,
  wand: WandSparkles,
  quote: Quote,
  at: AtSign,
  hand: Hand,
  bot: Bot,
  cpu: Cpu,
  layers: Layers,
  dot: Asterisk,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function Icon({
  name,
  size = 20,
  className,
  strokeWidth = 1.8,
}: IconProps) {
  const Glyph = icons[name];
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}

export default Icon;

import Icon from "@/components/Icon";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { navLinks, profile, socials } from "@/data/portfolio";

const activeSocials = socials.filter(
  (social): social is (typeof socials)[number] & { href: string } =>
    Boolean(social.href),
);

// "use cache" lets this component read the current date at build time and reuse
// the result, instead of blocking prerendering (required by Next.js 16 cache
// components). The year refreshes on each new deployment.
export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-line)] bg-white/80 py-12">
      <div className="container-page flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-start">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="font-display text-2xl font-semibold text-gradient"
            >
              {profile.wordmark}
            </a>
            <p className="max-w-xl leading-relaxed text-[color:var(--color-mauve)]">
              A student developer learning to turn ideas into code. Built with
              care, curiosity and a little pink.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {activeSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/90 text-[color:var(--color-mauve)] transition hover:text-[color:var(--color-berry)]"
                  aria-label={social.label}
                >
                  {social.icon === "github" ? <GitHubIcon /> : <LinkedInIcon />}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
              Quick links
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[color:var(--color-mauve)] transition hover:text-[color:var(--color-ink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 border-t border-[color:var(--color-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-[color:var(--color-mauve)]">
            <span>Made with</span>
            <Icon
              name="heart"
              size={16}
              className="text-[color:var(--color-petal)]"
            />
            <span>by {profile.name}</span>
          </p>
          <p className="text-sm text-[color:var(--color-mauve)]">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

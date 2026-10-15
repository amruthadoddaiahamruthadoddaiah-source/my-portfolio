"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { navLinks, profile, socials } from "@/data/portfolio";

const activeSocials = socials.filter(
  (social): social is typeof socials[number] & { href: string } => Boolean(social.href),
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "learning", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.intersectionRatio > b.intersectionRatio ? -1 : 1));
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.15, 0.4, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-[color:var(--color-line)] bg-white/90 backdrop-blur shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between sm:h-18">
          <a
            href="#home"
            className="font-display text-xl font-semibold tracking-tight text-gradient sm:text-2xl"
            aria-label={`${profile.wordmark} — home`}
          >
            {profile.wordmark}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[color:var(--color-berry)]"
                          : "text-[color:var(--color-mauve)] hover:text-[color:var(--color-ink)]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-2">
              {activeSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/90 text-[color:var(--color-mauve)] transition hover:text-[color:var(--color-berry)] hover:shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon === "github" ? <GitHubIcon /> : <LinkedInIcon />}
                </a>
              ))}
              <a href="#contact" className="btn btn-primary ml-2">
                Let&apos;s Connect
                <Icon name="arrowRight" size={18} />
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/90 text-[color:var(--color-ink)] shadow-sm md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Icon name="close" size={20} /> : <Icon name="menu" size={20} />}
          </button>
        </div>
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-[color:var(--color-line)] bg-white/95 backdrop-blur md:hidden"
            onClick={closeMenu}
          >
            <div className="container-page flex flex-col gap-5 py-5" onClick={(e) => e.stopPropagation()}>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={`block rounded-2xl px-3 py-2 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-[color:var(--color-blush)]/80 text-[color:var(--color-berry)]"
                            : "text-[color:var(--color-ink)] hover:bg-[color:var(--color-blush)]/40"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-center gap-2">
                {activeSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/90 text-[color:var(--color-mauve)] transition hover:text-[color:var(--color-berry)]"
                    aria-label={social.label}
                  >
                    {social.icon === "github" ? <GitHubIcon /> : <LinkedInIcon />}
                  </a>
                ))}
              </div>
              <a href="#contact" onClick={closeMenu} className="btn btn-primary w-full">
                Let&apos;s Connect
                <Icon name="arrowRight" size={18} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


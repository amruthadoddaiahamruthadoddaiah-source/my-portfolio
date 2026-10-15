import { Sparkle } from "@/components/Decor";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { interests, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute -left-20 top-32 hidden h-48 w-48 animate-float-slow sm:block">
        <Sparkle className="h-full w-full text-[color:var(--color-petal)]/60" />
      </div>
      <div className="container-page relative z-10">
        <Reveal delay={0.05} className="mb-12">
          <SectionHeading
            eyebrow="About Me"
            title="Crafting my path as a student developer"
            description="I'm learning to turn ideas into meaningful projects while building a solid foundation in programming and web development."
            align="left"
          />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.12} className="card card-hover p-8 sm:p-10">
            <div className="flex flex-col gap-6 text-base leading-relaxed text-[color:var(--color-ink)]/90 sm:text-lg">
              {profile.about.split("\n").filter(Boolean).map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
              <p>
                I love exploring how small, thoughtful solutions can make everyday tasks a
                little simpler. That curiosity is what keeps me learning, coding and
                improving one step at a time.
              </p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal delay={0.16} className="card p-8 sm:p-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-blush)] text-[color:var(--color-berry)]">
                    <Icon name="book" size={18} />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">Currently learning</h3>
                    <p className="text-sm text-[color:var(--color-mauve)]">
                      Focused on building strong fundamentals
                    </p>
                  </div>
                </div>
                <ul className="grid gap-2 text-sm text-[color:var(--color-ink)] sm:text-base">
                  {["Python", "C", "HTML", "CSS"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Icon name="sparkle" size={16} className="text-[color:var(--color-petal)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="card p-8 sm:p-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-blush)] text-[color:var(--color-berry)]">
                    <Icon name="heart" size={18} />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">Interests</h3>
                    <p className="text-sm text-[color:var(--color-mauve)]">
                      Things that keep me inspired
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <li key={interest.label} className="chip shadow-sm">
                      <Icon name={interest.icon} size={16} />
                      {interest.label}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[color:var(--color-mauve)]">
                  TODO: replace these generic interests with your own ones in
                  <code className="ml-1 rounded bg-black/5 px-1 py-0.5">data/portfolio.ts</code>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

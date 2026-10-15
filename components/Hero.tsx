import WasteSortIllustration from "@/components/WasteSortIllustration";
import { Sparkle, StarBurst } from "@/components/Decor";
import Icon from "@/components/Icon";
import ProfilePortrait from "@/components/ProfilePortrait";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20">
      <div className="absolute inset-x-0 top-[-140px] z-0 flex justify-center">
        <StarBurst className="h-64 w-64 animate-spin-slow text-[color:var(--color-petal)]" />
      </div>
      <div className="absolute -left-24 top-20 hidden h-56 w-56 animate-float-slow sm:block">
        <Sparkle className="h-full w-full text-[color:var(--color-berry)] opacity-60" />
      </div>
      <div className="absolute -right-16 bottom-16 hidden h-44 w-44 animate-float md:block">
        <Sparkle className="h-full w-full text-[color:var(--color-petal)] opacity-70" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-6">
              <span className="eyebrow">
                <Icon name="sparkle" size={16} />
                {profile.label}
              </span>
              <h1 className="text-4xl font-semibold tracking-tight leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gradient block">{profile.wordmark}</span>
                <span className="block text-[length:clamp(1.9rem,4vw,3.4rem)] font-medium text-[color:var(--color-ink)]/90 sm:text-[length:clamp(2.4rem,4vw,4rem)]">
                  {profile.headline}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-mauve)] sm:text-lg">
                {profile.intro}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn btn-primary">
                  <span>Explore My Projects</span>
                  <Icon name="arrowRight" size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Get In Touch</span>
                  <Icon name="mail" size={18} />
                </a>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="chip">
                  <Icon name="cpu" size={16} />
                  Python · C
                </span>
                <span className="chip">
                  <Icon name="globe" size={16} />
                  HTML · CSS
                </span>
                <span className="chip">
                  <Icon name="sparkles" size={16} />
                  {profile.badge}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="relative">
            <div className="relative">
              <div className="absolute -top-14 right-10 hidden sm:block">
                <WasteSortIllustration className="h-40 w-40 animate-float-slow text-[color:var(--color-petal)]/60" />
              </div>
              <ProfilePortrait />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

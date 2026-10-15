import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WasteSortIllustration from "@/components/WasteSortIllustration";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const others = projects.filter((project) => project.id !== featured?.id);

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page relative z-10">
        <Reveal delay={0.05} className="mb-12">
          <SectionHeading
            eyebrow="Featured Project"
            title="Smart Waste Segregation"
            description="A meaningful project I&apos;m working on while learning how technology can help support more responsible waste management."
            align="left"
          />
        </Reveal>
        {featured && (
          <Reveal delay={0.12} className="card card-hover relative overflow-hidden p-8 sm:p-12">
            <div className="absolute -top-10 -right-10 hidden sm:block">
              <WasteSortIllustration className="h-52 w-52 animate-float-slow text-[color:var(--color-petal)]/70" />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="eyebrow">
                    <Icon name="leaf" size={16} />
                    Featured
                  </span>
                  <h3 className="text-3xl font-semibold sm:text-4xl">{featured.title}</h3>
                  <p className="text-lg text-[color:var(--color-ink)]/90">{featured.tagline}</p>
                  <p className="max-w-2xl leading-relaxed text-[color:var(--color-mauve)]">
                    {featured.description}
                  </p>
                </div>
                <div className="soft-panel grid gap-5 p-6 sm:p-8">
                  <h4 className="text-xl font-semibold">Project details</h4>
                  <div className="grid gap-4 text-sm leading-relaxed text-[color:var(--color-ink)]/90 sm:grid-cols-2 sm:text-base">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                        Problem statement
                      </span>
                      <p className="text-[color:var(--color-mauve)]">
                        {featured.problem ?? "To be added â€” edit data/portfolio.ts."}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                        Proposed solution
                      </span>
                      <p className="text-[color:var(--color-mauve)]">
                        {featured.solution ?? "To be added â€” edit data/portfolio.ts."}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                        Technologies used
                      </span>
                      {featured.technologies.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                          {featured.technologies.map((tech) => (
                            <li key={tech} className="chip">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[color:var(--color-mauve)]">
                          Not confirmed yet â€” list them in data/portfolio.ts.
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                        My contribution
                      </span>
                      <p className="text-[color:var(--color-mauve)]">
                        {featured.contribution ?? "To be added â€” edit data/portfolio.ts."}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                        Current status
                      </span>
                      <p className="text-[color:var(--color-mauve)]">
                        {featured.status ?? "To be added â€” edit data/portfolio.ts."}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
                        Project image / diagram
                      </span>
                      <p className="text-[color:var(--color-mauve)]">
                        {featured.imageSrc
                          ? "Screenshot/diagram provided â€” see public/images/."
                          : "Add a screenshot or diagram in public/images/ and link it in data/portfolio.ts."}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[color:var(--color-mauve)]">
                    Details without values are left neutral on purpose. I haven&apos;t assumed AI,
                    IoT, sensors or other specific tech â€” only what you've confirmed.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={featured.repoUrl ?? "#contact"}
                    className={`btn ${featured.repoUrl ? "btn-primary" : "btn-secondary"}`}
                    aria-disabled={!featured.repoUrl}
                    tabIndex={featured.repoUrl ? 0 : -1}
                  >
                    <Icon name="code" size={18} />
                    {featured.repoUrl ? "View on GitHub" : "GitHub link coming soon"}
                    {featured.repoUrl && <Icon name="arrowUpRight" size={18} />}
                  </a>
                  <a
                    href={featured.demoUrl ?? "#contact"}
                    className={`btn ${featured.demoUrl ? "btn-secondary" : "btn-secondary opacity-90"}`}
                    aria-disabled={!featured.demoUrl}
                    tabIndex={featured.demoUrl ? 0 : -1}
                  >
                    <Icon name="globe" size={18} />
                    {featured.demoUrl ? "Live demo" : "Live demo coming soon"}
                    {featured.demoUrl && <Icon name="arrowUpRight" size={18} />}
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-[2.5rem] border border-[color:var(--color-blush)] bg-white shadow-soft">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-blush)]/60 via-white to-white" />
                  <WasteSortIllustration className="relative h-56 w-56 text-[color:var(--color-berry)]" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[color:var(--color-ink)] shadow-sm">
                    Decorative illustration
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {others.length === 0 && (
          <Reveal delay={0.2} className="mt-8 card p-8 text-center sm:p-10">
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-blush)] text-[color:var(--color-berry)]">
                <Icon name="sparkles" size={20} />
              </span>
              <h4 className="text-2xl font-semibold">More projects coming soon</h4>
              <p className="max-w-xl text-[color:var(--color-mauve)]">
                I&apos;m building more small projects as I learn. I'll add them here as soon as
                they&apos;re ready to share.
              </p>
            </div>
          </Reveal>
        )}

        {others.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((project, index) => (
              <Reveal key={project.id} delay={0.16 + index * 0.08} className="card card-hover p-8">
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-semibold">{project.title}</h4>
                  <p className="text-[color:var(--color-mauve)]">{project.tagline}</p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/90">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.repoUrl && (
                      <a href={project.repoUrl} className="link-underline">
                        View repository
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="link-underline">
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}





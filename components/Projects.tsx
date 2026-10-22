import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WasteSortIllustration from "@/components/WasteSortIllustration";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const others = featured
    ? projects.filter((project) => project.id !== featured.id)
    : projects;

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page relative z-10">
        <Reveal delay={0.05} className="mb-12">
          <SectionHeading
            eyebrow="Featured Project"
            title="Smart Waste Segregation"
            description="A project I am working on while learning how technology can help support more responsible waste management."
            align="left"
          />
        </Reveal>

        {featured && (
          <Reveal
            delay={0.12}
            className="card card-hover relative overflow-hidden p-8 sm:p-12"
          >
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
                  <h3 className="text-3xl font-semibold sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="text-lg text-[color:var(--color-ink)]/90">
                    {featured.tagline}
                  </p>
                  <p className="max-w-2xl leading-relaxed text-[color:var(--color-mauve)]">
                    {featured.description}
                  </p>
                </div>

                <div className="soft-panel grid gap-5 p-6 sm:p-8">
                  <h4 className="text-xl font-semibold">Project details</h4>
                  <div className="grid gap-5 text-sm leading-relaxed sm:grid-cols-2 sm:text-base">
                    <Detail
                      label="Problem statement"
                      value={featured.problem}
                      todo="Add the problem this project addresses in data/portfolio.ts."
                    />
                    <Detail
                      label="Proposed solution"
                      value={featured.solution}
                      todo="Add the approach you are exploring in data/portfolio.ts."
                    />
                    <div className="flex flex-col gap-2">
                      <DetailLabel>Technologies used</DetailLabel>
                      {featured.technologies.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                          {featured.technologies.map((tech) => (
                            <li key={tech} className="chip">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <DetailText>
                          Not confirmed yet. List the technologies here once you
                          know them.
                        </DetailText>
                      )}
                    </div>
                    <Detail
                      label="My contribution"
                      value={featured.contribution}
                      todo="Describe your contribution in data/portfolio.ts."
                    />
                    <Detail
                      label="Current status"
                      value={featured.status}
                      todo="Add the current status, for example Idea or In progress."
                    />
                    <div className="flex flex-col gap-2">
                      <DetailLabel>Project image or diagram</DetailLabel>
                      <DetailText>
                        {featured.imageSrc
                          ? "A screenshot or diagram is available in public/images/."
                          : "Optional: add a screenshot or diagram to public/images/ and link it in data/portfolio.ts."}
                      </DetailText>
                    </div>
                  </div>
                  <p className="text-xs text-[color:var(--color-mauve)]">
                    Details without a value are shown as a helpful note instead. No
                    AI, IoT, sensors or other technology has been assumed.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={featured.repoUrl ?? "#contact"}
                    className={`btn ${featured.repoUrl ? "btn-primary" : "btn-secondary"}`}
                    aria-disabled={!featured.repoUrl}
                  >
                    <Icon name="code" size={18} />
                    {featured.repoUrl ? "View on GitHub" : "GitHub link coming soon"}
                    {featured.repoUrl && <Icon name="arrowUpRight" size={18} />}
                  </a>
                  <a
                    href={featured.demoUrl ?? "#contact"}
                    className="btn btn-secondary"
                    aria-disabled={!featured.demoUrl}
                  >
                    <Icon name="globe" size={18} />
                    {featured.demoUrl ? "Live demo" : "Live demo coming soon"}
                    {featured.demoUrl && <Icon name="arrowUpRight" size={18} />}
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative mx-auto flex h-80 w-80 items-center justify-center overflow-hidden rounded-[2.5rem] border border-[color:var(--color-blush)] bg-white shadow-soft">
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
          <Reveal delay={0.2} className="card mt-8 p-8 text-center sm:p-10">
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-blush)] text-[color:var(--color-berry)]">
                <Icon name="sparkles" size={20} />
              </span>
              <h4 className="text-2xl font-semibold">More projects coming soon</h4>
              <p className="max-w-xl text-[color:var(--color-mauve)]">
                I am building more small projects as I learn. I will add them here
                as soon as they are ready to share.
              </p>
            </div>
          </Reveal>
        )}

        {others.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((project, index) => (
              <Reveal
                key={project.id}
                delay={0.16 + index * 0.08}
                className="card card-hover p-8"
              >
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

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-berry)]">
      {children}
    </span>
  );
}

function DetailText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[color:var(--color-mauve)]">{children}</p>
  );
}

function Detail({
  label,
  value,
  todo,
}: {
  label: string;
  value: string | null;
  todo: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <DetailLabel>{label}</DetailLabel>
      <DetailText>{value ?? todo}</DetailText>
    </div>
  );
}

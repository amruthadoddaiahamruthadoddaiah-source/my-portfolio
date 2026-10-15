import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { learningJourney } from "@/data/portfolio";

export default function LearningJourney() {
  return (
    <section id="learning" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page relative z-10">
        <Reveal delay={0.05} className="mb-12 flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="My Learning Journey"
            title="Small steps, steady progress"
            description="A simple timeline of what I'm currently learning and building as a student developer."
            align="center"
          />
        </Reveal>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--color-blush)] via-[color:var(--color-petal)]/40 to-transparent sm:block" />
          <div className="flex flex-col gap-8">
            {learningJourney.map((entry, index) => (
              <Reveal key={entry.id} delay={0.1 + index * 0.08} as="article" className="relative">
                <div className="flex gap-6">
                  <div className="relative hidden sm:flex">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[color:var(--color-berry)] text-white shadow-lift">
                      <Icon name={entry.icon} size={20} />
                    </span>
                    <span className="absolute -inset-1 rounded-full bg-[color:var(--color-petal)]/20 blur" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="card card-hover p-6 sm:p-8">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-semibold sm:text-2xl">{entry.title}</h3>
                            {entry.meta && (
                              <p className="text-sm text-[color:var(--color-mauve)]">{entry.meta}</p>
                            )}
                          </div>
                          <span className="chip shadow-sm sm:hidden">
                            <Icon name={entry.icon} size={16} />
                            {entry.title}
                          </span>
                        </div>
                        <p className="leading-relaxed text-[color:var(--color-ink)]/90">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

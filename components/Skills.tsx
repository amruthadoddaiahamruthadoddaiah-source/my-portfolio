import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories, skillsNote, type SkillCategory } from "@/data/portfolio";

const iconForCategory: Record<SkillCategory["id"], IconName> = {
  programming: "code",
  web: "palette",
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page relative z-10">
        <Reveal delay={0.05} className="mb-12 flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Skills"
            title="The tools and languages I'm learning"
            description="Focused on strong fundamentals — small, consistent practice goes a long way."
            align="center"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={0.1 + index * 0.08}
              className="card card-hover flex flex-col gap-6 p-8 sm:p-10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-blush)] text-[color:var(--color-berry)]">
                  <Icon name={iconForCategory[category.id] ?? "code"} size={20} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-[color:var(--color-mauve)] sm:text-base">
                    {category.blurb}
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col gap-2 rounded-2xl border border-[color:var(--color-line)] bg-white/90 p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={skill.icon} size={18} className="text-[color:var(--color-petal)]" />
                      <span className="text-lg font-semibold">{skill.name}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--color-mauve)]">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.24} className="mt-10 flex justify-center">
          <p className="chip shadow-sm">{skillsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

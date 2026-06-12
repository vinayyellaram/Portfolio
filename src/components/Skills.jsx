import Section from "@components/Section";
import skills from "../data/skills.json";

const statusLabels = {
  done: "comfortable",
  current: "in progress",
  next: "up next",
};

export default function Skills() {
  return (
    <Section id="skills" label="Stack">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div data-reveal>
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Current stack
          </h3>
          <div className="w-full h-px bg-border mb-6" />
          <ul className="flex flex-wrap gap-2">
            {skills.current.map(({ name }) => (
              <li
                key={name}
                className="rounded-full border border-border px-3 py-1 text-sm font-medium"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Learning path
          </h3>
          <div className="w-full h-px bg-border mb-6" />
          <ol className="relative border-l border-border ml-2">
            {skills.learningPath.map(({ name, status }) => (
              <li key={name} className="relative pl-8 pb-8 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ${
                    status === "done"
                      ? "bg-foreground"
                      : status === "current"
                        ? "bg-foreground pulse-dot"
                        : "bg-background border border-muted-foreground"
                  }`}
                />
                <span className="font-medium">{name}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">
                  {statusLabels[status]}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

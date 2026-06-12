import { ExternalLink, Github } from "lucide-react";
import Section from "@components/Section";
import projects from "../data/projects.json";

function LinkButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
    >
      <Icon className="size-3.5" />
      {label}
    </a>
  );
}

function ProjectCard({ project, featured = false }) {
  const { name, description, detail, tags, liveUrl, githubUrl, status } = project;

  return (
    <article
      data-reveal
      className={`group flex flex-col gap-5 rounded-xl border border-border bg-card transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-[0_0_30px_rgb(255_255_255_/_0.06)] ${featured ? "p-8" : "p-6"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={`font-bold ${featured ? "text-2xl" : "text-xl"}`}>{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}
            {status && (
              <span className="ml-2 inline-block rounded-full border border-border px-2 py-0.5 text-xs uppercase tracking-wide">
                {status}
              </span>
            )}
          </p>
        </div>
      </div>

      {detail && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {detail}
        </p>
      )}

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      {(liveUrl || githubUrl) && (
        <div className="flex gap-2 mt-auto pt-1">
          {liveUrl && <LinkButton href={liveUrl} icon={ExternalLink} label="Live site" />}
          {githubUrl && <LinkButton href={githubUrl} icon={Github} label="GitHub" />}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" label="Work">
      <div className="flex flex-col gap-6">
        {featured && <ProjectCard project={featured} featured />}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

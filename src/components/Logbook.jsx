import Section from "@components/Section";
import posts from "../data/posts.json";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function Logbook() {
  return (
    <Section id="logbook" label="Logbook">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(({ title, date, excerpt, url }) => (
          <article
            data-reveal
            key={title}
            className="flex flex-col gap-3 rounded-xl border border-border/60 p-6"
          >
            <time
              dateTime={date}
              className="text-xs text-muted-foreground uppercase tracking-wide"
            >
              {formatDate(date)}
            </time>
            <h3 className="font-semibold leading-snug">{title}</h3>
            <p className="text-sm text-muted-foreground flex-1">{excerpt}</p>
            <a
              href={url}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

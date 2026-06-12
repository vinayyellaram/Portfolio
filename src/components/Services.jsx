import { Code2, ShoppingCart, Sparkles, ArrowRight } from "lucide-react";
import Section from "@components/Section";
import services from "../data/services.json";

const icons = { Code2, ShoppingCart, Sparkles };

export default function Services() {
  return (
    <Section id="services" label="Services">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ icon, title, description, bullets }) => {
          const Icon = icons[icon] ?? Code2;
          return (
            <article
              data-reveal
              key={title}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 min-h-[320px]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border shrink-0">
                <Icon className="size-5" />
              </span>
              <h3 className="font-bold">{title}</h3>
              {bullets && bullets.length > 0 && (
                <ul className="flex flex-col gap-2 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all mt-auto"
              >
                Let's talk <ArrowRight className="size-4" />
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

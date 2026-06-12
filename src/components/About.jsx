import Section from "@components/Section";

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Cell 1 — bio, spans 2 cols */}
        <article
          data-reveal
          className="md:col-span-2 rounded-xl border p-6 flex flex-col justify-end"
          style={{ background: "#161616", borderColor: "#242424", borderRadius: 12 }}
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            I build e-commerce platforms, full stack web apps, and AI-powered
            products. 4+ years in production — Magento 2 storefronts, React/Node.js
            systems, and now integrating LLMs and RAG pipelines into real products.
          </p>
        </article>

        {/* Cell 2 — photo */}
        {/* <article
          data-reveal
          className="rounded-xl border overflow-hidden"
          style={{ background: "#161616", borderColor: "#242424", borderRadius: 12, minHeight: 200 }}
        >
          <img
            src="/vinay.webp"
            alt="Vinay Yellaram"
            className="w-full h-full object-cover object-top grayscale"
            style={{ minHeight: 200 }}
          />
        </article> */}

        {/* Cell 3 — location */}
        <article
          data-reveal
          className="rounded-xl border p-6 flex flex-col gap-1"
          style={{ background: "#161616", borderColor: "#242424", borderRadius: 12 }}
        >
          <span className="text-lg font-semibold">📍 Mumbai, India</span>
          <span className="text-sm text-muted-foreground">Open to remote</span>
        </article>

        {/* Cell 4 — currently */}
        <article
          data-reveal
          className="rounded-xl border p-6 flex flex-col gap-1"
          style={{ background: "#161616", borderColor: "#242424", borderRadius: 12 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Currently</span>
          <span className="font-semibold leading-snug">Senior Full Stack Engineer @ Vernoist Marketing</span>
        </article>

        {/* Cell 5 — building toward */}
        <article
          data-reveal
          className="rounded-xl border p-6 flex flex-col gap-1"
          style={{ background: "#161616", borderColor: "#242424", borderRadius: 12 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Building toward</span>
          <span className="font-semibold leading-snug">AI Integration Engineering · LangChain.js · RAG · Agents</span>
        </article>

      </div>
    </Section>
  );
}

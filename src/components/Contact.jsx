import { Mail, Linkedin } from "lucide-react";
import Section from "@components/Section";
import { Button } from "@components/components/ui/button";
import data from "../data/contact.json";

export default function Contact() {
  return (
    <Section id="contact" label="Get in touch">
      <p data-reveal className="text-muted-foreground max-w-xl mb-10">
        {data.body}
      </p>

      <div data-reveal className="flex flex-wrap gap-4">
        <Button size="lg" variant="outline" asChild>
          <a href={`mailto:${data.email}`}>
            <Mail className="size-4" />
            {data.email}
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href={data.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </Section>
  );
}

import { Mail, Linkedin } from "lucide-react";
import Section from "@components/Section";
import { Button } from "@components/components/ui/button";

export default function Contact() {
  return (
    <Section id="contact" label="Get in touch">
      <p data-reveal className="text-muted-foreground max-w-xl mb-10">
        Open to Full Stack and AI Integration roles in Mumbai or remote. Also
        available for freelance e-commerce consulting.
      </p>

      <div data-reveal className="flex flex-wrap gap-4">
        <Button size="lg" variant="outline" asChild>
          <a href="mailto:vinayyellaram715@gmail.com">
            <Mail className="size-4" />
            vinayyellaram715@gmail.com
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/vinay-yellaram-a4203b194/"
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

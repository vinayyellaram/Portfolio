import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Vinay Yellaram
                </p>
                <div className="flex items-center gap-5">
                    <a
                        href="mailto:vinayyellaram715@gmail.com"
                        aria-label="Email"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="size-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vinay-yellaram-a4203b194/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="size-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

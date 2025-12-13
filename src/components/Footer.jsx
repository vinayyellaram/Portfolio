import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@components/components/ui/button";

export default function Footer() {
    const socials = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/vinayyellaram",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/vinay-yellaram-a4203b194/",
        },
        {
            icon: Mail,
            label: "Email",
            href: "mailto:vinayyellaram715@gmail.com",
        },
    ];

    return (
        <footer className="border-t border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold text-foreground">
                        Vinay Yellaram
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Right Side - Social Icons */}
                <div className="flex items-center gap-4">
                    {socials.map(({ icon: Icon, label, href }) => (
                        <Button
                            key={label}
                            variant="ghost"
                            size="icon"
                            asChild
                            className="text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                        >
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                <Icon className="w-5 h-5" />
                                <span className="sr-only">{label}</span>
                            </a>
                        </Button>
                    ))}
                </div>
            </div>

            {/* Subtle gradient line at bottom (optional aesthetic accent) */}
            <div className="h-1 w-full bg-gradient-to-r from-pastel-teal via-pastel-lavender to-pastel-peach opacity-60" />
        </footer>
    );
}

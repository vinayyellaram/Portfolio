import { useReveal } from "../lib/useReveal";

// Shared section shell: anchor id, container width, and the standard
// scroll reveal. Children opt into the stagger with `data-reveal`.
export default function Section({ id, label, children, className = "" }) {
    const ref = useReveal();

    return (
        <section id={id} ref={ref} className={`py-16 md:py-20 ${className}`}>
            <div className="max-w-5xl mx-auto px-6">
                {label && (
                    <h2
                        data-reveal
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
                    >
                        {label}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}

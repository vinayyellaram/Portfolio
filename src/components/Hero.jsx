import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../lib/useReveal";
import { Button } from "@components/components/ui/button";

// ─── Terminal ─────────────────────────────────────────────────────────────────

const TERMINAL_LINES = [
    { text: "$ whoami",                              type: "command" },
    { text: "Vinay Yellaram — Full Stack Engineer",  type: "output"  },
    { text: "",                                      type: "blank"   },
    { text: "$ vinay --stack",                       type: "command" },
    { text: "→ React.js  Node.js  TypeScript",       type: "arrow"   },
    { text: "→ Laravel  Magento 2  AWS  Docker",     type: "arrow"   },
    { text: "",                                      type: "blank"   },
    { text: "$ vinay --building",                    type: "command" },
    { text: "→ OpenAI API  LangChain.js",            type: "arrow"   },
    { text: "→ RAG Pipelines  AI Agents",            type: "arrow"   },
    { text: "",                                      type: "blank"   },
    { text: "$ vinay --status",                      type: "command" },
    { text: "✓ Available for work",                  type: "success" },
    { text: "✓ Open to remote",                      type: "success" },
    { text: "",                                      type: "blank"   },
    { text: "$ vinay --location",                    type: "command" },
    { text: "→ Mumbai, India",                       type: "arrow"   },
    { text: "",                                      type: "blank"   },
];

const CHAR_MS  = 30;
const LINE_MS  = 350;
const BLANK_MS = 80;
const DONE_MS  = 3200;

function LineContent({ line, chars }) {
    const text = line.text.slice(0, chars);
    if (line.type === "command") return (
        <>
            <span style={{ color: "#888" }}>{text.slice(0, 2)}</span>
            <span style={{ color: "#fff" }}>{text.slice(2)}</span>
        </>
    );
    if (line.type === "arrow") return (
        <>
            <span style={{ color: "#a0a0a0" }}>{text.slice(0, 2)}</span>
            <span style={{ color: "#fff" }}>{text.slice(2)}</span>
        </>
    );
    if (line.type === "success") return <span style={{ color: "#4ade80" }}>{text}</span>;
    return <span style={{ color: "#ccc" }}>{text}</span>;
}

function Cursor() {
    return (
        <span
            className="blink inline-block align-middle ml-px"
            style={{ width: 2, height: "0.9em", background: "#fff", verticalAlign: "text-bottom" }}
        />
    );
}

function TerminalBlock() {
    const [ts, setTs] = useState({ lineIdx: 0, charIdx: 0, done: false });
    const { lineIdx, charIdx, done } = ts;

    useEffect(() => {
        if (done) {
            const t = setTimeout(() => setTs({ lineIdx: 0, charIdx: 0, done: false }), DONE_MS);
            return () => clearTimeout(t);
        }
        const line = TERMINAL_LINES[lineIdx];
        if (charIdx < line.text.length) {
            const t = setTimeout(() => setTs(s => ({ ...s, charIdx: s.charIdx + 1 })), CHAR_MS);
            return () => clearTimeout(t);
        }
        if (lineIdx < TERMINAL_LINES.length - 1) {
            const pause = line.text === "" ? BLANK_MS : LINE_MS;
            const t = setTimeout(() => setTs({ lineIdx: lineIdx + 1, charIdx: 0, done: false }), pause);
            return () => clearTimeout(t);
        }
        setTs(s => ({ ...s, done: true }));
    }, [lineIdx, charIdx, done]);

    return (
        <div
            data-hero-terminal
            className="w-full"
            style={{
                maxWidth: 420,
                background: "#0d0d0d",
                border: "1px solid #2a2a2a",
                borderRadius: 12,
                overflow: "hidden",
                minHeight: 320,
            }}
        >
            <div
                className="flex items-center gap-3"
                style={{ background: "#1a1a1a", borderBottom: "1px solid #2a2a2a", padding: "10px 16px" }}
            >
                <div className="flex items-center gap-1.5">
                    <span className="size-3 rounded-full inline-block" style={{ background: "#ff5f57" }} />
                    <span className="size-3 rounded-full inline-block" style={{ background: "#ffbd2e" }} />
                    <span className="size-3 rounded-full inline-block" style={{ background: "#28c840" }} />
                </div>
                <span className="font-mono text-xs" style={{ color: "#888" }}>vinay@portfolio ~</span>
            </div>
            <div className="font-mono text-sm p-5" style={{ lineHeight: 1.8, minHeight: 280 }}>
                {TERMINAL_LINES.map((line, i) => {
                    if (i > lineIdx) return null;
                    const isCurrent = i === lineIdx;
                    return (
                        <div key={i} style={{ minHeight: "1.8em" }}>
                            <LineContent line={line} chars={isCurrent ? charIdx : line.text.length} />
                            {isCurrent && !done && <Cursor />}
                        </div>
                    );
                })}
                {done && <div style={{ minHeight: "1.8em" }}><Cursor /></div>}
            </div>
        </div>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const nameWords = [
    { text: "VINAY",    outline: true  },
    { text: "YELLARAM", outline: false },
];

const statCards = [
    { value: "4+",     unit: "Years",    label: "Experience"    },
    { value: "2",      unit: "Products", label: "Shipped live"  },
    { value: "Mumbai", unit: "",         label: "Open to remote" },
];

export default function Hero() {
    const ref     = useRef(null);
    const glowRef = useRef(null);
    const [ripples, setRipples] = useState([]);

    // GSAP entrance animation
    useLayoutEffect(() => {
        const el = ref.current;
        const mm = gsap.matchMedia();
        mm.add(
            { motion: "(prefers-reduced-motion: no-preference)", reduced: "(prefers-reduced-motion: reduce)" },
            (ctx) => {
                const still = ctx.conditions.reduced;
                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                tl.from(el.querySelector("[data-hero-pill]"),      { opacity: 0, y: still ? 0 : 16, duration: 0.5 })
                  .from(el.querySelectorAll(".hero-char"),          { yPercent: still ? 0 : 110, opacity: still ? 0 : 1, duration: 0.8, stagger: 0.03 }, "-=0.2")
                  .from(el.querySelector("[data-hero-terminal]"),   { opacity: 0, x: still ? 0 : 40, duration: 0.9 }, "-=0.6")
                  .from(el.querySelectorAll("[data-hero]"),         { opacity: 0, y: still ? 0 : 20, duration: 0.6, stagger: 0.1 }, "-=0.5");
            }
        );
        return () => mm.revert();
    }, []);

    // Cursor-following glow — updates DOM directly, no re-render
    const onHeroMove = (e) => {
        if (!glowRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        glowRef.current.style.opacity    = "1";
        glowRef.current.style.background = `radial-gradient(700px circle at ${x}% ${y}%, rgba(255,255,255,0.032), transparent 55%)`;
    };
    const onHeroLeave = () => { if (glowRef.current) glowRef.current.style.opacity = "0"; };

    // Click ripple
    const onHeroClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const id   = crypto.randomUUID();
        const x    = e.clientX - rect.left;
        const y    = e.clientY - rect.top;
        setRipples(prev => [...prev, { id, x, y }]);
        setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1400);
    };

    return (
        <section
            id="top"
            ref={ref}
            onMouseMove={onHeroMove}
            onMouseLeave={onHeroLeave}
            onClick={onHeroClick}
            className="hero-grid min-h-[90vh] flex flex-col overflow-hidden relative"
        >
            {/* Cursor glow layer */}
            <div
                ref={glowRef}
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-700"
                style={{ opacity: 0 }}
            />

            {/* Click ripples */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                {ripples.map(({ id, x, y }) => (
                    <div
                        key={id}
                        className="ripple-ring absolute"
                        style={{ left: x, top: y }}
                    />
                ))}
            </div>

            {/* Main layout */}
            <div className="flex-1 max-w-6xl mx-auto w-full px-6 flex items-center relative z-10">

                {/* Left column */}
                <div className="flex flex-col justify-center gap-7 py-20 w-full md:w-[55%] md:pr-14">

                    <p
                        data-hero-pill
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground"
                    >
                        <span className="pulse-dot size-2 rounded-full bg-emerald-400" />
                        Available for work
                    </p>

                    <h1
                        className="font-black uppercase leading-[0.9] tracking-tight select-none"
                        style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
                        aria-label="Vinay Yellaram"
                    >
                        {nameWords.map(({ text, outline }) => (
                            <span key={text} className="block overflow-hidden" aria-hidden>
                                {text.split("").map((char, i) => (
                                    <span key={i} className={`hero-char inline-block ${outline ? "text-outline" : ""}`}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <p data-hero className="text-base md:text-lg font-medium text-muted-foreground">
                        Full Stack Engineer · E-commerce · AI Integration
                        <span className="blink ml-1">_</span>
                    </p>

                    <div data-hero className="flex gap-3 flex-wrap">
                        {statCards.map(({ value, unit, label }) => (
                            <div
                                key={label}
                                className="flex flex-col gap-0.5 rounded-lg px-4 py-3 shrink-0"
                                style={{ background: "#161616", border: "1px solid #2a2a2a" }}
                            >
                                {/* Card bg is always dark — text must always be light */}
                                <span className="font-bold text-lg leading-tight" style={{ color: "#f0f0f0" }}>
                                    {value}
                                    {unit && <span className="text-sm font-medium ml-0.5" style={{ color: "#888" }}>{unit}</span>}
                                </span>
                                <span className="text-xs" style={{ color: "#666" }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    <div data-hero className="flex flex-wrap gap-3">
                        <Button size="lg" asChild>
                            <a href="#projects">See my work</a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="#services">Work with me</a>
                        </Button>
                    </div>
                </div>

                {/* Right column — terminal */}
                <div className="hidden md:flex md:w-[45%] items-center justify-center pl-6">
                    <TerminalBlock />
                </div>
            </div>

            {/*
              Photo — commented out, replaced by terminal.
              <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[45%] ...">
                <img data-hero-photo src="/vinay.webp" ... />
              </div>
            */}
        </section>
    );
}

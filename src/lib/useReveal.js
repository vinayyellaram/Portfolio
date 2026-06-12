import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered section reveal. Returns a ref for the section root;
 * every element inside it marked with `data-reveal` fades in
 * (opacity 0 -> 1, y 30 -> 0) with a 0.1s stagger, once.
 */
export function useReveal() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        gsap.from(targets, {
          opacity: 0,
          y: ctx.conditions.reduced ? 0 : 30,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          // drop inline styles once revealed so CSS hover effects take over
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });
      }
    );

    return () => mm.revert();
  }, []);

  return ref;
}

export { gsap, ScrollTrigger };

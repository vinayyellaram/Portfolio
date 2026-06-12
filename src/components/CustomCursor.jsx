import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    dot.style.opacity  = "1";
    ring.style.opacity = "1";

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e) => {
      const hit = !!e.target.closest("a, button, [data-cursor-hover]");
      ring.toggleAttribute("data-hovered", hit);
    };

    const loop = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover",  onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  aria-hidden className="cursor-dot"  />
      <div ref={ringRef} aria-hidden className="cursor-ring" />
    </>
  );
}

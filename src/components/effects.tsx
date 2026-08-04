import { useEffect, useRef, type ReactNode } from "react";

/** Fades + lifts children into view on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/** Global click ripple + scroll progress bar. */
export function ClickAndScrollEffects() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement("span");
      ripple.className = "click-pulse";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 600);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (barRef.current) barRef.current.style.width = `${pct}%`;
      });
    };

    window.addEventListener("pointerdown", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointerdown", onClick);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full bg-primary shadow-[var(--shadow-glow)] transition-[width] duration-150 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}

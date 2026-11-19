"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Mouse-driven 3D tilt. Children can use translateZ() to float above the surface. */
export function Tilt({ children, max = 8, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 140, damping: 18 });
  const sy = useSpring(py, { stiffness: 140, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  return (
    <div style={{ perspective: 1400 }} className={className} onMouseMove={onMove} onMouseLeave={() => (px.set(0.5), py.set(0.5))}>
      <motion.div ref={ref} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / 1200);
      setN(Math.round((1 - Math.pow(1 - k, 4)) * to));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Button({ children, href, primary = false }: { children: ReactNode; href: string; primary?: boolean }) {
  return (
    <a href={href} className={`btn ${primary ? "btn-primary" : "btn-outline"}`}>
      {children}
    </a>
  );
}

export function SectionTitle({ eyebrow, title, sub, className = "" }: { eyebrow: string; title: string; sub?: string; className?: string }) {
  return (
    <Reveal className={`mb-12 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[2.5rem] md:leading-[1.1]">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{sub}</p>}
    </Reveal>
  );
}

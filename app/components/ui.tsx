"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Mouse-driven 3D tilt. Children can use translateZ() to float above the surface. */
export function Tilt({ children, max = 10, className = "" }: { children: ReactNode; max?: number; className?: string }) {
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
      const k = Math.min(1, (now - start) / 1400);
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
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
        primary ? "btn-primary" : "chip !rounded-xl text-white hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
      }`}
    >
      {children}
    </a>
  );
}

export function SectionTitle({ n, eyebrow, title }: { n: string; eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        <span>{n}</span>
        <span className="h-px w-10 bg-gradient-to-r from-[var(--accent)] to-transparent" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}

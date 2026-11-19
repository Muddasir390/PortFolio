"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, type MouseEvent } from "react";

const layers = [
  { name: "Data", tech: "MongoDB · SQL", color: "var(--l-data)" },
  { name: "API", tech: "Node.js · Express · NestJS", color: "var(--l-api)" },
  { name: "Mobile", tech: "React Native", color: "var(--l-mobile)" },
  { name: "Web", tech: "React · Next.js · Vue", color: "var(--l-web)" },
];
const GAP = 84;
const mix = (c: string, p: number | string) => `color-mix(in srgb, ${c} ${typeof p === "number" ? p + "%" : `calc(${p} * 1%)`}, transparent)`;
const fill = (c: string, k: number) => `color-mix(in srgb, ${c} calc(var(--plate-a) * ${k} * 1%), transparent)`;

/** Isometric stack of the layers I build across — reacts to the mouse. */
export default function Hero3D() {
  const [hover, setHover] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 16 });
  const sy = useSpring(my, { stiffness: 90, damping: 16 });
  const tiltX = useTransform(sy, [-1, 1], [-7, 7]);
  const tiltZ = useTransform(sx, [-1, 1], [-9, 9]);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  return (
    <div
      className="relative mx-auto h-[280px] w-full max-w-[560px] select-none sm:h-[560px] lg:scale-[1.1]"
      style={{ perspective: 1800 }}
      onMouseMove={onMove}
      onMouseLeave={() => (mx.set(0), my.set(0), setHover(null))}
    >
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow)]/20 blur-[90px]" />
      <motion.div
        className="absolute left-1/2 top-[58%] h-0 w-0 max-sm:scale-[0.6] sm:left-[36%]"
        style={{ transformStyle: "preserve-3d", rotateX: 62, rotateZ: -38 }}
      >
        <motion.div style={{ transformStyle: "preserve-3d", rotateX: tiltX, rotateZ: tiltZ }} className="h-0 w-0">
          {layers.map((l, i) => {
            const active = hover === i;
            return (
              <motion.div
                key={l.name}
                onMouseEnter={() => setHover(i)}
                className="absolute -left-[140px] -top-[140px] h-[280px] w-[280px] rounded-3xl border"
                style={{
                  transformStyle: "preserve-3d",
                  borderColor: mix(l.color, active ? 95 : "var(--plate-border)"),
                  boxShadow: active ? `0 0 60px ${mix(l.color, 28)}` : "0 30px 60px var(--plate-shadow)",
                  backgroundImage: `linear-gradient(135deg, ${fill(l.color, active ? 2.2 : 1)}, ${fill(l.color, 0.35)}), linear-gradient(${fill(l.color, 1)} 1px, transparent 1px), linear-gradient(90deg, ${fill(l.color, 1)} 1px, transparent 1px)`,
                  backgroundSize: "auto, 30px 30px, 30px 30px",
                }}
                initial={{ z: -200, opacity: 0 }}
                animate={{ z: i * GAP + (active ? 26 : 0), opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.15 + i * 0.12 }}
              >
                <span className="absolute left-4 top-4 h-2 w-2 rounded-full" style={{ background: l.color, boxShadow: `0 0 12px ${l.color}` }} />
                <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: l.color }}>
                  {l.name}
                </span>
                {/* billboard label, counter-rotated so it stays upright */}
                <div className="absolute left-full top-1/2 max-sm:hidden" style={{ transform: "rotateZ(38deg) rotateX(-62deg)", transformOrigin: "left center" }}>
                  <div className="ml-4 whitespace-nowrap rounded-md border border-white/10 bg-[var(--card)] px-3 py-1.5 shadow-lg shadow-black/10 text-xs text-white/85">
                    <span className="mr-2 font-semibold" style={{ color: l.color }}>
                      {l.name}
                    </span>
                    {l.tech}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

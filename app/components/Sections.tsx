"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { education, jobs, profile, projects, skillGroups, stats } from "./data";
import Hero3D from "./Hero3D";
import { FitnessMock, RfpMock, SocialMock } from "./Mockups";
import { Button, Counter, Reveal, SectionTitle, Tilt } from "./ui";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function ThemeToggle() {
  // Follow OS theme changes (until the visitor picks one) and keep other tabs in sync.
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onSystem = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {
        /* ignore */
      }
      root.dataset.theme = e.matches ? "light" : "dark";
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) root.dataset.theme = e.newValue;
    };
    mq.addEventListener("change", onSystem);
    window.addEventListener("storage", onStorage);
    return () => {
      mq.removeEventListener("change", onSystem);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  };
  return (
    <button onClick={toggle} aria-label="Toggle light / dark theme" title="Toggle theme" className="chip ml-1 grid h-9 w-9 shrink-0 place-items-center !rounded-full text-white/75 transition hover:text-[var(--accent)]">
      <svg viewBox="0 0 24 24" className="hidden h-4 w-4 [[data-theme=light]_&]:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg viewBox="0 0 24 24" className="h-4 w-4 [[data-theme=light]_&]:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[var(--accent)] via-[var(--accent3)] to-[var(--accent2)]" />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-wide">
            <span className="btn-primary grid h-8 w-8 place-items-center rounded-lg text-[11px] font-bold">MA</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <ul className="flex items-center gap-0.5 text-sm">
            {links.map(([l, h]) => (
              <li key={h} className={l === "About" || l === "Skills" ? "hidden sm:block" : ""}>
                <a href={h} className="rounded-lg px-3 py-1.5 text-white/65 transition hover:bg-white/[0.06] hover:text-white">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pb-10 pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="chip mb-6 inline-flex items-center gap-2 !rounded-full px-3.5 py-1.5 text-xs font-medium text-white/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Senior Software Engineer · Team Lead
          </p>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-grad">{profile.name.split(" ")[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            I design and build web and mobile products across the full stack — React, Vue, React Native and Node.js — for teams and clients in the USA and Saudi Arabia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" primary>
              View projects →
            </Button>
            <Button href="#contact">Get in touch</Button>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--line)] pt-6">
            {[
              ["6+", "years experience"],
              ["3–5", "developers led"],
              ["4", "companies"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-grad text-3xl font-semibold">{v}</dt>
                <dd className="mt-1 text-xs text-white/55">{l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <div>
          <Hero3D />
          <ul className="mt-2 flex flex-wrap justify-center gap-2 sm:hidden">
            {["React · Next.js · Vue", "React Native", "Node.js · NestJS", "MongoDB · SQL"].map((t) => (
              <li key={t} className="chip px-2.5 py-1 font-mono text-[11px] text-white/70">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = skillGroups.flatMap((g) => g.items);
  return (
    <div className="relative z-10 overflow-hidden border-y border-[var(--line)] bg-[var(--card)]/60 py-4 backdrop-blur [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm text-white/60">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="01" eyebrow="About" title="Hands-on engineer. Team lead." />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-xl leading-relaxed text-white/80 md:text-2xl md:leading-relaxed">{profile.summary}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} y={14}>
                <div className="card h-full p-6">
                  <div className="text-grad text-4xl font-semibold">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="02" eyebrow="Skills" title="Technical skills." />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04} y={16} className={g.items.length > 6 ? "md:col-span-2" : ""}>
              <div className="card h-full p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40">
                <div className="mb-3 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)]" />
                  {g.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip px-3 py-1.5 text-sm text-white/85 transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="03" eyebrow="Experience" title="Where I've worked." />
        <div className="space-y-5">
          {jobs.map((j) => (
            <Reveal key={j.company + j.period}>
              <div className="card grid gap-5 p-6 md:grid-cols-[250px_1fr] md:gap-10 md:p-8">
                <div>
                  <span className="chip inline-block px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--accent)]">
                    {j.period}
                    {j.note ? ` · ${j.note}` : ""}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">{j.company}</h3>
                  <p className="text-sm text-white/60">{j.role}</p>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[15px] leading-relaxed text-white/75">
                    {j.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-[var(--accent)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {j.tech && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {j.tech.map((t) => (
                        <span key={t} className="chip px-2 py-0.5 font-mono text-[11px] text-white/65">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const mocks: ReactNode[] = [<RfpMock key="r" />, <SocialMock key="s" />, <FitnessMock key="f" />];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle n="04" eyebrow="Key projects" title="Selected work." />
        <div className="space-y-28">
          {projects.map((p, i) => (
            <div key={p.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <div className="chip inline-flex items-center gap-2 px-2.5 py-1 font-mono text-xs text-[var(--accent)]">
                  0{i + 1} · {p.tag}
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">{p.title}</h3>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-white/70">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-[var(--accent)]" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip px-2.5 py-1 font-mono text-[11px] text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="absolute inset-4 rounded-full bg-[var(--glow)]/20 blur-3xl" />
                  <Tilt max={9} className="relative">
                    {mocks[i]}
                  </Tilt>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <section id="contact" className="px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          {/* Bold CTA: colours are explicit so it reads the same in both themes */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4338ca] via-[#7c3aed] to-[#0e7490] p-8 text-[#fff] shadow-2xl shadow-[#4338ca]/30 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#ffffff22] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#00000022] blur-3xl" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffffffb3]">05 — Contact</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s build something great together.</h2>
              <p className="mt-5 max-w-xl text-[#ffffffcc]">Open to new projects, team leadership roles and long-term collaborations.</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className="rounded-xl bg-[#fff] px-6 py-3 text-sm font-semibold text-[#111827] shadow-lg transition hover:-translate-y-0.5">
                  {profile.email}
                </a>
                <button onClick={copy} className="rounded-xl border border-[#ffffff66] px-5 py-3 text-sm font-semibold transition hover:bg-[#ffffff22]">
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-[#ffffffcc]">
                {profile.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="transition hover:text-[#fff]">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/50">
          <span>
            {education.degree} · {education.school} · {education.period}
          </span>
          <span>© {profile.name}</span>
        </div>
      </div>
    </section>
  );
}

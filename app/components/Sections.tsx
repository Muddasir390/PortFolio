"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { capabilities, companies, education, jobs, principles, profile, projects, skillGroups, stats } from "./data";
import Hero3D from "./Hero3D";
import { AnalyticsMock, FitnessMock, RfpMock, SocialMock } from "./Mockups";
import { Button, Counter, Reveal, SectionTitle, Tilt } from "./ui";

const links = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["About", "about"],
  ["Contact", "contact"],
];
const SECTION_IDS = ["top", "work", "experience", "skills", "about", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

/* ───────── Theme toggle ───────── */
function ThemeToggle() {
  // Keep other open tabs in sync with the visitor's choice.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) document.documentElement.dataset.theme = e.newValue;
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  };
  return (
    <button onClick={toggle} aria-label="Toggle light / dark theme" title="Toggle theme" className="btn-outline grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[var(--fg)] transition">
      <svg viewBox="0 0 24 24" className="h-4 w-4 [[data-theme=dark]_&]:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg viewBox="0 0 24 24" className="hidden h-4 w-4 [[data-theme=dark]_&]:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}

/* ───────── Nav ───────── */
export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const active = useActiveSection();
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[var(--accent)] via-[#7c3aed] to-[var(--accent2)]" />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-wide">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#7c3aed] text-[11px] font-bold text-[#fff]">MA</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <ul className="flex items-center gap-0.5 text-sm">
            {links.map(([l, id]) => (
              <li key={id} className={l === "About" || l === "Skills" ? "hidden sm:block" : ""}>
                <a
                  href={`#${id}`}
                  className={`rounded-lg px-3 py-1.5 transition ${active === id ? "bg-[var(--accent-soft)] font-medium text-[var(--accent)]" : "text-[var(--muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--fg)]"}`}
                >
                  {l}
                </a>
              </li>
            ))}
            <li className="ml-1">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

/* ───────── Hero ───────── */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-14 pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_70%_at_70%_0%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="chip inline-flex items-center gap-2 !rounded-full px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent2)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent2)]" />
            </span>
            Available worldwide · Open to new projects
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Senior engineer building <span className="text-[var(--accent)]">web &amp; mobile products</span> that scale.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            6+ years across React, Vue, React Native and Node.js. I stay hands-on in architecture, code and delivery, and lead engineering teams, working with clients and distributed teams around the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#work" primary>
              View selected work
              <span aria-hidden>→</span>
            </Button>
            <Button href="#contact">Get in touch</Button>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            {["6+ years experience", "Web, mobile & backend", "Remote-ready, worldwide"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-[var(--accent2)]" fill="currentColor">
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <div>
          <Hero3D />
          <ul className="mt-2 flex flex-wrap justify-center gap-2 sm:hidden">
            {["React · Next.js · Vue", "React Native", "Node.js · NestJS", "MongoDB · SQL"].map((t) => (
              <li key={t} className="chip px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl border-t border-[var(--line)] pt-8">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Worked with teams at</span>
          {companies.map((c) => (
            <span key={c} className="text-base font-semibold tracking-tight text-[var(--fg)]/70">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Featured work (first thing after the hero) ───────── */
const mocks: ReactNode[] = [<AnalyticsMock key="a" />, <RfpMock key="r" />, <SocialMock key="s" />, <FitnessMock key="f" />];

export function Projects() {
  return (
    <section id="work" className="border-y border-[var(--line)] bg-[var(--bg-soft)] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Featured work" title="Products I've built" sub="Enterprise analytics, AI-powered platforms and consumer apps — shipped across web and mobile." />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="card grid grid-cols-1 gap-8 p-5 sm:p-6 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
                <div className={`min-w-0 ${i % 2 ? "lg:order-2" : ""}`}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    <span className="font-mono">0{i + 1}</span>
                    <span className="h-3 w-px bg-[var(--accent)]/30" />
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight md:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{p.points[0]}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.slice(1).map((pt) => (
                      <li key={pt} className="flex gap-3 text-[15px] leading-relaxed">
                        <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" fill="currentColor">
                          <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4Z" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="chip px-2.5 py-1 text-xs font-medium text-[var(--muted)]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`min-w-0 ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-8 sm:px-4 md:px-8 md:py-10">
                    <Tilt max={7}>{mocks[i]}</Tilt>
                  </div>
                  <p className="mt-2 text-center text-[11px] text-[var(--muted)]">Illustrative UI · not real client data</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Experience ───────── */
function Role({ job }: { job: (typeof jobs)[number] }) {
  const [open, setOpen] = useState(false);
  const LIMIT = 3;
  const shown = open ? job.points : job.points.slice(0, LIMIT);
  const hidden = job.points.length - LIMIT;
  const current = job.period.includes("Present");
  return (
    <li className="relative">
      <span className={`absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border-2 bg-[var(--bg)] ${current ? "border-[var(--accent2)]" : "border-[var(--line-strong)]"}`} />
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
          <p className="text-sm text-[var(--muted)]">{job.role}</p>
        </div>
        <div className="flex items-center gap-2">
          {current && <span className="rounded-full bg-[var(--accent2)]/12 px-2.5 py-1 text-[11px] font-semibold text-[var(--accent2)]">Current</span>}
          <span className="font-mono text-xs text-[var(--muted)]">
            {job.period}
            {job.note ? ` · ${job.note}` : ""}
          </span>
        </div>
      </div>
      <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-[var(--fg)]/80">
        {shown.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
            {p}
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-3 text-sm font-semibold text-[var(--accent)] hover:underline">
          {open ? "Show less" : `Show ${hidden} more`}
        </button>
      )}
      {job.tech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tech.map((t) => (
            <span key={t} className="chip px-2 py-0.5 text-xs text-[var(--muted)]">
              {t}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle eyebrow="Experience" title="Where I've worked" sub="Senior roles across product teams and client projects, 2020 to today." className="!mb-8" />
          <Reveal className="grid grid-cols-2 gap-3">
            {[
              ["6+", "years"],
              ["4", "companies"],
            ].map(([v, l]) => (
              <div key={l} className="card p-4">
                <div className="text-2xl font-semibold">{v}</div>
                <div className="text-xs text-[var(--muted)]">{l}</div>
              </div>
            ))}
          </Reveal>
        </div>
        <ol className="relative space-y-12 border-l border-[var(--line)] pl-8">
          {jobs.map((j) => (
            <Reveal key={j.company + j.period} y={16}>
              <Role job={j} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────── Skills (+ expertise) ───────── */
function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    web: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    mobile: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="3" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="7" rx="2" />
        <path d="M7 6.5h.01M7 17.5h.01" />
      </>
    ),
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-y border-[var(--line)] bg-[var(--bg-soft)] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Skills" title="What I do, and what I use" sub="From interface to API to infrastructure — the capabilities I bring to a team." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04} y={14} className="h-full">
              <div className="card card-lift h-full p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon name={c.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="card mt-8 divide-y divide-[var(--line)] overflow-hidden">
          {skillGroups.map((g) => (
            <div key={g.group} className="grid gap-3 px-5 py-4 md:grid-cols-[190px_1fr] md:items-center md:px-7">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">{g.group}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip px-3 py-1 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── About ───────── */
export function About() {
  const [lead, ...rest] = profile.summary.split(". ");
  return (
    <section id="about" className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <SectionTitle eyebrow="About" title="Hands-on engineer, team lead" className="!mb-8" />
          <Reveal>
            <p className="text-xl font-medium leading-snug tracking-tight md:text-2xl">{lead}.</p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg md:leading-relaxed">{rest.join(". ")}</p>
          </Reveal>
          <div className="mt-8 space-y-5">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} y={12} className="flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] font-mono text-xs font-semibold text-[var(--accent)]">{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="space-y-4 lg:pt-14">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} y={12}>
                <div className="card h-full p-5">
                  <div className="text-4xl font-semibold tracking-tight text-[var(--accent)]">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-[var(--muted)]">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="card flex items-start gap-4 p-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Education</div>
                <div className="mt-1 font-semibold">{education.degree}</div>
                <div className="text-sm text-[var(--muted)]">
                  {education.school} · {education.period}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────── Contact ───────── */
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
    <section id="contact" className="border-t border-[var(--line)] bg-[var(--bg-soft)] px-6 pb-10 pt-20 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="card px-6 py-14 text-center md:px-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Contact</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.08]">Let&apos;s build something great together</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[var(--muted)] md:text-lg">Open to new projects, team leadership roles and long-term collaborations.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                {profile.email}
              </a>
              <button onClick={copy} className="btn btn-outline">
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {["Remote roles", "Contract projects", "Technical lead positions", "Worldwide"].map((t) => (
                <li key={t} className="chip px-3 py-1 text-xs font-medium text-[var(--muted)]">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-sm text-[var(--muted)]">
              {profile.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="transition hover:text-[var(--fg)]">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <span>© {profile.name}</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {links.map(([l, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition hover:text-[var(--fg)]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}

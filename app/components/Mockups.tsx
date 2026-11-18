import type { ReactNode } from "react";

const z = (n: number) => ({ transform: `translateZ(${n}px)` });
const mix = (c: string, p: number) => `color-mix(in srgb, ${c} ${p}%, transparent)`;

const ACCENT = "var(--accent)";
const GOOD = "var(--accent2)";
const WARN = "var(--warn)";

/** Floating detail card. Always positioned so it sits on the outer edge of a mockup, never over its content. */
function Chip({ children, className = "", depth = 60 }: { children: ReactNode; className?: string; depth?: number }) {
  return (
    <div style={z(depth)} className={`absolute z-10 rounded-xl border border-white/15 bg-[var(--m-chip)] px-3 py-2 text-xs shadow-xl shadow-black/20 ${className}`}>
      {children}
    </div>
  );
}

function Ring({ pct, size = 64, stroke = 7, color = ACCENT }: { pct: number; size?: number; stroke?: number; color?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke={mix("var(--fg)", 12)} strokeWidth={stroke} fill="none" />
      <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} />
    </svg>
  );
}

/* ───────── RFP platform: browser dashboard ───────── */
export function RfpMock() {
  const rows = [
    { q: "Describe your data encryption at rest and in transit", s: "Approved", c: GOOD, w: "100%" },
    { q: "List certifications held (SOC 2, ISO 27001)", s: "In review", c: WARN, w: "82%" },
    { q: "Explain your disaster recovery process", s: "AI drafted", c: ACCENT, w: "55%" },
    { q: "Provide an SLA and support escalation model", s: "AI drafted", c: ACCENT, w: "40%" },
  ];
  return (
    <div className="relative pb-6 pt-4" style={{ transformStyle: "preserve-3d" }}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[var(--m-win)] shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[var(--m-bar)] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/45">rfp.app / security-questionnaire</span>
        </div>
        <div className="grid grid-cols-[84px_1fr] sm:grid-cols-[110px_1fr]">
          <div className="space-y-2 border-r border-white/10 p-3 sm:p-4">
            {["Overview", "Questions", "Documents", "Approvals", "Export"].map((t, i) => (
              <div key={t} className={`rounded-md px-2 py-1.5 text-[11px] ${i === 1 ? "bg-[var(--accent)]/15 text-[var(--accent)]" : "text-white/45"}`}>
                {t}
              </div>
            ))}
          </div>
          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-semibold">Security Questionnaire</div>
                <div className="mt-1 text-[11px] text-white/45">42 questions · from 6 documents</div>
              </div>
              <div className="relative grid shrink-0 place-items-center">
                <Ring pct={78} />
                <span className="absolute text-xs font-semibold">78%</span>
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              {rows.map((r) => (
                <div key={r.q} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-[11px] text-white/75">{r.q}</span>
                    <span className="shrink-0 rounded-full px-2 py-0.5 text-[10px]" style={{ background: mix(r.c, 16), color: r.c }}>
                      {r.s}
                    </span>
                  </div>
                  <div className="mt-2 h-1 rounded bg-white/10">
                    <div className="h-1 rounded" style={{ width: r.w, background: r.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Chip className="right-3 top-0 sm:right-6" depth={70}>
        <span className="text-white/50">Role · </span>
        <span className="font-medium">Reviewer</span>
      </Chip>
      <Chip className="bottom-0 left-3 sm:left-6" depth={60}>
        <span className="text-white/50">Approval · </span>
        <span className="font-medium" style={{ color: GOOD }}>
          Level 2 of 3 ✓
        </span>
      </Chip>
    </div>
  );
}

/* ───────── Phone frame ───────── */
function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative h-[380px] w-[184px] overflow-hidden rounded-[2rem] border-[5px] border-[#1d2433] bg-[var(--m-phone)] shadow-2xl shadow-black/30 ${className}`}>
      <div className="absolute left-1/2 top-1.5 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      {children}
    </div>
  );
}

/* ───────── Social + court booking ───────── */
export function SocialMock() {
  return (
    <div className="relative mx-auto h-[470px] w-[320px] sm:w-[340px]" style={{ transformStyle: "preserve-3d" }}>
      <div style={z(0)} className="absolute left-0 top-12">
        <Phone>
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b4a8f] via-[#6d4aa8] to-[#c2487f]" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ffffff33] backdrop-blur">
              <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-[#fff]" />
            </div>
          </div>
          <div className="absolute left-2.5 top-[52%] space-y-3">
            {["♥", "💬", "↗"].map((i) => (
              <div key={i} className="grid h-8 w-8 place-items-center rounded-full bg-black/35 text-[11px] text-[#fff] backdrop-blur">
                {i}
              </div>
            ))}
          </div>
          <div className="absolute bottom-12 left-3 right-8">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#ffffffcc]" />
              <div className="h-2 w-16 rounded bg-[#ffffffb3]" />
            </div>
            <div className="mt-2 h-1.5 w-24 rounded bg-[#ffffff80]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-around bg-black/55 py-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-3 w-3 rounded-sm ${i === 0 ? "bg-[#fff]" : "bg-[#ffffff59]"}`} />
            ))}
          </div>
        </Phone>
      </div>
      <div style={z(40)} className="absolute right-0 top-24">
        <Phone>
          <div className="p-4 pt-8">
            <div className="text-xs font-semibold">Book a court</div>
            <div className="mt-1 text-[10px] text-white/45">Padel · Court 3</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"].map((t, i) => (
                <div
                  key={t}
                  className={`rounded-md border py-2 text-center text-[10px] ${i === 1 ? "" : i === 3 ? "border-white/5 text-white/25 line-through" : "border-white/10 text-white/60"}`}
                  style={i === 1 ? { borderColor: GOOD, background: mix(GOOD, 15), color: GOOD } : undefined}
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-white/5 p-2.5 text-[10px] text-white/55">
              <div className="flex justify-between">
                <span>Full court</span>
                <span className="text-white/80">Individual slot</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg py-2.5 text-center text-[11px] font-semibold text-[#fff]" style={{ background: ACCENT }}>
              Pay with MyFatoorah
            </div>
          </div>
        </Phone>
      </div>
      <Chip className="right-2 top-0" depth={90}>
        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
        Live · 1.2k watching
      </Chip>
      <Chip className="bottom-0 left-2" depth={70}>
        <span className="text-white/50">Court 3 · </span>
        <span className="font-medium" style={{ color: GOOD }}>
          Booked ✓
        </span>
      </Chip>
    </div>
  );
}

/* ───────── Fitness + nutrition ───────── */
export function FitnessMock() {
  return (
    <div className="relative mx-auto h-[430px] w-[320px] sm:w-[340px]" style={{ transformStyle: "preserve-3d" }}>
      <div style={z(0)} className="absolute left-0 top-4">
        <Phone className="!h-[390px] !w-[210px]">
          <div className="p-4 pt-8">
            <div className="text-[10px] text-white/45">Goal · Lean muscle gain</div>
            <div className="text-sm font-semibold">Today&apos;s plan</div>
            <div className="mt-4 flex items-center justify-center">
              <div className="relative grid place-items-center">
                <Ring pct={72} size={110} stroke={9} color={GOOD} />
                <div className="absolute scale-[0.72]">
                  <Ring pct={55} size={110} stroke={9} color={ACCENT} />
                </div>
                <div className="absolute text-center">
                  <div className="text-lg font-semibold">2,450</div>
                  <div className="text-[9px] text-white/45">kcal target</div>
                </div>
              </div>
            </div>
            <div className="mt-5 space-y-2">
              {[
                ["Breakfast", "Oats, eggs, banana", "520"],
                ["Lunch", "Chicken, rice, greens", "740"],
                ["Dinner", "Salmon, quinoa", "680"],
              ].map(([m, d, k]) => (
                <div key={m} className="flex items-center justify-between rounded-lg bg-white/[0.05] px-3 py-2">
                  <div>
                    <div className="text-[10px] font-medium">{m}</div>
                    <div className="text-[9px] text-white/45">{d}</div>
                  </div>
                  <div className="text-[10px] text-white/60">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </Phone>
      </div>
      <Chip className="right-0 top-14" depth={80}>
        <div className="text-white/50">AI recommendation</div>
        <div className="mt-0.5 font-medium" style={{ color: GOOD }}>
          + 20g protein at dinner
        </div>
      </Chip>
      <Chip className="bottom-12 right-0" depth={60}>
        <div className="text-white/50">Workout · Push day</div>
        <div className="mt-0.5 font-medium">5 exercises · 45 min</div>
      </Chip>
    </div>
  );
}

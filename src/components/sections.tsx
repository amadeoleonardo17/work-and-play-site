import { MatrixRain } from "@/components/MatrixRain";
import { Reveal } from "@/components/effects";
import profileCyborg from "@/assets/profile-cyborg.png";
const profileAsset = { url: "https://i.imgur.com/kp7x19J.png" };
const workAiContent = { url: "https://i.imgur.com/3yotSIJ.png" };
const workAsanaCrm = { url: "https://i.imgur.com/QRFHo3D.png" };
const workLeads = { url: "https://i.imgur.com/l3jyoOW.png" };
const achCcnaCert = { url: "https://i.imgur.com/nUl5osr.jpeg" };
const achCcnaScore = { url: "https://i.imgur.com/vQhvFEN.jpeg" };
const achTp5 = { url: "https://i.imgur.com/m4QBhtM.jpeg" };
const achTm10 = { url: "https://i.imgur.com/5wX0CFo.jpeg" };
const achOvation = { url: "https://i.imgur.com/oounFHL.png" };
const achBravo = { url: "https://i.imgur.com/meYh3Zh.png" };
import { profile, services, experience } from "@/data/portfolio";

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <span className="label-mono">/{index}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <MatrixRain />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="label-mono">{profile.role}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="block text-foreground">{profile.headline[0]}</span>
            <span className="block text-primary text-glow animate-flicker">{profile.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#works"
              className="press-fx inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View the record
            </a>
            <a
              href="#discovery-call"
              className="press-fx inline-flex items-center gap-2 border border-primary/70 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Book a discovery call
            </a>
          </div>

          <div className="mt-12">
            <p className="label-mono">Stack loaded</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.stack.map((s) => (
                <li
                  key={s}
                  className="border border-border bg-surface/70 px-3 py-1 font-mono text-[0.7rem] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div
            className="group relative mx-auto aspect-square w-full cursor-pointer overflow-hidden rounded-2xl"
            style={{ maxWidth: '420px' }}
          >
            <img
              src={profileAsset.url}
              alt={`Portrait of ${profile.name}`}
              className="absolute inset-0 z-10 h-full w-full object-cover"
            />
            <img
              src="https://i.imgur.com/GJDPoNN.png"
              alt="Cyborg portrait"
              className="cyborg-morph absolute inset-0 z-20 h-full w-full object-cover"
            />
          </div>


          <dl className="mt-4 grid grid-cols-3 divide-x divide-border border border-border bg-card/70">
            {profile.stats.map((s) => (
              <div key={s.label} className="px-3 py-4 text-center">
                <dt className="font-mono text-xl text-primary">{s.value}</dt>
                <dd className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="01" title="Services" />
      <div className="grid gap-px bg-border sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.code} delay={i * 80}>
            <article className="group h-full bg-card p-7 transition-all hover:bg-surface hover:shadow-[var(--shadow-glow)]">
              <span className="font-mono text-xs text-primary">{s.code}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <p className="mt-5 font-mono text-[0.7rem] tracking-[0.1em] text-accent-foreground">
                {s.tags.join(" · ")}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="02" title="Work Experience" />
        <ol className="relative border-l border-border pl-6">
          {experience.map((e, i) => (
            <li key={e.period} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.72rem] top-1.5 h-2 w-2 bg-primary shadow-[var(--shadow-glow)]" />
              <Reveal delay={i * 70}>
                <p className="font-mono text-[0.7rem] tracking-[0.16em] text-primary">{e.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{e.role}</h3>
                <p className="font-mono text-xs text-muted-foreground">{e.org}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const works = [
  {
    image: workLeads.url,
    title: "Automated Leads Enrichment",
    stack: "Zapier · Apollo · Google Sheets · Slack · Gmail",
    body: "Captures form leads, enriches company data via Apollo webhooks, splits high and low priority paths, logs to Sheets, notifies Sales on Slack, and drafts AI outreach emails.",
  },
  {
    image: workAsanaCrm.url,
    title: "Asana CRM Lead Engagement Workflow",
    stack: "Zapier · Asana · Gmail · Google Drive",
    body: "Five-stage pipeline automation (Ready to Start, No Response, Quoted, Approved, Paid & Closed) with lead folders, delayed follow-ups, and stage-specific email sequences.",
  },
  {
    image: workAiContent.url,
    title: "AI Content Repurposing",
    stack: "Zapier · AI by Zapier · Google Drive · Looping",
    body: "Watches a Drive folder, transcribes new files with AI, generates a blog post, then loops and splits into paths to repurpose content across channels.",
  },
];

export function Works() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="03" title="Previous Works" />
      <div className="grid gap-6 md:grid-cols-3">
        {works.map((w, i) => (
          <Reveal key={w.title} delay={i * 90}>
            <article className="panel group relative h-full">
              <div className="relative overflow-hidden border-b border-border bg-surface">
                <img
                  src={w.image}
                  alt={`${w.title} automation workflow`}
                  loading="lazy"
                  className="h-52 w-full cursor-zoom-in object-cover object-top transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <div className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-3 w-[min(34rem,88vw)] -translate-x-1/2 scale-90 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                <div className="panel overflow-hidden bg-card p-2 shadow-[var(--shadow-glow)]">
                  <img
                    src={w.image}
                    alt={`${w.title} full workflow preview`}
                    loading="lazy"
                    className="max-h-[60vh] w-full scale-100 object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <p className="mt-2 px-1 pb-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
                    {w.title}
                  </p>
                </div>
              </div>


              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                  {w.title}
                </h3>
                <p className="mt-1 font-mono text-[0.68rem] tracking-[0.1em] text-primary">{w.stack}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const achievements = [
  {
    image: achCcnaCert.url,
    title: "Cisco Certified Network Associate (Routing & Switching)",
    meta: "Cisco · Certified April 21, 2015 · ID CSCO12673879",
  },
  {
    image: achCcnaScore.url,
    title: "CCNA Exam — Passed with a score of 931/1000",
    meta: "Cisco · Exam 200-120 · Passing score 825",
  },
  {
    image: achTm10.url,
    title: "10th Service Anniversary Recognition",
    meta: "Tech Mahindra · Signed by MD & CEO Mohit Joshi",
  },
  {
    image: achOvation.url,
    title: "Standing Ovation Award",
    meta: "Tech Mahindra · For excellence that deserves applause",
  },
  {
    image: achBravo.url,
    title: "Bravo Award",
    meta: "Tech Mahindra · For consistently raising the bar",
  },
  {
    image: achTp5.url,
    title: "Certificate of Recognition — 5 Years of Dedicated Service",
    meta: "Teleperformance Philippines",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="04" title="Achievements" />
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <figure className="panel group h-full overflow-hidden">
                <div className="overflow-hidden border-b border-border bg-background">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-48 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6">
                  <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {a.meta}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiscoveryCall() {
  return (
    <section id="discovery-call" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="05" title="Book a Discovery Call" />
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pick a 30-minute slot and we'll map the manual work in your business, then scope the
              automations that remove it. No pitch — just a working session.
            </p>
            <ul className="space-y-2 font-mono text-xs text-muted-foreground">
              <li>
                <span className="text-primary">&gt;</span> Review your current tools & workflows
              </li>
              <li>
                <span className="text-primary">&gt;</span> Identify quick automation wins
              </li>
              <li>
                <span className="text-primary">&gt;</span> Get a clear next-step plan
              </li>
            </ul>
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press-fx inline-flex bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              Open scheduler
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="panel overflow-hidden">
            <iframe
              src={`${profile.calendlyUrl}?hide_gdpr_banner=1&background_color=ffffff`}
              title="Schedule a discovery call with Amadeo Leonardo"
              loading="lazy"
              className="h-[680px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <MatrixRain opacity={0.14} />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="06" title="Contact" />
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Have a system to build, rescue, or scale? Send the details and I'll reply within one
              working day.
            </p>
            <dl className="space-y-4 font-mono text-xs">
              {[
                ["Email", profile.email],
                ["Phone", profile.phone],
                ["Location", profile.location],
                ["Status", profile.availability],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border pb-3">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-primary">{k}</dt>
                  <dd className="mt-1 text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <form
            className="panel space-y-4 p-7"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(String(data.get("subject") ?? "Project inquiry"));
              const body = encodeURIComponent(
                `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")}\n${String(
                  data.get("email") ?? "",
                )}`,
              );
              window.open(
                `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
                  profile.email,
                )}&subject=${subject}&body=${body}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your name"
                className="border border-input bg-background/70 px-3 py-3 font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="border border-input bg-background/70 px-3 py-3 font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <input
              name="subject"
              placeholder="Subject"
              className="w-full border border-input bg-background/70 px-3 py-3 font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your message"
              className="w-full resize-none border border-input bg-background/70 px-3 py-3 font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="press-fx w-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              Transmit message via Outlook
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

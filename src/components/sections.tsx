import { MatrixRain } from "@/components/MatrixRain";
import profileAsset from "@/assets/profile.png.asset.json";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { profile, services, experience, testimonials } from "@/data/portfolio";

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

          <div className="mt-8">
            <a
              href="#works"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View the record
            </a>
          </div>

          <div className="mt-12">
            <p className="label-mono">Stack loaded</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.stack.map((s) => (
                <li
                  key={s}
                  className="border border-border bg-surface/70 px-3 py-1 font-mono text-[0.7rem] text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="panel relative overflow-hidden">
            <img
              src={profileAsset.url}
              alt={`Portrait of ${profile.name}`}
              width={1242}
              height={1242}
              className="w-full object-cover saturate-0 contrast-125 brightness-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-primary/25 mix-blend-color" />
            <div className="pointer-events-none absolute inset-0 scanlines opacity-50" />
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
        {services.map((s) => (
          <article key={s.code} className="group bg-card p-7 transition-colors hover:bg-surface">
            <span className="font-mono text-xs text-primary">{s.code}</span>
            <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <p className="mt-5 font-mono text-[0.7rem] tracking-[0.1em] text-accent-foreground">
              {s.tags.join(" · ")}
            </p>
          </article>
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
          {experience.map((e) => (
            <li key={e.period} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.72rem] top-1.5 h-2 w-2 bg-primary shadow-[var(--shadow-glow)]" />
              <p className="font-mono text-[0.7rem] tracking-[0.16em] text-primary">{e.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{e.role}</h3>
              <p className="font-mono text-xs text-muted-foreground">{e.org}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const works = [
  {
    image: work1,
    title: "AI Lead Qualification Workflow",
    stack: "Zapier · ChatGPT · Google Sheets",
    body: "Captures new leads from online forms, uses AI to categorize and qualify them, updates Google Sheets records, and triggers email alerts by lead quality.",
  },
  {
    image: work2,
    title: "CRM Automation Workflow",
    stack: "GoHighLevel CRM",
    body: "Automated contact tagging and pipeline updates with follow-up sequences for lead nurturing, cutting repetitive manual CRM work.",
  },
  {
    image: work3,
    title: "Business Workflow Automation",
    stack: "n8n · Multi-app integrations",
    body: "Connected multiple applications with triggers, conditional logic, and notifications to organize business data into structured no-code workflows.",
  },
];


export function Works() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading index="03" title="Previous Works" />
      <div className="grid gap-6 md:grid-cols-3">
        {works.map((w) => (
          <article key={w.title} className="panel group overflow-hidden">
            <div className="relative overflow-hidden border-b border-border">
              <img
                src={w.image}
                alt={`${w.title} interface`}
                loading="lazy"
                width={1024}
                height={640}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />
            </div>
            <div className="p-6">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                {w.title}
              </h3>
              <p className="mt-1 font-mono text-[0.68rem] tracking-[0.1em] text-primary">{w.stack}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="04" title="Testimonials" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={`${t.name}-${i}`} className="panel flex h-full flex-col justify-between p-7">

              <blockquote className="text-sm leading-relaxed text-foreground">
                <span className="mr-1 font-mono text-primary">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-mono text-xs tracking-[0.14em] text-primary">{t.name}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {t.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <MatrixRain opacity={0.14} />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="05" title="Contact" />
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
              const form = e.currentTarget;
              const data = new FormData(form);
              window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
                String(data.get("subject") ?? "Project inquiry"),
              )}&body=${encodeURIComponent(
                `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")}`,
              )}`;
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
              className="w-full bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              Transmit message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

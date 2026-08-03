import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Hero, Services, Experience, Works, Testimonials, Contact } from "@/components/sections";
import { profile } from "@/data/portfolio";

const title = `${profile.name} — AI Automation & Technical VA`;
const description =
  "Amadeo Leonardo: technical virtual assistant and AI automation specialist. Zapier, n8n, and GoHighLevel workflows, plus 11+ years of enterprise technical support.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

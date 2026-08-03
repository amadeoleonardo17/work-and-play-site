import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Hero, Services, Experience, Works, Testimonials, Contact } from "@/components/sections";
import { profile } from "@/data/portfolio";

const title = `${profile.name} — ${profile.role} Portfolio`;
const description =
  "Full-stack developer portfolio: services, work experience, selected projects, client testimonials, and contact details.";

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

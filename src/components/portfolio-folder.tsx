import { useState } from "react";
import { ChevronLeft, ChevronRight, FolderOpen, Maximize2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export type FolderImage = { image: string; title: string; meta?: string };

type PortfolioFolderProps = {
  title: string;
  category: string;
  description: string;
  images: FolderImage[];
  align?: "right" | undefined;
  videoUrl?: string;
};

export function PortfolioFolder({ title, category, description, images, align, videoUrl }: PortfolioFolderProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const selected = images[active] ?? images[0];

  const openAt = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  return (
    <article className="portfolio-folder panel group relative h-full" tabIndex={0}>
      <div className="folder-cover" aria-hidden="true">
        <div className="folder-back" />
        <div className="folder-preview">
          {images.slice(0, 3).map((item, index) => (
            <img key={item.image} src={item.image} alt="" loading="lazy" className={`folder-paper folder-paper-${index}`} />
          ))}
        </div>
        <div className="folder-front">
          <FolderOpen className="h-7 w-7" strokeWidth={1.3} />
          <span className="font-mono text-[0.65rem] uppercase text-primary-foreground/80">{String(images.length).padStart(2, "0")} files</span>
        </div>
      </div>
      <div className="p-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-primary">{category}</p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button type="button" variant="outline" size="sm" onClick={() => openAt(0)} aria-label={`Open ${title} images`}>
            <Maximize2 aria-hidden="true" /> View images
          </Button>
          {videoUrl && (
            <Button type="button" variant="outline" size="sm" onClick={() => setVideoOpen(true)} aria-label={`Watch ${title} walkthrough`}>
              <Play aria-hidden="true" /> Watch walkthrough
            </Button>
          )}
        </div>
      </div>

      <div className={`folder-popup ${align === "right" ? "folder-popup-right" : ""}`} aria-hidden="true">
        <div className="folder-popup-heading"><FolderOpen className="h-4 w-4" /> {title} <span>{images.length} images</span></div>
        <div className="folder-popup-grid">
          {images.map((item, index) => (
            <figure key={item.image} className="folder-popup-item" style={{ animationDelay: `${index * 90}ms` }}>
              <img src={item.image} alt="" loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[min(96vw,1100px)] max-w-none gap-0 border-border bg-background p-0 shadow-[var(--shadow-panel)]">
          <div className="border-b border-border px-5 py-4 pr-12">
            <DialogTitle className="text-base text-foreground">{title}</DialogTitle>
            <DialogDescription className="mt-1 font-mono text-xs">{active + 1} / {images.length} · {selected?.title}</DialogDescription>
          </div>
          <div className="flex min-h-0 items-center justify-center bg-surface/50 p-3 sm:p-6">
            {selected && <img src={selected.image} alt={selected.title} className="max-h-[62vh] w-full object-contain" />}
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-border p-3 sm:px-5">
            <Button type="button" variant="outline" size="icon" aria-label="Previous image" onClick={() => setActive((active - 1 + images.length) % images.length)}><ChevronLeft /></Button>
            <p className="min-w-0 truncate text-center text-xs text-muted-foreground">{selected?.meta ?? selected?.title}</p>
            <Button type="button" variant="outline" size="icon" aria-label="Next image" onClick={() => setActive((active + 1) % images.length)}><ChevronRight /></Button>
          </div>
          <div className="flex gap-2 overflow-x-auto border-t border-border p-3" aria-label="Choose image">
            {images.map((item, index) => (
              <Button key={item.image} type="button" variant="ghost" className={`h-14 w-20 shrink-0 overflow-hidden rounded-sm p-0 ${index === active ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`} onClick={() => setActive(index)} aria-label={`Show ${item.title}`} aria-pressed={index === active}>
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {videoUrl && (
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="w-[min(96vw,1000px)] max-w-none border-border bg-background p-4 sm:p-6">
            <DialogTitle className="pr-8 text-base">{title} · Walkthrough</DialogTitle>
            <DialogDescription className="sr-only">Video walkthrough of the RenderVision Studio system.</DialogDescription>
            {videoOpen && <iframe src={videoUrl} title={`${title} walkthrough video`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="aspect-video w-full border-0" />}
          </DialogContent>
        </Dialog>
      )}
    </article>
  );
}
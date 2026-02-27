"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Events produced\nannually" },
  { value: "315", label: "Projects completed\nacross the DMV" },
  { value: "50+", label: "Corporate & government\nclients served" },
];

export function HeroSection() {
  const hero = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="pt-[72px]">
      <div
        ref={hero.ref}
        className={cn(
          "reveal-fade-up relative mx-auto max-w-[1400px] px-4 pt-4 sm:px-5 sm:pt-6",
          hero.isVisible && "revealed"
        )}
      >
        {/* Hero image with L-shaped cutout */}
        <div
          className="relative"
          style={{ height: "clamp(480px, 75vh, 720px)" }}
        >
          {/* Image + overlays */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              src="/hero-bg.jpg"
              alt="Live event production"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35" />

            {/* White cutout — bottom right (hidden on mobile) */}
            <div className="absolute bottom-0 right-0 hidden rounded-tl-2xl rounded-br-2xl bg-background sm:block sm:h-[120px] sm:w-[40%] md:h-[140px] md:w-[45%]" />

            {/* Content overlay — bottom left */}
            <div className="absolute bottom-0 left-0 flex flex-col justify-end p-6 sm:right-[40%] sm:p-8 md:p-12">
              <p className="text-xs font-medium text-white/70 sm:text-sm">
                Audiovisual &bull; IT &bull; Media Production Solutions
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-[1.05] text-white sm:mt-4 sm:text-4xl md:text-6xl lg:text-[4.5rem]">
                Elevating
                <br />
                Events Through
                <br />
                Technology
              </h1>
              <p className="mt-3 text-xs font-medium text-white/60 sm:mt-4 sm:text-sm">
                Serving Washington DC &bull; Maryland &bull; Virginia
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-8">
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto gap-2 p-0 text-sm font-semibold text-white hover:bg-transparent hover:text-white/80"
                >
                  <a href="#contact">
                    Request a Quote
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto gap-2 p-0 text-sm font-semibold text-white hover:bg-transparent hover:text-white/80"
                >
                  <a href="#contact">
                    Schedule a Consultation
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Floating card — top right (desktop only) */}
            <div className="absolute right-6 top-6 hidden w-56 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl md:right-8 md:top-8 md:block md:w-60">
              <div className="relative h-28 w-full">
                <Image
                  src="/hero-2.jpg"
                  alt="Recent project"
                  fill
                  className="object-cover"
                />
                <div className="absolute right-3 top-3 flex gap-1">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Discover Our
                  </p>
                  <p className="text-xs text-white/60">Recent Project</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar — in the bottom-right cutout (desktop) */}
          <div className="absolute bottom-0 right-0 hidden items-start gap-8 px-6 py-8 sm:flex sm:h-[120px] sm:w-[40%] md:h-[140px] md:w-[45%] md:gap-10 md:px-8 md:py-10 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-start gap-6 md:gap-8">
                {i > 0 && <div className="h-12 w-px bg-border md:h-14" />}
                <div>
                  <p className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[10px] leading-relaxed text-muted-foreground md:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats — mobile (below hero) */}
        <div className="mt-6 flex items-start justify-between gap-4 sm:hidden">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-start gap-4">
              {i > 0 && <div className="h-12 w-px bg-border" />}
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 whitespace-pre-line text-[10px] leading-relaxed text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

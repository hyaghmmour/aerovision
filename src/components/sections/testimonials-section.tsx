"use client";

import { Building2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const venues = [
  { name: "Walter E. Washington Convention Center", city: "Washington, DC", logo: "/venues/convention-center.svg" },
  { name: "Gaylord National Resort", city: "National Harbor, MD", logo: "/venues/gaylord.svg" },
  { name: "MGM National Harbor", city: "National Harbor, MD", logo: "/venues/mgm.svg" },
  { name: "The Anthem", city: "Washington, DC", logo: "/venues/anthem.svg" },
  { name: "Marriott Marquis", city: "Washington, DC", logo: "/venues/marriott-marquis.svg" },
  { name: "Capital One Arena", city: "Washington, DC", logo: "/venues/capital-one.svg" },
  { name: "Ronald Reagan Building", city: "Washington, DC", logo: "/venues/reagan.svg" },
  { name: "National Building Museum", city: "Washington, DC", logo: "/venues/building-museum.svg" },
  { name: "The Kennedy Center", city: "Washington, DC", logo: "/venues/kennedy-center.svg" },
  { name: "Hilton McLean Tysons Corner", city: "McLean, VA", logo: "/venues/hilton.svg" },
  { name: "Smithsonian National Museum", city: "Washington, DC", logo: "/venues/smithsonian.svg" },
  { name: "Omni Shoreham Hotel", city: "Washington, DC", logo: "/venues/omni.svg" },
  { name: "Fairmont Washington", city: "Washington, DC", logo: "/venues/fairmont.svg" },
  { name: "The Ritz-Carlton Georgetown", city: "Washington, DC", logo: "/venues/ritz-carlton.svg" },
  { name: "DAR Constitution Hall", city: "Washington, DC", logo: "/venues/dar.svg" },
  { name: "Dulles Expo Center", city: "Chantilly, VA", logo: "/venues/dulles-expo.svg" },
];

export function PortfolioSection() {
  const section = useScrollReveal<HTMLDivElement>();

  return (
    <section id="portfolio" className="bg-muted py-20 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-4 sm:px-6",
          section.isVisible && "revealed"
        )}
      >
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-primary"
          >
            <Building2 className="h-3.5 w-3.5" />
            Portfolio
          </Badge>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Venues We&apos;ve Produced At
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            From intimate ballrooms to arena-scale convention centers — we&apos;ve
            delivered flawless AV productions at the DMV&apos;s top venues.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {venues.map((venue, i) => (
            <Card
              key={venue.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border-border p-4 text-center transition-all hover:border-foreground/20 hover:shadow-md sm:gap-4 sm:rounded-2xl sm:p-6"
              style={{ "--reveal-index": i } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={venue.logo}
                alt={venue.name}
                className="h-6 w-auto object-contain opacity-60 transition-opacity group-hover:opacity-100 sm:h-8"
              />
              <p className="text-[10px] text-muted-foreground sm:text-xs">{venue.city}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Building2, Landmark, Heart, Hotel } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Conferences, product launches, shareholder meetings, and corporate galas with seamless AV production and IT support.",
  },
  {
    icon: Landmark,
    title: "Government & Embassies",
    description:
      "Trusted by government agencies and embassies for secure, high-profile summits, press conferences, and diplomatic events.",
  },
  {
    icon: Heart,
    title: "Nonprofits & Associations",
    description:
      "Fundraising galas, annual conferences, and association events with professional production on any budget.",
  },
  {
    icon: Hotel,
    title: "Hotels & Venues",
    description:
      "In-house AV partnerships with premier hotels and event venues across Washington DC, Maryland, and Virginia.",
  },
];

export function PortfolioSection() {
  const section = useScrollReveal<HTMLDivElement>();

  return (
    <section id="industries" className="bg-muted py-20 md:py-32">
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
            Industries We Serve
          </Badge>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Trusted Across Industries
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            From corporate boardrooms to government summits — we deliver
            reliable technology solutions for every sector.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.title}
                className="group gap-0 rounded-xl border-border p-0 transition-all hover:border-foreground/20 hover:shadow-md"
                style={{ "--reveal-index": i } as React.CSSProperties}
              >
                <CardContent className="p-5 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold sm:mt-5 sm:text-base">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

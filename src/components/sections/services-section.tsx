"use client";

import { useState } from "react";
import { Layers, ArrowRight, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tiers = [
  {
    tag: "S1",
    label: "Essential",
    name: "Essential Package",
    description:
      "Build your event foundation with professional sound, basic lighting, and a single-camera setup. Perfect for meetings, small conferences, and intimate gatherings up to 200 guests.",
    features: [
      "Professional PA system",
      "Basic LED lighting",
      "Single camera + projection",
      "On-site technician",
    ],
  },
  {
    tag: "S2",
    label: "Professional",
    name: "Professional Package",
    description:
      "Elevate your production with multi-camera video, intelligent lighting, wireless microphones, and a dedicated event director for seamless mid-size events.",
    features: [
      "Multi-camera production",
      "Intelligent lighting design",
      "Wireless mic systems",
      "Dedicated event director",
    ],
  },
  {
    tag: "S3",
    label: "Enterprise",
    name: "Enterprise Package",
    description:
      "Full-scale production for flagship events — LED walls, live streaming, broadcast-quality video, custom staging, and a complete production crew.",
    features: [
      "LED walls & projection mapping",
      "Live streaming & broadcast",
      "Custom staging & scenic",
      "Full production crew",
    ],
  },
];

export function ServicesSection() {
  const section = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-muted py-20 md:py-32">
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
            <Layers className="h-3.5 w-3.5" />
            Service Tiers
          </Badge>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            AV Packages for Every Event
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Choose your tier and scale up as your event demands grow — from
            boardroom meetings to arena-scale productions.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12">
          {tiers.map((tier, i) => (
            <Button
              key={tier.tag}
              variant={active === i ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActive(i)}
            >
              <span
                className={cn(
                  "inline-flex h-5 items-center rounded px-1.5 text-[10px] font-bold",
                  active === i
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {tier.tag}
              </span>
              {tier.label}
            </Button>
          ))}
        </div>

        {/* Active tier content */}
        <Card className="mt-8 gap-0 overflow-hidden rounded-2xl border-border p-0 sm:mt-10">
          <div className="flex flex-col md:flex-row">
            {/* Left — info */}
            <CardContent className="flex-1 p-6 sm:p-8 md:p-12">
              <Badge
                variant="secondary"
                className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-primary"
              >
                {tiers[active].tag} — {tiers[active].label}
              </Badge>
              <h3 className="mt-4 text-xl font-bold sm:text-2xl md:text-3xl">
                {tiers[active].name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4">
                {tiers[active].description}
              </p>
              <Button asChild className="mt-6 rounded-full sm:mt-8">
                <a href="#contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>

            {/* Right — features list */}
            <div className="flex flex-1 flex-col justify-center border-t border-border bg-muted p-6 sm:p-8 md:border-l md:border-t-0 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What&apos;s included
              </p>
              <ul className="mt-5 space-y-4 sm:mt-6">
                {tiers[active].features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Layers, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

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
    <section id="services" className="bg-muted py-24 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-6",
          section.isVisible && "revealed"
        )}
      >
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5">
            <Layers className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent">
              Service Tiers
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            AV Packages for Every Event
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Choose your tier and scale up as your event demands grow — from
            boardroom meetings to arena-scale productions.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {tiers.map((tier, i) => (
            <button
              key={tier.tag}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                active === i
                  ? "bg-accent text-white"
                  : "border border-border bg-white text-foreground hover:bg-muted"
              )}
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
            </button>
          ))}
        </div>

        {/* Active tier content */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
          <div className="flex flex-col md:flex-row">
            {/* Left — info */}
            <div className="flex-1 p-8 md:p-12">
              <span className="inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                {tiers[active].tag} — {tiers[active].label}
              </span>
              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                {tiers[active].name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {tiers[active].description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Right — features list */}
            <div className="flex flex-1 flex-col justify-center border-t border-border bg-muted p-8 md:border-l md:border-t-0 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What&apos;s included
              </p>
              <ul className="mt-6 space-y-4">
                {tiers[active].features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

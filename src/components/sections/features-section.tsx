"use client";

import {
  Speaker,
  Monitor,
  Lightbulb,
  Video,
  Wifi,
  Clapperboard,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Speaker,
    title: "Live Event AV Systems",
    description:
      "Professional sound reinforcement, microphone systems, and concert-grade audio engineered for crystal-clear delivery at any venue size.",
  },
  {
    icon: Monitor,
    title: "LED Displays & Projection",
    description:
      "High-resolution LED video walls, projection mapping, and digital signage that transform any space into a visual experience.",
  },
  {
    icon: Lightbulb,
    title: "Stage Lighting Design",
    description:
      "Programmable intelligent lighting, atmospheric design, and stage effects that set the mood and elevate every moment.",
  },
  {
    icon: Wifi,
    title: "Network & Event IT Solutions",
    description:
      "Enterprise-grade networking, Wi-Fi deployment, redundant systems, and on-site technical support for seamless operations.",
  },
  {
    icon: Video,
    title: "Video & Livestream Production",
    description:
      "Multi-camera broadcast production, live streaming, and hybrid event solutions to reach audiences anywhere in the world.",
  },
  {
    icon: Clapperboard,
    title: "Content & Media Creation",
    description:
      "End-to-end video production, professional photography, post-production editing, and branded content that captures every detail.",
  },
];

export function FeaturesSection() {
  const heading = useScrollReveal<HTMLDivElement>();
  const grid = useScrollReveal<HTMLDivElement>({
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <section id="features" className="rounded-b-[2rem] bg-muted pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={cn(
            "reveal-fade-up mx-auto max-w-2xl text-center",
            heading.isVisible && "revealed"
          )}
        >
          <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-5xl">
            Our capabilities,{" "}
            <span className="font-light text-muted-foreground">
              audiovisual, IT, and media production
            </span>
          </h2>
        </div>

        {/* Feature grid */}
        <div
          ref={grid.ref}
          className={cn(
            "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3",
            "reveal-stagger",
            grid.isVisible && "revealed"
          )}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="gap-0 rounded-xl border-border p-0"
                style={{ "--reveal-index": i } as React.CSSProperties}
              >
                <CardContent className="p-5 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold sm:mt-5 sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {feature.description}
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

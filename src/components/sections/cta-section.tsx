"use client";

import Image from "next/image";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  "Real-time event monitoring",
  "Instant tech support",
  "Remote production control",
  "Live stream management",
  "Equipment diagnostics",
  "Post-event analytics",
];

export function CtaSection() {
  const section = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-4 sm:px-6",
          section.isVisible && "revealed"
        )}
      >
        <div className="overflow-hidden rounded-2xl bg-lime sm:rounded-3xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left — image */}
            <div className="relative flex flex-1 items-end justify-center pt-8 sm:pt-12 lg:pt-0">
              <div className="relative h-[280px] w-[220px] sm:h-[360px] sm:w-[280px] lg:h-[480px] lg:w-[300px]">
                <Image
                  src="/hero-2.jpg"
                  alt="AeroVision event management"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right — content */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              <Badge
                variant="secondary"
                className="w-fit gap-2 rounded-full bg-foreground/10 px-4 py-1.5 text-xs font-semibold"
              >
                <Smartphone className="h-3.5 w-3.5" />
                Event Control Hub
              </Badge>

              <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Manage Events
                <br />
                From Anywhere
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
                Monitor your production in real-time, communicate with your crew,
                and control every aspect of your event from our centralized
                platform.
              </p>

              {/* Feature grid */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-xs font-medium">{h}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-6 w-fit rounded-full sm:mt-8">
                <a href="#contact">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

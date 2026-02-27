"use client";

import Image from "next/image";
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

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
    <section className="py-24 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-6",
          section.isVisible && "revealed"
        )}
      >
        <div className="overflow-hidden rounded-3xl bg-lime">
          <div className="flex flex-col lg:flex-row">
            {/* Left — image */}
            <div className="relative flex flex-1 items-end justify-center pt-12 lg:pt-0">
              <div className="relative h-[400px] w-[300px] lg:h-[480px]">
                <Image
                  src="/hero-2.jpg"
                  alt="AeroVision event management"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right — content */}
            <div className="flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
                <Smartphone className="h-3.5 w-3.5" />
                <span className="text-xs font-semibold">
                  Event Control Hub
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
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
              <div className="mt-8 grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-xs font-medium">{h}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

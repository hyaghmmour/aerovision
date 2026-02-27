"use client";

import Image from "next/image";
import { Play, Monitor, Users, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const hero = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="pt-[72px]">
      <div
        ref={hero.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-6 pt-12 md:pt-20",
          hero.isVisible && "revealed"
        )}
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5">
              <Monitor className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent">
                AV Solutions for Every Event & Goal
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]">
              Elevate Your{" "}
              <span className="relative inline-block">
                Events
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8 C50 2, 150 2, 198 8"
                    stroke="#2B2C7C"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              with Professional AV Production
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Transform your conferences, galas, and corporate events with
              cutting-edge audiovisual technology, expert production teams, and
              seamless event execution in the DMV area.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Start Your Project
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Explore Our Process
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-accent/40 to-accent text-xs font-bold text-white"
                  >
                    {["JM", "SK", "AR"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-warm-dark text-warm-dark"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-foreground">
                  500+{" "}
                  <span className="font-normal text-muted-foreground">
                    Events produced
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/hero-bg.jpg"
                alt="Live event production"
                width={640}
                height={520}
                className="h-auto w-full object-cover"
                priority
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Floating badge — top */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                  <Play className="h-2.5 w-2.5 fill-white text-white" />
                </div>
                <span className="text-xs font-semibold">Live Production</span>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs font-semibold text-white">
                  DMV&apos;s #1 AV Team
                </span>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="absolute -bottom-5 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg shadow-black/5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Trusted by 120K+ attendees across events
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

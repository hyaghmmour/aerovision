"use client";

import Image from "next/image";
import { Play, Monitor, Users, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const hero = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="pt-[72px]">
      <div
        ref={hero.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-4 pt-10 sm:px-6 md:pt-20",
          hero.isVisible && "revealed"
        )}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-primary"
            >
              <Monitor className="h-3.5 w-3.5" />
              AV Solutions for Every Event & Goal
            </Badge>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]">
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
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              Transform your conferences, galas, and corporate events with
              cutting-edge audiovisual technology, expert production teams, and
              seamless event execution in the DMV area.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#how-it-works">Explore Our Process</a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-primary text-xs font-bold text-white"
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl lg:aspect-auto lg:h-auto">
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
              <Badge
                variant="secondary"
                className="absolute left-3 top-3 gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm sm:left-4 sm:top-4"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                  <Play className="h-2.5 w-2.5 fill-white text-white" />
                </div>
                Live Production
              </Badge>

              {/* Floating badge — top right */}
              <Badge className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:right-4 sm:top-4">
                DMV&apos;s #1 AV Team
              </Badge>
            </div>

            {/* Bottom bar */}
            <div className="absolute -bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-background px-4 py-3 shadow-lg shadow-black/5 sm:-bottom-5 sm:left-6 sm:right-6 sm:rounded-2xl sm:px-5 sm:py-3.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
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

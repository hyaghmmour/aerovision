"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Video,
  Lightbulb,
  Music,
  MonitorPlay,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Video,
    title: "Live Video Production",
    description:
      "Multi-camera switching, IMAG, live streaming, and broadcast-quality video capture for events of any scale.",
    bg: "bg-pink",
    image: "/hero-bg.jpg",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Lighting Design",
    description:
      "Programmable LED, moving heads, and atmospheric lighting to transform any venue into an immersive experience.",
    bg: "bg-purple",
    image: "/hero-2.jpg",
  },
  {
    icon: Music,
    title: "Professional Sound Systems",
    description:
      "Line array speakers, wireless microphones, and real-time mixing by certified audio engineers.",
    bg: "bg-accent-light",
    image: "/hero-bg.jpg",
  },
  {
    icon: MonitorPlay,
    title: "LED Walls & Displays",
    description:
      "High-resolution LED walls, projection mapping, and digital signage for stunning visual presentations.",
    bg: "bg-warm",
    image: "/hero-2.jpg",
  },
];

export function FeaturesSection() {
  const section = useScrollReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollPos(scrollLeft / (scrollWidth - clientWidth));
  };

  return (
    <section id="features" className="py-24 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-6",
          section.isVisible && "revealed"
        )}
      >
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent">
                Premium Capabilities
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need
              <br />
              for Flawless Events
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            From concept to execution, our full-service AV solutions cover every
            technical need for your event.
          </p>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-12 flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="w-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-border"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Colored image area */}
              <div className={cn("relative h-48", feature.bg)}>
                <div className="absolute inset-4 overflow-hidden rounded-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="p-5">
                <h3 className="text-base font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          {/* Progress bar */}
          <div className="ml-4 h-1 flex-1 rounded-full bg-border">
            <div
              className="h-1 rounded-full bg-accent transition-all duration-300"
              style={{ width: `${Math.max(30, scrollPos * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

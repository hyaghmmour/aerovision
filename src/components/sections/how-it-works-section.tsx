"use client";

import Image from "next/image";
import { Award, Shield, Zap, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Shield,
    title: "Trusted by Industry Leaders.",
    description:
      "Marriott, Hilton, the World Bank, and the Smithsonian trust us to deliver flawless productions for their highest-profile events.",
    cta: "See Our Clients",
    image: "/hero-bg.jpg",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology.",
    description:
      "From 4K LED walls to spatial audio and real-time streaming — we bring the latest AV innovations to every event.",
    cta: "Explore Equipment",
    image: "/hero-2.jpg",
  },
  {
    icon: Users,
    title: "Dedicated Production Crews.",
    description:
      "Every event gets a dedicated team of engineers, directors, and technicians who manage every detail from load-in to wrap.",
    cta: "Meet the Team",
    image: "/hero-bg.jpg",
  },
  {
    icon: Award,
    title: "500+ Events Delivered.",
    description:
      "With hundreds of successful productions across the DMV area, our track record speaks for itself.",
    cta: "View Portfolio",
    image: "/hero-2.jpg",
  },
];

export function WhyChooseUsSection() {
  const section = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-6",
          section.isVisible && "revealed"
        )}
      >
        {/* Section header */}
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5">
            <Award className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-semibold text-accent">
              Why Choose Us
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            The DMV&apos;s Premier
            <br />
            AV Production Partner
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We combine expert teams, cutting-edge technology, and a proven track
            record to deliver events that exceed expectations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
              style={{ "--reveal-index": i } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <div
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white"
                >
                  <reason.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold">{reason.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
                <a
                  href="#"
                  className={cn(
                    "mt-5 inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                    i === 0
                      ? "border-accent bg-accent text-white hover:bg-accent-dark"
                      : "border-border text-foreground hover:bg-muted"
                  )}
                >
                  {reason.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

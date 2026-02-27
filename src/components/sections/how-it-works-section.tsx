"use client";

import Image from "next/image";
import { Award, Shield, Zap, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="about" className="py-20 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-4 sm:px-6",
          section.isVisible && "revealed"
        )}
      >
        {/* Section header */}
        <div className="mx-auto max-w-xl text-center">
          <Badge
            variant="secondary"
            className="gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-primary"
          >
            <Award className="h-3.5 w-3.5" />
            Why Choose Us
          </Badge>
          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            The DMV&apos;s Premier
            <br />
            AV Production Partner
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            We combine expert teams, cutting-edge technology, and a proven track
            record to deliver events that exceed expectations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {reasons.map((reason, i) => (
            <Card
              key={reason.title}
              className="group gap-0 overflow-hidden rounded-2xl border-border p-0 transition-shadow hover:shadow-lg"
              style={{ "--reveal-index": i } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden sm:h-44">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <CardContent className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <reason.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold">{reason.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
                <Button
                  asChild
                  variant={i === 0 ? "default" : "outline"}
                  className="mt-5 rounded-full"
                  size="sm"
                >
                  <a href="#">{reason.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

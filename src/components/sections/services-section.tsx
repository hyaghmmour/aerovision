"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    number: "01",
    title: "Audio Visual Production",
    link: "#",
  },
  {
    number: "02",
    title: "Live Event Management",
    link: "#",
  },
  {
    number: "03",
    title: "Media & Content Creation",
    link: "#",
  },
  {
    number: "04",
    title: "IT & Technical Services",
    link: "#",
  },
];

export function ServicesSection() {
  const section = useScrollReveal<HTMLDivElement>();
  const grid = useScrollReveal<HTMLDivElement>({
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top row: heading + image */}
        <div
          ref={section.ref}
          className={cn(
            "reveal-fade-up flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between",
            section.isVisible && "revealed"
          )}
        >
          {/* Left */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-5xl">
              Trusted service,{" "}
              <span className="font-light text-muted-foreground">
                for your various needs
              </span>
            </h2>
            <Button asChild className="mt-6 rounded-full sm:mt-8">
              <a href="#contact">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right — image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl sm:h-[300px] md:h-[360px] md:w-[45%]">
            <Image
              src="/hero-2.jpg"
              alt="Event production team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Service cards grid */}
        <div
          ref={grid.ref}
          className={cn(
            "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-14",
            "reveal-stagger",
            grid.isVisible && "revealed"
          )}
        >
          {services.map((service, i) => (
            <Card
              key={service.number}
              className="group gap-0 rounded-xl border-border p-0 transition-colors hover:border-foreground/20"
              style={{ "--reveal-index": i } as React.CSSProperties}
            >
              <CardContent className="p-5 sm:p-6">
                <span className="text-sm font-bold text-muted-foreground/40">
                  {service.number}
                </span>
                <h3 className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">
                  {service.title}
                </h3>
                <a
                  href={service.link}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground sm:mt-3"
                >
                  View Details
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

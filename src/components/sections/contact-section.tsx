"use client";

import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(202) 555-0180",
    href: "tel:+12025550180",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@aerovision.com",
    href: "mailto:hello@aerovision.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Washington, DC Metro Area",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9AM – 6PM EST",
    href: "#",
  },
];

export function ContactSection() {
  const section = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-6",
          section.isVisible && "revealed"
        )}
      >
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-20">
          {/* Left — info */}
          <div className="lg:max-w-sm lg:pt-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-4 py-1.5">
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent">
                Contact Us
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s bring your
              <br />
              event to life
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tell us about your upcoming event and our team will get back to you
              within 24 hours with a custom proposal.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-accent-light">
                    <item.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 rounded-2xl border border-border bg-white p-8 md:p-10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">
                  Event Type
                </label>
                <select className="w-full appearance-none rounded-xl border border-border bg-muted px-4 py-3 text-sm text-muted-foreground outline-none transition-colors focus:border-foreground/30 focus:bg-white">
                  <option value="">Select an event type</option>
                  <option value="conference">Conference</option>
                  <option value="gala">Gala / Awards</option>
                  <option value="corporate">Corporate Meeting</option>
                  <option value="concert">Concert / Performance</option>
                  <option value="tradeshow">Trade Show / Expo</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">
                  Tell us about your event
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your event, venue, expected attendance, and any specific AV needs..."
                  className="w-full resize-none rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

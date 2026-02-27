"use client";

import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <section id="contact" className="py-20 md:py-32">
      <div
        ref={section.ref}
        className={cn(
          "reveal-fade-up mx-auto max-w-7xl px-4 sm:px-6",
          section.isVisible && "revealed"
        )}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Left — info */}
          <div className="lg:max-w-sm lg:pt-4">
            <Badge
              variant="secondary"
              className="gap-2 rounded-full bg-accent-light px-4 py-1.5 text-xs font-semibold text-primary"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact Us
            </Badge>
            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Let&apos;s bring your
              <br />
              event to life
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tell us about your upcoming event and our team will get back to you
              within 24 hours with a custom proposal.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-accent-light">
                    <item.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
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
          <Card className="flex-1 gap-0 rounded-2xl border-border p-0">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="rounded-xl bg-muted"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      className="rounded-xl bg-muted"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="rounded-xl bg-muted"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Event Type</Label>
                  <Select>
                    <SelectTrigger className="w-full rounded-xl bg-muted">
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="gala">Gala / Awards</SelectItem>
                      <SelectItem value="corporate">Corporate Meeting</SelectItem>
                      <SelectItem value="concert">Concert / Performance</SelectItem>
                      <SelectItem value="tradeshow">Trade Show / Expo</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Tell us about your event</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your event, venue, expected attendance, and any specific AV needs..."
                    className="resize-none rounded-xl bg-muted"
                  />
                </div>

                <Button type="submit" className="mt-2 rounded-full">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

"use client";

import { AeroVisionLogo } from "@/components/aerovision-logo";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <AeroVisionLogo size={28} color="#2B2C7C" />
          <span className="text-base font-bold tracking-tight text-foreground">
            AeroVision
          </span>
        </a>

        {/* Center nav — desktop */}
        <div className="hidden items-center gap-1 rounded-full border border-border bg-background px-2 py-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side — desktop */}
        <Button asChild className="hidden rounded-full md:inline-flex">
          <a href="#contact">Request a Quote</a>
        </Button>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <SheetHeader>
              <SheetTitle>
                <a href="#" className="flex items-center gap-2">
                  <AeroVisionLogo size={24} color="#2B2C7C" />
                  <span className="text-base font-bold tracking-tight">
                    AeroVision
                  </span>
                </a>
              </SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose key={link.label} asChild>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </div>
            <div className="mt-auto px-4 pb-4">
              <SheetClose asChild>
                <Button asChild className="w-full rounded-full">
                  <a href="#contact">Request a Quote</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

import { AeroVisionLogo } from "@/components/aerovision-logo";
import { Separator } from "@/components/ui/separator";

const links = {
  Services: [
    "Audiovisual Production",
    "IT & Technology Services",
    "Media Production",
    "Live Streaming",
    "Event IT Solutions",
  ],
  Company: ["About Us", "Industries", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Equipment List", "FAQ", "Support", "Partners"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-10 sm:gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2">
              <AeroVisionLogo size={28} color="#0F172A" />
              <span className="text-base font-bold tracking-tight">
                AeroVision
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Audiovisual, IT, and media production solutions serving
              Washington DC, Maryland, and Virginia.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <p className="text-sm font-bold">{heading}</p>
                <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="mt-10 sm:mt-12" />
        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AeroVision. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { AeroVisionLogo } from "@/components/aerovision-logo";

const links = {
  Services: [
    "Live Production",
    "Sound Systems",
    "Lighting Design",
    "LED Walls",
    "Streaming",
  ],
  Company: ["About", "Portfolio", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Equipment List", "FAQ", "Support", "Partners"],
};

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2">
              <AeroVisionLogo size={28} color="#0F172A" />
              <span className="text-base font-bold tracking-tight">
                AeroVision
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premier audiovisual and event production company serving the DMV
              area and beyond.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-16">
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <p className="text-sm font-bold">{heading}</p>
                <ul className="mt-4 space-y-3">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
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

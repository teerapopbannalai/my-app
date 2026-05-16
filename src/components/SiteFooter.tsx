import Link from "next/link";

const footerLinks = ["INSTAGRAM", "FACEBOOK", "TERMS", "PRIVACY"] as const;

export function SiteFooter({ variant = "default" }: { variant?: "default" | "about" }) {
  if (variant === "about") {
    return (
      <footer className="bg-primary text-on-primary">
        <div className="w-full px-edge-margin-mobile md:px-edge-margin-desktop py-stack-gap-lg flex flex-col md:flex-row justify-between items-center gap-stack-gap-md max-w-container-max mx-auto">
          <div className="font-display-lg text-headline-md text-on-primary">NAWAPORN</div>
          <div className="flex gap-stack-gap-md flex-wrap justify-center">
            {footerLinks.map((label) => (
              <Link
                key={label}
                href="#"
                className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim hover:text-on-primary transition-colors duration-300 focus:underline decoration-1 underline-offset-4"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="font-body-md text-body-md text-secondary-fixed-dim opacity-60">
            © 2024 NAWAPORN. ARCHITECTURAL SILHOUETTES.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-on-primary">
      <div className="w-full px-edge-margin-mobile md:px-edge-margin-desktop py-stack-gap-lg flex flex-col md:flex-row justify-between items-center gap-stack-gap-md max-w-container-max mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-display-lg text-headline-md text-on-primary">NAWAPORN</span>
          <p className="font-label-sm text-label-sm uppercase tracking-widest opacity-60">
            © 2024 NAWAPORN. ARCHITECTURAL SILHOUETTES.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          {footerLinks.map((label) => (
            <Link
              key={label}
              href="#"
              className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim hover:text-on-primary transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}



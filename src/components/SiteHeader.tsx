import Link from "next/link";

type NavPage = "home" | "about" | "news" | "cart";

const navItems: { key: NavPage; label: string; href: string }[] = [
  { key: "home", label: "HOME", href: "/" },
  { key: "about", label: "ABOUT", href: "/about" },
  { key: "news", label: "NEWS", href: "#" },
  { key: "cart", label: "CART", href: "#" },
];

export function SiteHeader({ activePage }: { activePage: NavPage }) {
  return (
    <header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-edge-margin-mobile md:px-edge-margin-desktop py-5 max-w-container-max mx-auto h-[80px]">
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="font-display-lg text-headline-lg tracking-tighter text-primary leading-none"
          >
            NAWAPORN
          </Link>
        </div>

        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map(({ key, label, href }) => (
            <Link
              key={key}
              href={href}
              className={`font-label-sm text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 pb-1 ${
                activePage === key
                  ? "text-primary border-b-2 border-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex items-center gap-2 font-label-sm text-[10px] tracking-widest">
            <button type="button" className="text-secondary hover:text-primary transition-colors">
              TH
            </button>
            <span className="text-outline-variant text-[8px]">/</span>
            <button type="button" className="text-primary font-bold">
              EN
            </button>
          </div>
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="hover:opacity-60 transition-opacity duration-300 active:scale-90 transition-transform"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">search</span>
            </button>
            <button
              type="button"
              className="hover:opacity-60 transition-opacity duration-300 active:scale-90 transition-transform relative"
              aria-label="Shopping bag"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">shopping_bag</span>
            </button>
            <button type="button" className="md:hidden" aria-label="Menu">
              <span className="material-symbols-outlined text-primary">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

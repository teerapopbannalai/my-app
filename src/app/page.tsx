import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAII19VBiJognBryrPFVbOS69Y6Mt07PfAlC4LQ6TtEPuPz2iQKKs0cuvl0PqZ-iNvEV6DbN1jCamRLI-jD9VrRYEGU4rGUl9gsPTFl55PAOSxCC9VwwkiTSTPA1FJTuSEE_fIaiGyhzYETEc8ZJfwIcmB5nxDfUZLBSm38HcWJph-qSEfsAAuO_vJfMkOit1ZVHw3T9w2qO40Iv-Mhg9SGto9Z3CSQFzWAQecX1PxG6aqEMRvyOph6bSN012l9bzNfGyFOpJr37jt2";

const PRODUCTS = {
  featured: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBx9APbEA0mWGyYsmvdHB53yEOY02yx7bwqo8z7X7VxXjs4nfKR-mnM4KOVN0QesYgf0mfyBZi94iRPEDh3AIJZtAECFjMU7vjGWA1swHLN9fXEY6lbx_FG56lvXY-1R8WNxAcCbInm_egxXBMxJ59u6XP9VgKZ3ukowOjIXxWHgERjRYFDd9HyNX8nHUBlqtjcHSrFpc5DFyHro31AlNwSrJ6BeaDEF1hTdquTlOqiYHYA7IAUqZ20aGtkTlJCfyg-TgS7dHQk1Ri",
    alt: "Premium White T-Shirt",
    title: "ESSENTIAL OVERSIZED TEE",
    subtitle: "White / Heavyweight Cotton",
    price: "฿1,290",
  },
  architectural: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOZilbZPY2-NHOmEp53xp94_RyzgwgZMCplT4Rg2V9uQ6i473UWNNt9muupP_6cdM_gcdFg17GVlg_XzLhoCzQmX2VEgFqKLfpFJbJdvFqEPnxsK8q9sSbjb6cHZpzIY5_4wRYv7VZz0EqURjI_oZtXI0W2nIESfpgK9h-Br2X6qrLeaJji4tYDeAAvg0Cm7ZtTSiZTEXOiuPRnUmBIVUvq_gok6BqygAhP_FP4-1S8Pp1Bh-EQO8ByEo-26_IJrMIEvg73_Cb3b5h",
    alt: "Signature Black Shirt",
    title: "ARCHITECTURAL SHIRT",
    subtitle: "Black / Japanese Poplin",
    price: "฿2,490",
  },
  grid: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSukFeTTtGHuwC5gcbN51NK_7ZtYReC4tHAv6xBYcpFBuKfMl0AeJACLIf2FP4R4mHbv4ZK9VeFEM-lr7uGxApTDYeKRX6AH4vdO3nKWykjhICqOYVgo-f9cIqpa75m-KFDDbXBDS-B9HNj9o853v1XZxw_hPkOu24dbH0hhT4x5pQCqNOf68dlFxQ4uZJGTd61YS8sXyACBsJ_SbNVGrure7RmaciuAPDz5h9D8rr-PlsUC3wSsiaTT2lCrw_m9ZyuDzuwGNsWj4e",
      alt: "Relaxed Fit Shirt",
      title: "RELAXED POPLIN SHIRT",
      price: "฿1,890",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_wHd2XTCuKD1A_ZsecjHJL8MtVCvwSt_zQYWz-DytjweKStT4e95ccYhCrhRsstjqBEClOTjK11Y9xBDDJOIsBPjZNJpIDJKeVPcwp8zVuvuPp7Wb1Q1pSJP1RjQ5SikBvr5IOGBejYiM73OoCBoSeo5L8IzhrrBjjhz9dyvmx-BSDxCEQoHfKfhk9aRw94JDRBd4HJc85cvP71XHt-I5L21JT-cBtG6x9HTPPQgC4a083QsyO4GUHMCz8FE68qDN1VGqhsfQ6Tv",
      alt: "Minimalist Tee",
      title: "SIGNATURE CREW TEE",
      price: "฿990",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxwlpcxxc5LX2idsh4f09zqWMy_uJYu-fg9L-2XWfs_lPH58hWjdnhmyiScAxLePZeSgWsHhk9zx9AfqNaYV3Yvv9JLh40jnCG1YPDEPFRIhgncQEir8ePY7SdWK2DfimgqxELvduELtqpJrKPXhEVTrVBOLiZIasktrbFChvIdy25BGCkAEzM5-3uJ4pimq2jbGtyS_XYYqoUuN0OXXYPt6QXJA3HYVug9I7Gv-ePYdI2ugwx02bv3DFlY-4fvYi-1kLX443Bh4_x",
      alt: "Luxury Basics",
      title: "STUDIO WORK SHIRT",
      price: "฿2,190",
    },
  ],
} as const;

function AddToCartButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`font-label-sm text-label-sm uppercase tracking-widest border border-primary px-4 py-2 hover:bg-primary hover:text-on-primary transition-all duration-300 active:scale-95 ${className}`}
    >
      ADD TO CART
    </button>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader activePage="home" />

      <main className="pt-[80px]">
        <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_IMAGE}
              alt="Man in minimalist Korean fashion"
              fill
              priority
              className="object-cover grayscale brightness-90"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 text-center px-edge-margin-mobile">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-primary mb-4">
              New Season / 2024
            </p>
            <h1 className="font-display-lg text-[40px] md:text-display-lg text-on-primary mb-12 tracking-tighter leading-none">
              NAWAPORN:
              <br />
              THE ESSENTIAL SILHOUETTE
            </h1>
            <Link
              href="#"
              className="inline-block bg-white text-black px-12 py-5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 border border-white"
            >
              SHOP COLLECTION
            </Link>
          </div>
        </section>

        <section className="py-section-gap px-edge-margin-mobile max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 tracking-tight">
            Simplicity Refined with Precision
          </h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto text-secondary">
            Designs centered on the purity of form and the quality of textiles, reflecting identity
            through unique silhouettes in the signature NAWAPORN aesthetic.
          </p>
        </section>

        <section className="pb-section-gap px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">
                Selected Works
              </span>
              <h2 className="font-headline-lg text-headline-lg tracking-tight">BESTSELLER</h2>
            </div>
            <Link href="#" className="font-label-sm text-label-sm border-b border-primary pb-1">
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg">
            <div className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 border border-outline-variant">
                <Image
                  src={PRODUCTS.featured.src}
                  alt={PRODUCTS.featured.alt}
                  fill
                  className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-headline-md text-headline-md mb-1 uppercase">
                    {PRODUCTS.featured.title}
                  </h3>
                  <p className="font-body-md text-secondary">{PRODUCTS.featured.subtitle}</p>
                </div>
                <p className="font-headline-md text-headline-md">{PRODUCTS.featured.price}</p>
                <div className="w-full flex justify-end mt-4">
                  <AddToCartButton />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-stack-gap-lg">
              <div className="flex flex-col group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-surface-container mb-6 border border-outline-variant">
                  <Image
                    src={PRODUCTS.architectural.src}
                    alt={PRODUCTS.architectural.alt}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex justify-between items-start flex-wrap">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-1 uppercase">
                      {PRODUCTS.architectural.title}
                    </h3>
                    <p className="font-body-md text-secondary">{PRODUCTS.architectural.subtitle}</p>
                  </div>
                  <p className="font-headline-md text-headline-md">{PRODUCTS.architectural.price}</p>
                  <div className="w-full flex justify-end mt-4">
                    <AddToCartButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md mt-stack-gap-lg">
            {PRODUCTS.grid.map((product) => (
              <div key={product.title} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container mb-4 border border-outline-variant">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-label-sm text-label-sm uppercase mb-1">{product.title}</h3>
                <p className="font-body-md font-bold">{product.price}</p>
                <AddToCartButton className="mt-4 w-full py-2" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-on-primary py-section-gap">
          <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display-lg text-headline-lg-mobile md:text-[48px] mb-8 leading-tight tracking-tighter">
                THE DISCIPLINE OF MONOCHROME.
              </h2>
              <p className="font-body-lg text-secondary-fixed-dim mb-10 max-w-md">
                We believe in the power of restraint and timeless tailoring. Every piece is an
                exploration of the balance between form and function.
              </p>
              <Link
                href="/about"
                className="inline-block border border-on-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all"
              >
                DISCOVER THE PHILOSOPHY
              </Link>
            </div>
            <div className="order-1 md:order-2 aspect-square bg-neutral-900 border border-neutral-800 p-12 flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-[80px] text-on-primary/20 mb-6">
                  architecture
                </span>
                <p className="font-label-sm text-label-sm uppercase tracking-[0.4em] opacity-40">
                  Architectural Line
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-edge-margin-mobile text-center">
          <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-6">
            JOIN OUR UNIVERSE
          </h3>
          <p className="font-headline-md text-headline-md mb-10">
            Subscribe for early access to new collections and exclusive updates.
          </p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input
              className="flex-1 bg-transparent border border-outline-variant px-6 py-4 focus:border-primary outline-none font-label-sm text-label-sm"
              placeholder="EMAIL ADDRESS"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90"
            >
              SUBSCRIBE
            </button>
          </form>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

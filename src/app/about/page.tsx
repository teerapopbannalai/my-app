import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAozBV2raUS2BSGwobwK1BHkb-uLHuVJ1OapuzGBoNfaJBbIxk3Uv3mHRTLgGEKmZFgRrin7x4rPu4mJPSsjmCHdsnyrACBXvPKRnzAYDitKFJVko9GAY3fhAbf68ckopLrxk0aJkV2FVRozzjNEJhwnL4YT4-QljFhcEdWtT9T5JNxOEUBQKzhSu5lDtlZZ2fapgFdQOJ0NbMXcrS_aWSmviKz-gGORWvCSqWRQzNKx-KO9hATCYDXNyMAG7XPMcvd46jf-Kw9Vb6P";

const FABRIC_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJSmdSRaji9juAf-LaXl--Q3xadoqams2C8TIGVPmq0GTEiot9QDKCeGdIU5rXpc4gkfhZ2n47i8Z6KYptBQD8XNsY02c6bi7mUYygF02zqNOjEIkDxWFhslDStGkPs68pt5z96IFn6x0quV9Yj97SRz3ZpQsdPuFvuw9CVjGx5CYVqn_2Tq1FdoKCBBSGml1BVpguyOlq7brf09Mt0PfB3Ktst4QVsnSaDqoems9cDz6WQwVOv53EkFr_bvC_Unf2825juE864gei";

const CRAFT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZhgFUvaMI_DwjV51GS_G5PhT8LXiYN0ORMdF295qAvvjbEa6AH3GIPMgYSloGbz_7-pDVErBAlATgqE6n03TcxOoVafcGCHxDZ4tyCaz5AebCHjVJ1nF7DU_Vd2HFiKKn7DlVNWkb3UHwC72UftzADLO2kgI9Lri760cQOQGCcGwVuymZEmCho9GIbpV3Okok1ayPKFQ9V-SdUm5F6r8Vzp-JCVg4-jHj1xmKL-jQCCVCguo4YKMt4L0vUXvaA6rd-7D1rOIR5OD3";

export const metadata: Metadata = {
  title: "About Us — NAWAPORN",
  description: "Everyday architecture — the NAWAPORN design philosophy",
};

export default function AboutPage() {
  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface">
      <SiteHeader activePage="about" />

      <main className="pt-[80px]">
        <section className="px-edge-margin-mobile md:px-edge-margin-desktop mb-section-gap max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 mb-stack-gap-lg md:mb-0">
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-stack-gap-md">
                EVERYDAY <br className="hidden md:block" /> ARCHITECTURE
              </h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-md">
                Simplicity engineered for reality. NAWAPORN&apos;s design philosophy creates
                garments that define your identity for every morning you don&apos;t know what to
                wear.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
                <Image
                  src={HERO_IMAGE}
                  alt="Minimalist architecture and fashion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-section-gap px-edge-margin-mobile md:px-edge-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-5 md:col-start-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-stack-gap-md">
                  THE PHILOSOPHY
                </span>
                <h2 className="font-headline-lg text-headline-lg mb-stack-gap-lg">
                  The Singular Choice for Every Day
                </h2>
                <p className="font-body-md text-body-md text-on-surface mb-stack-gap-md">
                  NAWAPORN was founded with the intention of solving the modern man&apos;s
                  &quot;what to wear&quot; dilemma. We believe great clothing shouldn&apos;t shout;
                  it should communicate through exceptional cutting and material.
                </p>
                <p className="font-body-md text-body-md text-on-surface">
                  We blend the refinement of Korean aesthetics with the contemporary edge of
                  high-end streetwear to create silhouettes that are minimal yet powerful.
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-8 mt-stack-gap-lg md:mt-0">
                <div className="aspect-square bg-white border border-outline-variant p-stack-gap-lg flex flex-col justify-center items-center text-center">
                  <span className="font-display-lg text-display-lg mb-2">01</span>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                    SILENT LUXURY
                  </p>
                  <p className="mt-4 text-secondary">A luxury that is quiet and commanding.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-edge-margin-mobile md:px-edge-margin-desktop py-section-gap max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-stack-gap-lg">
            <div className="flex-1">
              <div className="relative aspect-[3/4] bg-surface-container mb-stack-gap-md overflow-hidden">
                <Image
                  src={FABRIC_IMAGE}
                  alt="Fabric detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Tactile Quality</h3>
              <p className="text-secondary">
                Every fiber is selected for all-day comfort, regardless of the climate.
              </p>
            </div>
            <div className="flex-1 md:mt-stack-gap-lg">
              <div className="relative aspect-[3/4] bg-surface-container mb-stack-gap-md overflow-hidden">
                <Image
                  src={CRAFT_IMAGE}
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Architectural Precision</h3>
              <p className="text-secondary">
                We view garments as structures that enhance persona, ensuring every movement is
                naturally elegant.
              </p>
            </div>
          </div>
        </section>

        <section className="py-section-gap text-center px-edge-margin-mobile">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display-lg text-headline-lg mb-stack-gap-lg uppercase tracking-tight">
              DISCOVER YOUR UNIFORM
            </h2>
            <p className="font-body-lg text-body-lg mb-stack-gap-lg text-secondary">
              Join us in embracing a sustainable, minimalist way of life.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary text-on-primary px-12 py-5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-white hover:text-primary border border-primary transition-all duration-300"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter variant="about" />
    </div>
  );
}


import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const phoneNumber = "9048889557";
const phoneLabel = "(904) 888-9557";

export const metadata: Metadata = {
  title: "Tree Service Gallery | All American Tree Service",
  description:
    "View tree removal, trimming, stump grinding, land clearing, and cleanup work from All American Tree Service & More LLC.",
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=1400&q=80",
    alt: "Arborist using a chainsaw during tree removal work",
    title: "Hazardous Tree Removal",
    category: "Removal",
    className: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1767642321050-23f637b1f0be?auto=format&fit=crop&w=1400&q=80",
    alt: "Arborist trimming tree branches from a lift",
    title: "Canopy Trimming",
    category: "Trimming",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1641366784341-446c64b421a2?auto=format&fit=crop&w=1400&q=80",
    alt: "Worker using a chainsaw to cut a large log",
    title: "Large Log Cutting",
    category: "Cleanup",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1651447041389-1f499536b4cb?auto=format&fit=crop&w=1400&q=80",
    alt: "Pile of cut logs after tree removal work",
    title: "Debris Haul-Off",
    category: "Debris Removal",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1580852827691-c192e508fa7e?auto=format&fit=crop&w=1400&q=80",
    alt: "Tree stump with chainsaw cut marks after felling",
    title: "Stump Prep",
    category: "Stump Grinding",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1645687577027-1f7cda8470c4?auto=format&fit=crop&w=1400&q=80",
    alt: "Cut tree stump showing recent removal work",
    title: "Clean Finish",
    category: "Cleanup",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    alt: "Green property with mature trees and maintained landscaping",
    title: "Property Care",
    category: "Maintenance",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
    alt: "Tall forest trees viewed from below",
    title: "Tree Assessment",
    category: "Inspection",
    className: "md:col-span-2",
  },
];

const categories = [
  "Tree Removal",
  "Trimming",
  "Stump Grinding",
  "Storm Cleanup",
  "Land Clearing",
  "Debris Removal",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-8 sm:py-3">
          <Link href="/" className="flex min-w-0 items-center">
            <Image
              src="/logos/logo.png"
              alt="All American Tree Service & More LLC"
              width={1120}
              height={364}
              priority
              className="h-14 w-auto sm:h-20 lg:h-24"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/#estimate"
              className="hidden rounded-full border border-lime-300/40 px-5 py-3 text-sm font-black text-white transition hover:bg-lime-300/10 sm:inline-flex"
            >
              Free Estimate
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              className="rounded-full bg-lime-400 px-5 py-3 text-sm font-black text-black shadow-[0_0_32px_rgba(132,204,22,0.45)] transition hover:bg-lime-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:pt-44">
        <Image
          src="https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=2200&q=80"
          alt="Professional tree service worksite"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.82)_48%,rgba(0,0,0,0.62)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black via-black/30 to-black/70" />

        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/15 bg-black/55 px-4 py-2 text-sm font-black text-lime-200 backdrop-blur transition hover:border-lime-300/50"
          >
            Back to Home
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-lime-300">
              Work Gallery
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Real tree work. Clean finished results.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Browse examples of removals, trimming, stump work, land clearing,
              storm cleanup, and debris haul-off for homeowners across Northeast
              Florida.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="rounded-full bg-lime-400 px-8 py-4 text-center text-lg font-black text-black shadow-[0_0_45px_rgba(132,204,22,0.55)] transition hover:bg-lime-300"
              >
                Call Now: {phoneLabel}
              </a>
              <Link
                href="/#estimate"
                className="rounded-full border border-lime-300/50 bg-white/10 px-8 py-4 text-center text-lg font-black text-white backdrop-blur transition hover:bg-lime-300/10"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-lime-300/25 bg-lime-400/10 px-4 py-2 text-sm font-black text-lime-100"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid auto-rows-[280px] gap-5 md:grid-cols-3">
            {galleryImages.map((image) => (
              <article
                key={image.src}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-xl shadow-black ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-lime-300">
                    {image.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    {image.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-lime-300/25 bg-lime-400/10 p-6 shadow-[0_0_45px_rgba(132,204,22,0.16)] md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-300">
              Need This Kind Of Result?
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
              Send photos and get a fast free estimate.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              Tell the crew what needs to be removed, trimmed, cleared, or
              hauled away. For urgent hazards, call directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/#estimate"
              className="rounded-full bg-lime-400 px-7 py-4 text-center font-black text-black transition hover:bg-lime-300"
            >
              Start Estimate
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              className="rounded-full border border-lime-300/50 px-7 py-4 text-center font-black text-white transition hover:bg-lime-300/10"
            >
              Call {phoneLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

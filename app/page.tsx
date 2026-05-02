"use client";

import { FormEvent, PointerEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const phoneNumber = "9048889557";
const phoneLabel = "(904) 888-9557";

const companyProfile = {
  name: "All American Tree Service & More LLC",
  summary:
    "All American Tree Service & More LLC is a local, licensed and insured tree service company focused on safe removals, trimming, land clearing, storm cleanup, debris removal, stump grinding, and 24/7 emergency response.",
  phone: phoneLabel,
  promise:
    "Fast local response, free estimates, clean job sites, and professional tree work for homeowners and property owners across Northeast Florida.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const services = [
  {
    icon: "🌳",
    title: "Tree Trimming & Removal",
    description:
      "Precision trimming, hazardous limb removal, and full removals handled with property protection in mind.",
    photo:
      "https://images.unsplash.com/photo-1767642321050-23f637b1f0be?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "🪵",
    title: "Stump Grinding",
    description:
      "Fast grinding that clears ugly stumps, reduces trip hazards, and gets your yard ready for its next use.",
    photo:
      "https://images.unsplash.com/photo-1580852827691-c192e508fa7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "🚜",
    title: "Land Clearing",
    description:
      "Brush, small tree, and overgrowth clearing for lots, driveways, fence lines, and outdoor projects.",
    photo:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "🧹",
    title: "Debris Removal",
    description:
      "Clean haul-off for limbs, logs, brush piles, and storm debris so the job looks finished.",
    photo:
      "https://images.unsplash.com/photo-1651447041389-1f499536b4cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "⛈️",
    title: "Storm Cleanup",
    description:
      "Rapid cleanup after rough weather, fallen limbs, blocked access, and damaged trees.",
    photo:
      "https://images.unsplash.com/photo-1641366784341-446c64b421a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: "🚨",
    title: "Emergency Tree Service",
    description:
      "24/7 response when a tree threatens your home, roof, driveway, power access, or business.",
    photo:
      "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=900&q=80",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Before/After", href: "#beforeafter" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const beforeAfter = [
  {
    title: "Hazardous Tree Removal",
    location: "Storm-damaged tree cleanup",
    result: "Unsafe canopy removed, logs cut down, and access restored.",
    highlights: ["Hazard reduced", "Clean haul-off", "Property protected"],
    before:
      "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1651447041389-1f499536b4cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Stump & Log Cleanup",
    location: "Post-removal yard reset",
    result: "Stump area cleared and bulky debris staged for a cleaner finish.",
    highlights: ["Trip hazards removed", "Yard opened up", "Ready for next use"],
    before:
      "https://images.unsplash.com/photo-1580852827691-c192e508fa7e?auto=format&fit=crop&w=1200&q=80",
    after:
      "https://images.unsplash.com/photo-1641366784341-446c64b421a2?auto=format&fit=crop&w=1200&q=80",
  },
];

const whyChooseUs = [
  { icon: "🛡️", label: "Licensed & Insured" },
  { icon: "🤝", label: "Family Owned & Operated" },
  { icon: "⚡", label: "Fast Response Time" },
  { icon: "💬", label: "Free Estimates" },
  { icon: "🪓", label: "Experienced Crew" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=1200&q=80",
    alt: "Arborist using a chainsaw during tree removal work",
    className: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1767642321050-23f637b1f0be?auto=format&fit=crop&w=1200&q=80",
    alt: "Arborist trimming tree branches from a lift",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1641366784341-446c64b421a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Worker using a chainsaw to cut a large log",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1651447041389-1f499536b4cb?auto=format&fit=crop&w=1200&q=80",
    alt: "Pile of cut logs after tree removal work",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1580852827691-c192e508fa7e?auto=format&fit=crop&w=1200&q=80",
    alt: "Tree stump with chainsaw cut marks after felling",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1645687577027-1f7cda8470c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Cut tree stump showing recent removal work",
    className: "",
  },
];

const serviceAreas = [
  "Middleburg, FL",
  "Jacksonville, FL",
  "Orange Park, FL",
  "Clay County",
  "Baker County",
];

const testimonials = [
  {
    name: "Michael R.",
    review:
      "They came out fast after a storm, removed a dangerous limb, and left the yard cleaner than it was before.",
  },
  {
    name: "Angela T.",
    review:
      "Professional, fair, and easy to work with. The crew handled a big removal without damaging the fence.",
  },
  {
    name: "David S.",
    review:
      "Called for an estimate and had the work scheduled quickly. Great communication from start to finish.",
  },
  {
    name: "Samantha L.",
    review:
      "The stump grinding and debris cleanup made the property look brand new. Highly recommend them.",
  },
];

const urgencyOptions = [
  "Emergency today",
  "This week",
  "Planning ahead",
];

const propertyTypes = ["Residential", "Commercial", "Land / Acreage"];

const faqs = [
  {
    question: "Do you offer emergency tree service?",
    answer:
      "Yes. All American Tree Service & More LLC promotes 24/7 emergency availability for hazardous trees, storm damage, blocked access, and urgent removals.",
  },
  {
    question: "Can I send photos before someone comes out?",
    answer:
      "Yes. The estimate form includes a tree photo upload field so the crew can better understand the job before following up.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "The main service areas listed are Middleburg, Jacksonville, Orange Park, Clay County, and Baker County.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. The site is built around free estimate requests and direct phone calls for fast response.",
  },
];

const quickChatPrompts = [
  "I have an emergency",
  "I need a free estimate",
  "What areas do you serve?",
  "What services do you offer?",
];

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

const initialChatMessages: ChatMessage[] = [
  {
    role: "bot",
    text: `Hi, I’m the virtual assistant for ${companyProfile.name}. Do you need emergency help, a free estimate, or service area information?`,
  },
];

function getChatbotResponse(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("emergency") ||
    text.includes("storm") ||
    text.includes("fallen") ||
    text.includes("danger")
  ) {
    return `For urgent tree issues, call ${phoneLabel} now. All American Tree Service & More LLC offers 24/7 emergency tree removal for storm damage, hazardous trees, blocked access, and dangerous limbs.`;
  }

  if (
    text.includes("estimate") ||
    text.includes("quote") ||
    text.includes("price") ||
    text.includes("cost")
  ) {
    return "You can request a free estimate using the form below. Include your name, phone, address, service needed, message, and tree photos if you have them.";
  }

  if (
    text.includes("area") ||
    text.includes("serve") ||
    text.includes("middleburg") ||
    text.includes("jacksonville") ||
    text.includes("orange park")
  ) {
    return `Service areas include ${serviceAreas.join(", ")}. If you are nearby, call ${phoneLabel} to confirm availability.`;
  }

  if (
    text.includes("service") ||
    text.includes("trim") ||
    text.includes("stump") ||
    text.includes("clear") ||
    text.includes("debris") ||
    text.includes("remove")
  ) {
    return `Services include ${services.map((service) => service.title).join(", ")}. The fastest next step is to call ${phoneLabel} or submit the free estimate form.`;
  }

  return `Thanks for reaching out. For the fastest help, call ${phoneLabel}. You can also use the estimate form to send details and upload tree photos.`;
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyProfile.name,
  telephone: `+1${phoneNumber}`,
  description: companyProfile.summary,
  areaServed: serviceAreas,
  serviceType: services.map((service) => service.title),
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Middleburg",
    addressRegion: "FL",
    addressCountry: "US",
  },
};

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  delay: index * 0.18,
}));

const smokePlumes = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  top: `${(index * 31) % 100}%`,
  size: 220 + ((index * 53) % 170),
  delay: index * 0.65,
}));

type GalleryImage = (typeof galleryImages)[0];
type Service = (typeof services)[0];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-sm font-black uppercase tracking-[0.34em] text-lime-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-zinc-400">{description}</p>
      ) : null}
    </motion.div>
  );
}

function BeforeAfterCard({ item }: { item: (typeof beforeAfter)[0] }) {
  const [position, setPosition] = useState(50);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black transition hover:border-lime-300/35 hover:shadow-[0_0_55px_rgba(132,204,22,0.16)]"
    >
      <div className="relative h-[360px] overflow-hidden sm:h-[460px]">
        <Image
          src={item.after}
          alt={`${item.title} after`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.title} before`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover grayscale contrast-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
        <div
          className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-lime-300 shadow-[0_0_28px_rgba(190,242,100,0.95)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-lime-200 bg-black/85 text-lg font-black text-lime-200 shadow-[0_0_30px_rgba(132,204,22,0.6)] backdrop-blur">
            |||
          </span>
        </div>
        <div className="absolute left-4 top-4 z-10 rounded-full border border-red-300/30 bg-red-600/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg">
          Before
        </div>
        <div className="absolute right-4 top-4 z-10 rounded-full bg-lime-400 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black shadow-lg">
          After
        </div>
        <div className="absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] border border-white/10 bg-black/72 p-4 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-300">
                Slide to compare
              </p>
              <p className="mt-1 text-sm font-bold text-zinc-200">
                {position}% reveal
              </p>
            </div>
            <input
              aria-label={`Compare before and after for ${item.title}`}
              type="range"
              min="12"
              max="88"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="before-after-range w-full accent-lime-300 sm:max-w-64"
            />
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-300">
          {item.location}
        </p>
        <h3 className="mt-3 text-3xl font-black text-white">{item.title}</h3>
        <p className="mt-3 leading-7 text-zinc-400">{item.result}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-lime-300/20 bg-lime-400/10 px-3 py-2 text-xs font-black text-lime-100"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedUrgency, setSelectedUrgency] = useState(urgencyOptions[0]);
  const [selectedProperty, setSelectedProperty] = useState(propertyTypes[0]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(initialChatMessages);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1900);

    return () => window.clearTimeout(timer);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    pageRef.current?.style.setProperty("--smoke-x", `${x}%`);
    pageRef.current?.style.setProperty("--smoke-y", `${y}%`);
  }

  function sendChatMessage(message: string) {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setChatMessages((messages) => [
      ...messages,
      { role: "user", text: trimmedMessage },
      { role: "bot", text: getChatbotResponse(trimmedMessage) },
    ]);
    setChatInput("");
  }

  function handleChatSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendChatMessage(chatInput);
  }

  return (
    <main
      ref={pageRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-svh overflow-hidden bg-black text-white [--smoke-x:50%] [--smoke-y:35%]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.18, opacity: 0, filter: "blur(12px)" }}
              animate={{
                scale: [0.18, 0.85, 1.14],
                opacity: [0, 1, 1],
                filter: ["blur(12px)", "blur(0px)", "blur(0px)"],
              }}
              transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-lime-400/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-lime-300/55 bg-black px-8 py-6 shadow-[0_0_45px_rgba(132,204,22,0.32)]">
                <Image
                  src="/logos/logo.png"
                  alt="All American Tree Service & More LLC"
                  width={1092}
                  height={355}
                  priority
                  className="h-52 w-auto sm:h-[291px]"
                />
              </div>
              <motion.div
                className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <motion.div
                  className="h-full rounded-full bg-lime-400 shadow-[0_0_24px_rgba(132,204,22,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.45, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.p
                className="mt-5 text-center text-xs font-black uppercase tracking-[0.35em] text-lime-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                Loading Tree Service
              </motion.p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block"
      >
        <div className="smoke-cursor absolute inset-0" />
        {smokePlumes.map((plume) => (
          <motion.span
            key={plume.id}
            className="smoke-plume absolute rounded-full bg-lime-300/10 blur-3xl"
            style={{
              left: plume.left,
              top: plume.top,
              width: plume.size,
              height: plume.size,
            }}
            animate={{
              x: [0, 34, -24, 0],
              y: [0, -46, 28, 0],
              scale: [1, 1.22, 0.92, 1],
              opacity: [0.08, 0.18, 0.1, 0.08],
            }}
            transition={{
              duration: 14 + plume.id,
              delay: plume.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-8 sm:py-3">
          <a href="#home" className="flex min-w-0 items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="shrink-0"
            >
              <Image
                src="/logos/logo.png"
                alt="All American Tree Service & More LLC"
                width={1120}
                height={364}
                priority
                className="h-14 w-auto sm:h-20 lg:h-28 xl:h-[196px]"
              />
            </motion.div>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-zinc-300 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-lime-300"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="hidden rounded-full bg-lime-400 px-5 py-3 text-sm font-black text-black shadow-[0_0_32px_rgba(132,204,22,0.45)] transition hover:-translate-y-0.5 hover:bg-lime-300 sm:inline-flex"
            >
              Call Now
            </a>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-black text-white xl:hidden"
            >
              Menu
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-black/95 xl:hidden"
            >
              <div className="grid gap-2 px-5 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-black text-white transition hover:border-lime-300/50 hover:text-lime-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      <section
        id="home"
        className="relative isolate flex min-h-svh items-center overflow-hidden px-5 pt-28 sm:px-8"
      >
        <Image
          src="https://images.unsplash.com/photo-1754321860056-ca7254d5e7ac?auto=format&fit=crop&w=2200&q=80"
          alt="Professional arborist using a chainsaw for tree removal"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.52)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black via-transparent to-black/40" />
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.26),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(34,197,94,0.18),transparent_24%)] md:block"
          animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 0%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            aria-hidden
            className="absolute z-0 hidden size-1.5 rounded-full bg-lime-300/60 shadow-[0_0_18px_rgba(190,242,100,0.9)] md:block"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -28, 0], opacity: [0.25, 1, 0.25] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-24 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-300/35 bg-black/55 px-4 py-2 text-sm font-black text-lime-200 shadow-[0_0_30px_rgba(132,204,22,0.18)] backdrop-blur"
            >
              <span className="size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,1)]" />
              Middleburg, Jacksonville, Orange Park & Surrounding Areas
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -left-6 top-4 hidden h-24 w-1 rounded-full bg-lime-400 shadow-[0_0_28px_rgba(132,204,22,0.9)] sm:block" />
              <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-8xl">
                Professional Tree Service{" "}
                <span className="block bg-gradient-to-r from-lime-200 via-lime-400 to-green-500 bg-clip-text text-transparent">
                  You Can Trust
                </span>
              </h1>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-zinc-100 sm:text-2xl"
            >
              Licensed & Insured • 24/7 Emergency Services • Free Estimates
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg"
            >
              Premium tree removal, trimming, stump grinding, land clearing, and
              storm cleanup built around fast response and clean job sites.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-3"
            >
              {["Licensed & Insured", "Free Estimates", "24/7 Emergency", "Local Crew"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-lime-300/25 bg-black/55 px-4 py-2 text-sm font-black text-lime-100 shadow-[0_0_22px_rgba(132,204,22,0.12)] backdrop-blur"
                  >
                    ✓ {item}
                  </span>
                ),
              )}
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${phoneNumber}`}
                className="relative overflow-hidden rounded-full bg-lime-400 px-8 py-4 text-center text-lg font-black text-black shadow-[0_0_45px_rgba(132,204,22,0.55)]"
              >
                <span className="relative z-10">Call Now: {phoneLabel}</span>
                <span className="absolute inset-0 -translate-x-full bg-white/35 transition duration-500 hover:translate-x-0" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#estimate"
                className="rounded-full border border-lime-300/50 bg-white/10 px-8 py-4 text-center text-lg font-black text-white backdrop-blur transition hover:border-lime-200 hover:bg-lime-300/10 hover:shadow-[0_0_32px_rgba(132,204,22,0.28)]"
              >
                Get Free Estimate
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="relative overflow-hidden rounded-[2rem] border border-lime-300/25 bg-black/72 p-6 shadow-[0_0_60px_rgba(132,204,22,0.16)] backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-300">
              Built For Urgent Calls
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white">
              Need a dangerous tree handled fast?
            </h2>
            <p className="mt-3 leading-7 text-zinc-400">
              Call now for emergency removals, storm cleanup, and quote requests
              across Middleburg, Jacksonville, and nearby areas.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                ["24/7", "Emergency availability"],
                ["FAST", "Local response time"],
                ["FREE", "No-pressure estimates"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-lime-300/40 hover:bg-lime-400/10"
                >
                  <p className="text-4xl font-black text-lime-300">{stat}</p>
                  <p className="mt-2 text-lg font-bold text-white">{label}</p>
                </div>
              ))}
            </div>
            <a
              href="#estimate"
              className="mt-6 flex rounded-2xl border border-lime-300/35 bg-lime-400/10 px-5 py-4 text-center font-black text-lime-100 transition hover:bg-lime-400 hover:text-black"
            >
              Start a Free Estimate →
            </a>
          </motion.div>
        </div>
      </section>

      <a
        href={`tel:${phoneNumber}`}
        className="emergency-banner sticky top-[69px] z-40 block bg-red-600 px-5 py-4 text-center text-base font-black text-white shadow-[0_0_35px_rgba(220,38,38,0.65)] sm:text-lg"
      >
        🚨 24/7 Emergency Tree Removal Available – Call Now
      </a>

      <section id="about" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-sm font-black uppercase tracking-[0.34em] text-lime-300">
              Company Profile
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              {companyProfile.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {companyProfile.summary}
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              {companyProfile.promise}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="rounded-full bg-lime-400 px-7 py-4 text-center text-base font-black text-black shadow-[0_0_35px_rgba(132,204,22,0.35)] transition hover:-translate-y-1 hover:bg-lime-300"
              >
                Call {companyProfile.phone}
              </a>
              <a
                href="#estimate"
                className="rounded-full border border-lime-300/40 px-7 py-4 text-center text-base font-black text-white transition hover:-translate-y-1 hover:bg-lime-300/10"
              >
                Request Free Estimate
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              ["Business Type", "Professional tree service company"],
              ["Emergency Work", "24/7 emergency tree removal available"],
              ["Primary Service Area", "Middleburg, Jacksonville, Orange Park"],
              ["Core Promise", "Licensed, insured, fast, and clean"],
            ].map(([label, value]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 shadow-xl shadow-black"
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] text-lime-300">
                  {label}
                </p>
                <p className="mt-3 text-xl font-black text-white">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Professional tree work without the runaround."
            description="Every service is designed to protect your property, solve the immediate problem, and leave the space clean."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service) => (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setActiveService(service)}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.025 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-7 text-left shadow-lg shadow-black transition hover:border-lime-300/60 hover:bg-zinc-900 hover:shadow-[0_0_45px_rgba(132,204,22,0.24)] focus-visible:border-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/60 ${
                  activeService.title === service.title
                    ? "border-lime-300/70 bg-lime-400/10 shadow-[0_0_45px_rgba(132,204,22,0.22)]"
                    : "border-white/10 bg-zinc-950/80"
                }`}
              >
                <Image
                  src={service.photo}
                  alt={`${service.title} service work`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-70 group-focus-visible:scale-105 group-focus-visible:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/88 to-black/80 transition duration-500 group-hover:from-black/78 group-hover:via-black/62 group-hover:to-black/70 group-focus-visible:from-black/78 group-focus-visible:via-black/62 group-focus-visible:to-black/70" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-lime-400/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="relative z-10">
                  <div className="grid size-16 place-items-center rounded-2xl bg-lime-400/10 text-3xl ring-1 ring-lime-300/20 transition group-hover:bg-lime-400/25 group-focus-visible:bg-lime-400/25">
                    {service.icon}
                  </div>
                  <h3 className="mt-7 text-2xl font-black text-white drop-shadow">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400 transition group-hover:text-zinc-100 group-focus-visible:text-zinc-100">
                    {service.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            key={activeService.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-[1.75rem] border border-lime-300/30 bg-lime-400/10 p-6 shadow-[0_0_35px_rgba(132,204,22,0.14)]"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-300">
              Selected Service
            </p>
            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <h3 className="text-3xl font-black text-white">
                  {activeService.icon} {activeService.title}
                </h3>
                <p className="mt-2 max-w-3xl text-zinc-300">
                  {activeService.description}
                </p>
              </div>
              <a
                href="#estimate"
                onClick={() => setActiveService(activeService)}
                className="rounded-full bg-lime-400 px-6 py-4 text-center font-black text-black transition hover:bg-lime-300"
              >
                Request This Service
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="beforeafter" className="bg-zinc-950 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Before / After"
            title="Visual proof sells the job before we say a word."
            description="Drag each comparison to see how professional removal, cleanup, and finishing work changes the property."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-12 grid gap-6 lg:grid-cols-2"
          >
            {beforeAfter.map((item) => (
              <BeforeAfterCard key={item.title} item={item} />
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-10 grid gap-5 rounded-[2rem] border border-lime-300/20 bg-black p-6 shadow-2xl shadow-black md:grid-cols-[1fr_auto] md:items-center md:p-8"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-300">
                Want your yard next?
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                Send photos and we will help size up the job.
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                Use the estimate form for tree photos, access details, hazards,
                timing, and cleanup needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="/gallery"
                className="rounded-full border border-lime-300/45 px-7 py-4 text-center font-black text-white transition hover:bg-lime-300/10"
              >
                View Full Gallery
              </a>
              <a
                href="#estimate"
                className="rounded-full bg-lime-400 px-7 py-4 text-center font-black text-black transition hover:bg-lime-300"
              >
                Request Estimate
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The crew homeowners call when it needs to be done right."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="rounded-[1.5rem] border border-lime-300/20 bg-lime-400/10 p-6 text-center shadow-[0_0_35px_rgba(132,204,22,0.12)]"
              >
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-black text-3xl ring-1 ring-lime-300/30">
                  {item.icon}
                </div>
                <p className="mt-5 text-lg font-black text-white">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="bg-zinc-950 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Real Work Gallery"
            title="High-impact visuals for high-value jobs."
            description="A premium masonry-style gallery with lightbox interaction and fast optimized images."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-3"
          >
            {galleryImages.map((image) => (
              <motion.button
                key={image.src}
                variants={fadeUp}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900 text-left shadow-xl shadow-black ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-85" />
                <span className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-sm font-black text-lime-200 backdrop-blur">
                  View Project
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="areas" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-sm font-black uppercase tracking-[0.34em] text-lime-300">
              Service Area
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Local tree service across Northeast Florida.
            </h2>
            <div className="mt-8 grid gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4 text-lg font-bold text-zinc-100"
                >
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="overflow-hidden rounded-[2rem] border border-lime-300/20 bg-zinc-950 p-3 shadow-2xl shadow-black"
          >
            <iframe
              title="All American Tree Service service area map"
              src="https://maps.google.com/maps?q=Middleburg%2C%20FL&t=k&z=9&ie=UTF8&iwloc=&output=embed"
              className="h-[440px] w-full rounded-[1.5rem] grayscale invert"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section id="reviews" className="bg-zinc-950 px-5 py-24 sm:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trust signals that turn visitors into callers."
          description="Placeholder reviews are ready to swap with real Google reviews when available."
        />
        <div className="mx-auto mt-12 max-w-7xl overflow-hidden">
          <div className="testimonial-track flex w-max gap-5">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="w-[330px] rounded-[1.5rem] border border-white/10 bg-black p-6 shadow-xl shadow-black sm:w-[420px]"
              >
                <p className="text-xl text-lime-300">★★★★★</p>
                <p className="mt-5 leading-7 text-zinc-300">
                  “{testimonial.review}”
                </p>
                <p className="mt-5 font-black text-white">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Quick answers before you call."
            description="Tap a question to expand the answer. Every interaction is designed to reduce hesitation and move visitors toward a call or estimate request."
          />
          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-120px" }}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-black text-white">
                      {faq.question}
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime-400 text-xl font-black text-black">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="border-t border-white/10 px-6 py-5 leading-7 text-zinc-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="estimate" className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-sm font-black uppercase tracking-[0.34em] text-lime-300">
              Free Estimate
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Send the details. Get a fast response.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Upload tree photos, describe the issue, and request a callback.
              For emergencies, call now and speak directly with the team.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="mt-8 inline-flex rounded-full bg-lime-400 px-8 py-4 text-lg font-black text-black shadow-[0_0_40px_rgba(132,204,22,0.4)] transition hover:-translate-y-1 hover:bg-lime-300"
            >
              Call Now: {phoneLabel}
            </a>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl shadow-black sm:p-8"
          >
            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className="absolute inset-0 z-20 grid place-items-center bg-zinc-950/95 p-8 text-center backdrop-blur"
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16 }}
                      className="mx-auto grid size-20 place-items-center rounded-full bg-lime-400 text-4xl font-black text-black shadow-[0_0_45px_rgba(132,204,22,0.55)]"
                    >
                      ✓
                    </motion.div>
                    <h3 className="mt-6 text-3xl font-black text-white">
                      Request Received
                    </h3>
                    <p className="mt-3 max-w-md text-zinc-300">
                      This demo form is ready for a backend or form service. For
                      immediate help, call {phoneLabel}.
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="mb-6 rounded-[1.5rem] border border-lime-300/20 bg-lime-400/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-lime-300">
                Quick Estimate Helper
              </p>
              <div className="mt-4 grid gap-4">
                <div>
                  <p className="mb-2 text-sm font-bold text-zinc-300">
                    Service
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service.title}
                        type="button"
                        onClick={() => setActiveService(service)}
                        className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                          activeService.title === service.title
                            ? "border-lime-300 bg-lime-400 text-black"
                            : "border-white/10 bg-black text-white hover:border-lime-300/50"
                        }`}
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-bold text-zinc-300">
                      Urgency
                    </p>
                    <div className="grid gap-2">
                      {urgencyOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSelectedUrgency(option)}
                          className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${
                            selectedUrgency === option
                              ? "border-lime-300 bg-lime-400 text-black"
                              : "border-white/10 bg-black text-white hover:border-lime-300/50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold text-zinc-300">
                      Property Type
                    </p>
                    <div className="grid gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedProperty(type)}
                          className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${
                            selectedProperty === type
                              ? "border-lime-300 bg-lime-400 text-black"
                              : "border-white/10 bg-black text-white hover:border-lime-300/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black p-4 text-sm text-zinc-300">
                  <span className="font-black text-lime-300">
                    Request summary:
                  </span>{" "}
                  {activeService.title} • {selectedUrgency} •{" "}
                  {selectedProperty}
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-300">
                Name
                <input
                  required
                  name="name"
                  className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-lime-300 focus:shadow-[0_0_20px_rgba(132,204,22,0.18)]"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-300">
                Phone
                <input
                  required
                  name="phone"
                  type="tel"
                  className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-lime-300 focus:shadow-[0_0_20px_rgba(132,204,22,0.18)]"
                  placeholder={phoneLabel}
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-zinc-300">
              Address
              <input
                name="address"
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-lime-300 focus:shadow-[0_0_20px_rgba(132,204,22,0.18)]"
                placeholder="Street, city, ZIP"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-bold text-zinc-300">
              Service Needed
              <select
                name="service"
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-lime-300 focus:shadow-[0_0_20px_rgba(132,204,22,0.18)]"
                value={activeService.title}
                onChange={(event) => {
                  const service = services.find(
                    (item) => item.title === event.target.value,
                  );

                  if (service) {
                    setActiveService(service);
                  }
                }}
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-5 grid gap-2 text-sm font-bold text-zinc-300">
              Message
              <textarea
                name="message"
                rows={5}
                className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-lime-300 focus:shadow-[0_0_20px_rgba(132,204,22,0.18)]"
                placeholder={`Tell us about the tree, access, hazards, timing, or cleanup needs. Selected: ${activeService.title}, ${selectedUrgency}, ${selectedProperty}.`}
              />
            </label>
            <input
              type="hidden"
              name="urgency"
              value={selectedUrgency}
              readOnly
            />
            <input
              type="hidden"
              name="propertyType"
              value={selectedProperty}
              readOnly
            />
            <label className="mt-5 grid gap-2 text-sm font-bold text-zinc-300">
              Upload Tree Photo
              <input
                name="photos"
                type="file"
                multiple
                accept="image/*"
                className="rounded-2xl border border-dashed border-lime-300/30 bg-black px-4 py-4 text-sm text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-lime-400 file:px-4 file:py-2 file:font-black file:text-black"
              />
            </label>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="rounded-full bg-lime-400 px-8 py-4 text-lg font-black text-black shadow-[0_0_40px_rgba(132,204,22,0.35)] transition hover:-translate-y-1 hover:bg-lime-300"
              >
                Submit Request
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="rounded-full border border-lime-300/50 px-8 py-4 text-center text-lg font-black text-white transition hover:-translate-y-1 hover:bg-lime-300/10"
              >
                Call Now
              </a>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-zinc-500 sm:px-8">
        <Image
          src="/logos/logo.png"
          alt="All American Tree Service & More LLC"
          width={910}
          height={294}
          className="mx-auto h-56 w-auto"
        />
        <p className="mt-4">
          Licensed & insured tree service in Middleburg, Jacksonville, Orange
          Park, Clay County, and Baker County.
        </p>
        <p className="mt-6 text-sm text-zinc-400">
          Website Design by{" "}
          <a
            href="https://elevatedigitalstudios.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lime-300 transition hover:text-lime-200"
          >
            Elevate Digital Studio
          </a>
          .
        </p>
      </footer>

      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-lime-400 px-6 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(132,204,22,0.65)] transition hover:scale-105 hover:bg-lime-300"
      >
        Call Now
      </motion.a>

      <motion.a
        href="#home"
        aria-label="Back to top"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.15 }}
        className="fixed bottom-24 right-5 z-50 grid size-14 place-items-center rounded-full border border-lime-300/40 bg-black/80 text-2xl font-black text-lime-300 shadow-[0_0_30px_rgba(132,204,22,0.35)] backdrop-blur transition hover:-translate-y-1 hover:bg-lime-400 hover:text-black"
      >
        ↑
      </motion.a>

      <div className="fixed bottom-5 left-5 z-50">
        <AnimatePresence>
          {chatOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.94 }}
              className="mb-4 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-[1.5rem] border border-lime-300/30 bg-zinc-950/95 shadow-[0_0_45px_rgba(132,204,22,0.22)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-lime-400 px-5 py-4 text-black">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em]">
                    Tree Service Chat
                  </p>
                  <p className="text-xs font-bold">Usually replies instantly</p>
                </div>
                <button
                  type="button"
                  onClick={() => setChatOpen(false)}
                  className="grid size-9 place-items-center rounded-full bg-black/10 text-xl font-black transition hover:bg-black/20"
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>

              <div className="max-h-80 space-y-3 overflow-y-auto p-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-lime-400 font-bold text-black"
                          : "border border-white/10 bg-black text-zinc-200"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickChatPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendChatMessage(prompt)}
                      className="rounded-full border border-lime-300/30 bg-lime-400/10 px-3 py-2 text-xs font-black text-lime-200 transition hover:bg-lime-400 hover:text-black"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    className="min-w-0 flex-1 rounded-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-lime-300"
                    placeholder="Ask about tree service..."
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-lime-400 px-4 py-3 text-sm font-black text-black transition hover:bg-lime-300"
                  >
                    Send
                  </button>
                </form>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="rounded-full bg-white px-4 py-3 text-center text-xs font-black text-black transition hover:bg-lime-200"
                  >
                    Call Now
                  </a>
                  <a
                    href="#estimate"
                    onClick={() => setChatOpen(false)}
                    className="rounded-full border border-lime-300/40 px-4 py-3 text-center text-xs font-black text-white transition hover:bg-lime-400 hover:text-black"
                  >
                    Estimate
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setChatOpen((open) => !open)}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.25 }}
          className="flex items-center gap-3 rounded-full border border-lime-300/40 bg-black/85 px-5 py-4 font-black text-white shadow-[0_0_35px_rgba(132,204,22,0.45)] backdrop-blur transition hover:-translate-y-1 hover:bg-lime-400 hover:text-black"
          aria-expanded={chatOpen}
        >
          <span className="grid size-9 place-items-center rounded-full bg-lime-400 text-black">
            💬
          </span>
          Chat
        </motion.button>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-5 backdrop-blur"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-black text-white transition hover:bg-white/20"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative h-[80vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="rounded-[1.5rem] object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}

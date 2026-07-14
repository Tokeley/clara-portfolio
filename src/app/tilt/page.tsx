"use client";

import Image from "next/image";
import { tiltContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectNav } from "@/components/Footer";

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/tilt/1.jpg"
        alt="Tilt hero"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-28 mx-auto max-w-7xl px-6 lg:top-36">
        <Image
          src="/Logos/Tilt Logo .svg"
          alt="Tilt"
          width={232}
          height={85}
          unoptimized
          className="h-auto w-[clamp(9rem,18vw,20.8rem)]"
        />
      </div>
    </section>
  );
}

const overviewViews = [
  "/images/tilt/overview-view-1.jpg",
  "/images/tilt/overview-view-2.jpg",
  "/images/tilt/overview-view-3.jpg",
];

function OverviewSection() {
  return (
    <section className="overflow-hidden bg-grey-dark">
      <div className="flex min-h-[520px] flex-col md:flex-row">
        {/* Left: full-bleed portrait */}
        <ScrollReveal className="relative min-h-[300px] w-full shrink-0 md:w-[33%]">
          <Image
            src="/images/tilt/overview-portrait.jpg"
            alt="Tilt product"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </ScrollReveal>

        {/* Right: thumbnails + logo/text */}
        <div className="flex flex-1 flex-col gap-8 px-6 py-10 sm:flex-row sm:items-stretch sm:gap-8 sm:px-10 sm:py-12">
          {/* Thumbnails */}
          <ScrollReveal className="flex shrink-0 flex-col gap-4">
            {overviewViews.map((src, i) => (
              <div key={i} className="w-full overflow-hidden sm:w-72">
                <Image
                  src={src}
                  alt={`Tilt view ${i + 1}`}
                  width={1280}
                  height={853}
                  unoptimized
                  className="h-auto w-full"
                />
              </div>
            ))}
          </ScrollReveal>

          {/* Logo + description, bottom-aligned with thumbnails */}
          <ScrollReveal delay={0.15} className="flex-1">
            <div className="flex h-full flex-col justify-end pb-1">
              <Image
                src="/Logos/Tilt Logo .svg"
                alt="Tilt"
                width={217}
                height={188}
                unoptimized
                className="mb-6 h-36 w-auto self-start"
              />
              <p className="max-w-xs text-base font-medium leading-relaxed text-white/80">
                {tiltContent.description}
              </p>
              <p className="mt-4 max-w-xs text-base font-medium leading-relaxed text-white/80">
                {tiltContent.descriptionExtended}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const briefImages = [
  "/images/tilt/brief-1.jpg",
  "/images/tilt/brief-2.jpg",
  "/images/tilt/brief-3.jpg",
];

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

function BriefSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[58%_42%]">
        <div>
          <ScrollReveal>
            <h2 className="mb-10 text-5xl font-bold tracking-tight text-charcoal md:text-6xl">{tiltContent.brief.heading}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {tiltContent.brief.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={briefImages[i]}
                    alt={item.replace(/\*\*/g, "")}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {renderBold(item)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal direction="right" delay={0.2}>
          <div className="flex h-full flex-col bg-grey-light p-8">
            {tiltContent.brief.sidebar.map((para, i) => (
              <p key={i} className="mb-5 text-sm leading-relaxed text-charcoal last:mb-0">
                {renderBold(para)}
              </p>
            ))}
            <h3 className="mt-auto pt-8 text-right text-5xl font-bold tracking-tight text-charcoal md:text-6xl">
              Constraints
            </h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white">
      <Image
        src="/images/tilt/4.jpg"
        alt="Tilt process timeline part 1"
        width={3000}
        height={1687}
        unoptimized
        className="block h-auto w-full"
      />
      <Image
        src="/images/tilt/5.jpg"
        alt="Tilt process timeline part 2"
        width={3000}
        height={1687}
        unoptimized
        className="block h-auto w-full"
      />
    </section>
  );
}

const productProcessImages = [
  "/images/tilt/product-process-1.jpg",
  "/images/tilt/product-process-2.jpg",
  "/images/tilt/product-process-3.jpg",
  "/images/tilt/product-process-4.jpg",
  "/images/tilt/product-process-5.jpg",
  "/images/tilt/product-process-6.jpg",
];

function ProductProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            {tiltContent.productProcess.heading}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {tiltContent.productProcess.steps.map((caption, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={productProcessImages[i]}
                  alt={caption}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <p className="mt-3 font-label text-xs font-bold uppercase leading-relaxed tracking-wide text-charcoal">
                {caption}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BodyTextSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Image
        src="/images/tilt/7.jpg"
        alt="Tilt explores the body in movement"
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-4 mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:top-10 sm:flex-row sm:items-start sm:gap-6">
        <p className="text-stroke-bold max-w-[260px] shrink-0 font-label text-xs font-bold uppercase leading-relaxed tracking-wider text-white sm:text-sm">
          {tiltContent.bodyText.left}
        </p>
        <div className="mt-[0.5em] hidden h-px flex-1 bg-white opacity-80 sm:block" />
        <p className="text-stroke-bold max-w-[320px] shrink-0 text-left sm:text-right font-label text-xs font-bold uppercase leading-relaxed tracking-wider text-white sm:text-sm">
          {tiltContent.bodyText.right}
        </p>
      </div>
    </section>
  );
}

function TriptychSection() {
  return (
    <section className="bg-black py-0">
      <Image
        src="/images/tilt/8.jpg"
        alt="Tilt triptych"
        width={2560}
        height={1440}
        unoptimized
        className="h-auto w-full"
      />
    </section>
  );
}

function PoemSection() {
  return (
    <section>
      <Image
        src="/images/tilt/9.jpg"
        alt="Tilt poem detail"
        width={2560}
        height={1440}
        unoptimized
        className="block h-auto w-full"
      />
    </section>
  );
}

function BookletSection() {
  return (
    <section>
      <Image
        src="/images/tilt/10.jpg"
        alt="Tilt exhibition booklet"
        width={2560}
        height={1440}
        unoptimized
        className="block h-auto w-full"
      />
    </section>
  );
}

export default function TiltPage() {
  return (
    <article>
      <HeroSection />
      <OverviewSection />
      <BriefSection />
      <ProcessSection />
      <ProductProcessSection />
      <BodyTextSection />
      <TriptychSection />
      <PoemSection />
      <BookletSection />
      <ProjectNav
        prev={{ slug: "cradle", title: "Cradle" }}
        next={{ slug: "growing-light", title: "Growing Light" }}
      />
    </article>
  );
}

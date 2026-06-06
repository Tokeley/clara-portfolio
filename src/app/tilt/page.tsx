"use client";

import Image from "next/image";
import { tiltContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FullBleedImage } from "@/components/FullBleedImage";
import { ProjectNav } from "@/components/Footer";

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/tilt/1.png"
        alt="Tilt hero"
        fill
        priority
        unoptimized
        className="object-cover"
      />
    </section>
  );
}

const overviewViews = [
  "/images/tilt/overview-view-1.png",
  "/images/tilt/overview-view-2.png",
  "/images/tilt/overview-view-3.png",
];

function OverviewSection() {
  return (
    <section className="overflow-hidden bg-[#666]">
      <div className="flex min-h-[520px]">
        {/* Left: full-bleed portrait */}
        <ScrollReveal className="relative w-[33%] shrink-0">
          <Image
            src="/images/tilt/overview-portrait.png"
            alt="Tilt product"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </ScrollReveal>

        {/* Right: thumbnails + logo/text */}
        <div className="flex flex-1 items-center gap-8 px-10 py-12">
          {/* Thumbnails — numbers already baked into images */}
          <ScrollReveal className="flex shrink-0 flex-col gap-4">
            {overviewViews.map((src, i) => (
              <div key={i} className="w-72 overflow-hidden">
                <Image
                  src={src}
                  alt={`Tilt view ${i + 1}`}
                  width={800}
                  height={533}
                  unoptimized
                  className="h-auto w-full"
                />
              </div>
            ))}
          </ScrollReveal>

          {/* Logo + description */}
          <ScrollReveal delay={0.15} className="flex-1">
            <div className="relative mb-6 h-20 w-40">
              <Image
                src="/images/tilt/logo.png"
                alt="Tilt logo"
                fill
                unoptimized
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              {tiltContent.description}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              {tiltContent.descriptionExtended}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const briefImages = [
  "/images/tilt/brief-1.png",
  "/images/tilt/brief-2.png",
  "/images/tilt/brief-3.png",
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
          <div className="grid grid-cols-3 gap-5">
            {tiltContent.brief.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative aspect-[3/2] w-full overflow-hidden">
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
          <div className="flex flex-col bg-gray-100 p-8">
            {tiltContent.brief.sidebar.map((para, i) => (
              <p key={i} className="mb-5 text-sm leading-relaxed text-charcoal last:mb-0">
                {renderBold(para)}
              </p>
            ))}
            <h3 className="mt-8 text-right text-5xl font-bold tracking-tight text-charcoal md:text-6xl">
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
    <section className="bg-neutral-800">
      <Image
        src="/images/tilt/4.png"
        alt="Tilt process timeline part 1"
        width={1400}
        height={800}
        unoptimized
        className="block h-auto w-full"
      />
      <Image
        src="/images/tilt/5.png"
        alt="Tilt process timeline part 2"
        width={1400}
        height={800}
        unoptimized
        className="block h-auto w-full"
      />
    </section>
  );
}

const productProcessImages = [
  "/images/tilt/product-process-1.png",
  "/images/tilt/product-process-2.png",
  "/images/tilt/product-process-3.png",
  "/images/tilt/product-process-4.png",
  "/images/tilt/product-process-5.png",
  "/images/tilt/product-process-6.png",
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
              <p className="mt-3 text-xs font-bold uppercase leading-relaxed tracking-wide text-charcoal">
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
    <FullBleedImage
      src="/images/tilt/7.png"
      alt="Tilt detail"
      aspectRatio="21/9"
      overlayTextSize="text-base"
      overlays={[
        { text: tiltContent.bodyText.left, position: "bottom-left" },
        { text: tiltContent.bodyText.right, position: "top-right" },
      ]}
    />
  );
}

function TriptychSection() {
  return (
    <section className="bg-black py-0">
      <ScrollReveal>
        <div className="relative w-full">
          <Image
            src="/images/tilt/8.png"
            alt="Tilt triptych"
            width={1400}
            height={500}
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}

function PoemSection() {
  return (
    <section>
      <ScrollReveal>
        <Image
          src="/images/tilt/9.png"
          alt="Tilt poem detail"
          width={1920}
          height={1080}
          unoptimized
          className="block h-auto w-full"
        />
      </ScrollReveal>
    </section>
  );
}

function BookletSection() {
  return (
    <section>
      <ScrollReveal>
        <Image
          src="/images/tilt/10.png"
          alt="Tilt exhibition booklet"
          width={1920}
          height={1080}
          unoptimized
          className="block h-auto w-full"
        />
      </ScrollReveal>
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

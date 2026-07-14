"use client";

import Image from "next/image";
import { growingLightContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectVideo } from "@/components/ProjectVideo";
import { ProjectNav } from "@/components/Footer";

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/growing-light/1.jpg"
        alt="Growing Light hero"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-28 mx-auto max-w-7xl px-6 lg:top-36">
        <Image
          src="/Logos/Growing Light Logo Colour.svg"
          alt="Growing Light"
          width={232}
          height={85}
          unoptimized
          className="h-auto w-[clamp(9rem,18vw,20.8rem)]"
        />
      </div>
    </section>
  );
}

const stageImages = [
  { src: "/images/growing-light/stage-1.jpg", alt: "Growing Light — stage 1" },
  { src: "/images/growing-light/stage-2.jpg", alt: "Growing Light — stage 2" },
  { src: "/images/growing-light/stage-3.jpg", alt: "Growing Light — stage 3" },
];

function OverviewSection() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="flex min-h-[520px] flex-col md:flex-row">
        {/* Left: full-bleed close-up */}
        <ScrollReveal className="relative min-h-[320px] w-full shrink-0 md:w-[46%]">
          <Image
            src="/images/growing-light/overview-closeup.jpg"
            alt="Growing Light — close-up"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </ScrollReveal>

        {/* Right: thumbnails + logo/text */}
        <div className="flex flex-1 flex-col gap-8 px-6 py-10 sm:flex-row sm:items-stretch sm:gap-8 sm:px-10 sm:py-12">
          {/* Three numbered stage thumbnails */}
          <ScrollReveal className="flex shrink-0 flex-col gap-4">
            {stageImages.map(({ src, alt }, i) => (
              <div key={i} className="relative w-full overflow-hidden bg-grey-light sm:w-72">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <span className="absolute left-3 top-3 text-xl font-bold text-white">
                  {i + 1}
                </span>
              </div>
            ))}
          </ScrollReveal>

          {/* Logo + description, bottom-aligned with thumbnails */}
          <ScrollReveal delay={0.15} className="flex-1">
            <div className="flex h-full max-w-xs flex-col justify-end pb-1">
              <Image
                src="/Logos/Growing Light Logo Colour.svg"
                alt="Growing Light"
                width={240}
                height={120}
                unoptimized
                className="mb-6 h-28 w-auto self-end"
              />
              <div className="flex flex-col gap-3">
                <p className="max-w-xs text-base font-medium leading-relaxed text-charcoal/80">
                  {growingLightContent.description}
                </p>
                <p className="max-w-xs text-base font-medium leading-relaxed text-charcoal/80">
                  {growingLightContent.descriptionExtended}
                </p>
                <p className="max-w-xs text-base font-medium leading-relaxed text-charcoal/80">
                  {growingLightContent.descriptionExtra}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

const briefImages = [
  { src: "/images/growing-light/brief-1.jpg", alt: "Light as a design medium" },
  { src: "/images/growing-light/brief-2.jpg", alt: "Human interaction and responsiveness" },
  { src: "/images/growing-light/brief-3.jpg", alt: "Arduino circuitry and sensors" },
];

function BriefSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[60%_40%]">
        <div>
          <ScrollReveal>
            <h2 className="mb-10 text-5xl font-bold tracking-tight text-charcoal md:text-6xl">
              {growingLightContent.brief.heading}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {growingLightContent.brief.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={briefImages[i].src}
                    alt={briefImages[i].alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {item}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal direction="right" delay={0.2}>
          <div className="flex h-full flex-col rounded-sm bg-cream p-8">
            {growingLightContent.brief.sidebar.map((para, i) => (
              <p
                key={i}
                className="mb-4 text-sm leading-relaxed text-charcoal last:mb-0"
              >
                {renderBold(para)}
              </p>
            ))}
            <h3 className="mt-auto pt-8 text-right text-5xl font-bold tracking-tight text-charcoal md:text-6xl">Research</h3>
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
        src="/images/growing-light/4.jpg"
        alt="Growing Light process timeline part 1"
        width={3000}
        height={1687}
        unoptimized
        className="h-auto w-full"
      />
      <Image
        src="/images/growing-light/5.jpg"
        alt="Growing Light process timeline part 2"
        width={3000}
        height={1687}
        unoptimized
        className="h-auto w-full"
      />
    </section>
  );
}

const usageScenarioImages = [
  "/images/growing-light/usage-1.jpg",
  "/images/growing-light/usage-2.jpg",
  "/images/growing-light/usage-3.jpg",
  "/images/growing-light/usage-4.jpg",
  "/images/growing-light/usage-5.jpg",
  "/images/growing-light/usage-6.jpg",
];

function UsageScenarioSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">
            {growingLightContent.usageScenario.heading}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {growingLightContent.usageScenario.steps.map((caption, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-800">
                <Image
                  src={usageScenarioImages[i]}
                  alt={caption}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-label text-xs font-bold uppercase leading-relaxed tracking-wider">
                {caption}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <>
      <Image
        src="/images/growing-light/7.jpg"
        alt="Growing Light full view"
        width={2560}
        height={1440}
        unoptimized
        className="block h-auto w-full"
      />
      <Image
        src="/images/growing-light/8.jpg"
        alt="Growing Light close-up details"
        width={2560}
        height={1440}
        unoptimized
        className="block h-auto w-full"
      />
      <Image
        src="/images/growing-light/9.jpg"
        alt="Growing Light flowers close-up"
        width={2560}
        height={1440}
        unoptimized
        className="block h-auto w-full"
      />
    </>
  );
}

function VideoSection() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <ProjectVideo
          src="/videos/growing-light.mp4"
          poster="/images/growing-light/video-poster.jpg"
        />
      </div>
    </section>
  );
}

export default function GrowingLightPage() {
  return (
    <article>
      <HeroSection />
      <OverviewSection />
      <BriefSection />
      <ProcessSection />
      <UsageScenarioSection />
      <GallerySection />
      <VideoSection />
      <ProjectNav
        prev={{ slug: "tilt", title: "Tilt" }}
      />
    </article>
  );
}

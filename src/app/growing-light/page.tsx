"use client";

import Image from "next/image";
import { growingLightContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FullBleedImage } from "@/components/FullBleedImage";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { ProjectNav } from "@/components/Footer";

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/growing-light/1.png"
        alt="Growing Light hero"
        fill
        priority
        unoptimized
        className="object-cover"
      />
    </section>
  );
}

const stageImages = [
  { src: "/images/growing-light/stage-1.png", alt: "Growing Light — stage 1" },
  { src: "/images/growing-light/stage-2.png", alt: "Growing Light — stage 2" },
  { src: "/images/growing-light/stage-3.png", alt: "Growing Light — stage 3" },
];

function OverviewSection() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-stretch">
        {/* Left: large close-up portrait */}
        <ScrollReveal className="w-full md:w-[46%]">
          <div className="relative h-full min-h-[520px] w-full overflow-hidden">
            <Image
              src="/images/growing-light/overview-closeup.png"
              alt="Growing Light — close-up"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>

        {/* Right: thumbnails | logo/text side by side */}
        <div className="flex w-full gap-6 md:w-[54%]">
          {/* Three numbered stage thumbnails */}
          <div className="flex w-[62%] shrink-0 flex-col gap-3">
            {stageImages.map(({ src, alt }, i) => (
              <div key={i} className="relative">
                <div className="relative aspect-video w-full overflow-hidden bg-grey-light">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Logo + description */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/growing-light/logo.png"
              alt="Growing Light"
              width={240}
              height={120}
              unoptimized
              className="h-auto w-full"
            />
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed text-charcoal/75">
                {growingLightContent.description}
              </p>
              <p className="text-sm leading-relaxed text-charcoal/75">
                {growingLightContent.descriptionExtended}
              </p>
              <p className="text-sm leading-relaxed text-charcoal/75">
                {growingLightContent.descriptionExtra}
              </p>
            </div>
          </div>
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
  { src: "/images/growing-light/brief-1.png", alt: "Light as a design medium" },
  { src: "/images/growing-light/brief-2.png", alt: "Human interaction and responsiveness" },
  { src: "/images/growing-light/brief-3.png", alt: "Arduino circuitry and sensors" },
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
          <div className="grid grid-cols-3 gap-6">
            {growingLightContent.brief.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
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
          <div className="rounded-sm bg-cream p-8">
            {growingLightContent.brief.sidebar.map((para, i) => (
              <p
                key={i}
                className="mb-4 text-sm leading-relaxed text-charcoal last:mb-0"
              >
                {renderBold(para)}
              </p>
            ))}
            <h3 className="mt-8 text-right text-5xl font-bold tracking-tight text-charcoal md:text-6xl">Research</h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-grey-light">
      <Image
        src="/images/growing-light/4.png"
        alt="Growing Light process timeline part 1"
        width={1400}
        height={800}
        unoptimized
        className="h-auto w-full"
      />
      <Image
        src="/images/growing-light/5.png"
        alt="Growing Light process timeline part 2"
        width={1400}
        height={800}
        unoptimized
        className="h-auto w-full"
      />
    </section>
  );
}

const usageScenarioImages = [
  "/images/growing-light/usage-1.png",
  "/images/growing-light/usage-2.png",
  "/images/growing-light/usage-3.png",
  "/images/growing-light/usage-4.png",
  "/images/growing-light/usage-5.png",
  "/images/growing-light/usage-6.png",
];

function UsageScenarioSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="mb-12 text-4xl font-bold">
            {growingLightContent.usageScenario.heading}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {growingLightContent.usageScenario.steps.map((caption, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-800">
                <Image
                  src={usageScenarioImages[i]}
                  alt={caption}
                  width={300}
                  height={400}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase leading-tight tracking-wider">
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
      <FullBleedImage
        src="/images/growing-light/7.png"
        alt="Growing Light full view"
      />
      <section className="bg-black py-0">
        <ScrollReveal>
          <Image
            src="/images/growing-light/8.png"
            alt="Growing Light close-up details"
            width={1400}
            height={600}
            unoptimized
            className="h-auto w-full"
          />
        </ScrollReveal>
      </section>
      <FullBleedImage
        src="/images/growing-light/9.png"
        alt="Growing Light flowers close-up"
      />
    </>
  );
}

function VideoSection() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <VideoPlaceholder thumbnail="/images/growing-light/video-placeholder.png" />
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

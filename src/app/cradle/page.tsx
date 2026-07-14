"use client";

import Image from "next/image";
import { cradleContent } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectVideo } from "@/components/ProjectVideo";
import { ProjectNav } from "@/components/Footer";

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/cradle/hero.jpg"
        alt="Cradle hero"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-28 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 lg:top-36 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <Image
          src="/Logos/Cradle Logo White.svg"
          alt="Cradle"
          width={232}
          height={85}
          unoptimized
          className="h-auto w-72 sm:w-[26rem]"
        />
        <div className="flex items-center gap-6 sm:gap-12">
          <Image
            src="/Logos/Lexus Logo.svg"
            alt="Lexus Design Awards 2025, 1st Place"
            width={798}
            height={299}
            unoptimized
            className="h-auto w-48 sm:w-64"
          />
          <Image
            src="/Logos/NZDW Logo.svg"
            alt="Displayed at New Zealand Design Week"
            width={551}
            height={275}
            unoptimized
            className="h-auto w-36 sm:w-48"
          />
        </div>
      </div>
    </section>
  );
}

const stepImages = [
  "/images/cradle/step1.jpg",
  "/images/cradle/step2.jpg",
  "/images/cradle/step3.jpg",
];

function OverviewSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col px-6 md:flex-row md:items-stretch">
        {/* Left: tall photo */}
        <ScrollReveal className="hidden w-full shrink-0 md:block md:h-auto md:w-[40%]" direction="left">
          <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-auto md:h-[calc(100%-3rem)]">
            <Image
              src="/images/cradle/usage-4.jpg"
              alt="Cradle underwater"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>

        {/* Right: content */}
        <div className="flex w-full flex-col justify-center pt-5 pb-10 sm:pt-6 sm:pb-12 sm:pl-10 md:w-[60%] md:justify-start md:pt-3">
          <ScrollReveal>
            <Image
              src="/Logos/Cradle Logo Colour.svg"
              alt="Cradle"
              width={232}
              height={85}
              unoptimized
              className="h-auto w-80 sm:w-[28rem]"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-2xl leading-snug text-charcoal">
              {cradleContent.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-10 text-2xl leading-relaxed text-charcoal">
              It does so in{" "}
              <strong className="font-bold">three steps:</strong>
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 pb-10 sm:grid-cols-3">
            {cradleContent.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.3 + i * 0.1} className="flex flex-col">
                <div className="flex flex-1 flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={stepImages[i]}
                      alt={step.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-charcoal/80">
                    {step.description}
                  </p>
                  <hr className="mt-6 border-t-2 border-charcoal/40" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const problemImages = [
  "/images/cradle/problem1.jpg",
  "/images/cradle/problem2.jpg",
  "/images/cradle/problem3.jpg",
];

const problemCaptions: { bold: string; rest: string }[] = [
  { bold: "Kelp forests are collapsing", rest: " due to overfishing and bottom trawling." },
  { bold: "This causes a kina overpopulation", rest: ", eating kelp leading to large barrens where kelp used to be." },
  { bold: "Giant kelp are a keystone species", rest: "; without them their ecosystem collapses: no fish, no biodiversity, no sustainability." },
];

const researchParagraphs: { bold: string; rest: string }[] = [
  { bold: "New Zealand is deeply connected to the ocean", rest: ", culturally, economically, and ecologically." },
  { bold: "Aquaculture is one of our key growth sectors", rest: ", but not currently sustainable." },
  { bold: "Carbon storage is highly profitable", rest: " but kelp are excluded. There is NZ$7.9 million in carbon storage in the Hauraki Gulf alone if barrens were restored." },
];

function ProblemSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-0 px-6 md:flex-row">
        {/* Left: heading + images */}
        <div className="flex w-full flex-col justify-center md:w-[60%] md:pr-16">
          <ScrollReveal>
            <h2 className="text-5xl font-bold tracking-tight text-charcoal md:text-6xl">
              {cradleContent.problem.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {problemCaptions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={problemImages[i]}
                      alt={item.bold}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/90">
                    <strong className="font-bold">{item.bold}</strong>
                    {item.rest}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: grey research panel */}
        <ScrollReveal delay={0.2} className="mt-12 w-full md:mt-0 md:w-[40%]">
          <div className="flex flex-col bg-grey-light p-7">
            <div className="space-y-4">
              {researchParagraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-charcoal">
                  <strong className="font-bold">{para.bold}</strong>
                  {para.rest}
                </p>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold text-charcoal">Research papers of note:</p>
              <ul className="mt-2 space-y-1.5">
                {cradleContent.research.papers.map((paper, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed text-charcoal/80">
                    <span className="mt-0.5 shrink-0">&bull;</span>
                    {paper}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-4xl font-bold text-charcoal">The Market</h3>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white pt-20">
      <Image
        src="/images/cradle/process-1.jpg"
        alt="Cradle process timeline part 1"
        width={3000}
        height={1687}
        unoptimized
        className="block h-auto w-full"
      />
      <Image
        src="/images/cradle/process-2.jpg"
        alt="Cradle process timeline part 2"
        width={3000}
        height={1687}
        unoptimized
        className="block h-auto w-full"
      />
    </section>
  );
}

function ProductDetailSection() {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <Image
        src="/images/cradle/product-detail.jpg"
        alt="Cradle product detail"
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-4 mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:top-10 sm:flex-row sm:items-start sm:gap-6">
        <p className="text-stroke-bold max-w-[260px] shrink-0 font-label text-xs font-bold uppercase leading-relaxed tracking-wider text-white sm:text-sm">
          {cradleContent.productDetail.left}
        </p>
        <div className="mt-[0.5em] hidden h-px flex-1 bg-white opacity-80 sm:block" />
        <p className="text-stroke-bold max-w-[320px] shrink-0 text-left sm:text-right font-label text-xs font-bold uppercase leading-relaxed tracking-wider text-white sm:text-sm">
          {cradleContent.productDetail.right}
        </p>
      </div>
    </div>
  );
}

function PackagingSection() {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <Image
        src="/images/cradle/packaging.jpg"
        alt="Cradle packaging detail"
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-4 mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:bottom-10 sm:flex-row sm:items-end sm:gap-6">
        <p className="text-stroke-bold max-w-[260px] shrink-0 font-label text-xs font-bold uppercase leading-relaxed tracking-wider text-white sm:text-sm">
          {cradleContent.packaging.left}
        </p>
        <div className="mb-[0.5em] hidden h-px flex-1 bg-white opacity-80 sm:block" />
        <p className="text-stroke-bold max-w-[320px] shrink-0 text-left sm:text-right font-label text-xs font-bold uppercase leading-relaxed tracking-wider text-white sm:text-sm">
          {cradleContent.packaging.right}
        </p>
      </div>
    </div>
  );
}

const usageImages = [
  "/images/cradle/usage-1.jpg",
  "/images/cradle/usage-2.jpg",
  "/images/cradle/usage-3.jpg",
  "/images/cradle/usage-4.jpg",
  "/images/cradle/usage-5.jpg",
  "/images/cradle/usage-6.jpg",
];

function UsageScenarioSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl">
            {cradleContent.usageScenario.heading}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {cradleContent.usageScenario.steps.map((caption, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="relative aspect-[9/16] w-full overflow-hidden">
                <Image
                  src={usageImages[i]}
                  alt={caption}
                  fill
                  unoptimized
                  className="object-cover"
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

function CircularSystemSection() {
  return (
    <section className="bg-white">
      <Image
        src="/images/cradle/circular-diagram.jpg"
        alt="Circular design system diagram"
        width={2560}
        height={1440}
        unoptimized
        className="block h-auto w-full"
      />
    </section>
  );
}

const designWeekImages = [
  "/images/cradle/design-week-1.jpg",
  "/images/cradle/design-week-2.jpg",
  "/images/cradle/design-week-3.jpg",
];

function DesignWeekSection() {
  return (
    <section className="bg-grey-light py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* All 3 cols share one fixed row height. Col 1 splits it between image + title. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:min-h-[620px]">

          {/* Col 1: image takes remaining space, heading sits below it */}
          <ScrollReveal className="flex h-full flex-col">
            <div className="relative min-h-0 flex-1">
              <Image
                src={designWeekImages[0]}
                alt="Design Week display"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <h2 className="mt-6 shrink-0 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-[2.6rem]">
              {cradleContent.designWeek.heading}
            </h2>
          </ScrollReveal>

          {/* Col 2 */}
          <ScrollReveal delay={0.12} className="relative min-h-[400px] md:min-h-0">
            <Image
              src={designWeekImages[1]}
              alt="Design Week display 2"
              fill
              unoptimized
              className="object-cover"
            />
          </ScrollReveal>

          {/* Col 3 */}
          <ScrollReveal delay={0.24} className="relative min-h-[400px] md:min-h-0">
            <Image
              src={designWeekImages[2]}
              alt="Design Week display 3"
              fill
              unoptimized
              className="object-cover"
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <ProjectVideo
          src="/videos/cradle.mp4"
          poster="/images/cradle/video-poster.jpg"
        />
      </div>
    </section>
  );
}

export default function CradlePage() {
  return (
    <article>
      <HeroSection />
      <OverviewSection />
      <ProblemSection />
      <ProcessSection />
      <ProductDetailSection />
      <PackagingSection />
      <UsageScenarioSection />
      <CircularSystemSection />
      <DesignWeekSection />
      <VideoSection />
      <ProjectNav
        next={{ slug: "tilt", title: "Tilt" }}
      />
    </article>
  );
}

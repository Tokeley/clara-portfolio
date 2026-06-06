"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface BriefItem {
  image: string;
  text: string;
}

interface BriefSectionProps {
  heading: string;
  items: BriefItem[];
  sidebar: string[];
  sidebarHeading?: string;
  className?: string;
}

function BoldFirstSentence({ text }: { text: string }) {
  const dotIndex = text.indexOf(". ");
  if (dotIndex === -1) return <p className="text-sm leading-relaxed">{text}</p>;

  const first = text.slice(0, dotIndex + 1);
  const rest = text.slice(dotIndex + 1);

  return (
    <p className="text-sm leading-relaxed">
      <strong>{first}</strong>
      {rest}
    </p>
  );
}

export function BriefSection({
  heading,
  items,
  sidebar,
  sidebarHeading,
  className = "",
}: BriefSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[65%_35%]">
        <div>
          <ScrollReveal>
            <h2 className="mb-10 font-serif text-4xl md:text-5xl">
              {heading}
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="right" delay={0.2}>
          <div className="rounded-sm bg-cream p-8">
            {sidebarHeading && (
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider">
                {sidebarHeading}
              </h3>
            )}
            <div className="space-y-4">
              {sidebar.map((paragraph, i) => (
                <BoldFirstSentence key={i} text={paragraph} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

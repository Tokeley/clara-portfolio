"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface ProductUsageItem {
  image: string;
  caption: string;
}

interface ProductUsageProps {
  heading: string;
  items: ProductUsageItem[];
  className?: string;
}

export function ProductUsage({
  heading,
  items,
  className = "",
}: ProductUsageProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
        </ScrollReveal>
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {items.map((item, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className="min-w-[200px] flex-shrink-0 md:min-w-0"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider">
                {item.caption}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

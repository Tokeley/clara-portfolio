"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ProjectOverviewProps {
  image: string;
  children: ReactNode;
  imageAlt: string;
  className?: string;
  reversed?: boolean;
}

export function ProjectOverview({
  image,
  children,
  imageAlt,
  className = "",
  reversed = false,
}: ProjectOverviewProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <ScrollReveal
          direction={reversed ? "right" : "left"}
          className={`relative aspect-[4/3] overflow-hidden ${
            reversed ? "md:order-2" : ""
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            unoptimized
            className="object-cover"
          />
        </ScrollReveal>
        <ScrollReveal
          direction={reversed ? "left" : "right"}
          delay={0.15}
          className={reversed ? "md:order-1" : ""}
        >
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}

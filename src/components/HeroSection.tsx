"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

const strips = [
  { src: "/images/cradle/hero.png", alt: "Cradle project" },
  { src: "/images/tilt/1.png", alt: "Tilt project" },
  { src: "/images/growing-light/1.png", alt: "Growing Light project" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-cream pt-20">
      <div className="mx-auto flex w-full max-w-7xl items-end gap-16 px-6 pb-20">
        <div className="flex w-[42%] shrink-0 gap-4">
          {strips.map((strip, i) => (
            <motion.div
              key={i}
              className="relative aspect-[1/2.8] w-1/3 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
            >
              <Image
                src={strip.src}
                alt={strip.alt}
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-1 flex-col items-end text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 className="text-7xl font-bold tracking-tight text-charcoal lg:text-8xl">
            {siteContent.title}
          </h1>
          <p className="mt-2 text-2xl font-light tracking-wide text-charcoal/60 lg:text-3xl">
            {siteContent.name}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

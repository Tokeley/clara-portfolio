"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteContent } from "@/lib/content";

export function AboutSection() {
  const { about, contact, name } = siteContent;

  return (
    <section className="border-l-2 border-cream-dark bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1.2fr_1fr]">
        <ScrollReveal direction="up">
          <h2 className="font-serif text-5xl italic text-charcoal">
            {about.heading}
          </h2>
          <div className="relative mt-8 aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-sm">
            <Image
              src="/images/main/portrait.png"
              alt="Clara Chemin portrait"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <div className="space-y-5 pt-4 text-base leading-relaxed text-charcoal/80">
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <h3 className="text-lg font-bold text-charcoal">Contact</h3>
          <p className="mt-2 text-sm font-medium text-charcoal/70">{name}</p>

          <ul className="mt-6 space-y-4 text-sm text-charcoal/80">
            <li className="flex items-center gap-3">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a
                href={`mailto:${contact.email}`}
                className="underline-offset-2 hover:underline"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="underline-offset-2 hover:underline"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>{contact.instagram}</span>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

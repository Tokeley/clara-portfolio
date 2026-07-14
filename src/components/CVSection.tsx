"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { siteContent } from "@/lib/content";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export function CVSection() {
  const { education, experience, languages, skills, awards } = siteContent;

  return (
    <section className="bg-white py-20">
      {/* Awards sits in a padded grey box, so columns 1-2 get matching top
          padding and the grid rows keep Languages/Skills titles aligned. */}
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-14 px-6 md:grid-cols-3 md:grid-rows-[auto_1fr]">
        <ScrollReveal direction="up" className="md:pt-8">
          <h2 className="text-3xl font-bold text-charcoal">Education</h2>
          <hr className="mt-3 border-charcoal/20" />
          <div className="mt-6 space-y-6">
            {education.map((entry, i) => (
              <div key={i}>
                {i > 0 && <hr className="mb-6 border-cream-dark" />}
                <p className="whitespace-pre-line text-sm font-bold leading-snug text-charcoal">
                  {entry.institution}
                </p>
                <p className="mt-1 text-sm text-charcoal/80">{entry.degree}</p>
                <p className="mt-1 text-xs italic text-charcoal/50">{entry.note}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} className="md:pt-8">
          <h2 className="text-3xl font-bold text-charcoal">Experience</h2>
          <hr className="mt-3 border-charcoal/20" />
          <div className="mt-6 space-y-6">
            {experience.map((job, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-charcoal">{job.role}</p>
                <p className="text-sm font-medium text-charcoal/70">
                  {job.company} | {job.location} | {job.period}
                </p>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-charcoal/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-charcoal/40" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={0.3}
          className="md:col-start-3 md:row-span-2 md:row-start-1"
        >
          <div className="h-full bg-grey-light p-8">
            <h2 className="text-3xl font-bold text-charcoal">Awards</h2>
            <hr className="mt-3 border-charcoal/20" />
            <div className="mt-6 space-y-8">
              {awards.map((award, i) => (
                <div key={i}>
                  <p className="text-sm font-bold text-charcoal">{award.title}</p>
                  <p className="mt-0.5 text-sm font-medium text-charcoal/70">
                    {award.subtitle}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {award.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed text-charcoal/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-charcoal/40" />
                        <span>{renderBold(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" className="md:col-start-1 md:row-start-2">
          <h2 className="text-3xl font-bold text-charcoal">Languages</h2>
          <hr className="mt-3 border-charcoal/20" />
          <div className="mt-4 space-y-2">
            {languages.map((entry, i) => (
              <div key={i} className="flex items-baseline gap-2 text-sm">
                <span className="font-bold text-charcoal">{entry.language}</span>
                <span className="text-charcoal/30">|</span>
                <span className="text-charcoal/60">{entry.level}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} className="md:col-start-2 md:row-start-2">
          <h2 className="text-3xl font-bold text-charcoal">Skills</h2>
          <hr className="mt-3 border-charcoal/20" />
          <div className="mt-4 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Technical
              </h3>
              <ul className="mt-2 space-y-1">
                {skills.technical.map((skill, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal/80">
                    <span className="text-charcoal/30">&bull;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Personal
              </h3>
              <ul className="mt-2 space-y-1">
                {skills.personal.map((skill, i) => (
                  <li key={i} className="flex gap-2 text-sm text-charcoal/80">
                    <span className="text-charcoal/30">&bull;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

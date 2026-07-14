"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteContent } from "@/lib/content";

const projectImages = [
  "/images/cradle/overview.jpg",
  "/images/tilt/1.jpg",
  "/images/growing-light/1.jpg",
];

const metaFields = ["product", "material", "processes", "date"] as const;

export function ProjectGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.projects.map((project, i) => (
          <ScrollReveal key={project.slug} direction="up" delay={i * 0.12}>
            <Link href={`/${project.slug}`} className="group block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <hr className="border-charcoal/20" />
                <div className="flex items-baseline justify-between py-3">
                  <span className="text-xl font-bold tracking-tight text-charcoal">
                    ({project.number})
                  </span>
                  <span className="text-xl font-bold uppercase tracking-tight text-charcoal">
                    {project.title}
                  </span>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
                  <Image
                    src={projectImages[i]}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <table className="mt-3 w-full">
                  <tbody>
                    {metaFields.map((field) => (
                      <tr key={field} className="border-b border-charcoal/20 last:border-b-0">
                        <td className="py-0.5 text-[10px] font-bold uppercase tracking-wider text-charcoal">
                          {field}
                        </td>
                        <td className="py-0.5 text-right text-[10px] font-bold uppercase tracking-wide text-charcoal">
                          {project[field]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

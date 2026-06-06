import Link from "next/link";
import { siteContent } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-cream py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <p className="text-sm font-medium text-charcoal">{siteContent.name}</p>
          <p className="mt-1 text-xs text-charcoal/50">Industrial Designer</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="text-xs text-charcoal/60 transition-colors hover:text-charcoal"
          >
            {siteContent.contact.email}
          </a>
          <span className="text-charcoal/20">|</span>
          <a
            href={`https://instagram.com/${siteContent.contact.instagram.replace("@", "")}`}
            className="text-xs text-charcoal/60 transition-colors hover:text-charcoal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteContent.contact.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}

interface ProjectNavProps {
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav className="border-t border-cream-dark bg-cream py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
            className="group flex items-center gap-2 text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
            {prev.title}
          </Link>
        ) : (
          <div />
        )}
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-widest text-charcoal/40 transition-colors hover:text-charcoal"
        >
          All Projects
        </Link>
        {next ? (
          <Link
            href={`/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            {next.title}
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}

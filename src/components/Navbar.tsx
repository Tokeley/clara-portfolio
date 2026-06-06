"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled
    ? "text-charcoal"
    : isProjectPage
      ? "text-white"
      : "text-charcoal";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`text-sm font-medium tracking-wide transition-colors duration-300 ${textColor}`}
        >
          Clara Chemin
        </Link>
        <ul className="hidden items-center gap-8 sm:flex">
          {[
            { href: "/cradle", label: "Cradle" },
            { href: "/tilt", label: "Tilt" },
            { href: "/growing-light", label: "Growing Light" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative text-sm tracking-wide transition-colors duration-300 ${textColor} ${
                  pathname === link.href ? "font-semibold" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                    pathname === link.href
                      ? `w-full ${scrolled ? "bg-charcoal" : isProjectPage ? "bg-white" : "bg-charcoal"}`
                      : `w-0 group-hover:w-full ${scrolled ? "bg-charcoal" : isProjectPage ? "bg-white" : "bg-charcoal"}`
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

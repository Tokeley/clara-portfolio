"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/cradle", label: "Cradle" },
  { href: "/tilt", label: "Tilt" },
  { href: "/growing-light", label: "Growing Light" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname !== "/";

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hide when scrolling down past the header, reveal on any scroll up
      setHidden(y > 80 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const textColor = scrolled || mobileOpen
    ? "text-charcoal"
    : isProjectPage
      ? "text-white"
      : "text-charcoal";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || mobileOpen
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

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className={`sm:hidden ${textColor}`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-charcoal/10 bg-cream/95 backdrop-blur-sm sm:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-wide text-charcoal ${
                    pathname === link.href ? "font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface Overlay {
  text: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

interface FullBleedImageProps {
  src: string;
  alt: string;
  overlays?: Overlay[];
  className?: string;
  aspectRatio?: string;
  overlayTextSize?: string;
}

const positionClasses: Record<Overlay["position"], string> = {
  "top-left": "top-6 left-6",
  "top-right": "top-6 right-6 text-right",
  "bottom-left": "bottom-6 left-6",
  "bottom-right": "bottom-6 right-6 text-right",
};

export function FullBleedImage({
  src,
  alt,
  overlays,
  className = "",
  aspectRatio = "16/9",
  overlayTextSize = "text-xs",
}: FullBleedImageProps) {
  return (
    <ScrollReveal>
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-cover"
        />
        {overlays?.map((overlay, i) => (
          <span
            key={i}
            className={`absolute max-w-[400px] ${overlayTextSize} font-bold uppercase tracking-wider text-white ${positionClasses[overlay.position]}`}
          >
            {overlay.text}
          </span>
        ))}
      </div>
    </ScrollReveal>
  );
}

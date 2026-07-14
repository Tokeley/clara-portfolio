"use client";

import { ScrollReveal } from "./ScrollReveal";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function ProjectVideo({ src, poster, className = "" }: ProjectVideoProps) {
  return (
    <ScrollReveal>
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        className={`aspect-video w-full bg-black ${className}`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ScrollReveal>
  );
}

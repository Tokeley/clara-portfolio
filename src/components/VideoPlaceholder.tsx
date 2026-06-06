"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface VideoPlaceholderProps {
  thumbnail?: string;
  className?: string;
}

export function VideoPlaceholder({
  thumbnail,
  className = "",
}: VideoPlaceholderProps) {
  return (
    <ScrollReveal>
      <div
        className={`relative flex items-center justify-center bg-black ${className}`}
        style={{ aspectRatio: "16/9" }}
      >
        {thumbnail && (
          <>
            <Image
              src={thumbnail}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
        <button
          type="button"
          aria-label="Play video"
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-sm transition-transform hover:scale-110"
        >
          <div
            className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white"
          />
        </button>
      </div>
    </ScrollReveal>
  );
}

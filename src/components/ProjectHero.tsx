import Image from "next/image";
import { type ReactNode } from "react";

interface ProjectHeroProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
}

export function ProjectHero({
  backgroundImage,
  children,
  className = "",
}: ProjectHeroProps) {
  return (
    <section className={`relative h-dvh w-full overflow-hidden ${className}`}>
      <Image
        src={backgroundImage}
        alt=""
        fill
        unoptimized
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative z-10 flex h-full w-full items-end p-8 md:p-12">
        {children}
      </div>
    </section>
  );
}

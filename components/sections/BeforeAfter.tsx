"use client";

import { useState, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { projectLocations } from "@/lib/i18n";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { withBasePath } from "@/lib/seo";

function BeforeAfterSlider({
  beforeImg,
  afterImg,
  beforePosition = "center",
  afterPosition = "center",
  location,
  beforeLabel,
  afterLabel,
}: {
  beforeImg: string;
  afterImg: string;
  beforePosition?: string;
  afterPosition?: string;
  location: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <div
        ref={containerRef}
        className="before-after-slider relative aspect-[4/3]"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full) */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${afterImg}')`,
            backgroundPosition: afterPosition,
          }}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${beforeImg}')`,
            backgroundPosition: beforePosition,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L3 10L7 16" stroke="#1B3626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4L17 10L13 16" stroke="#1B3626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <Badge className="absolute top-4 left-4 bg-brand-navy/90 text-brand-surface border-none z-20">
          {beforeLabel}
        </Badge>
        <Badge className="absolute top-4 right-4 bg-brand-orange/92 text-brand-navy border-none z-20">
          {afterLabel}
        </Badge>
      </div>

      <div className="bg-white p-4 flex items-center gap-2 border-t border-brand-navy/8">
        <MapPin className="h-4 w-4 text-brand-navy" />
        <span className="font-medium text-brand-text text-sm">{location}, TX</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useLanguage();
  const projects = [
    {
      location: projectLocations[0],
      beforeImg: "/images/before-after/chimney-before.png",
      afterImg: "/images/before-after/chimney-after.png",
      beforePosition: "center center",
      afterPosition: "center center",
    },
    {
      location: projectLocations[1],
      beforeImg: "/images/before-after/front-house-before.png",
      afterImg: "/images/before-after/front-house-after.png",
      beforePosition: "center 42%",
      afterPosition: "center 42%",
    },
    {
      location: projectLocations[2],
      beforeImg: "/images/before-after/aerial-before.png",
      afterImg: "/images/before-after/aerial-after.png",
      beforePosition: "center center",
      afterPosition: "center center",
    },
  ];

  return (
    <section id="before-after" className="py-16 md:py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-text mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            {t.beforeAfter.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <BeforeAfterSlider
              key={project.location}
              beforeImg={withBasePath(project.beforeImg)}
              afterImg={withBasePath(project.afterImg)}
              beforePosition={project.beforePosition}
              afterPosition={project.afterPosition}
              location={project.location}
              beforeLabel={t.beforeAfter.before}
              afterLabel={t.beforeAfter.after}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

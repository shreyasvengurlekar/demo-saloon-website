"use client";

import Image from "next/image";
import * as React from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronsLeftRight } from "lucide-react";

const BeforeAfterSlider = ({ beforeImg, afterImg }: { beforeImg: any; afterImg: any }) => {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const imageContainerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const onMouseMove = (moveEvent: MouseEvent) => handleMove(moveEvent.clientX);
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={imageContainerRef}
      className="group relative w-full max-w-3xl mx-auto aspect-[4/3] overflow-hidden rounded-lg select-none"
    >
      {beforeImg && (
        <Image
          src={beforeImg.imageUrl}
          alt={beforeImg.description}
          fill
          priority
          className="object-cover grayscale pointer-events-none"
          data-ai-hint={beforeImg.imageHint}
        />
      )}
      {afterImg && (
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={afterImg.imageUrl}
            alt={afterImg.description}
            fill
            priority
            className="object-cover pointer-events-none"
            data-ai-hint={afterImg.imageHint}
          />
        </div>
      )}
      <div
        className="absolute inset-y-0 z-10 w-1 bg-primary/80 cursor-ew-resize"
        style={{
          left: `calc(${sliderPosition}% - 2px)`,
        }}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
      >
        <div
          className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/80 border-2 border-primary flex items-center justify-center transition-transform group-hover:scale-110"
          
        >
          <ChevronsLeftRight className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export function BeforeAfterSection() {
  const beforeImage = PlaceHolderImages.find((img) => img.id === 'before-1');
  const afterImage = PlaceHolderImages.find((img) => img.id === 'after-1');

  return (
    <section className="container mx-auto px-6 md:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">Transformations</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Witness the magic. Real results, real confidence.
        </p>
      </div>
      <div className="mt-16">
        <BeforeAfterSlider beforeImg={beforeImage} afterImg={afterImage} />
      </div>
    </section>
  );
}

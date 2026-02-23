import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const images = [
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_1_t9b6x9.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_2_pyff2t.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_3_sxw6kt.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813218/image_4_st07q0.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_5_wfgmov.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_6_osvo7s.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_7_ffoor8.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813219/image_8_nldiss.webp",
];

export function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group w-full mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-xl shadow-2xl bg-secondary" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%] pl-4 first:pl-0 relative aspect-[4/3] md:aspect-[16/9]" key={index}>
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Properti View ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex absolute inset-y-0 left-4 items-center">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg border-none text-primary hover:bg-white hover:text-accent hover:scale-105 transition-all"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      
      <div className="hidden md:flex absolute inset-y-0 right-4 items-center">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-lg border-none text-primary hover:bg-white hover:text-accent hover:scale-105 transition-all"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === selectedIndex 
                ? "bg-accent w-8" 
                : "bg-primary/20 hover:bg-primary/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

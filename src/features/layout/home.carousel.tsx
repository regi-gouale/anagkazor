"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

export const HomeCarousel = () => {
  const slides = ["/slide-1.1.jpg", "/slide-2.1.jpg", "/slide-3.1.jpg"];
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnIteraction: true,
    })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full rounded-lg mx-auto max-lg:overflow-hidden"
    >
      <CarouselContent>
        {slides.map((_, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Image
                src={slides[i]}
                alt="slide"
                width={1000}
                height={150}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

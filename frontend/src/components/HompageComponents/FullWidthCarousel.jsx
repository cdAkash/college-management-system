"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const items = [
  { title: ".", image: "slider1.png" },  
  { title: "..", image: "slider2.png" },
  { title: "...", image: "slider3.png" },
];

export function FullWidthCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      speed: 5,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <div className="w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative h-[600px] bg-gray-200 rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
                {/* Added title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-2xl font-semibold text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
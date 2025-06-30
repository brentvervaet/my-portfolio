'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

interface ProjectImageCarouselProps {
  images: string[];
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images }) => {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.length > 0 ? (
            images.map((src, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <Image
                  className="aspect-auto rounded-xl object-cover"
                  alt={`Project screenshot ${idx + 1}`}
                  src={src}
                  width={2000}
                  height={2000}
                  style={{ objectFit: 'cover' }}
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="flex justify-center">
              <Image
                className="aspect-auto rounded-xl object-cover"
                alt="Project screenshot placeholder"
                src="/placeholder.png"
                width={2000}
                height={2000}
                style={{ objectFit: 'cover' }}
              />
            </CarouselItem>
          )}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2" variant="ghost" />
            <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 border-0" variant="ghost" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ProjectImageCarousel;

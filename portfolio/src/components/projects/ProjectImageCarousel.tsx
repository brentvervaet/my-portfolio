'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

interface ProjectImageCarouselProps {
  images: string[];
  projectTitle?: string;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, projectTitle = 'Project' }) => {
  return (
    <div className="relative" role="region" aria-label={`${projectTitle} screenshots`}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.length > 0 ? (
            images.map((src, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <Image
                  className="aspect-auto rounded-xl object-cover"
                  alt={`${projectTitle} screenshot ${idx + 1} of ${images.length}`}
                  src={src}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={idx === 0}
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="flex justify-center">
              <Image
                className="aspect-auto rounded-xl object-cover"
                alt={`${projectTitle} placeholder screenshot`}
                src="/placeholder.png"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </CarouselItem>
          )}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious 
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-xl hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              aria-label="Previous image"
            />
            <CarouselNext 
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-xl hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              aria-label="Next image"
            />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ProjectImageCarousel;

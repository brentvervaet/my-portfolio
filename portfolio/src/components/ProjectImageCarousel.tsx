// src/components/ProjectImageCarousel.tsx
'use client';
import React, {useState} from 'react';
import Image from "next/image";

interface ProjectImageCarouselProps {
    images: string[];
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative group">
            <div className="relative overflow-hidden">
                <Image
                    className="object-cover rounded-xl aspect-auto"
                    alt="Project screenshot"
                    src={images[currentIndex] || "/placeholder.png"}
                    width={2000}
                    height={2000}
                    style={{objectFit: 'cover'}}
                />
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 p-1 rounded-full
                                  md:opacity-0 group-hover:opacity-70 hover:opacity-100 transition-opacity"
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 p-1 rounded-full
                                  md:opacity-0 group-hover:opacity-70 hover:opacity-100 transition-opacity"
                        aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 ${currentIndex === index ? 'dark:bg-white w-3.5 bg-zinc-700' : 'dark:bg-white/50 bg-zinc-500 w-2'} 
                                          rounded-sm transition-all duration-200 opacity-60`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectImageCarousel;
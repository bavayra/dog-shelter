import { useState } from 'react';
import { shelterGallery } from '@/data/gallery';
import { getGalleryImage, PLACEHOLDER_IMAGE } from '@/utils/images';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shelterGallery.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shelterGallery.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = shelterGallery[currentIndex];

  if (!currentImage) return null;

  const resolvedImageUrl = getGalleryImage(currentImage.imageUrl);

  return (
    <div className="carousel-container bg-primary-50 relative z-10 mx-auto rounded-2xl">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {shelterGallery.length}:{' '}
        {currentImage.caption}
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
        <img
          src={resolvedImageUrl}
          alt={currentImage.caption}
          className="carousel-image w-full object-cover transition-opacity duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />
        <div className="absolute right-0 bottom-0 left-0 bg-black/40 p-2 backdrop-blur-sm">
          <p className="phone-sm:text-base 4xl:text-xl 5xl:text-2xl text-center text-xs leading-snug text-neutral-50 md:text-lg">
            {currentImage.caption}
          </p>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="bg-primary-200 hover:bg-primary-500 absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-1 shadow-lg transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <svg
          className="carousel-arrow text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="bg-primary-200 hover:bg-primary-500 absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1 shadow-lg transition-all hover:scale-110"
        aria-label="Next image"
      >
        <svg
          className="carousel-arrow text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div className="mt-6 flex justify-center gap-2">
        {shelterGallery.map((image, index) => (
          <button
            key={image.imageUrl}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary-500 w-8'
                : 'w-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;

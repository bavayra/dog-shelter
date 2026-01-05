import { useState } from 'react';
import Icon from '@/components/Icon';
import { shelterGallery } from '@/data/gallery';
import { getGalleryImage } from '@/utils/images';

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
    <div className="bg-primary-50 relative mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
        <img
          src={resolvedImageUrl}
          alt={currentImage.caption}
          className="h-64 w-full object-cover transition-opacity duration-500 md:h-80 lg:h-125"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="absolute right-0 bottom-0 left-0 bg-black/40 p-2 backdrop-blur-sm">
          <p className="text-md 3xs:text-sm text-center font-normal text-white">
            {currentImage.caption}
          </p>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="bg-primary-200 hover:bg-primary-500 absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <Icon name="arrow-left" className="text-primary-500 h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="bg-primary-200 hover:bg-primary-500 absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all hover:scale-110"
        aria-label="Next image"
      >
        <Icon name="arrow-right" className="text-primary-500 h-6 w-6" />
      </button>
      <div className="mt-6 flex justify-center gap-2">
        {shelterGallery.map((_, index) => (
          <button
            key={index}
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

import { useState } from 'react';
import Icon from '../components/Icon';
import { shelterGallery } from '../data/gallery';

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

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
        <img
          src={currentImage.imageUrl}
          alt={currentImage.caption}
          className="w-full h-64 md:h-80 lg:h-125 object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-2">
          <p className="text-white text-center text-md font-normal">
            {currentImage.caption}
          </p>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Previous image"
      >
        <Icon name="arrow-left" className="w-6 h-6 text-primary-500" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Next image"
      >
        <Icon name="arrow-right" className="w-6 h-6 text-primary-500" />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {shelterGallery.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-primary-500'
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

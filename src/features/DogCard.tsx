import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';
import { useState } from 'react';
import DogModal from '@/components/DogModal';
import {
  getAgeLabel,
  getGenderBadgeColor,
  getGenderSymbol,
} from '@/utils/dogHelpers';

const DogCard = (dog: Dog) => {
  const { name, breed, age, gender, health, description, imageUrl, isAdopted } =
    dog;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdoptClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const resolvedImageUrl = getDogImage(imageUrl);
  const genderBadgeColor = getGenderBadgeColor(gender);
  const genderSymbol = getGenderSymbol(gender);

  const showHealthBadge = health !== 'Healthy';

  return (
    <>
      <article
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-neutral-50 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        role="article"
        aria-label={`Dog card ${name}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="group relative h-64 overflow-hidden">
          <img
            src={resolvedImageUrl}
            alt={`${name} - ${breed}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className={`absolute top-3 right-3 ${genderBadgeColor} flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold tracking-wider text-white shadow-lg`}
          >
            <span className="text-lg">{genderSymbol}</span>
            <span>{gender}</span>
          </div>
          {isAdopted && (
            <div className="bg-primary-700 absolute top-3 left-3 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg">
              ✓ Adopted
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-3">
          <h3 className="text-primary-700 mb-3 text-2xl font-bold">{name}</h3>
          <div className="text-md mb-4 flex flex-wrap items-center gap-4 text-neutral-700">
            <span className="flex items-center gap-1.5">
              <span role="img" aria-label="birthday cake">
                🎂
              </span>
              <span>{getAgeLabel(age)}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span role="img" aria-label="dog">
                🐕
              </span>
              <span>{breed}</span>
            </span>
          </div>
          {showHealthBadge && (
            <div className="bg-color-accent-200 text-primary-700 text-md mb-4 inline-flex items-center gap-2 self-start rounded-full p-0 font-medium">
              <span>{health}</span>
            </div>
          )}
          <p className="text-primary-700 mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
            {description}
          </p>
          <Button
            variant={isAdopted ? 'secondary' : 'primary'}
            size="medium"
            onClick={handleAdoptClick}
            disabled={isAdopted}
            className="mt-auto w-full"
            aria-label={`Adopt ${name}`}
          >
            {isAdopted ? 'Already found home ❤️' : 'ADOPT ME'}
          </Button>
        </div>
      </article>

      {/* Модальное окно */}
      <DogModal
        dog={dog}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DogCard;

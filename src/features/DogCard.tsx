import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';
import { useState, memo } from 'react';
import type { MouseEvent } from 'react';
import DogModal from '@/components/DogModal';
import {
  getAgeLabel,
  getGenderBadgeColor,
  getGenderSymbol,
} from '@/utils/dogHelpers';

const DogCard = memo((dog: Dog) => {
  const { name, breed, age, gender, health, description, imageUrl, isAdopted } =
    dog;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdoptClick = (e: MouseEvent) => {
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
        className="xl2:h-215 flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-neutral-50 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:mx-4 lg:h-150"
        aria-label={`Dog card ${name}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="group xl2:h-80 relative h-64 overflow-hidden md:h-60">
          <img
            src={resolvedImageUrl}
            alt={`${name} - ${breed}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
            }}
          />
          <div
            className={`absolute top-3 right-3 ${genderBadgeColor} flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold tracking-wider text-white shadow-lg`}
          >
            <span className="tablet-sm:text-lg text-sm">{genderSymbol}</span>
            <span className="tablet-sm:text-lg">{gender}</span>
          </div>
          {isAdopted && (
            <div className="bg-primary-700 absolute top-3 left-3 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg">
              ✓ Adopted
            </div>
          )}
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-4">
          <h3 className="typography-h3 xl2:text-3xl mb-1">{name}</h3>
          <div className="tablet-sm:text-lg mb-2 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
            <span className="flex items-center gap-1.5 lg:gap-1">
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
            <div className="bg-color-accent-200 text-primary-700 mb-2 inline-flex items-center gap-2 self-start rounded-full p-0 text-base font-medium">
              <span>{health}</span>
            </div>
          )}
          <div className="min-h-0 flex-1">
            <p className="typography-small tablet-sm:text-lg tablet-lg:text-lg xl2:p-4 xl2:line-clamp-none mb-4 line-clamp-5 text-sm sm:text-base md:text-base lg:mb-4 lg:line-clamp-7">
              {description}
            </p>
          </div>

          <Button
            variant={isAdopted ? 'secondary' : 'primary'}
            size="medium"
            onClick={handleAdoptClick}
            disabled={isAdopted}
            className="mt-auto w-full"
            ariaLabel={`Adopt ${name}`}
          >
            {isAdopted ? 'Already found home ❤️' : 'ADOPT ME'}
          </Button>
        </div>
      </article>

      <DogModal
        dog={dog}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
});

DogCard.displayName = 'DogCard';

export default DogCard;

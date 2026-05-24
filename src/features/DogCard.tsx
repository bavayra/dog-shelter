import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';
import { useState, memo } from 'react';
import type { MouseEvent } from 'react';
import DogModal from '@/components/DogModal';
import { getAgeLabel, getGenderBadgeColor } from '@/utils/dogHelpers';

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

  const showHealthBadge = health !== 'Healthy';

  return (
    <>
      <article
        className="dog-card-container flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-neutral-50 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl md:mx-auto"
        aria-label={`Dog card ${name}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="dog-card-image-height group relative overflow-hidden">
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
            className={`dog-card-gender-badge absolute top-3 right-3 ${genderBadgeColor} flex items-center gap-1 rounded-full font-semibold tracking-wider text-white shadow-lg`}
          >
            <span className="dog-card-gender-text">{gender}</span>
          </div>
          {isAdopted && (
            <div className="bg-primary-700 absolute top-3 left-3 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg">
              ✓ Adopted
            </div>
          )}
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-4">
          <h3 className="text-fluid-card-title 4xl:pl-3 mb-1">{name}</h3>
          <div className="dog-card-info flex flex-wrap items-center gap-4 text-neutral-700">
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
            <div className="dog-card-health-badge bg-color-accent-200 text-primary-700 inline-flex items-center gap-2 self-start rounded-full p-0 text-base font-medium md:pb-2 2xl:pb-0">
              <span>{health}</span>
            </div>
          )}
          <div className="3xl:mb-8 4xl:mb-6 5xl:mb-2 mb-4 shrink overflow-hidden">
            <div className="text-fluid-card-info 3xl:tracking-tighter 3xl:px-3 3xl:leading-relaxed 3xl:line-clamp-8 5xl:line-clamp-6 2xl:line-clamp-auto 4xl:line-clamp-10 line-clamp-5 text-left leading-snug tracking-normal text-neutral-700 lg:line-clamp-7 2xl:p-2">
              {description.join(' ')}
            </div>
          </div>

          <div className="flex-1 shrink-0"></div>

          <Button
            variant={isAdopted ? 'secondary' : 'primary'}
            size="medium"
            onClick={handleAdoptClick}
            disabled={isAdopted}
            className="4xl:w-auto 4xl:px-20 4xl:mx-auto 5xl:w-80 4xl:text-[1.2rem] 4xl:mb-4 mt-auto w-full"
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

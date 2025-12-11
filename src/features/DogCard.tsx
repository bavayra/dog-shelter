import type { Dog } from '@/types';
import Button from '@/components/Button';

const DogCard = ({
  name,
  breed,
  age,
  gender,
  health,
  description,
  imageUrl,
  isAdopted,
}: Dog) => {
  const handleAdoptClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const genderBadgeColor = gender === 'Male' ? 'bg-blue-500' : 'bg-pink-500';
  const genderSymbol = gender === 'Male' ? '♂' : '♀';

  const showHealthBadge = health !== 'Healthy';

  return (
    <article
      className="
        bg-white
        rounded-lg
        shadow-md
        overflow-hidden
        hover:shadow-xl
        transition-shadow
        duration-300
        flex flex-col
        h-full
      "
      role="article"
      aria-label={`Dog card ${name}`}
    >
      <div className="relative h-64 overflow-hidden group">
        <img
          src={imageUrl}
          alt={`${name} - ${breed}`}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
          loading="lazy"
        />
        <div
          className={`
            absolute top-3 right-3
            ${genderBadgeColor}
            text-white
            px-3 py-1.5
            rounded-full
            text-sm font-semibold
            shadow-lg
            flex items-center gap-1
          `}
        >
          <span className="text-lg">{genderSymbol}</span>
          <span>{gender}</span>
        </div>
        {isAdopted && (
          <div
            className="
            absolute top-3 left-3
            bg-green-600
            text-white
            px-4 py-2
            rounded-full
            text-sm font-bold
            shadow-lg
          "
          >
            ✓ Adopted
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <span role="img" aria-label="birthday cake">
              🎂
            </span>
            <span>{age}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span role="img" aria-label="dog">
              🐕
            </span>
            <span>{breed}</span>
          </span>
        </div>
        {showHealthBadge && (
          <div
            className="
            inline-flex
            items-center gap-2
            bg-yellow-100
            text-yellow-800
            px-3 py-1.5
            rounded-full
            text-xs font-medium
            mb-4
            self-start
          "
          >
            <span>⚠️</span>
            <span>{health}</span>
          </div>
        )}
        <p
          className="
          text-gray-700
          text-sm
          leading-relaxed
          mb-6
          line-clamp-3
          flex-1
        "
        >
          {description}
        </p>
        <Button
          variant={isAdopted ? 'secondary' : 'primary'}
          size="medium"
          onClick={handleAdoptClick}
          disabled={isAdopted}
          className="w-full mt-auto"
          aria-label={`Adopt ${name}`}
        >
          {isAdopted ? 'Already found home ❤️' : 'ADOPT ME'}
        </Button>
      </div>
    </article>
  );
};

export default DogCard;

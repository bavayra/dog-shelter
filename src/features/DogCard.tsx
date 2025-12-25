import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';

const AGE_LABELS: Record<string, string> = {
  'under-1': 'Under 1 year',
  '1-3': '1–3 years',
  '4-7': '4–7 years',
  '8-plus': '8+ years',
  '': 'Unknown',
};

const OLD_TO_KEY: Record<string, string> = {
  young: '1-3',
  adult: '4-7',
  senior: '8-plus',
};

const getAgeLabel = (ageValue?: string) => {
  if (!ageValue) return AGE_LABELS[''];
  const lower = ageValue.toLowerCase();
  if (AGE_LABELS[ageValue]) return AGE_LABELS[ageValue];
  if (OLD_TO_KEY[lower]) return AGE_LABELS[OLD_TO_KEY[lower]];
  return AGE_LABELS[ageValue] ?? ageValue ?? AGE_LABELS[''];
};

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

  const resolvedImageUrl = getDogImage(imageUrl);

  const genderBadgeColor =
    gender === 'Boy'
      ? 'bg-[var(--color-primary-500)]'
      : 'bg-[var(--color-accent-500)]';
  const genderSymbol = gender === 'Boy' ? '♂' : '♀';

  const showHealthBadge = health !== 'Healthy';

  return (
    <article
      className="
        bg-neutral-50
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
          src={resolvedImageUrl}
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
            tracking-wider
          `}
        >
          <span className="text-lg">{genderSymbol}</span>
          <span>{gender}</span>
        </div>
        {isAdopted && (
          <div
            className="
            absolute top-3 left-3
            bg-primary-700
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
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-primary-700 mb-3">{name}</h3>
        <div className="flex flex-wrap items-center gap-4 mb-4 text-md text-neutral-700">
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
          <div
            className="
            inline-flex
            items-center gap-2
            bg-color-accent-200
            text-primary-700
            p-0
            rounded-full
            text-md font-medium
            mb-4
            self-start
          "
          >
            <span>{health}</span>
          </div>
        )}
        <p
          className="
          text-primary-700
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
          className="w-full mt-auto "
          aria-label={`Adopt ${name}`}
        >
          {isAdopted ? 'Already found home ❤️' : 'ADOPT ME'}
        </Button>
      </div>
    </article>
  );
};

export default DogCard;

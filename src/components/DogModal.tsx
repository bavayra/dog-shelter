import { useEffect } from 'react';
import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';
import {
  getAgeLabel,
  getGenderBadgeColor,
  getGenderSymbol,
} from '@/utils/dogHelpers';

interface DogModalProps {
  dog: Dog;
  isOpen: boolean;
  onClose: () => void;
}

const DogModal = ({ dog, isOpen, onClose }: DogModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // При размонтировании или закрытии восстанавливаем позицию
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }
  }, [isOpen]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  const { name, breed, age, gender, health, description, imageUrl, isAdopted } =
    dog;
  const resolvedImageUrl = getDogImage(imageUrl);
  const genderBadgeColor = getGenderBadgeColor(gender);
  const genderSymbol = getGenderSymbol(gender);
  const showHealthBadge = health !== 'Healthy';

  const handleAdoptClick = () => {
    onClose();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center"
        >
          ×
        </button>

        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={resolvedImageUrl}
            alt={`${name} - ${breed}`}
            className="h-full w-full object-cover"
          />
          <div
            className={`absolute top-4 right-16 ${genderBadgeColor} flex items-center gap-1 rounded-full px-4 py-2 text-base font-semibold tracking-wider text-white shadow-lg`}
          >
            <span className="text-xl">{genderSymbol}</span>
            <span>{gender}</span>
          </div>
          {isAdopted && (
            <div className="bg-primary-700 absolute top-4 left-4 rounded-full px-5 py-2.5 text-base font-bold text-white shadow-lg">
              ✓ Adopted
            </div>
          )}
        </div>

        <div className="p-8">
          <h2
            id="modal-title"
            className="text-primary-700 mb-6 text-4xl font-bold"
          >
            {name}
          </h2>

          <div className="mb-6 flex flex-wrap gap-6 text-lg text-neutral-700">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="birthday cake" className="text-2xl">
                🎂
              </span>
              <span className="font-medium">{getAgeLabel(age)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span role="img" aria-label="dog" className="text-2xl">
                🐕
              </span>
              <span className="font-medium">{breed}</span>
            </div>
            {showHealthBadge && (
              <div className="flex items-center gap-2">
                <span role="img" aria-label="medical" className="text-2xl">
                  💊
                </span>
                <span className="text-accent-600 font-medium">{health}</span>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-primary-600 mb-3 text-xl font-semibold">
              About {name}
            </h3>
            <p className="text-primary-700 text-base leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <Button
            variant={isAdopted ? 'secondary' : 'primary'}
            size="large"
            onClick={handleAdoptClick}
            disabled={isAdopted}
            className="w-full"
            aria-label={`Adopt ${name}`}
          >
            {isAdopted ? 'Already found home' : 'ADOPT ME'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DogModal;

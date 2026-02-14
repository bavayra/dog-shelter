import { useEffect, useRef } from 'react';
import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';
import { getAgeLabel, getGenderBadgeColor } from '@/utils/dogHelpers';

interface DogModalProps {
  dog: Dog;
  isOpen: boolean;
  onClose: () => void;
}

const DogModal = ({ dog, isOpen, onClose }: DogModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = '';
    };
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

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const closeButton = modal.querySelector(
      '[aria-label*="Close"]'
    ) as HTMLElement;
    closeButton?.focus();

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleTab);

    return () => modal.removeEventListener('keydown', handleTab);
  }, [isOpen]);
  if (!isOpen) return null;

  const { name, breed, age, gender, health, description, imageUrl, isAdopted } =
    dog;
  const resolvedImageUrl = getDogImage(imageUrl);
  const genderBadgeColor = getGenderBadgeColor(gender);

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
      className="fixed inset-0 z-53 flex items-center justify-center bg-black/60 backdrop-blur-sm sm:px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-primary-200 4xl:max-h-[calc(var(--vph,82vh)*0.82)] 5xl:max-w-2xl tablet-lg:max-w-lg tablet-lg:px-4 6xl:max-w-xl 5xl:tracking-tight 5xl:px-4 relative mx-4 max-h-[calc(var(--vph,90vh)*0.9)] w-full max-w-3xl overflow-y-auto rounded-2xl md:max-w-md"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button
          onClick={onClose}
          aria-label="Close dog details modal"
          className="text-primary-500 5xl:h-14 5xl:w-14 absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50 p-0 text-2xl"
        >
          <svg
            className="tablet-lg:w-10 tablet-lg:h-10 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative h-70 overflow-hidden rounded-t-2xl md:h-auto md:rounded-2xl">
          <img
            src={resolvedImageUrl}
            alt={`${name} - ${breed}`}
            className="5xl:max-h-140 6xl:max-h-100 mx-auto h-full w-full object-cover md:mt-8 md:max-h-92 md:w-auto md:rounded-2xl md:object-contain xl:max-h-96"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
            }}
          />

          {isAdopted && (
            <div className="bg-primary-700 absolute top-4 left-4 rounded-full px-5 py-2.5 text-base font-bold text-white shadow-lg">
              ✓ Adopted
            </div>
          )}
        </div>

        <div className="p-4 sm:px-6 sm:py-2">
          <div className="mb-2 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <h3
              id="modal-title"
              className="typography-h3 5xl:text-5xl tablet-lg:text-4xl xs:text-3xl md:mt-2 xl:pl-2"
            >
              {name}
            </h3>
            <div
              className={`absolute top-74 right-4 md:static ${genderBadgeColor} 5xl:py-4 6xl:py-2 tablet-lg:px-6 flex items-center gap-1 rounded-full px-4 py-1 tracking-wide text-white shadow-lg 2xl:px-5`}
            >
              <span className="tablet-sm:text-lg tablet-lg:text-xl 5xl:text-2xl text-base">
                {gender}
              </span>
            </div>
          </div>

          <div className="xs:text-base 4xl:text-xl 5xl:mb-4 6xl:text-xl mb-2 flex flex-wrap gap-3 text-sm text-neutral-700 md:text-lg xl:pl-2">
            <div className="5xl:text-2xl 6xl:text-xl flex items-center gap-2">
              <span
                role="img"
                aria-label="birthday cake"
                className="4xl:text-2xl 5xl:text-3xl 6xl:text-2xl"
              >
                🎂
              </span>
              <span>{getAgeLabel(age)}</span>
            </div>
            <div className="5xl:text-2xl 6xl:text-xl flex items-center gap-2">
              <span
                role="img"
                aria-label="dog"
                className="5xl:text-3xl 6xl:text-2xl"
              >
                🐕
              </span>
              <span>{breed}</span>
            </div>
            {showHealthBadge && (
              <div className="flex items-center gap-2">
                <span
                  role="img"
                  aria-label="medical"
                  className="6xl:text-xl text-2xl"
                >
                  💊
                </span>
                <span className="text-accent-600 5xl:text-2xl 6xl:text-xl font-medium">
                  {health}
                </span>
              </div>
            )}
          </div>

          <div className="4xl:mb-8 mb-4">
            <div className="xs:text-base xs:px-3 4xl:leading-tighter tablet-lg:text-xl tablet-lg:leading-tight 5xl:text-[1.65rem] 6xl:text-2xl 3xl:text-xl px-2 text-justify text-sm leading-tight tracking-tight text-neutral-700 sm:px-1 lg:text-lg lg:font-normal xl:px-3 2xl:text-lg">
              {description.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <Button
            variant={isAdopted ? 'secondary' : 'primary'}
            size="medium"
            onClick={handleAdoptClick}
            disabled={isAdopted}
            className="4xl:w-xs 5xl:w-md 5xl:py-4 6xl:w-sm xs:px-16 tablet-lg:w-xs mx-auto flex w-auto justify-center md:mb-6"
            ariaLabel={`Adopt ${name}`}
          >
            {isAdopted ? 'Already found home' : 'ADOPT ME'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DogModal;

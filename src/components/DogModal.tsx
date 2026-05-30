import { useEffect, useRef } from 'react';
import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage, PLACEHOLDER_IMAGE } from '@/utils/images';
import { getAgeLabel, getGenderBadgeColor } from '@/utils/dogHelpers';
import useFocusTrap from '@/hooks/useFocusTrap';

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

  useFocusTrap(modalRef, isOpen);
  if (!isOpen) return null;

  const { name, breed, age, gender, health, description, imageUrl, isAdopted } =
    dog;
  const resolvedImageUrl = getDogImage(imageUrl);
  const genderBadgeColor = getGenderBadgeColor(gender);

  const showHealthBadge = health !== 'Healthy';

  return (
    <div
      className="phone:px-4 fixed inset-0 z-53 flex items-center justify-center bg-black/60 backdrop-blur-sm"
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
            className="modal-image mx-auto h-full w-full object-cover md:w-auto md:rounded-2xl md:object-contain"
            onError={(e) => {
              e.currentTarget.src = PLACEHOLDER_IMAGE;
            }}
          />

          {isAdopted && (
            <div className="bg-primary-700 absolute top-4 left-4 rounded-full px-5 py-2.5 text-base font-bold text-white shadow-lg">
              ✓ Adopted
            </div>
          )}
        </div>

        <div className="phone:px-6 phone:py-2 p-4">
          <div className="mb-2 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <h3
              id="modal-title"
              className="modal-title text-fluid-modal-title text-primary-700 leading-normal font-bold"
            >
              {name}
            </h3>
            <div
              className={`modal-gender-badge ${genderBadgeColor} absolute top-74 right-4 flex items-center gap-1 rounded-full tracking-wide text-white shadow-lg md:static`}
            >
              <span className="modal-gender-text">{gender}</span>
            </div>
          </div>

          <div className="modal-info-container flex flex-wrap gap-3 text-neutral-700">
            <div className="modal-info-item flex items-center gap-2">
              <span
                role="img"
                aria-label="birthday cake"
                className="modal-emoji"
              >
                🎂
              </span>
              <span>{getAgeLabel(age)}</span>
            </div>
            <div className="modal-info-item flex items-center gap-2">
              <span role="img" aria-label="dog" className="modal-emoji">
                🐕
              </span>
              <span>{breed}</span>
            </div>
            {showHealthBadge && (
              <div className="flex items-center gap-2">
                <span role="img" aria-label="medical" className="modal-emoji">
                  💊
                </span>
                <span className="text-accent-600 modal-info-item font-medium">
                  {health}
                </span>
              </div>
            )}
          </div>

          <div className="4xl:mb-8 mb-4">
            <div className="text-fluid-modal-desc phone-sm:px-3 4xl:leading-tighter tablet-lg:leading-tight text-primary-700 phone:px-1 px-2 text-justify leading-tight tracking-tight lg:font-normal xl:px-3">
              {description
                .filter((line) => !line.startsWith('-'))
                .map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              {description.some((line) => line.startsWith('-')) && (
                <ul className="mt-1 list-disc pl-4">
                  {description
                    .filter((line) => line.startsWith('-'))
                    .map((line, i) => (
                      <li key={i} className="mb-1">
                        {line.slice(1).trim()}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          {isAdopted ? (
            <Button
              variant="secondary"
              size="medium"
              disabled
              className="4xl:w-xs 5xl:w-md 5xl:py-4 6xl:w-sm phone-sm:px-16 tablet-lg:w-xs mx-auto flex w-auto justify-center md:mb-6"
              aria-label={`${name} has already been adopted`}
            >
              Already found home
            </Button>
          ) : (
            <Button
              href="#contact"
              variant="primary"
              size="medium"
              onClick={onClose}
              className="4xl:w-xs 5xl:w-md 5xl:py-4 6xl:w-sm phone-sm:px-16 tablet-lg:w-xs mx-auto flex w-auto justify-center md:mb-6"
              aria-label={`Adopt ${name}`}
            >
              ADOPT ME
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogModal;

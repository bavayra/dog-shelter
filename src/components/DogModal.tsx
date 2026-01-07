import { useEffect, useRef } from 'react';
import type { Dog } from '@/types';
import Button from '@/components/Button';
import { getDogImage } from '@/utils/images';
import {
  getAgeLabel,
  getGenderBadgeColor,
  getGenderSymbol,
} from '@/utils/dogHelpers';
import { sanitizeInput } from '@/utils/sanitize';

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
  const genderSymbol = getGenderSymbol(gender);
  const showHealthBadge = health !== 'Healthy';

  const handleAdoptClick = () => {
    onClose();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const sanitized = sanitizeInput(description || '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-primary-200 relative mx-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button
          onClick={onClose}
          aria-label="Close dog details modal"
          className="text-primary-500 absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50 p-0 text-2xl"
        >
          <svg
            className="h-5 w-5"
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

        <div className="relative h-70 overflow-hidden rounded-t-2xl">
          <img
            src={resolvedImageUrl}
            alt={`${name} - ${breed}`}
            className="h-full w-full object-cover"
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

        <div className="p-4">
          <h3 id="modal-title" className="typography-h3 mb-4">
            {name}
          </h3>
          <div
            className={`absolute top-74 right-4 ${genderBadgeColor} flex items-center gap-1 rounded-full px-4 py-2 text-base font-semibold tracking-wider text-white shadow-lg`}
          >
            <span className="text-sm">{genderSymbol}</span>
            <span className="text-sm font-normal">{gender}</span>
          </div>

          <div className="typography-small mb-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="birthday cake" className="text-xl">
                🎂
              </span>
              <span className="font-medium">{getAgeLabel(age)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span role="img" aria-label="dog" className="text-xl">
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
            <div
              className="typography-body px-1 text-justify font-semibold"
              dangerouslySetInnerHTML={{ __html: sanitized }}
            />
          </div>

          <Button
            variant={isAdopted ? 'secondary' : 'primary'}
            size="large"
            onClick={handleAdoptClick}
            disabled={isAdopted}
            className="w-full"
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

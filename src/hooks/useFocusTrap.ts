import { useEffect } from 'react';
import type { RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const useFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean
): void => {
  useEffect(() => {
    if (!isOpen || !ref.current) return;

    const container = ref.current;
    const focusableElements =
      container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

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

    container.addEventListener('keydown', handleTab);
    return () => container.removeEventListener('keydown', handleTab);
  }, [isOpen, ref]);
};

export default useFocusTrap;

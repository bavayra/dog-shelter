import { useState, useEffect, useRef } from 'react';
import { NAVIGATION_ITEMS } from '@/constants';
import useFocusTrap from '@/hooks/useFocusTrap';

import ContactsIcon from '@/assets/icons/contacts-nav-icon.svg?react';
import HelpIcon from '@/assets/icons/help-nav-icon.svg?react';
import AboutUsIcon from '@/assets/icons/about-us-nav-icon.svg?react';
import PetPawIcon from '@/assets/icons/paw-decor-icon.svg?react';
import RulesIcon from '@/assets/icons/rules-nav-icon.svg?react';

interface SidebarProps {
  className?: string;
}

const iconMap = {
  pets: PetPawIcon,
  help: HelpIcon,
  'adoption-rules': RulesIcon,
  about: AboutUsIcon,
  contact: ContactsIcon,
};

const Sidebar = ({ className = '' }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useFocusTrap(sidebarRef, isOpen);

  return (
    <>
      <button
        className="border-primary-700 bg-primary-500 hover:bg-primary-700 phone-sm:top-15 tablet-sm:top-18 fixed top-12 left-3 z-51 rounded-full border-2 p-3 text-neutral-50 shadow-lg transition-colors md:top-22 md:ml-8 lg:top-36"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        <svg
          className="phone:h-8 phone:w-8 h-3 w-3 md:h-10 md:w-10 lg:h-14 lg:w-14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-51 bg-black/50 backdrop-blur-sm xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        ref={sidebarRef}
        className={`bg-primary-500 tablet-sm:w-72 phone-sm:w-50 tablet-lg:w-88 phone:w-54 fixed top-0 bottom-0 left-0 z-52 h-full w-48 overflow-hidden overscroll-none rounded-r-sm shadow-md transition-transform duration-300 md:w-80 xl:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${className}`}
      >
        <button
          className="absolute top-4 right-4 text-neutral-300 hover:text-neutral-700 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <svg
            className="tablet-sm:w-8 tablet-sm:h-8 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="tablet-lg:mt-8 phone-sm:mt-4 relative p-4 md:pl-12">
          <h2 className="tablet-sm:text-2xl tablet-lg:text-3xl mb-4 text-lg font-bold text-neutral-50">
            NAVIGATION
          </h2>
          {NAVIGATION_ITEMS.map((item) => {
            const IconComponent = iconMap[item.id];
            return (
              <a
                key={item.id}
                href={item.href}
                aria-label={`Go to ${item.label} section`}
                className="hover:bg-primary-200 hover:text-primary-700 group tablet-sm:gap-4 tablet-sm:tracking-wider relative z-10 flex items-center gap-2 rounded-lg px-2 py-2 text-neutral-50 transition-colors hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent
                  className="phone-sm:w-5 phone-sm:h-5 tablet-sm:w-7 tablet-sm:h-7 h-4 w-4 text-neutral-50 transition-transform group-hover:scale-110 md:h-8 md:w-8 md:pr-2"
                  aria-hidden="true"
                />
                <span className="phone-sm:text-lg phone-sm:font-normal tablet-lg:text-2xl tablet-sm:text-xl text-sm font-semibold md:font-normal">
                  {item.label}
                </span>
              </a>
            );
          })}

          <div
            className="paw-pattern bg-primary-200 tablet-sm:h-330 phone:top-10 phone:h-280 pointer-events-none absolute top-48 right-2 h-150 w-full overflow-visible md:left-10 md:rotate-5"
            style={{ bottom: '0' }}
          ></div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

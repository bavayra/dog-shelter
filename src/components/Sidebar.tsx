import { useState } from 'react';
import { NAVIGATION_ITEMS } from '@/constants';

import ContactsIcon from '@/assets/icons/contacts-nav-icon.svg?react';
import HelpIcon from '@/assets/icons/help-nav-icon.svg?react';
import AboutUsIcon from '@/assets/icons/about-us-nav-icon.svg?react';
import PetPawIcon from '@/assets/icons/paw-decor-icon.svg?react';
import RulesIcon from '@/assets/icons/rules-nav-icon.svg?react';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconMap = {
    pets: PetPawIcon,
    help: HelpIcon,
    'adoption-rules': RulesIcon,
    about: AboutUsIcon,
    contact: ContactsIcon,
  };

  return (
    <>
      <button
        className="border-accent-500 bg-primary-500 hover:bg-primary-700 fixed top-19 left-3 z-40 rounded-full border-2 p-3 text-neutral-50 shadow-lg transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        <svg
          className="h-6 w-6"
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
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`bg-primary-500 fixed top-16 bottom-0 left-0 z-50 overflow-hidden overscroll-none rounded-r-sm shadow-md transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:bottom-auto md:h-auto md:translate-x-0 ${className}`}
      >
        <nav className="relative p-4 sm:mt-4">
          <h2 className="mb-4 text-lg font-bold text-neutral-100">
            NAVIGATION
          </h2>
          {NAVIGATION_ITEMS.map((item) => {
            const IconComponent = iconMap[item.id];
            return (
              <a
                key={item.id}
                href={item.href}
                aria-label={`Go to ${item.label} section`}
                className="hover:bg-primary-200 hover:text-primary-700 group relative z-10 flex items-center gap-2 rounded-lg px-2 py-3 text-neutral-100 transition-colors hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent
                  className="h-6 w-6 text-neutral-300 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="text-lg font-semibold">{item.label}</span>
              </a>
            );
          })}
        </nav>
        <button
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <svg
            className="h-6 w-6"
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
        <div
          className="paw-pattern pointer-events-none absolute right-6 z-0 h-100 w-full sm:-mb-36 sm:h-full"
          style={{ bottom: '0' }}
        ></div>
      </aside>
    </>
  );
};

export default Sidebar;

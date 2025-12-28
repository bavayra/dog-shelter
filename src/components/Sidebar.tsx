import { useState } from 'react';

import ContactsIcon from '@assets/icons/contacts-nav-icon.svg?react';
import HelpIcon from '@assets/icons/help-nav-icon.svg?react';
import AboutUsIcon from '@assets/icons/about-us-nav-icon.svg?react';
import PetPawIcon from '@assets/icons/paw-decor-icon.svg?react';
import RulesIcon from '@assets/icons/rules-nav-icon.svg?react';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = '' }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: PetPawIcon, label: 'Our Pets', href: '#pets' },
    { icon: AboutUsIcon, label: 'About Us', href: '#about-us' },
    { icon: HelpIcon, label: 'How to Help', href: '#help' },
    { icon: RulesIcon, label: 'Adoption Rules', href: '#adoption-rules' },
    { icon: ContactsIcon, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <button
        className="border-accent-500 bg-primary-500 hover:bg-primary-700 3xs:top-19 fixed top-22 left-3 z-40 rounded-full border-2 p-3 text-neutral-50 shadow-lg transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
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
        className={`bg-primary-500 3xs:top-16 fixed top-20 bottom-0 left-0 z-50 touch-none overflow-hidden overscroll-none rounded-r-sm shadow-md transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:bottom-auto md:h-auto md:translate-x-0 ${className}`}
      >
        <nav className="relative p-6">
          <h2 className="mb-4 text-lg font-bold text-neutral-100">
            NAVIGATION
          </h2>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="hover:bg-primary-200 hover:text-primary-700 group relative z-10 flex items-center gap-2 rounded-lg px-4 py-3 text-neutral-100 transition-colors hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent
                  className="h-6 w-6 text-neutral-300 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold">{item.label}</span>
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
          className="paw-pattern 3xs:h-100 pointer-events-none absolute left-0 z-0 w-full"
          style={{ bottom: '0' }}
        ></div>
      </aside>
    </>
  );
};

export default Sidebar;

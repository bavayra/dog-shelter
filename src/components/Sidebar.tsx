import { useState } from 'react';

import ContactsIcon from '@assets/icons/contacts-nav-icon.svg?react';
import HelpIcon from '@assets/icons/help-nav-icon.svg?react';
import AboutUsIcon from '@assets/icons/about-us-nav-icon.svg?react';
import PetPawIcon from '@assets/icons/pet_paw-nav-icon.svg?react';
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
    { icon: RulesIcon, label: 'Adoption Rules', href: '#rules' },
    { icon: ContactsIcon, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <button
        className="fixed left-3 top-22 z-40 md:hidden border-2 border-accent-500 bg-primary-500 text-neutral-50 p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-22 h-[calc(100vh-31rem)] rounded-r-md bg-primary-200 shadow-md z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:h-auto ${className}`}
      >
        <nav className="p-6 ">
          <h2 className="text-lg font-bold text-primary-500 mb-4">
            NAVIGATION
          </h2>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-4 py-3 text-primary-500 hover:bg-primary-200 hover:text-primary-700 hover:scale-110 rounded-lg transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <IconComponent
                  className="w-6 h-6 group-hover:scale-110 text-neutral-700 transition-transform"
                  aria-hidden="true"
                />
                <span className="text-lg font-bold">{item.label}</span>
              </a>
            );
          })}
        </nav>
        <button
          className="absolute top-4 right-4 md:hidden text-neutral-500 hover:text-neutral-700"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
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
      </aside>
    </>
  );
};

export default Sidebar;

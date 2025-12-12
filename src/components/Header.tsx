import { useState } from 'react';
import { APP_NAME } from '@/constants';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'OUR PETS', href: '#pets' },
    { name: 'HOW TO HELP', href: '#help' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="bg-primary-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-500">
              {APP_NAME}
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-primary-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="medium">
              CONTACT US
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-neutral-700 hover:text-primary-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

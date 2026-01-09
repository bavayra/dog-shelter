import { APP_NAME, NAVIGATION_ITEMS } from '@/constants';
import Button from '@/components/Button';
import LogoIcon from '@/assets/icons/rottweiler-logo-icon.webp';
import HomeIcon from '@/assets/icons/home-icon.svg?react';

const Header = () => {
  const headerLinks = NAVIGATION_ITEMS.filter(
    (item) => item.showInHeader && item.id !== 'contact'
  );

  return (
    <header className="bg-primary-200 fixed top-0 z-50 w-full shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <img
            src={LogoIcon}
            alt="Rotvodom Dog Shelter Logo"
            className="border-primary-500 h-12 w-12 rounded-full border-2 bg-transparent object-center px-1 py-2"
          />
          <div className="flex items-center">
            <h1 className="typography-h1 xs:text-2xl xs:mr-30 mr-22 w-auto sm:mr-40">
              {APP_NAME}
            </h1>
          </div>
          <a
            href="#hero"
            className="flex items-center justify-end"
            aria-label="Go to home section"
          >
            <HomeIcon
              className="hover:text-primary-700 text-primary-500 xs:h-8 xs:w-8 h-6 w-6 cursor-pointer object-contain transition hover:scale-115"
              aria-label="Home"
            />
          </a>

          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main navigation"
          >
            {headerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-primary-700 hover:bg-primary-200 px-3 py-3 font-medium text-neutral-700 transition-transform hover:scale-105 hover:rounded-lg hover:font-bold"
                aria-label={`Go to ${link.label} section`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <div className="hidden transition-transform hover:scale-105 md:block">
            <Button
              variant="primary"
              size="medium"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              ariaLabel="Go to contact form"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

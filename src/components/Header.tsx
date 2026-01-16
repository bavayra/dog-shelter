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
      <div className="xs:m-0 container mx-auto px-0 py-2 md:px-4">
        <div className="ml-4 flex flex-row items-center justify-between md:ml-0 md:pr-6 md:pl-2">
          <div className="flex flex-row">
            <img
              src={LogoIcon}
              alt="Rotvodom Dog Shelter Logo"
              className="border-primary-500 h-12 w-12 rounded-full border-2 bg-transparent object-center px-1 py-2 md:h-14 md:w-14"
            />
            <div className="flex items-center">
              <h1 className="typography-h1 xs:text-2xl w-auto md:mr-0 md:text-xl">
                {APP_NAME}
              </h1>
              <p className="text-primary-500 hidden text-xl font-semibold md:ml-2 md:flex">
                - Best Friends' Shelter
              </p>
            </div>
          </div>

          <nav
            className="hidden items-center gap-8 text-center lg:grid lg:grid-cols-2 lg:gap-2"
            aria-label="Main navigation"
          >
            {headerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-primary-900 hover:bg-primary-200 mx-0 py-3 text-base font-medium text-neutral-700 underline transition-transform hover:scale-105 hover:rounded-lg hover:font-bold md:rounded-full md:px-4 md:py-1 md:font-bold"
                aria-label={`Go to ${link.label} section`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <div className="hidden transition-transform hover:scale-105 md:block md:px-0">
            <Button
              variant="secondary"
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
          <a
            href="#hero"
            className="flex items-center justify-end md:hidden"
            aria-label="Go to home section"
          >
            <HomeIcon
              className="hover:text-primary-700 text-primary-500 xs:h-8 xs:w-8 h-6 w-6 cursor-pointer object-contain transition hover:scale-115"
              aria-label="Home"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

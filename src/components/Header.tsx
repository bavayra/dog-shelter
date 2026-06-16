import { APP_NAME, NAVIGATION_ITEMS } from '@/constants';
import Button from '@/components/Button';
import LogoIcon from '@/assets/icons/rottweiler-logo-icon.webp';
import HomeIcon from '@/assets/icons/home-icon.svg?react';

const Header = () => {
  const headerLinks = NAVIGATION_ITEMS.filter(
    (item) => item.showInHeader && item.id !== 'contact'
  );

  return (
    <header className="bg-primary-200 sticky top-0 z-50 w-full overflow-x-hidden shadow-md">
      <div className="phone-sm:py-2 5xl:px-0 container mx-auto px-2 py-1 md:px-0 lg:py-4">
        <div className="tablet-lg:gap-58 tablet-sm:gap-64 flex flex-row items-center justify-evenly gap-30 md:gap-50 xl:gap-26">
          <div className="phone:gap-2 flex min-w-0 flex-row items-center gap-1">
            <img
              src={LogoIcon}
              alt="Rotvodom Dog Shelter Logo"
              className="header-logo border-primary-500 shrink-0 rounded-full border-2 bg-transparent object-center"
            />
            <div className="flex min-w-0 items-center">
              <h1 className="text-primary-500 text-fluid-logo min-w-0 truncate leading-tight font-bold">
                {APP_NAME}
              </h1>
            </div>
          </div>

          <nav
            className="4xl:gap-10 hidden items-center gap-8 text-center xl:flex xl:flex-row xl:gap-8"
            aria-label="Main navigation"
          >
            {headerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-primary-900 text-fluid-nav hover:bg-primary-200 py-3 font-medium text-neutral-700 transition-transform hover:scale-105 hover:rounded-lg hover:font-bold md:rounded-full md:px-4 md:py-1 md:font-bold lg:font-semibold xl:px-0"
                aria-label={`Go to ${link.label} section`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <div className="hidden transition-transform hover:scale-105 md:block md:px-0">
            <Button
              href="#contact"
              variant="secondary"
              size="medium"
              aria-label="Go to contact form"
              className="header-contact-button"
            >
              CONTACT US
            </Button>
          </div>
          <a
            href="#hero"
            className="flex shrink-0 items-center md:hidden"
            aria-label="Go to home section"
          >
            <HomeIcon
              className="hover:text-primary-700 text-primary-500 phone-sm:w-7 phone-sm:h-7 phone:h-8 phone:w-8 h-5 w-5 shrink-0 cursor-pointer object-contain transition hover:scale-115"
              aria-label="Home"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

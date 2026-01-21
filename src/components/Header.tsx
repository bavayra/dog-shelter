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
      <div className="xs:py-2 container mx-auto px-2 py-1 md:px-0">
        <div className="flex flex-row items-center justify-evenly gap-30 md:gap-50">
          <div className="flex min-w-0 flex-row items-center gap-1 sm:gap-2">
            <img
              src={LogoIcon}
              alt="Rotvodom Dog Shelter Logo"
              className="border-primary-500 xs:w-10 xs:h-10 tablet-sm:w-16 tablet-sm:h-16 h-8 w-8 shrink-0 rounded-full border-2 bg-transparent object-center sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
            <div className="flex min-w-0 items-center">
              <h1 className="text-primary-500 xs:text-base tablet-sm:text-3xl min-w-0 truncate text-sm leading-tight font-bold sm:text-2xl xl:text-2xl">
                {APP_NAME}
              </h1>
            </div>
          </div>

          <nav
            className="hidden items-center gap-8 text-center lg:flex lg:flex-row lg:gap-2"
            aria-label="Main navigation"
          >
            {headerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-primary-900 hover:bg-primary-200 mx-0 py-3 text-lg font-medium text-neutral-700 underline transition-transform hover:scale-105 hover:rounded-lg hover:font-bold md:rounded-full md:px-4 md:py-1 md:font-bold lg:font-semibold"
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
            className="flex shrink-0 items-center md:hidden"
            aria-label="Go to home section"
          >
            <HomeIcon
              className="hover:text-primary-700 text-primary-500 xs:w-7 xs:h-7 h-5 w-5 shrink-0 cursor-pointer object-contain transition hover:scale-115 sm:h-8 sm:w-8"
              aria-label="Home"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

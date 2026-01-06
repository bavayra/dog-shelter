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
            className="border-primary-500 3xs:h-12 3xs:w-12 h-16 w-16 rounded-full border-2 bg-transparent object-center px-1 py-2"
          />
          <div className="flex items-center">
            <h1 className="text-primary-500 3xs:text-xl 3xs:mr-18 mr-30 w-auto text-2xl font-bold md:text-3xl">
              {APP_NAME}
            </h1>
          </div>
          <a
            href="#hero"
            className="flex items-center justify-end"
            aria-label="Go to home section"
          >
            <HomeIcon
              className="3xs:h-6 3xs:w-6 hover:text-primary-700 text-primary-500 h-10 w-10 cursor-pointer object-contain transition hover:scale-115"
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

import { APP_NAME } from '@/constants';
import Button from '@/components/Button';
import LogoIcon from '@/assets/icons/rottweiler-logo-icon.webp';
import HomeIcon from '@/assets/icons/home-icon.svg';

const Header = () => {
  const navigationLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'OUR PETS', href: '#pets-heading' },
    { name: 'HOW TO HELP', href: '#help' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="bg-primary-200 fixed top-0 z-50 w-full shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <img
            src={LogoIcon}
            alt="Logo"
            className="border-primary-500 3xs:h-12 3xs:w-12 h-16 w-16 rounded-full border-2 bg-transparent object-center px-1 py-2"
          />
          <div className="flex items-center">
            <h1 className="text-primary-500 3xs:text-xlw-auto mr-30 text-2xl font-bold md:text-3xl">
              {APP_NAME}
            </h1>
          </div>
          <a href="#hero" className="flex items-center justify-end">
            <img
              src={HomeIcon}
              alt="Home"
              className="3xs:h-8 3xs:w-8 h-10 w-10 cursor-pointer object-cover"
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary-700 hover:bg-primary-200 px-3 py-3 font-medium text-neutral-700 transition-transform hover:scale-105 hover:rounded-lg hover:font-bold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden transition-transform hover:scale-105 md:block">
            <Button variant="primary" size="medium">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { APP_NAME } from '@/constants';
import Button from '@/components/Button';
import LogoIcon from '@/assets/icons/rottweiler-logo-icon.webp';

const Header = () => {
  const navigationLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'OUR PETS', href: '#pets-heading' },
    { name: 'HOW TO HELP', href: '#help' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="bg-primary-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <img
            src={LogoIcon}
            alt="Logo"
            className="w-16 h-16 object-center bg-transparent py-2 px-1 rounded-full border-2 border-primary-500"
          />
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-500 mr-55">
              {APP_NAME}
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-primary-700 hover:bg-primary-200 font-medium hover:scale-105 hover:font-bold transition-transform px-3 py-3 hover:rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block hover:scale-105 transition-transform">
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

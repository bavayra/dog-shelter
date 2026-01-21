import { APP_NAME } from '@/constants';

import HeartIcon from '@/assets/icons/heart-icon.svg?react';

import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-primary-900 py-6 text-neutral-50">
      <div className="md:flex-cols-2 container mx-auto px-4 md:mb-2 md:flex md:justify-center md:gap-36 lg:gap-76">
        <div className="grid grid-cols-1 justify-items-center gap-4">
          <div>
            <h3 className="xs:text-base mb-2 text-center text-xs font-bold">
              {APP_NAME}
            </h3>
            <p className="xs:text-sm tablet-sm:text-base mb-2 text-center text-xs text-neutral-300 md:w-64 xl:w-100 xl:text-lg">
              Find your perfect companion and give a shelter dog a loving home.
            </p>
          </div>
          <div className="mb-6 text-center md:hidden md:text-right">
            <h3 className="xs:text-base mb-2 text-center text-xs font-bold">
              CONTACT US
            </h3>
            <ContactInfo />
          </div>
        </div>
        <div>
          <h3 className="xs:text-base mb-3 text-center text-xs font-bold">
            FOLLOW US
          </h3>
          <SocialLinks size="sm" />
        </div>
      </div>

      <div className="border-primary-900 mt-2 border-t pt-2 text-center text-xs text-neutral-300 md:mt-0">
        <p>
          Made with
          <HeartIcon
            className="text-primary-500 m-2 inline h-4 w-4"
            aria-hidden="true"
          />
          for dogs in need
        </p>
      </div>
      <p className="text-center text-xs text-neutral-300">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import { APP_NAME } from '@/constants';

import HeartIcon from '@/assets/icons/heart-icon.svg?react';

import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-primary-900 py-6 text-neutral-50">
      <div className="tablet-lg:grid-cols-2 4xl:gap-180 4xl:w-260 tablet-lg:gap-40 container mx-auto mb-6 grid grid-cols-1 justify-items-center gap-6 px-4 md:mb-2 md:w-170 md:grid-cols-3 md:gap-5 lg:gap-72 xl:gap-120">
        <div>
          <h3 className="xs:text-base tablet-lg:text-lg 4xl:text-2xl 5xl:mb-4 mb-2 text-center text-xs font-bold">
            {APP_NAME}
          </h3>
          <p className="xs:text-sm tablet-sm:text-base tablet-lg:text-lg tablet-lg:w-80 4xl:text-xl 4xl:w-120 mb-2 text-center text-xs text-neutral-300 md:w-50 md:text-sm xl:w-100">
            Find your perfect companion and give a shelter dog a loving home.
          </p>
        </div>
        <div className="tablet-lg:hidden text-center">
          <h3 className="xs:text-base tablet-lg:text-lg 4xl:text-2xl 5xl:mb-4 mb-2 text-xs font-bold">
            CONTACT US
          </h3>
          <ContactInfo />
        </div>
        <div className="tablet-lg:pl-10">
          <h3 className="xs:text-base tablet-lg:text-lg 4xl:text-2xl 5xl:mb-4 mb-3 text-center text-xs font-bold">
            FOLLOW US
          </h3>
          <SocialLinks size="md" />
        </div>
      </div>

      <div className="border-primary-900 tablet-lg:text-lg mt-2 border-t pt-2 text-center text-xs text-neutral-300 md:mt-0">
        <p>
          Made with
          <HeartIcon
            className="text-primary-500 m-2 inline h-4 w-4"
            aria-hidden="true"
          />
          for dogs in need
        </p>
      </div>
      <p className="tablet-lg:text-md 4xl:text-lg text-center text-xs text-neutral-300">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

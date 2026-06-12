import { APP_NAME } from '@/constants';

import HeartIcon from '@/assets/icons/heart-icon.svg?react';

import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-primary-900 py-6 text-neutral-50">
      <div className="footer-grid tablet-lg:grid-cols-2 container mx-auto grid grid-cols-1 justify-items-center px-4 md:grid-cols-3">
        <div>
          <h3 className="footer-heading text-center font-bold">{APP_NAME}</h3>
          <p className="footer-description mx-auto w-[60%] text-center text-neutral-300 xl:w-[80%]">
            Find your perfect companion and give a shelter dog a loving home.
          </p>
        </div>
        <div className="tablet-lg:hidden text-center">
          <h3 className="footer-heading text-center font-bold">CONTACT US</h3>
          <ContactInfo />
        </div>
        <div className="tablet-lg:pl-10">
          <h3 className="footer-heading text-center font-bold">FOLLOW US</h3>
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
      <p className="footer-copyright text-center text-neutral-300">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

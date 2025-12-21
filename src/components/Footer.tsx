import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  APP_NAME,
} from '@/constants';

import EmailIcon from '@assets/icons/email.svg?react';
import PhoneIcon from '@assets/icons/phone.svg?react';
import LocationIcon from '@assets/icons/location.svg?react';

import HeartIcon from '@assets/icons/heart-icon.svg?react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-neutral-50 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
          <div>
            <h3 className="text-xl text-center font-bold mb-4">{APP_NAME}</h3>
            <p className="text-neutral-100 text-center text-lg mb-2">
              Find your perfect companion and give a shelter dog a loving home.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-2">Contact Us</h3>
            <div className="flex flex-col items-center space-y-1  text-neutral-500">
              <p className="flex items-center gap-2">
                <EmailIcon className="w-5 h-5" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <LocationIcon className="w-5 h-5" aria-hidden="true" />
                <span>{CONTACT_ADDRESS}</span>
              </p>
            </div>
          </div>

          <div className="mt-2">
            <h3 className="text-xl text-center font-bold mb-4">Follow Us</h3>
            <SocialLinks size="sm" />
          </div>
        </div>

        <div className="border-t border-primary-900 mt-6 pt-2 text-center text-neutral-300 text-lg">
          <p>
            Made with
            <HeartIcon
              className="inline w-5 h-5 text-primary-500 m-2"
              aria-hidden="true"
            />
            for dogs in need
          </p>
        </div>
        <p className="text-xs text-center text-neutral-300">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

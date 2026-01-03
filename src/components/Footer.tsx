import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  APP_NAME,
} from '@/constants';

import EmailIcon from '@/assets/icons/email.svg?react';
import PhoneIcon from '@/assets/icons/phone.svg?react';
import LocationIcon from '@/assets/icons/location.svg?react';
import HeartIcon from '@/assets/icons/heart-icon.svg?react';

import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-primary-900 py-6 text-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 md:justify-items-start">
          <div>
            <h3 className="mb-4 text-center text-xl font-bold">{APP_NAME}</h3>
            <p className="mb-2 text-center text-lg text-neutral-100">
              Find your perfect companion and give a shelter dog a loving home.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-center text-xl font-bold">Contact Us</h3>
            <div className="flex flex-col items-center space-y-1 text-neutral-500">
              <p className="flex items-center gap-2">
                <EmailIcon className="h-5 w-5" aria-hidden="true" />
                <a
                  rel="noopener noreferrer"
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <LocationIcon className="h-5 w-5" aria-hidden="true" />
                <span>{CONTACT_ADDRESS}</span>
              </p>
            </div>
          </div>

          <div className="mt-2">
            <h3 className="mb-4 text-center text-xl font-bold">Follow Us</h3>
            <SocialLinks size="md" />
          </div>
        </div>

        <div className="border-primary-900 mt-6 border-t pt-2 text-center text-lg text-neutral-300">
          <p>
            Made with
            <HeartIcon
              className="text-primary-500 m-2 inline h-5 w-5"
              aria-hidden="true"
            />
            for dogs in need
          </p>
        </div>
        <p className="text-center text-xs text-neutral-300">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

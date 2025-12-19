import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  CONTACT_SOCIALS,
  APP_NAME,
} from '@/constants';

import EmailIcon from '@assets/icons/email.svg?react';
import PhoneIcon from '@assets/icons/phone.svg?react';
import LocationIcon from '@assets/icons/location.svg?react';

import FacebookIcon from '@assets/icons/facebook-icon.svg?react';
import InstagramIcon from '@assets/icons/instagram-icon.svg?react';
import TelegramIcon from '@assets/icons/telegram-icon.svg?react';
import VKIcon from '@assets/icons/vk-icon.svg?react';
import HeartIcon from '@assets/icons/heart-icon.svg?react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
          <div>
            <h3 className="text-xl text-center font-bold mb-4">{APP_NAME}</h3>
            <p className="text-neutral-100 text-center text-lg mb-4">
              Find your perfect companion and give a shelter dog a loving home.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center mb-4">Contact Us</h3>
            <div className="flex flex-col items-center space-y-2  text-neutral-500">
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

          {/* Social Media */}
          <div className="mt-2">
            <h3 className="text-xl text-center font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 justify-center  md:justify-start">
              <a
                href={CONTACT_SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-neutral-500 hover:bg-primary-500 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon
                  className="w-8 h-8  text-primary-900"
                  aria-hidden="true"
                />
              </a>
              <a
                href={CONTACT_SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-neutral-500 hover:bg-primary-500 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon
                  className="w-8 h-8 text-primary-900"
                  aria-hidden="true"
                />
              </a>
              <a
                href={CONTACT_SOCIALS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-neutral-500 hover:bg-primary-500 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                aria-label="Telegram"
              >
                <TelegramIcon
                  className="w-8 h-8 text-primary-900"
                  aria-hidden="true"
                />
              </a>
              <a
                href={CONTACT_SOCIALS.vkontakte}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-neutral-500 hover:bg-primary-500 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                aria-label="VKontakte"
              >
                <VKIcon
                  className="w-8 h-8 text-primary-900"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-900 mt-6 pt-8 text-center text-neutral-300 text-lg">
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

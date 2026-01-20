import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/constants';

import EmailIcon from '@/assets/icons/email.svg?react';
import PhoneIcon from '@/assets/icons/phone.svg?react';
import LocationIcon from '@/assets/icons/location.svg?react';

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  return (
    <address
      className={`not-italic ${className}`}
      aria-label="Contact information"
    >
      <div className="md:text-primary-700 flex flex-col items-center space-y-1 text-neutral-500 md:text-lg">
        <p className="flex items-center gap-2">
          <EmailIcon className="xs:h-5 xs:w-5 h-3 w-3" aria-hidden="true" />
          <a
            rel="noopener noreferrer"
            href={`mailto:${CONTACT_EMAIL}`}
            className="hover:text-primary-500 xs:text-base text-xs transition-colors"
            aria-label={`Email us at ${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="flex items-center gap-2">
          <PhoneIcon className="xs:h-5 xs:w-5 h-3 w-3" aria-hidden="true" />
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
            rel="noopener noreferrer"
            className="hover:text-primary-500 xs:text-base text-xs transition-colors"
            aria-label={`Call us at ${CONTACT_PHONE}`}
          >
            {CONTACT_PHONE}
          </a>
        </p>
        <p className="xs:text-base flex items-center gap-2 text-xs">
          <LocationIcon className="xs:h-5 xs:w-5 h-3 w-3" aria-hidden="true" />
          <span>{CONTACT_ADDRESS}</span>
        </p>
      </div>
    </address>
  );
};

export default ContactInfo;

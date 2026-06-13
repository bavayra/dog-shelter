import FacebookIcon from '@/assets/icons/facebook-icon.svg?react';
import InstagramIcon from '@/assets/icons/instagram-icon.svg?react';
import TelegramIcon from '@/assets/icons/telegram-icon.svg?react';
import VKIcon from '@/assets/icons/vk-icon.svg?react';

import { CONTACT_SOCIALS } from '@/constants';
import Icon from './Icon';

interface SocialLinksProps {
  size?: 'sm' | 'md';
  className?: string;
  iconColor?: string;
  bgColor?: string;
}

const SocialLinks = ({
  size = 'md',
  className,
  iconColor = 'text-primary-900',
  bgColor = 'bg-neutral-500',
}: SocialLinksProps) => {
  const socialNetworks = [
    { name: 'Instagram', icon: InstagramIcon, url: CONTACT_SOCIALS.instagram },
    { name: 'Facebook', icon: FacebookIcon, url: CONTACT_SOCIALS.facebook },
    { name: 'Telegram', icon: TelegramIcon, url: CONTACT_SOCIALS.telegram },
    { name: 'VK', icon: VKIcon, url: CONTACT_SOCIALS.vkontakte },
  ];

  const sizeClasses = {
    sm: 'social-link-sm',
    md: 'social-link-md',
  };

  const iconClasses = [iconColor, 'rounded-full'].join(' ');

  const iconSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
  };

  return (
    <div
      className={`3xl:gap-4 phone-sm:gap-2 tablet-lg:gap-4 flex items-center justify-center lg:gap-4 ${className || ''}`}
    >
      {socialNetworks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} ${bgColor} hover:bg-primary-500 flex shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110`}
          aria-label={social.name}
        >
          <Icon
            as={social.icon}
            size={iconSizeMap[size]}
            className={`${iconColor} ${iconClasses} h-full w-full p-[5%]`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

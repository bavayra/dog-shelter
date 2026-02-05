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
    sm: 'w-10 h-10  xs:w-14 xs:h-14 sm:w-16 sm:h-16  lg:w-18 lg:h-18 4xl:h-24 4xl:w-24 social-link-6xl-sm 5xl:w-30 5xl:h-30 6xl:w-22 6xl:h-22  ',
    md: 'w-12  h-12  md:w-8 md:h-8 lg:w-10 lg:h-10 4xl:w-16 4xl:h-16 5xl:w-21 5xl:h-21 6xl:w-12 6xl:h-12',
  };

  const iconSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
  };

  return (
    <div
      className={`3xl:gap-4 xs:gap-2 tablet-lg:gap-4 flex items-center justify-center gap-4 lg:gap-2 ${className || ''}`}
    >
      {socialNetworks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} ${bgColor} hover:bg-primary-500 border-primary-200 flex shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110`}
          aria-label={social.name}
        >
          <Icon
            as={social.icon}
            size={iconSizeMap[size]}
            className={`${iconColor} xs:w-12 xs:h-12 5xl:w-20 5xl:h-20 icon-size-6xl-sm 6xl:w-12 6xl:h-12 tablet-lg:w-9 tablet-lg:h-9 4xl:w-16 4xl:h-16 border-primary-200 rounded-full border sm:h-10 sm:w-10 md:h-8 md:w-8 lg:h-10 lg:w-10`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

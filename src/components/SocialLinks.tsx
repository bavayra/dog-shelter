import FacebookIcon from '@/assets/icons/facebook-icon.svg?react';
import InstagramIcon from '@/assets/icons/instagram-icon.svg?react';
import TelegramIcon from '@/assets/icons/telegram-icon.svg?react';
import VKIcon from '@/assets/icons/vk-icon.svg?react';

import { CONTACT_SOCIALS } from '@/constants';
import Icon from './Icon';

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg';
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
    sm: 'w-10 h-10',
    md: 'w-12  h-12 xs:w-14 xs:h-14 md:w-18 md:h-18',
    lg: 'w-14 h-14',
  };

  const iconSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const,
  };

  return (
    <div
      className={`flex items-center justify-center gap-4 ${className || ''}`}
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
            className={`${iconColor} xs:w-7 xs:h-7 md:h-8 md:w-8`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

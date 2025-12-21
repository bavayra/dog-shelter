import FacebookIcon from '@assets/icons/facebook-icon.svg?react';
import InstagramIcon from '@assets/icons/instagram-icon.svg?react';
import TelegramIcon from '@assets/icons/telegram-icon.svg?react';
import VKIcon from '@assets/icons/vk-icon.svg?react';

import { CONTACT_SOCIALS } from '@/constants';

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialLinks = ({ size = 'md', className }: SocialLinksProps) => {
  const socialNetworks = [
    { name: 'Instagram', icon: InstagramIcon, url: CONTACT_SOCIALS.instagram },
    { name: 'Facebook', icon: FacebookIcon, url: CONTACT_SOCIALS.facebook },
    { name: 'Telegram', icon: TelegramIcon, url: CONTACT_SOCIALS.telegram },
    { name: 'VK', icon: VKIcon, url: CONTACT_SOCIALS.vkontakte },
  ];
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialNetworks.map((social) => (
        <a key={social.name} href={social.url}>
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

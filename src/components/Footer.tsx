import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  CONTACT_SOCIALS,
  APP_NAME,
} from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{APP_NAME}</h3>
            <p className="text-gray-400 mb-4">
              Find your perfect companion and give a shelter dog a loving home.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>{CONTACT_ADDRESS}</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={CONTACT_SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={CONTACT_SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href={CONTACT_SOCIALS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                ✈️
              </a>
              <a
                href={CONTACT_SOCIALS.vkontakte}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="VKontakte"
              >
                🔵
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Made with ❤️ for dogs in need</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

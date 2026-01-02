import { useState } from 'react';
import { sanitizeFormData } from '@/utils/sanitize';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rawData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    const sanitizedData = sanitizeFormData(rawData);

    if (
      !sanitizedData.name ||
      !sanitizedData.phone ||
      !sanitizedData.email ||
      !sanitizedData.message
    ) {
      alert('Please fill in all required fields');
      return;
    }

    // Теперь sanitizedData безопасно отправлять на сервер
    console.log('Safe data:', sanitizedData);

    alert('Thank you! Your message has been sent.');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };
  return (
    <section id="contact" className="bg-primary-200 pt-8 pb-10">
      <h2 className="text-primary-500 3xs:text-4xl mb-8 text-center text-5xl font-bold">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-md px-6">
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-2">
            <TextInput
              id="input-name"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <TextInput
              id="input-email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputMode="email"
              required
            />

            <TextInput
              id="input-phone"
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="tel"
              required
            />

            <div>
              <textarea
                id="input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                className="placeholder:text-primary-900 text-md focus:border-primary-500 min-h-24 w-full resize-none rounded-md border-2 border-neutral-500 bg-transparent px-4 py-3 text-base focus:ring-0 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full text-center text-base font-semibold"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

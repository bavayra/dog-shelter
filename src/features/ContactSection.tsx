import { useState } from 'react';

import Button from '@/components/Button';

import SocialLinks from '@/components/SocialLinks';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    };
    console.log('Sending message:', formData);
    alert('Thank you! Your message has been sent.');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };
  return (
    <section id="contacts" className="bg-primary-200 pt-8 pb-10 ">
      <h2 className="flex justify-center text-5xl text-primary-500 font-bold text-center mb-8 ">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-md px-6">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label
                htmlFor="input-name"
                className="block text-primary-700 text-md font-semibold"
              >
                Name
              </label>
              <input
                id="input-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                required
                className="w-full  cursor-pointer mb-7 bg-transparent border-0 border-b-2 border-neutral-500 p-0 text-base focus:outline-none focus:border-primary-500 focus:ring-0"
              />
            </div>

            <div>
              <label
                htmlFor="input-email"
                className="block text-primary-700 text-md font-semibold"
              >
                Email
              </label>
              <input
                id="input-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
                className="w-full cursor-pointer mb-7 bg-transparent border-0 border-b-2 border-neutral-500 p-0 text-base  focus:outline-none focus:border-primary-500 focus:ring-0"
              />
            </div>

            <div>
              <label
                htmlFor="input-phone"
                className="block text-primary-700 text-md font-semibold "
              >
                Phone Number
              </label>
              <input
                id="input-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder=""
                required
                className="w-full  cursor-pointer mb-7 bg-transparent border-0 border-b-2 border-neutral-500 p-0 text-base  focus:outline-none focus:border-primary-500 focus:ring-0"
              />
            </div>

            <div>
              <textarea
                id="input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                className="w-full bg-transparent  border-2 rounded-md border-neutral-500 px-4 py-3 text-base placeholder:text-primary-900 text-md min-h-24 focus:outline-none focus:border-primary-500 focus:ring-0 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full  cursor-pointer text-center text-base font-semibold"
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

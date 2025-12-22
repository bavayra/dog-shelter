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
      <div className="flex flex-col">
        <div id="socials" className="hidden lg:flex flex-col">
          <h3>Find us on social media</h3>
          <SocialLinks size="lg" />
        </div>
        <div id="contact-form">
          <form onSubmit={handleSubmit} className=" w-svw px-6">
            <div
              id="form-left-side"
              className="grid grid-rows-3 w-auto mx-auto"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name..."
                required
                className="border bg-primary-100 border-primary-500 rounded-md px-4 py-1 mb-4 w-full placeholder:text-xs"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
                required
                className="border bg-primary-100 border-primary-500 rounded-md px-4 py-1 mb-4 w-full placeholder:text-xs"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile..."
                required
                className="border bg-primary-100 border-primary-500 rounded-md px-4 py-1 mb-4 w-full placeholder:text-xs"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message..."
                required
                className="border bg-primary-100 border-primary-500 rounded-md px-4 py-2 mb-4 w-full min-h-60 placeholder:text-xs"
              ></textarea>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="mt-4 flex col-span-2 text-center text-lg mx-auto"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

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
    <section id="contacts">
      <h2>Contact Us</h2>
      <div>
        <div className="flex flex-col">
          <div id="socials">
            <h3>Find us on social media</h3>

            <SocialLinks size="lg" />
          </div>
          <div id="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
              ></textarea>
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

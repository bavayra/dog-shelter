import { useState, type FormEvent } from 'react';
import { sanitizeFormData } from '@/utils/sanitize';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { DecorativeCircle } from '@/components/DecorativeCircle';
import ContactInfo from '@/components/ContactInfo';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (s: string) => {
    const emailRegex =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return emailRegex.test(s);
  };
  const isValidPhone = (s: string) => {
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{4,}$/;
    const digitsOnly = s.replace(/\D/g, '');
    return (
      phoneRegex.test(s) && digitsOnly.length >= 10 && digitsOnly.length <= 15
    );
  };

  const validateAll = (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    const e: typeof errors = {};
    if (!data.name) e.name = 'Name is required';
    if (!data.email) e.email = 'Email is required';
    else if (!isValidEmail(data.email)) e.email = 'Invalid email format';
    if (!data.phone) e.phone = 'Phone number is required';
    else if (!isValidPhone(data.phone)) e.phone = 'Invalid phone number';
    if (!data.message || data.message.length < 5)
      e.message = 'Message is too short';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const MIN_SUBMIT_INTERVAL = 30000;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < MIN_SUBMIT_INTERVAL) {
      setErrorMessage('Please wait 30 seconds before submitting again.');
      return;
    }

    setSuccessMessage('');
    setErrorMessage('');
    setErrors({});

    const rawData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    if (!validateAll(rawData)) return;

    const sanitizedData = sanitizeFormData(rawData);

    setIsSubmitting(true);
    try {
      const resp = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });
      if (!resp.ok) {
        const body = await resp.text();
        throw new Error(`Server error: ${resp.status} ${body}`);
      }
      setLastSubmitTime(now);
      setSuccessMessage('Thank you! Your message has been sent.');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      if (import.meta.env.DEV) {
        console.error('Form submission error:', message);
      }
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="bg-primary-200 pt-8 pb-10 md:px-6">
      <div className="xl2:mr-20 3xl:mr-32 relative">
        <DecorativeCircle
          size={8}
          mdSize={12}
          xl4Size={16}
          color="primary-50"
          top="0"
          right="0"
          zIndex={10}
          opacity={70}
          className="xs:-translate-x-[130%] 4xl:mt-6 tablet-lg:mr-15 xs:translate-y-1/4 4xl:mr-16 tablet-sm:-translate-x-[240%] translate-x-[200%] sm:mr-6 md:mr-8 lg:mt-0 lg:-translate-x-[440%] xl:mt-5 xl:-translate-x-[600%] [@media(min-height:1152px)]:mr-32"
        />
      </div>
      <h2 className="typography-h2 xs:text-5xl 4xl:text-9xl relative z-11 mb-4 text-center md:text-7xl xl:text-8xl">
        Contact Us
      </h2>
      <div className="5xl:gap-40 5xl:w-400 relative flex justify-center md:m-6 md:mx-auto md:grid md:grid-cols-2 md:gap-4 lg:w-240 xl:w-300 xl:gap-10">
        <div className="5xl:max-w-180 w-full max-w-md px-6 xl:mx-6 xl:max-w-lg">
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-2">
            <div>
              <TextInput
                id="input-name"
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                required
              />
              {errors.name && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <TextInput
                id="input-email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputMode="email"
                disabled={isSubmitting}
                required
              />
              {errors.email && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <TextInput
                id="input-phone"
                label="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                disabled={isSubmitting}
                required
              />
              {errors.phone && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="input-message"
                className="typography-body xs:text-base 5xl:text-3xl tablet-lg:text-xl tablet-lg:font-semibold mb-4 block sm:text-lg md:text-lg 2xl:text-2xl"
              >
                Message
              </label>
              <textarea
                id="input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                disabled={isSubmitting}
                className="placeholder:text-primary-900 4xl:text-xl 5xl:text-2xl focus:border-primary-500 xs:text-lg 4xl:min-h-40 mb-2 min-h-24 w-full resize-none rounded-md border-2 border-neutral-500 bg-transparent px-4 py-3 text-xs focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.message && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="relative">
              <DecorativeCircle
                size={8}
                tabletLgSize={10}
                xl5Size={12}
                color="primary-500"
                top="0"
                left="0"
                zIndex={12}
                className="xs:translate-x-[200%] 5xl:ml-26 tablet-sm:translate-x-[300%] tablet-lg:-mt-2 translate-x-[150%] translate-y-[20%] sm:ml-2 md:translate-x-[110%] lg:ml-12 xl:ml-18"
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="outline"
                size="medium"
                disabled={isSubmitting}
                ariaLabel="Submit this form"
                className="5xl:py-4 5xl:px-10 w-auto text-center font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            {successMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mt-4 rounded-md bg-green-100 p-3 text-center text-sm text-green-700"
              >
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div
                role="alert"
                className="mt-4 rounded-md bg-red-100 p-3 text-center text-sm text-red-700"
              >
                {errorMessage}
              </div>
            )}
          </form>
        </div>
        <div className="glass-card 3xl:w-150 mb-10 hidden rounded-2xl py-8 md:flex md:flex-col md:gap-4 md:self-center xl:w-120">
          <p className="typography-large tablet-lg:text-2xl 3xl:text-3xl px-4 text-center text-xl md:block md:font-normal">
            Visits to the shelter are by appointment only. If you have any
            questions about adopting proccesses or volunteering, just get in
            touch however is easiest for you.
          </p>
          <ContactInfo className="md:text-primary-700 md:flex md:items-center md:justify-center md:font-bold" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

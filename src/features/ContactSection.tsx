import { useState, type FormEvent } from 'react';
import { sanitizeFormData } from '@/utils/sanitize';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { DecorativeCircle } from '@/components/DecorativeCircle';

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
    <section id="contact" className="bg-primary-200 pt-8 pb-10">
      <div className="relative">
        <DecorativeCircle
          size={10}
          color="primary-50"
          top="-2"
          right="10"
          zIndex={10}
          opacity={70}
          className="xs:mr-8"
        />
      </div>
      <h2 className="typography-h2 relative z-11 mb-4 text-center">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-md px-6">
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
                className="typography-small xs:text-base mb-4 block"
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
                className="placeholder:text-primary-900 focus:border-primary-500 mb-2 min-h-24 w-full resize-none rounded-md border-2 border-neutral-500 bg-transparent px-4 py-3 text-base focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
                color="primary-500"
                top="1"
                left="-2"
                zIndex={12}
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                ariaLabel="Submit this form"
                className="w-full text-center text-base font-semibold"
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
      </div>
    </section>
  );
};

export default ContactSection;

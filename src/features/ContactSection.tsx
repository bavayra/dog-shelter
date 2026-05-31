import { useState, type FormEvent } from 'react';
import { normalizeFormData } from '@/utils/sanitize';
import {
  validateContactForm,
  type ContactFormErrors,
} from '@/utils/contactValidation';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { DecorativeCircle } from '@/components/DecorativeCircle';
import ContactInfo from '@/components/ContactInfo';

const MIN_SUBMIT_INTERVAL = 30000;

const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [lastSubmitTime, setLastSubmitTime] = useState(0);

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

    const sanitizedData = normalizeFormData({ name, phone, email, message });

    const validationErrors = validateContactForm(sanitizedData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
    if (!apiUrl) {
      setLastSubmitTime(now);
      setSuccessMessage('Thank you! (Demo mode: form submission is disabled)');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      return;
    }

    setIsSubmitting(true);
    try {
      const resp = await fetch(apiUrl, {
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
    <section
      id="contact"
      className="bg-primary-200 relative pt-8 pb-10 md:px-6"
    >
      <div className="flex justify-center">
        <div className="relative w-fit">
          <DecorativeCircle
            sizeVariant="xxs"
            color="primary-50"
            top="0"
            right="0"
            zIndex={10}
            opacity={70}
            className="circle-contact-xxs"
          />
          <h2 className="contact-heading text-fluid-contact-heading text-primary-500 relative z-11 leading-snug font-bold">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="contact-grid tablet-lg:grid tablet-lg:grid-cols-2 relative flex justify-center md:mx-auto">
        <div className="contact-form-wrapper w-full px-6">
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
                className="contact-label mb-4 block text-neutral-700"
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
                className="contact-textarea focus:border-primary-500 mb-2 w-full resize-none rounded-md border-2 border-neutral-500 bg-transparent px-4 py-3 placeholder:opacity-100 focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.message && (
                <p className="-mt-6 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="flex justify-center pt-4">
              <div className="relative">
                <DecorativeCircle
                  sizeVariant="xxs"
                  color="primary-500"
                  top="0"
                  left="0"
                  zIndex={12}
                  className="-translate-x-1/3 -translate-y-1/3"
                />
                <Button
                  type="submit"
                  variant="outline"
                  size="medium"
                  disabled={isSubmitting}
                  aria-label="Submit this form"
                  className="5xl:py-4 5xl:px-10 w-auto text-center font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                </Button>
              </div>
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
        <div className="glass-card tablet-lg:flex 5xl:px-6 tablet-lg:w-80 5xl:w-160 tablet-lg:flex-col tablet-lg:gap-4 tablet-lg:self-center tablet-lg:ml-8 mb-10 hidden rounded-2xl py-8 lg:w-92 xl:w-120">
          <p className="typography-large tablet-lg:text-xl 5xl:text-3xl px-4 text-center text-xl md:block md:font-normal xl:text-2xl">
            Visits to the shelter are by appointment only. If you have any
            questions about adopting proccesses or volunteering, just get in
            touch however is easiest for you.
          </p>
          <ContactInfo className="md:text-primary-700 tablet-lg:text-primary-700 md:flex md:items-center md:justify-center md:font-bold" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

export type ContactFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const isValidEmail = (s: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  return emailRegex.test(s);
};

export const isValidPhone = (s: string): boolean => {
  const phoneRegex =
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{4,}$/;
  const digitsOnly = s.replace(/\D/g, '');
  return (
    phoneRegex.test(s) && digitsOnly.length >= 10 && digitsOnly.length <= 15
  );
};

export const validateContactForm = (
  data: ContactFormData
): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  if (!data.name) errors.name = 'Name is required';
  if (!data.email) errors.email = 'Email is required';
  else if (!isValidEmail(data.email)) errors.email = 'Invalid email format';
  if (!data.phone) errors.phone = 'Phone number is required';
  else if (!isValidPhone(data.phone)) errors.phone = 'Invalid phone number';
  if (!data.message || data.message.length < 5)
    errors.message = 'Message is too short';
  return errors;
};

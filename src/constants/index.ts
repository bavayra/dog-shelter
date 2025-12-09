export const APP_NAME = 'ROTVODOM';
export const APP_DESCRIPTION =
  'Find your perfect companion and give a shelter dog a loving home';

export const DOG_GENDERS = ['Male', 'Female'] as const;
export const DOG_BREEDS = ['Rottweiler', 'Cane Corso', 'Mixed breed'] as const;
export const DOG_AGE = ['Young', 'Adult', 'Senior'] as const;
export const DOG_HEALTH = ['Healthy', 'Special needs'] as const;

export const AGE_FILTER_OPTIONS = [
  { value: '', label: 'ANY' },
  { value: 'Young', label: 'YOUNG' },
  { value: 'Adult', label: 'ADULT' },
  { value: 'Senior', label: 'SENIOR' },
] as const;

export const GENDER_FILTER_OPTIONS = [
  { value: '', label: 'ANY' },
  { value: 'Male', label: 'MALE' },
  { value: 'Female', label: 'FEMALE' },
] as const;

export const HEALTH_FILTER_OPTIONS = [
  { value: '', label: 'ANY' },
  { value: 'Healthy', label: 'HEALTHY' },
  { value: 'Special needs', label: 'SPECIAL NEEDS' },
] as const;

export const BREED_FILTER_OPTIONS = [
  { value: '', label: 'ANY' },
  { value: 'Rottweiler', label: 'ROTTWEILER' },
  { value: 'Cane Corso', label: 'CANE CORSO' },
  { value: 'Mixed breed', label: 'MIXED BREED' },
] as const;

export const CONTACT_EMAIL = 'info@dogshelter_fake.com';
export const CONTACT_PHONE = '+1 (555) 123-4567';
export const CONTACT_ADDRESS = 'Jekaterinburg, Russia';
export const CONTACT_SOCIALS = {
  facebook: 'https://www.facebook.com/rotvoDom',
  twitter: 'https://twitter.com/dogshelter',
  instagram: 'https://www.instagram.com/rotvodom',
  telegram: 'https://web.telegram.org/k/#@huskyekb',
  vkontakte: 'https://vk.com/rotvodom66',
};

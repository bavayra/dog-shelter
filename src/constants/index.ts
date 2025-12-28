export const APP_NAME = 'ROTVODOM';
export const APP_DESCRIPTION =
  'Find your perfect companion and give a shelter dog a loving home';

export const DOG_GENDERS = ['Male', 'Female'] as const;
export const DOG_BREEDS = ['Rottweiler', 'Cane Corso', 'Mixed breed'] as const;
export const DOG_AGE = ['under-1', '1-3', '4-7', '8-plus'] as const;
export const DOG_HEALTH = ['Healthy', 'Special needs'] as const;

export const AGE_FILTER_OPTIONS = [
  { value: '', label: 'ANY' },
  { value: 'under-1', label: 'UNDER 1' },
  { value: '1-3', label: '1-3 YEARS' },
  { value: '4-7', label: '4-7 YEARS' },
  { value: '8-plus', label: '8+ YEARS' },
] as const;

export const GENDER_FILTER_OPTIONS = [
  { value: '', label: 'ANY' },
  { value: 'Boy', label: 'BOY' },
  { value: 'Girl', label: 'GIRL' },
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
  instagram: 'https://www.instagram.com/rotvodom',
  telegram: 'https://web.telegram.org/k/#@huskyekb',
  vkontakte: 'https://vk.com/rotvodom66',
};

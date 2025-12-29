export const AGE_LABELS: Record<string, string> = {
  'under-1': 'Under 1 year',
  '1-3': '1–3 years',
  '4-7': '4–7 years',
  '8-plus': '8+ years',
  '': 'Unknown',
};

const OLD_TO_KEY: Record<string, string> = {
  young: '1-3',
  adult: '4-7',
  senior: '8-plus',
};

export const getAgeLabel = (ageValue?: string) => {
  if (!ageValue) return AGE_LABELS[''];
  const lower = ageValue.toLowerCase();
  if (AGE_LABELS[ageValue]) return AGE_LABELS[ageValue];
  if (OLD_TO_KEY[lower]) return AGE_LABELS[OLD_TO_KEY[lower]];
  return AGE_LABELS[ageValue] ?? ageValue ?? AGE_LABELS[''];
};

export const getGenderBadgeColor = (gender: 'Boy' | 'Girl') => {
  return gender === 'Boy'
    ? 'bg-[var(--color-primary-500)]'
    : 'bg-[var(--color-accent-500)]';
};

export const getGenderSymbol = (gender: 'Boy' | 'Girl') => {
  return gender === 'Boy' ? '♂' : '♀';
};

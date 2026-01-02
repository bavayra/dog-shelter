export const AGE_LABELS: Record<string, string> = {
  'under-1': 'Under 1 year',
  '1-3': '1–3 years',
  '4-7': '4–7 years',
  '8-plus': '8+ years',
  '': 'Unknown',
};

export const getGenderBadgeColor = (gender: 'Boy' | 'Girl') => {
  return gender === 'Boy'
    ? 'bg-[var(--color-primary-500)]'
    : 'bg-[var(--color-accent-500)]';
};

export const getGenderSymbol = (gender: 'Boy' | 'Girl') => {
  return gender === 'Boy' ? '♂' : '♀';
};

export const AGE_LABELS: Record<string, string> = {
  'under-1': 'Under 1 year',
  '1-3': '1–3 years',
  '4-7': '4–7 years',
  '8-plus': '8+ years',
  '': 'Unknown',
};

export const getAgeLabel = (age: string): string => {
  return AGE_LABELS[age] ?? 'Unknown';
};

export const getGenderBadgeColor = (gender: 'Boy' | 'Girl') => {
  return gender === 'Boy' ? 'bg-primary-500' : 'bg-accent-500';
};

export const getGenderSymbol = (gender: 'Boy' | 'Girl') => {
  return gender === 'Boy' ? '♂' : '♀';
};

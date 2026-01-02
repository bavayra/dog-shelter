import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
};

export const sanitizeFormData = <T extends Record<string, unknown>>(
  data: T
): T => {
  const sanitized = {} as T;

  for (const key in data) {
    const value = data[key];
    sanitized[key] = (
      typeof value === 'string' ? sanitizeInput(value) : value
    ) as T[Extract<keyof T, string>];
  }

  return sanitized;
};

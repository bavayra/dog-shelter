import DOMPurify from 'dompurify';

const DEFAULT_CONFIG = {
  ALLOWED_TAGS: ['a', 'b', 'i', 'em', 'strong', 'p', 'br', 'ul', 'ol', 'li'],
  ALLOWED_ATTR: ['href', 'rel', 'target'],
};

export function sanitizeInput(input: string): string {
  const withBreaks = input.replace(/\r\n?/g, '\n').replace(/\n/g, '<br>');
  return DOMPurify.sanitize(withBreaks, {
    ...DEFAULT_CONFIG,
    FORCE_BODY: true,
    RETURN_TRUSTED_TYPE: false,
  }) as string;
}
export function sanitizeFormData(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): typeof data {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    message: data.message.trim(),
  };
}

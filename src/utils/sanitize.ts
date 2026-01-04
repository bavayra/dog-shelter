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

export const sanitizeFormData = sanitizeInput;

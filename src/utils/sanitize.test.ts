import { describe, it, expect } from 'vitest';
import { sanitizeFormData } from './sanitize';

describe('sanitizeFormData', () => {
  it('trims whitespace from all fields', () => {
    const input = {
      name: '  John Doe  ',
      email: '  john@example.com  ',
      phone: '  +1234567890  ',
      message: '  Hello world  ',
    };

    const result = sanitizeFormData(input);

    expect(result.name).toBe('John Doe');
    expect(result.email).toBe('john@example.com');
    expect(result.phone).toBe('+1234567890');
    expect(result.message).toBe('Hello world');
  });

  it('converts email to lowercase', () => {
    const input = {
      name: 'John',
      email: 'JoHn@ExAmPlE.COM',
      phone: '123456',
      message: 'Test',
    };

    const result = sanitizeFormData(input);

    expect(result.email).toBe('john@example.com');
  });

  it('preserves phone number format while trimming', () => {
    const input = {
      name: 'John',
      email: 'john@test.com',
      phone: ' +1 (555) 123-4567 ',
      message: 'Test',
    };

    const result = sanitizeFormData(input);

    expect(result.phone).toBe('+1 (555) 123-4567');
  });

  it('handles empty strings correctly', () => {
    const input = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    const result = sanitizeFormData(input);

    expect(result.name).toBe('');
    expect(result.email).toBe('');
    expect(result.phone).toBe('');
    expect(result.message).toBe('');
  });

  it('handles strings with only whitespace', () => {
    const input = {
      name: '   ',
      email: '   ',
      phone: '   ',
      message: '   ',
    };

    const result = sanitizeFormData(input);

    expect(result.name).toBe('');
    expect(result.email).toBe('');
    expect(result.phone).toBe('');
    expect(result.message).toBe('');
  });

  it('preserves message content while trimming edges', () => {
    const input = {
      name: 'John',
      email: 'john@test.com',
      phone: '123',
      message: '  I want to adopt  a dog.\nPlease contact me.  ',
    };

    const result = sanitizeFormData(input);

    expect(result.message).toBe('I want to adopt  a dog.\nPlease contact me.');
  });

  it('does not modify original input object', () => {
    const input = {
      name: '  John  ',
      email: '  JOHN@TEST.COM  ',
      phone: '  123  ',
      message: '  test  ',
    };

    const inputCopy = { ...input };
    sanitizeFormData(input);

    expect(input).toEqual(inputCopy);
  });

  it('handles special characters in name', () => {
    const input = {
      name: '  José García-López  ',
      email: 'jose@test.com',
      phone: '123',
      message: 'Test',
    };

    const result = sanitizeFormData(input);

    expect(result.name).toBe('José García-López');
  });
});

import { describe, it, expect } from 'vitest';
import {
  getAgeLabel,
  getGenderBadgeColor,
  getGenderSymbol,
} from './dogHelpers';

describe('dogHelpers', () => {
  describe('getAgeLabel', () => {
    it('returns correct label for under-1', () => {
      const age = 'under-1';
      const result = getAgeLabel(age);
      expect(result).toBe('Under 1 year');
    });

    it('returns correct label for 1-3', () => {
      expect(getAgeLabel('1-3')).toBe('1–3 years');
    });

    it('returns correct label for 4-7', () => {
      expect(getAgeLabel('4-7')).toBe('4–7 years');
    });

    it('returns correct label for 8-plus', () => {
      expect(getAgeLabel('8-plus')).toBe('8+ years');
    });

    it('returns Unknown for invalid age', () => {
      expect(getAgeLabel('invalid')).toBe('Unknown');
      expect(getAgeLabel('')).toBe('Unknown');
    });
  });

  describe('getGenderBadgeColor', () => {
    it('returns primary-500 color for Boy', () => {
      expect(getGenderBadgeColor('Boy')).toBe('bg-primary-500');
    });

    it('returns accent-500 color for Girl', () => {
      expect(getGenderBadgeColor('Girl')).toBe('bg-accent-500');
    });
  });

  describe('getGenderSymbol', () => {
    it('returns male symbol for Boy', () => {
      expect(getGenderSymbol('Boy')).toBe('♂');
    });

    it('returns female symbol for Girl', () => {
      expect(getGenderSymbol('Girl')).toBe('♀');
    });
  });
});

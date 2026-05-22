import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useDogFilters from './useDogFilters';
import type { DogFilters } from '@/types';
import { pets } from '@/data/dogs';

describe('useDogFilters', () => {
  // INITIALIZATION TESTS
  it('initializes with empty filters', () => {
    const { result } = renderHook(() => useDogFilters());

    expect(result.current.filters).toEqual({
      age: '',
      gender: '',
      health: '',
      breed: '',
    });
  });

  it('returns all dogs when filters are empty', () => {
    const { result } = renderHook(() => useDogFilters());

    const filteredDogs = result.current.filteredDogs;

    expect(filteredDogs.length).toBe(pets.length);
    expect(filteredDogs).toEqual(pets);
  });

  // SINGLE FILTER TESTS
  it.each(['under-1', '1-3', '4-7', '8-plus'])(
    'updates age filter correctly for: %s',
    (ageValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setAgeFilter(ageValue as DogFilters['age']);
      });

      expect(result.current.filters.age).toBe(ageValue);
    }
  );

  it.each(['under-1', '1-3', '4-7', '8-plus'])(
    'filters dogs by age: %s',
    (ageValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setAgeFilter(ageValue as DogFilters['age']);
      });

      const filteredDogs = result.current.filteredDogs;
      const expectedDogs = pets.filter((dog) => dog.age === ageValue);

      expect(filteredDogs.length).toBe(expectedDogs.length);
      expect(filteredDogs).toEqual(expectedDogs);

      if (filteredDogs.length > 0) {
        filteredDogs.forEach((dog) => {
          expect(dog.age).toBe(ageValue);
        });
      }
    }
  );

  it.each(['Boy', 'Girl'])(
    'updates gender filter correctly for: %s',
    (genderValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setGenderFilter(genderValue as DogFilters['gender']);
      });

      expect(result.current.filters.gender).toBe(genderValue);
    }
  );

  it.each(['Boy', 'Girl'])('filters dogs by gender: %s', (genderValue) => {
    const { result } = renderHook(() => useDogFilters());

    act(() => {
      result.current.setGenderFilter(genderValue as DogFilters['gender']);
    });

    const filteredDogs = result.current.filteredDogs;
    const expectedDogs = pets.filter((dog) => dog.gender === genderValue);

    expect(filteredDogs.length).toBe(expectedDogs.length);
    expect(expectedDogs.length).toBeGreaterThan(0);
    expect(filteredDogs).toEqual(expectedDogs);

    filteredDogs.forEach((dog) => {
      expect(dog.gender).toBe(genderValue);
    });
  });

  it.each(['Healthy', 'Special needs'])(
    'updates health filter correctly for: %s',
    (healthValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setHealthFilter(healthValue as DogFilters['health']);
      });

      expect(result.current.filters.health).toBe(healthValue);
    }
  );

  it.each(['Healthy', 'Special needs'])(
    'filters dogs by health: %s',
    (healthValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setHealthFilter(healthValue as DogFilters['health']);
      });

      const filteredDogs = result.current.filteredDogs;
      const expectedDogs = pets.filter((dog) => dog.health === healthValue);

      expect(filteredDogs.length).toBe(expectedDogs.length);
      expect(expectedDogs.length).toBeGreaterThan(0);
      expect(filteredDogs).toEqual(expectedDogs);

      filteredDogs.forEach((dog) => {
        expect(dog.health).toBe(healthValue);
      });
    }
  );

  it.each(['Rottweiler', 'Cane Corso', 'Mixed breed'])(
    'updates breed filter correctly for: %s',
    (breedValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setBreedFilter(breedValue as DogFilters['breed']);
      });

      expect(result.current.filters.breed).toBe(breedValue);
    }
  );

  it.each(['Rottweiler', 'Cane Corso', 'Mixed breed'])(
    'filters dogs by breed: %s',
    (breedValue) => {
      const { result } = renderHook(() => useDogFilters());

      act(() => {
        result.current.setBreedFilter(breedValue as DogFilters['breed']);
      });

      const filteredDogs = result.current.filteredDogs;
      const expectedDogs = pets.filter((dog) => dog.breed === breedValue);

      expect(filteredDogs.length).toBe(expectedDogs.length);
      expect(expectedDogs.length).toBeGreaterThan(0);
      expect(filteredDogs).toEqual(expectedDogs);

      filteredDogs.forEach((dog) => {
        expect(dog.breed).toBe(breedValue);
      });
    }
  );

  // MULTIPLE FILTER COMBINATIONS
  it.each([
    // TWO CRITERIA (8 combinations)
    { age: '1-3', gender: 'Boy' as const, health: '', breed: '' },
    { age: '4-7', gender: 'Girl' as const, health: '', breed: '' },
    { age: '1-3', gender: '', health: 'Healthy' as const, breed: '' },
    { age: '', gender: 'Boy' as const, health: 'Healthy' as const, breed: '' },
    { age: '', gender: 'Girl' as const, health: 'Healthy' as const, breed: '' },
    {
      age: '',
      gender: '',
      health: 'Healthy' as const,
      breed: 'Rottweiler' as const,
    },
    {
      age: '',
      gender: '',
      health: 'Special needs' as const,
      breed: 'Mixed breed' as const,
    },
    {
      age: '',
      gender: 'Boy' as const,
      health: '',
      breed: 'Cane Corso' as const,
    },

    // THREE CRITERIA (6 combinations)
    // age + gender + health
    {
      age: '1-3',
      gender: 'Girl' as const,
      health: 'Healthy' as const,
      breed: '',
    },
    {
      age: '4-7',
      gender: 'Boy' as const,
      health: 'Healthy' as const,
      breed: '',
    },

    // age + gender + breed
    {
      age: '1-3',
      gender: 'Boy' as const,
      health: '',
      breed: 'Rottweiler' as const,
    },
    {
      age: '8-plus',
      gender: 'Girl' as const,
      health: '',
      breed: 'Mixed breed' as const,
    },

    // gender + health + breed
    {
      age: '',
      gender: 'Girl' as const,
      health: 'Healthy' as const,
      breed: 'Rottweiler' as const,
    },
    {
      age: '',
      gender: 'Boy' as const,
      health: 'Special needs' as const,
      breed: 'Rottweiler' as const,
    },

    // FOUR CRITERIA (3 combinations)
    {
      age: '1-3',
      gender: 'Girl' as const,
      health: 'Healthy' as const,
      breed: 'Rottweiler' as const,
    },
    {
      age: '4-7',
      gender: 'Boy' as const,
      health: 'Healthy' as const,
      breed: 'Cane Corso' as const,
    },
    {
      age: '8-plus',
      gender: 'Girl' as const,
      health: 'Special needs' as const,
      breed: 'Mixed breed' as const,
    },
  ])('filters dogs by combination: %o', (filterConfig) => {
    const { result } = renderHook(() => useDogFilters());

    act(() => {
      result.current.setAgeFilter(filterConfig.age as DogFilters['age']);
      result.current.setGenderFilter(
        filterConfig.gender as DogFilters['gender']
      );
      result.current.setHealthFilter(
        filterConfig.health as DogFilters['health']
      );
      result.current.setBreedFilter(filterConfig.breed as DogFilters['breed']);
    });

    expect(result.current.filters).toEqual(filterConfig);

    const filteredDogs = result.current.filteredDogs;

    const expectedDogs = pets.filter((dog) => {
      if (filterConfig.age && dog.age !== filterConfig.age) return false;
      if (filterConfig.gender && dog.gender !== filterConfig.gender)
        return false;
      if (filterConfig.health && dog.health !== filterConfig.health)
        return false;
      if (filterConfig.breed && dog.breed !== filterConfig.breed) return false;
      return true;
    });

    expect(filteredDogs.length).toBe(expectedDogs.length);
    expect(filteredDogs).toEqual(expectedDogs);
    expect(filteredDogs.length).toBeLessThanOrEqual(pets.length);

    if (filteredDogs.length > 0) {
      filteredDogs.forEach((dog) => {
        if (filterConfig.age) expect(dog.age).toBe(filterConfig.age);
        if (filterConfig.gender) expect(dog.gender).toBe(filterConfig.gender);
        if (filterConfig.health) expect(dog.health).toBe(filterConfig.health);
        if (filterConfig.breed) expect(dog.breed).toBe(filterConfig.breed);
      });
    }
  });

  // RESET TESTS
  it('resets all filters to empty state', () => {
    const { result } = renderHook(() => useDogFilters());

    act(() => {
      result.current.setAgeFilter('1-3');
      result.current.setGenderFilter('Boy');
      result.current.setHealthFilter('Healthy');
      result.current.setBreedFilter('Rottweiler');
    });

    expect(result.current.filters.age).toBe('1-3');
    expect(result.current.filters.gender).toBe('Boy');
    expect(result.current.filters.health).toBe('Healthy');
    expect(result.current.filters.breed).toBe('Rottweiler');

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.filters).toEqual({
      age: '',
      gender: '',
      health: '',
      breed: '',
    });
  });

  it('returns all dogs after reset', () => {
    const { result } = renderHook(() => useDogFilters());

    expect(result.current.filteredDogs.length).toBe(pets.length);
    act(() => {
      result.current.setAgeFilter('1-3');
    });

    const filteredCount = result.current.filteredDogs.length;
    expect(filteredCount).toBeLessThanOrEqual(pets.length);

    act(() => {
      result.current.resetFilters();
    });

    expect(result.current.filteredDogs.length).toBe(pets.length);
    expect(result.current.filteredDogs).toEqual(pets);
  });

  // EDGE CASES
  it('handles empty result when no dogs match filters', () => {
    const { result } = renderHook(() => useDogFilters());

    act(() => {
      result.current.setAgeFilter('under-1');
      result.current.setGenderFilter('Boy');
      result.current.setHealthFilter('Healthy');
      result.current.setBreedFilter('Mixed breed');
    });

    const filteredDogs = result.current.filteredDogs;
    const expectedDogs = pets.filter(
      (dog) =>
        dog.age === 'under-1' &&
        dog.gender === 'Boy' &&
        dog.health === 'Healthy' &&
        dog.breed === 'Mixed breed'
    );

    expect(Array.isArray(filteredDogs)).toBe(true);
    expect(filteredDogs.length).toBe(expectedDogs.length);
    expect(filteredDogs).toEqual(expectedDogs);
  });

  it('maintains filter state across multiple updates', () => {
    const { result } = renderHook(() => useDogFilters());

    act(() => {
      result.current.setAgeFilter('1-3');
    });

    expect(result.current.filters.age).toBe('1-3');

    act(() => {
      result.current.setGenderFilter('Boy');
    });

    expect(result.current.filters.age).toBe('1-3');
    expect(result.current.filters.gender).toBe('Boy');
    expect(result.current.filters.health).toBe('');
    expect(result.current.filters.breed).toBe('');
  });

  it('does not mutate original pets array', () => {
    const { result } = renderHook(() => useDogFilters());

    const originalLength = pets.length;
    const originalFirst = { ...pets[0] };

    act(() => {
      result.current.setAgeFilter('1-3');
    });

    expect(pets.length).toBe(originalLength);
    expect(pets[0]).toEqual(originalFirst);
  });

  it('filters correctly when switching between filters', () => {
    const { result } = renderHook(() => useDogFilters());

    act(() => {
      result.current.setGenderFilter('Boy');
    });

    const boysCount = result.current.filteredDogs.length;

    if (boysCount > 0) {
      result.current.filteredDogs.forEach((dog) => {
        expect(dog.gender).toBe('Boy');
      });
    }

    act(() => {
      result.current.setGenderFilter('Girl');
    });

    const girlsCount = result.current.filteredDogs.length;

    if (girlsCount > 0) {
      result.current.filteredDogs.forEach((dog) => {
        expect(dog.gender).toBe('Girl');
      });
    }

    expect(boysCount).toBeLessThanOrEqual(pets.length);
    expect(girlsCount).toBeLessThanOrEqual(pets.length);
  });
});

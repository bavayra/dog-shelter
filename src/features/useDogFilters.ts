import { useState, useMemo } from 'react';
import type { DogFilters } from '@/types';
import { pets } from '@/data/dogs';

const useDogFilters = () => {
  const [filters, setFilters] = useState<DogFilters>({
    age: '',
    gender: '',
    health: '',
    breed: '',
  });

  const setAgeFilter = (age: string) => {
    setFilters((prev) => ({ ...prev, age }));
  };

  const setGenderFilter = (gender: string) => {
    setFilters((prev) => ({ ...prev, gender }));
  };

  const setHealthFilter = (health: string) => {
    setFilters((prev) => ({ ...prev, health }));
  };

  const setBreedFilter = (breed: string) => {
    setFilters((prev) => ({ ...prev, breed }));
  };

  const resetFilters = () => {
    setFilters({
      age: '',
      gender: '',
      health: '',
      breed: '',
    });
  };

  const filteredDogs = useMemo(() => {
    return pets.filter((dog) => {
      if (filters.age && dog.age !== filters.age) {
        return false;
      }
      if (filters.gender && dog.gender !== filters.gender) {
        return false;
      }
      if (filters.health && dog.health !== filters.health) {
        return false;
      }
      if (filters.breed && dog.breed !== filters.breed) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return {
    filters,
    filteredDogs,
    setAgeFilter,
    setGenderFilter,
    setHealthFilter,
    setBreedFilter,
    resetFilters,
  };
};

export default useDogFilters;

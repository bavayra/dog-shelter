import {
  AGE_FILTER_OPTIONS,
  GENDER_FILTER_OPTIONS,
  BREED_FILTER_OPTIONS,
  HEALTH_FILTER_OPTIONS,
} from '@/constants';

import type { DogFilters as DogFiltersType } from '@/types';

interface DogFiltersProps {
  filters: DogFiltersType;
  onAgeChange: (age: string) => void;
  onGenderChange: (gender: string) => void;
  onHealthChange: (health: string) => void;
  onBreedChange: (breed: string) => void;
  onReset: () => void;
}
const DogFilters = ({
  filters,
  onAgeChange,
  onGenderChange,
  onHealthChange,
  onBreedChange,
  onReset,
}: DogFiltersProps) => {
  const renderFilterButtons = (
    options: readonly { value: string; label: string }[],
    currentValue: string,
    onChange: (value: string) => void
  ) => {
    return options.map((option) => {
      const isActive = currentValue === option.value;

      return (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
          px-3 py-2 rounded-lg font-medium transition-colors text-sm
          ${
            isActive
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }
        `}
          aria-pressed={isActive}
        >
          {option.label}
        </button>
      );
    });
  };

  return (
    <section
      className="bg-white p-6 rounded-lg shadow-md mb-8"
      aria-label="Filter dogs by age, gender, breed, and health"
    >
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-primary-700">Filter Dogs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-xl font-semibold text-neutral-700 mb-2">
            Age:
          </label>
          <div className="flex gap-2 flex-wrap">
            {renderFilterButtons(AGE_FILTER_OPTIONS, filters.age, onAgeChange)}
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold text-neutral-700 mb-2">
            Gender:
          </label>
          <div className="flex gap-2 flex-wrap">
            {renderFilterButtons(
              GENDER_FILTER_OPTIONS,
              filters.gender,
              onGenderChange
            )}
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold text-neutral-700 mb-2">
            Breed:
          </label>
          <div className="flex gap-2 flex-wrap">
            {renderFilterButtons(
              BREED_FILTER_OPTIONS,
              filters.breed,
              onBreedChange
            )}
          </div>
        </div>

        <div>
          <label className="block text-xl font-semibold text-neutral-700 mb-2">
            Health:
          </label>
          <div className="flex gap-2 flex-wrap">
            {renderFilterButtons(
              HEALTH_FILTER_OPTIONS,
              filters.health,
              onHealthChange
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onReset}
          className="px-4 py-2 mt-4 bg-primary-200 text-primary-700 rounded-lg font-medium hover:bg-primary-500 hover:text-neutral-50 hover:scale-105 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
};

export default DogFilters;

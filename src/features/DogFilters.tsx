import Button from '@/components/Button';
import {
  AGE_FILTER_OPTIONS,
  GENDER_FILTER_OPTIONS,
  BREED_FILTER_OPTIONS,
  HEALTH_FILTER_OPTIONS,
} from '@/constants';
import type { DogFilters as DogFiltersType } from '@/types';

interface DogFiltersProps {
  filters: DogFiltersType;
  onAgeChange: (value: DogFiltersType['age']) => void;
  onGenderChange: (value: DogFiltersType['gender']) => void;
  onHealthChange: (value: DogFiltersType['health']) => void;
  onBreedChange: (value: DogFiltersType['breed']) => void;
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
  const renderFilterButtons = <T extends string>(
    options: readonly { readonly value: T; readonly label: string }[],
    currentValue: T,
    onChange: (value: T) => void
  ) => {
    return options.map((option) => {
      const isActive = currentValue === option.value;

      return (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`3xs:text-xs rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            isActive
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          } `}
          aria-pressed={isActive}
          aria-label={`Filter by ${option.label.toLowerCase()}`}
        >
          {option.label}
        </button>
      );
    });
  };

  return (
    <section
      className="mb-8 rounded-lg bg-white p-6 shadow-md"
      aria-label="Filter dogs by age, gender, breed, and health"
    >
      <div className="mb-4">
        <h2 className="text-primary-700 text-2xl font-bold">Filter Dogs</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="3xs:text-md mb-2 block text-xl font-semibold text-neutral-700">
            Age:
          </label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(AGE_FILTER_OPTIONS, filters.age, onAgeChange)}
          </div>
        </div>

        <div>
          <label className="3xs:text-md mb-2 block text-xl font-semibold text-neutral-700">
            Gender:
          </label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(
              GENDER_FILTER_OPTIONS,
              filters.gender,
              onGenderChange
            )}
          </div>
        </div>

        <div>
          <label className="3xs:text-md mb-2 block text-xl font-semibold text-neutral-700">
            Breed:
          </label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(
              BREED_FILTER_OPTIONS,
              filters.breed,
              onBreedChange
            )}
          </div>
        </div>

        <div>
          <label className="3xs:text-md mb-2 block text-xl font-semibold text-neutral-700">
            Health:
          </label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(
              HEALTH_FILTER_OPTIONS,
              filters.health,
              onHealthChange
            )}
          </div>
        </div>
      </div>

      <div className="3xs:mt-2 mt-6 flex justify-end">
        <Button
          onClick={onReset}
          aria-label="Reset filters"
          variant="filter"
          active={false}
        >
          RESET FILTERS
        </Button>
      </div>
    </section>
  );
};

export default DogFilters;

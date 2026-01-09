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
          className={`typography-small rounded-lg px-3 py-2 font-medium transition-colors ${
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
      className="mb-8 rounded-lg bg-white px-4 py-6 shadow-md sm:mx-4"
      aria-label="Filter dogs by age, gender, breed, and health"
    >
      <div className="mb-4">
        <h3 className="typography-h3">Filter Dogs</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="typography-body mb-2 block">Age:</label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(AGE_FILTER_OPTIONS, filters.age, onAgeChange)}
          </div>
        </div>

        <div>
          <label className="typography-body mb-2 block">Gender:</label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(
              GENDER_FILTER_OPTIONS,
              filters.gender,
              onGenderChange
            )}
          </div>
        </div>

        <div>
          <label className="typography-body mb-2 block">Breed:</label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(
              BREED_FILTER_OPTIONS,
              filters.breed,
              onBreedChange
            )}
          </div>
        </div>

        <div>
          <label className="typography-body mb-2 block">Health:</label>
          <div className="flex flex-wrap gap-2">
            {renderFilterButtons(
              HEALTH_FILTER_OPTIONS,
              filters.health,
              onHealthChange
            )}
          </div>
        </div>
      </div>

      <div className="xs:mt-6 mt-2 flex justify-end">
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

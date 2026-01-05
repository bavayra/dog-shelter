import useDogFilters from './useDogFilters';
import DogFilters from './DogFilters';
import DogCard from './DogCard';
import { useState } from 'react';

const DogGrid = () => {
  const {
    filters,
    filteredDogs,
    setAgeFilter,
    setGenderFilter,
    setHealthFilter,
    setBreedFilter,
    resetFilters,
  } = useDogFilters();

  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 4;

  const displayedDogs = showAll
    ? filteredDogs
    : filteredDogs.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreDogs = filteredDogs.length > INITIAL_DISPLAY_COUNT;

  return (
    <div className="container mx-auto px-4 py-8">
      <DogFilters
        filters={filters}
        onAgeChange={setAgeFilter}
        onGenderChange={setGenderFilter}
        onHealthChange={setHealthFilter}
        onBreedChange={setBreedFilter}
        onReset={resetFilters}
      />

      <p className="3xs:text-md mb-4 text-lg text-neutral-700">
        Found {filteredDogs.length} {filteredDogs.length === 1 ? 'dog' : 'dogs'}
      </p>

      {filteredDogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 transition-all md:grid-cols-2 lg:grid-cols-3">
            {displayedDogs.map((dog) => (
              <DogCard key={dog.id} {...dog} />
            ))}
          </div>
          {!showAll && hasMoreDogs && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                aria-label="View all pets button"
                className="bg-primary-500 hover:bg-primary-600 rounded-lg px-8 py-3 font-semibold text-white transition-colors"
              >
                View All Pets
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-lg text-neutral-500">
          No dogs found. Try adjusting your filters.
        </p>
      )}
    </div>
  );
};
export default DogGrid;

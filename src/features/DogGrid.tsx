import useDogFilters from './useDogFilters';
import DogFilters from './DogFilters';
import DogCard from './DogCard';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';

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
  const [isLoading, setIsLoading] = useState(true);
  const [initialDisplayCount, setInitialDisplayCount] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth >= 1024) {
        setInitialDisplayCount(6);
      } else {
        setInitialDisplayCount(4);
      }
    };

    updateDisplayCount();
    window.addEventListener('resize', updateDisplayCount);

    return () => window.removeEventListener('resize', updateDisplayCount);
  }, []);

  const displayedDogs = showAll
    ? filteredDogs
    : filteredDogs.slice(0, initialDisplayCount);

  const hasMoreDogs = filteredDogs.length > initialDisplayCount;

  return (
    <div className="4xl:px-26 5xl:px-40 container mx-auto px-4 py-4 md:px-10 xl:max-w-280 2xl:max-w-full 2xl:px-24">
      <DogFilters
        filters={filters}
        onAgeChange={setAgeFilter}
        onGenderChange={setGenderFilter}
        onHealthChange={setHealthFilter}
        onBreedChange={setBreedFilter}
        onReset={resetFilters}
      />
      {!isLoading && (
        <p
          className="typography-body 4xl:text-4xl mb-4 text-center sm:text-xl md:mb-8 md:text-2xl"
          aria-live="polite"
        >
          Found {filteredDogs.length}{' '}
          {filteredDogs.length === 1 ? 'dog' : 'dogs'}
        </p>
      )}

      {isLoading ? (
        <div className="flex min-h-64 items-center justify-center">
          <div className="border-primary-500 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="text-primary-700 ml-4 text-lg">Loading pets...</p>
        </div>
      ) : filteredDogs.length > 0 ? (
        <>
          <div className="4xl:gap-x-0 4xl:px-16 grid grid-cols-1 gap-6 transition-all md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-10">
            {displayedDogs.map((dog) => (
              <DogCard key={dog.id} {...dog} />
            ))}
          </div>
          {!showAll && hasMoreDogs && (
            <div className="mt-6 text-center md:mt-12">
              <Button
                onClick={() => setShowAll(true)}
                aria-label="View all pets"
                variant="outline"
                size="large"
              >
                View All Pets
              </Button>
            </div>
          )}
        </>
      ) : (
        <p className="typography-large text-center">
          No dogs found. Try adjusting your filters.
        </p>
      )}
    </div>
  );
};
export default DogGrid;

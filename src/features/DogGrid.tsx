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
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1024px)').matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const initialDisplayCount = isDesktop ? 6 : 4;

  const displayedDogs = showAll
    ? filteredDogs
    : filteredDogs.slice(0, initialDisplayCount);

  const hasMoreDogs = filteredDogs.length > initialDisplayCount;

  return (
    <div className="dog-grid-container container mx-auto py-4">
      <DogFilters
        filters={filters}
        onAgeChange={setAgeFilter}
        onGenderChange={setGenderFilter}
        onHealthChange={setHealthFilter}
        onBreedChange={setBreedFilter}
        onReset={resetFilters}
      />
      <p
        className="dog-grid-counter mb-4 text-center leading-normal text-neutral-700 md:mb-8"
        aria-live="polite"
      >
        Found {filteredDogs.length} {filteredDogs.length === 1 ? 'dog' : 'dogs'}
      </p>

      {filteredDogs.length > 0 ? (
        <>
          <div className="dog-grid-layout grid grid-cols-1 transition-all md:grid-cols-2 lg:grid-cols-3">
            {displayedDogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
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

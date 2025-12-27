import useDogFilters from './useDogFilters';
import DogFilters from './DogFilters';
import DogCard from './DogCard';

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDogs.map((dog) => (
            <DogCard key={dog.id} {...dog} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-neutral-500">
          No dogs found. Try adjusting your filters.
        </p>
      )}
    </div>
  );
};
export default DogGrid;

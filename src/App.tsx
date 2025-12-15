import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import { shelterStats } from './data/dogs';
import DogGrid from './features/DogGrid';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <section
            id="hero"
            className="min-h-svh bg-linear-to-b from-primary-500 to-primary-50  py-16 px-4 "
          >
            <h2 className="text-5xl  text-primary-700 font-medium text-right mb-4 mr-10">
              Give a Shelter Dog a Loving Home
            </h2>
            <div className="flex justify-end mt-4 mr-20">
              <h3 className=" text-3xl bg-white/30 rounded-2xl text-primary-500 font-semibold py-3 px-6">
                Adopt a dog today and change your life forever!
              </h3>
            </div>
            <div className="flex justify-center">
              <Button variant="primary" size="large">
                Find Your Best Friend
              </Button>
            </div>
            <div className=" max-w-2xl mx-auto text-xl mt-10 text-center text-primary-500 font-bold bg-white/20 rounded-2xl py-6 px-10">
              <p className="mb-2">
                Dogs in Rotvodom Now:{' '}
                <span className="text-accent-500 text-2xl">
                  {shelterStats.totalDogsNow}{' '}
                </span>
              </p>
              <p className="mb-2">
                Dogs Adopted This Year:{' '}
                <span className="text-accent-500 text-2xl">
                  {shelterStats.dogsAdoptedThisYear}
                </span>
              </p>
              <p className="mb-2">
                Total Dogs Adopted:{' '}
                <span className="text-accent-500 text-2xl">
                  {shelterStats.dogsAdoptedTotal}
                </span>
              </p>
            </div>
          </section>
          <section id="our-pets" className="bg-primary-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-8xl text-primary-500 font-bold text-center mb-8">
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

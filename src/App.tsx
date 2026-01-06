import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Button from '@/components/Button';
import { shelterStats } from '@/data/dogs';
import DogGrid from '@/features/DogGrid';
import SocialLinks from '@/components/SocialLinks';
import RottweilerBg from '@/assets/icons/rottweiler-vector-bg.svg?react';

const AdoptionRules = lazy(() => import('./features/AdoptionRules'));
const AboutUs = lazy(() => import('./features/AboutUs'));
const HowToHelp = lazy(() => import('./features/HowToHelp'));
const ContactSection = lazy(() => import('./features/ContactSection'));

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="lg:hidden" />
        <main className="flex-1">
          <section
            id="hero"
            className="3xs:mt-6 2xs:mt-15 from-primary-500 to-primary-50 relative mt-16 min-h-screen bg-linear-to-b px-4 pt-16 pb-24 md:min-h-svh"
          >
            <RottweilerBg
              aria-hidden="true"
              className="text-primary-300 3xs:-top-58 pointer-events-none absolute -top-56 right-1 z-0 h-full w-full transform opacity-95 drop-shadow-2xl"
            />
            <h2 className="text-primary-700 3xs:text-4xl 3xs:mt-12 relative z-10 mx-0 mt-10 w-full text-center text-5xl font-medium">
              Give a Shelter Dog a Loving Home
            </h2>

            <div className="glass-card text-primary-700 3xs:mt-4 relative z-10 mx-auto my-auto mt-8 max-w-xl rounded-2xl px-0 py-6 text-center text-lg font-semibold tracking-wide">
              <p className="letter-spacing-wider mb-2">
                Dogs in Rotvodom Now:{' '}
                <span className="text-accent-500">
                  {shelterStats.totalDogsNow}{' '}
                </span>
              </p>
              <p className="mb-2">
                Dogs Adopted This Year:{' '}
                <span className="text-accent-500">
                  {shelterStats.dogsAdoptedThisYear}
                </span>
              </p>
              <p className="mb-2">
                Total Dogs Adopted:{' '}
                <span className="text-accent-500">
                  {shelterStats.dogsAdoptedTotal}
                </span>
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="primary"
                size="medium"
                className="z-10 -mt-5 transition-transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById('pets')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                ariaLabel="Find Your Best Friend"
              >
                Find Your Best Friend
              </Button>
            </div>
            <div className="relative z-10 flex justify-center">
              <h3 className="text-primary-500 3xs:mt-5 3xs:text-md mt-7 text-center text-lg font-semibold">
                Left behind and waiting each day-many gentle hearts long for a
                warm lap and a loving home. We are Autonomous Non-profit
                Organization (ANO), we only spend and never earn. We rely solely
                on the{' '}
                <a
                  href="#help"
                  className="hover:text-accent-500 font-bold underline"
                  aria-label="Go to How to Help section"
                >
                  generosity
                </a>{' '}
                of people.
              </h3>
            </div>
            <SocialLinks
              size="md"
              className="mt-8 gap-5"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-18">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="text-primary-500 3xs:text-4xl text-center text-5xl font-bold"
              >
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
          <Suspense fallback={<LoadingSpinner message="Loading content..." />}>
            <HowToHelp />
            <AdoptionRules />
            <AboutUs />
            <ContactSection />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

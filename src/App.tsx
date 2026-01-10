import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Button from '@/components/Button';
import { shelterStats } from '@/data/dogs';
import DogGrid from '@/features/DogGrid';
import SocialLinks from '@/components/SocialLinks';

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
            className="from-primary-300 to-primary-50 relative mt-6 min-h-screen bg-linear-to-b px-4 pt-16 pb-24"
          >
            <h2 className="text-primary-700 xs:mt-16 xs:text-5xl xs:font-semibold relative z-10 mx-0 mt-12 w-full text-center text-4xl font-bold">
              {' '}
              {/*I didn't use typography class because this h2 has to be
              different*/}{' '}
              Give a Shelter Dog a Loving Home
            </h2>

            <div className="glass-card text-primary-700 xs:mt-8 relative z-10 mx-auto my-auto mt-4 max-w-xl rounded-2xl px-0 py-6 text-center text-lg font-semibold sm:w-xs sm:text-xl">
              <p className="mb-2">
                Dogs in Rotvodom Now:{' '}
                <span className="text-primary-900">
                  {shelterStats.totalDogsNow}{' '}
                </span>
              </p>
              <p className="mb-2">
                Dogs Adopted This Year:{' '}
                <span className="text-primary-900">
                  {shelterStats.dogsAdoptedThisYear}
                </span>
              </p>
              <p className="mb-2">
                Total Dogs Adopted:{' '}
                <span className="text-primary-900">
                  {shelterStats.dogsAdoptedTotal}
                </span>
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="primary"
                size="medium"
                className="xs:px-6 xs:py-3 z-10 -mt-5 transition-transform hover:scale-105"
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
              <p className="typography-large xs:text-lg mt-8 text-center sm:mx-8">
                Left behind and waiting each day-many gentle hearts long for a
                warm lap and a loving home. We are Autonomous Non-profit
                Organization (ANO), we only spend and never earn. We rely solely
                on the{' '}
                <a
                  href="#help"
                  className="hover:text-primary-700 font-bold underline"
                  aria-label="Go to How to Help section"
                >
                  generosity
                </a>{' '}
                of people.
              </p>
            </div>
            <SocialLinks
              size="lg"
              className="mt-10 gap-5"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-18">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h2 xs:text-5xl m-0 text-center"
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

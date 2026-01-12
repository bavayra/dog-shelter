import { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Button from '@/components/Button';
import { shelterStats } from '@/data/dogs';
import DogGrid from '@/features/DogGrid';
import SocialLinks from '@/components/SocialLinks';
import RottweilerImage from '@/assets/icons/rott-image-bg.avif';
import { DecorativeCircle } from './components/DecorativeCircle';

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
            className="from-primary-300 to-primary-50 border-primary-500 relative min-h-screen overflow-hidden border-b-3 bg-linear-to-b px-4 pt-29 pb-4 shadow-md"
          >
            <h2 className="text-primary-700 xs:mt-6 xs:text-5xl xs:font-semibold relative z-10 mx-0 mt-4 w-full text-center text-4xl font-bold">
              {' '}
              {/*I didn't use typography class because this h2 has to be
              different*/}{' '}
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              size={58}
              color="primary-500"
              top="60"
              left="-30"
              opacity={70}
              className="xs:mt-6"
            />
            <div className="glass-card text-primary-700 xs:mt-8 text-md relative z-10 mx-auto mt-8 max-w-xl rounded-3xl px-0 py-4 text-center font-semibold sm:w-xs sm:text-xl">
              <p className="mb-2">
                DOGS IN ROTVODOM NOW: {shelterStats.totalDogsNow}{' '}
              </p>
              <p className="mb-2">
                DOGS ADOPTED THIS YEAR: {shelterStats.dogsAdoptedThisYear}
              </p>
              <p className="mb-2">
                TOTAL DOGS ADOPTED: {shelterStats.dogsAdoptedTotal}
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="primary"
                size="medium"
                className="xs:px-6 xs:py-3 z-10 -mt-4 transition-transform hover:scale-105"
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
            <div className="relative z-10 hidden justify-center md:flex">
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
              size="md"
              className="xs:mt-14 mt-10 gap-5"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
            <DecorativeCircle
              size={64}
              color="primary-500"
              top="150"
              left="30"
              zIndex={2}
              className="xs:mt-8 xs:ml-12"
            />
            <DecorativeCircle
              size={40}
              color="primary-300"
              top="170"
              left="15"
              zIndex={1}
              className="xs:mt-8 xs:ml-12"
            />
            <DecorativeCircle
              size={30}
              color="primary-200"
              top="180"
              left="8"
              zIndex={0}
              className="xs:mt-8 xs:ml-12"
            />
            <img
              src={RottweilerImage}
              className="xs:h-64 xs:w-64 absolute -right-10 bottom-0 z-3 h-68 w-68 object-contain sm:h-80 sm:w-80"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h2 xs:text-5xl m-0 pt-10 text-center"
              >
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
          <Suspense fallback={<LoadingSpinner message="Loading content..." />}>
            <div className="relative">
              <DecorativeCircle
                size={64}
                color="primary-500"
                top="-8"
                left="-30"
                opacity={20}
                zIndex={2}
              />
            </div>
            <HowToHelp />
            <AdoptionRules />
            <div className="relative">
              <DecorativeCircle
                size={36}
                color="primary-300"
                top="14"
                left="-10"
                opacity={40}
                zIndex={10}
              />
              <DecorativeCircle
                size={16}
                color="primary-500"
                top="22"
                left="0"
                opacity={90}
                zIndex={10}
              />
            </div>
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

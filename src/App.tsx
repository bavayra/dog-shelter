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
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="md:hidden" />
        <main className="flex-1">
          <section
            id="hero"
            className="from-primary-300 to-primary-50 border-primary-500 relative h-screen overflow-hidden border-b-3 bg-linear-to-b px-4 pt-29 pb-4 shadow-md"
          >
            <h2 className="text-primary-700 xs:mt-6 xs:text-5xl xs:font-semibold relative z-10 mx-0 mt-4 w-full text-center text-4xl font-bold md:mt-12 md:text-6xl">
              {' '}
              {/*I didn't use typography class because this h2 has to be
              different*/}{' '}
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              size={58}
              mdSize={82}
              color="primary-500"
              top="60"
              left="-30"
              opacity={70}
              className="xs:mt-6 md:-ml-8"
            />
            <div className="grid-cols-2 grid-rows-2 md:grid md:items-center md:justify-center">
              <div>
                <div className="glass-card text-primary-700 xs:mt-8 text-md relative z-10 mx-auto mt-8 max-w-xl rounded-3xl px-0 py-4 text-center font-semibold sm:w-xs sm:text-lg md:font-semibold">
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
                    className="xs:px-6 xs:py-3 z-10 -mt-4 transition-transform hover:scale-105 md:text-xl"
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
              </div>
              <div className="relative z-10 hidden justify-center md:flex">
                <p className="text-primary-700 glass-card mt-10 rounded-3xl p-6 text-center text-base font-semibold tracking-normal">
                  LEFT BEHIND AND WAITING EACH DAY-MANY GENTLE HEARTS LONG FOR A
                  WARM LAP AND A LOVING HOME. WE ARE AUTONOMOUS NON-PROFIT
                  ORGANIZATION (ANO), WE ONLY SPEND AND NEVER EARN. WE RELY
                  SOLELY ON THE{' '}
                  <a
                    href="#help"
                    className="hover:text-primary-700 text-primary-500 font-bold underline"
                    aria-label="Go to How to Help section"
                  >
                    GENEROSITY
                  </a>{' '}
                  OF PEOPLE.
                </p>
              </div>
              <SocialLinks
                size="md"
                className="xs:mt-14 mt-10 gap-5 sm:mt-10 md:mt-0 md:mb-10 md:grid md:grid-cols-[repeat(2,min-content)] md:grid-rows-2 md:justify-center md:gap-x-10 md:gap-y-6"
                iconColor="text-neutral-50"
                bgColor="bg-primary-500"
              />
            </div>
            <DecorativeCircle
              size={64}
              smSize={84}
              mdSize={120}
              color="primary-500"
              top="150"
              left="30"
              zIndex={2}
              className="xs:mt-8 xs:ml-12 sm:mt-10 sm:ml-20 md:mt-20 md:ml-64"
            />
            <DecorativeCircle
              size={40}
              smSize={52}
              mdSize={70}
              color="primary-300"
              top="170"
              left="15"
              zIndex={1}
              className="xs:mt-8 xs:ml-12 sm:mt-6 sm:ml-18 md:mt-28 md:ml-54"
            />
            <DecorativeCircle
              size={30}
              smSize={36}
              mdSize={40}
              color="primary-200"
              top="180"
              left="8"
              zIndex={0}
              className="xs:mt-8 xs:ml-12 sm:mt-8 sm:ml-12 md:mt-42 md:ml-48"
            />
            <img
              src={RottweilerImage}
              className="xs:h-64 xs:w-64 absolute right-0 bottom-0 z-3 h-56 w-56 object-contain sm:h-72 sm:w-72 md:h-110 md:w-110"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h2 xs:text-5xl m-0 pt-10 text-center md:text-7xl"
              >
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
          <Suspense fallback={<LoadingSpinner message="Loading content..." />}>
            <div className="relative sm:top-2 md:top-18 md:right-8">
              <DecorativeCircle
                size={64}
                mdSize={88}
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
                mdSize={64}
                color="primary-300"
                top="14"
                left="-10"
                opacity={40}
                zIndex={10}
                className="md:ml-10"
              />
              <DecorativeCircle
                size={16}
                mdSize={40}
                color="primary-500"
                top="22"
                left="0"
                opacity={90}
                zIndex={10}
                className="md:ml-12"
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

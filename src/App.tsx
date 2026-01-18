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
      <Sidebar />
      <main className="flex-1">
        <section
          id="hero"
          className="from-primary-300 to-primary-50 border-primary-500 relative h-screen overflow-hidden border-b-3 bg-linear-to-b px-4 pt-29 pb-4 shadow-md"
        >
          <h2 className="text-primary-700 xs:mt-6 xs:text-5xl xs:font-semibold relative z-10 mx-0 mt-4 w-full text-center text-4xl font-bold md:mt-12 md:text-6xl lg:mt-2 lg:mb-2 xl:mt-6 xl:text-7xl">
            {' '}
            {/*I didn't use typography class because this h2 has to be
              different*/}{' '}
            Give a Shelter Dog a Loving Home
          </h2>
          <DecorativeCircle
            size={58}
            mdSize={82}
            lgSize={76}
            xlSize={100}
            color="primary-500"
            top="60"
            left="-30"
            opacity={70}
            className="xs:mt-6 md:-ml-8 xl:-ml-12"
          />
          <div className="grid-cols-2 grid-rows-2 md:grid md:items-center md:justify-center">
            <div>
              <div className="glass-card text-primary-700 xs:mt-8 text-md xl:py-6xl:text-xl relative z-10 mx-auto mt-8 max-w-xl rounded-3xl px-0 py-4 text-center font-semibold sm:w-xs sm:text-lg md:font-semibold xl:w-sm xl:px-6">
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
            </div>
            <div className="relative z-10 hidden justify-center md:flex">
              <p className="text-primary-700 glass-card mt-10 rounded-3xl p-6 text-center text-base font-semibold tracking-normal lg:mx-auto lg:mt-4 lg:mr-8 xl:mt-12 xl:mr-36 xl:w-xl xl:text-lg">
                LEFT BEHIND AND WAITING EACH DAY-MANY GENTLE HEARTS LONG FOR A
                WARM LAP AND A LOVING HOME. WE ARE AUTONOMOUS NON-PROFIT
                ORGANIZATION (ANO), WE ONLY SPEND AND NEVER EARN. WE RELY SOLELY
                ON THE{' '}
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
              className="xs:mt-14 mt-10 gap-5 sm:mt-10 md:mt-0 md:mb-10 md:grid md:grid-cols-[repeat(2,min-content)] md:grid-rows-2 md:justify-center md:gap-x-10 md:gap-y-6 lg:mt-6 xl:mt-10"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
          </div>
          <DecorativeCircle
            size={64}
            smSize={84}
            mdSize={120}
            lgSize={104}
            xlSize={120}
            color="primary-500"
            top="150"
            left="30"
            zIndex={2}
            className="xs:mt-8 xs:ml-12 sm:mt-10 sm:ml-20 md:mt-20 md:ml-64 lg:-mt-16 lg:ml-136 xl:-mt-16 xl:ml-220"
          />
          <DecorativeCircle
            size={40}
            smSize={52}
            mdSize={70}
            xlSize={80}
            color="primary-300"
            top="170"
            left="15"
            zIndex={1}
            className="xs:mt-8 xs:ml-12 sm:mt-6 sm:ml-18 md:mt-28 md:ml-54 lg:-mt-18 lg:ml-128 xl:-mt-4 xl:ml-204"
          />
          <DecorativeCircle
            size={30}
            smSize={36}
            mdSize={40}
            xlSize={50}
            color="primary-200"
            top="180"
            left="8"
            zIndex={0}
            className="xs:mt-8 xs:ml-12 sm:mt-8 sm:ml-12 md:mt-42 md:ml-48 lg:-mt-10 lg:ml-120 xl:mt-14 xl:ml-190"
          />
          <img
            src={RottweilerImage}
            className="xs:h-64 xs:w-64 absolute right-0 bottom-0 z-3 h-56 w-56 object-contain sm:h-72 sm:w-72 md:h-110 md:w-110 xl:mr-10 xl:h-120 xl:w-120"
            alt="Rottweiler Dog Illustration"
            aria-hidden="true"
          />
        </section>
        <section id="pets" className="bg-primary-50 scroll-mt-10">
          <div className="container mx-auto px-4">
            <h2
              id="pets-heading"
              className="typography-h2 xs:text-5xl m-0 pt-10 text-center md:text-7xl xl:mb-10 xl:pt-16 xl:text-8xl"
            >
              Our Pets
            </h2>
          </div>
          <DogGrid />
        </section>
        <Suspense fallback={<LoadingSpinner message="Loading content..." />}>
          <div className="relative sm:top-2 md:top-18 md:right-8 xl:top-24 xl:right-18">
            <DecorativeCircle
              size={64}
              mdSize={88}
              xlSize={112}
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
              lgSize={72}
              xlSize={86}
              color="primary-300"
              top="14"
              left="-10"
              opacity={40}
              zIndex={10}
              className="md:ml-10 xl:ml-46"
            />
            <DecorativeCircle
              size={16}
              mdSize={40}
              xlSize={52}
              color="primary-500"
              top="22"
              left="0"
              opacity={90}
              zIndex={10}
              className="md:ml-12 lg:mt-6 lg:ml-16 xl:mt-8 xl:ml-54"
            />
          </div>
          <AboutUs />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

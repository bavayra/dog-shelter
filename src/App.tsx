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
        <Sidebar className="md:hidden" />
        <main className="flex-1">
          <section
            id="hero"
            className="from-primary-300 to-primary-50 border-primary-500 xs:min-h-[calc(100vh-4rem)] relative flex min-h-[calc(100vh-2rem)] flex-col overflow-hidden border-b-3 bg-linear-to-b px-4 pt-6 pb-6 shadow-md md:min-h-[calc(100vh-64px)] md:pt-10 md:pb-10 lg:min-h-[calc(100vh-72px)]"
          >
            <h2 className="text-primary-700 xs:text-4xl xs:mt-16 relative z-10 mx-auto mt-10 w-full text-center text-3xl font-semibold md:mt-8 md:text-5xl lg:text-6xl">
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              size={40}
              xsSize={52}
              mdSize={56}
              lgSize={64}
              color="primary-500"
              top="0"
              left="0"
              opacity={70}
              className="-translate-x-1/2 translate-y-[80%] md:top-6 lg:top-8"
            />
            <div className="glass-card text-primary-700 xs:text-base xs:mt-8 relative z-10 mx-auto mt-6 max-w-xl rounded-3xl p-4 text-center text-xs font-semibold md:mt-6 md:text-lg">
              <p className="mb-2">
                DOGS IN ROTVODOM NOW: {shelterStats.totalDogsNow}{' '}
              </p>
              <p className="mb-2">
                DOGS ADOPTED THIS YEAR: {shelterStats.dogsAdoptedThisYear}
              </p>
              <p>TOTAL DOGS ADOPTED: {shelterStats.dogsAdoptedTotal}</p>
            </div>

            <div className="-mt-2 flex justify-center md:mt-6">
              <Button
                variant="primary"
                size="medium"
                className="z-10 transition-transform hover:scale-105"
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
            <div className="relative z-10 mx-auto mt-4 hidden max-w-2xl justify-center px-4 md:mt-6 md:flex">
              <p className="typography-large text-center">
                Left behind and waiting each day—many gentle hearts long for a
                warm lap and a loving home. We are Autonomous Non-profit
                Organization (ANO), we only spend and never earn. We rely solely
                on the{' '}
                <a
                  href="#help"
                  className="hover:text-primary-900 text-primary-700 font-bold underline transition-colors"
                  aria-label="Go to How to Help section"
                >
                  generosity
                </a>{' '}
                of people.
              </p>
            </div>
            <SocialLinks
              size="sm"
              className="xs:mt-10 mt-8 gap-5"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
            <div>
              <DecorativeCircle
                size={72}
                xsSize={90}
                smSize={64}
                mdSize={80}
                lgSize={96}
                color="primary-500"
                top="auto"
                bottom="0"
                right="0"
                zIndex={2}
                className="translate-x-1/3 translate-y-1/2 sm:bottom-20 md:bottom-24 lg:bottom-32"
              />
              <DecorativeCircle
                size={42}
                xsSize={48}
                smSize={44}
                mdSize={56}
                lgSize={64}
                color="primary-300"
                top="auto"
                bottom="0"
                right="0"
                zIndex={1}
                className="-translate-x-1/2 translate-y-1/2 sm:bottom-14 md:bottom-16 lg:bottom-22"
              />
              <DecorativeCircle
                size={20}
                xsSize={23}
                smSize={28}
                mdSize={36}
                lgSize={44}
                color="primary-200"
                top="auto"
                bottom="0"
                right="0"
                zIndex={0}
                className="-translate-x-[250%] translate-y-1/2 sm:bottom-8 md:bottom-10 lg:bottom-14"
              />
            </div>
            <img
              src={RottweilerImage}
              className="xs:h-68 xs:w-68 absolute right-0 bottom-0 z-3 h-54 w-54 object-contain sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-80 lg:w-80"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h1 xs:text-5xl m-0 pt-10 text-center"
              >
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
          <Suspense fallback={<LoadingSpinner message="Loading content..." />}>
            <div className="relative sm:top-2">
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

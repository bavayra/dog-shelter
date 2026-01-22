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
            className="from-primary-300 to-primary-50 border-primary-500 xs:min-h-[calc(100vh-4rem)] tablet-sm:min-h-[calc(100vh-4rem)] relative flex min-h-[calc(100vh-2rem)] flex-col overflow-hidden border-b-3 bg-linear-to-b px-4 pt-6 pb-6 shadow-md min-[425px]:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-4rem)] md:pt-10 md:pb-10 lg:min-h-[calc(100vh-72px)]"
          >
            <h2 className="text-primary-700 xs:text-4xl xs:mt-16 tablet-sm:px-4 tablet-sm:mt-26 tablet-lg:pt-6 tablet-lg:text-7xl relative z-10 mx-auto mt-10 w-full text-center text-3xl font-semibold sm:text-5xl md:mt-10 md:text-6xl">
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              size={40}
              xsSize={52}
              tabletSmSize={60}
              mdSize={72}
              tabletLgSize={82}
              lgSize={64}
              color="primary-500"
              top="0"
              left="0"
              opacity={70}
              className="tablet-sm:translate-y-full -translate-x-1/2 translate-y-[80%] md:translate-y-2/3 lg:top-8"
            />
            <div className="glass-card text-primary-700 xs:text-base tablet-lg:text-2xl xs:mt-8 tablet-sm:mt-12 tablet-sm:text-xl tablet-sm:px-8 tablet-lg:px-12 tablet-lg:py-6 relative z-10 mx-auto mt-6 max-w-xl rounded-3xl p-4 text-center text-xs font-semibold min-[425px]:mt-4 sm:text-lg md:mt-10">
              <p className="mb-2">
                DOGS IN ROTVODOM NOW: {shelterStats.totalDogsNow}{' '}
              </p>
              <p className="mb-2">
                DOGS ADOPTED THIS YEAR: {shelterStats.dogsAdoptedThisYear}
              </p>
              <p>TOTAL DOGS ADOPTED: {shelterStats.dogsAdoptedTotal}</p>
            </div>

            <div className="-mt-2 flex justify-center">
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
            <div className="tablet-lg:max-w-2xl relative z-10 mx-auto mt-4 hidden max-w-2xl justify-center px-4 md:mt-8 md:flex md:max-w-xl">
              <p className="typography-large tablet-lg:text-2xl text-center md:text-xl">
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
              className="xs:mt-10 tablet-sm:mt-12 tablet-lg:mt-6 mt-8 gap-5 min-[425px]:mt-6 md:mt-8"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
            <div>
              <DecorativeCircle
                size={72}
                xsSize={90}
                smSize={68}
                tabletSmSize={94}
                mdSize={92}
                lgSize={96}
                color="primary-500"
                top="auto"
                bottom="0"
                right="0"
                zIndex={2}
                className="tablet-sm:translate-x-[20%] tablet-sm:translate-y-1/4 translate-x-1/3 translate-y-1/2 min-[425px]:translate-x-1/5 min-[425px]:translate-y-1/3 md:-mb-6 lg:bottom-32"
              />
              <DecorativeCircle
                size={42}
                xsSize={48}
                smSize={44}
                tabletSmSize={64}
                mdSize={64}
                lgSize={64}
                color="primary-300"
                top="auto"
                bottom="0"
                right="0"
                zIndex={1}
                className="tablet-sm:-translate-x-[50%] tablet-sm:translate-y-[35%] -translate-x-1/2 translate-y-1/2 min-[425px]:-translate-x-[60%] min-[425px]:translate-y-[40%] lg:bottom-22"
              />
              <DecorativeCircle
                size={20}
                xsSize={23}
                smSize={28}
                tabletSmSize={32}
                mdSize={40}
                lgSize={44}
                color="primary-200"
                top="auto"
                bottom="0"
                right="0"
                zIndex={0}
                className="tablet-sm:-translate-x-[240%] tablet-sm:translate-y-[35%] -translate-x-[250%] translate-y-1/2 min-[425px]:-translate-x-[200%] min-[425px]:translate-y-1/2 md:-translate-x-[180%] lg:bottom-14"
              />
            </div>
            <img
              src={RottweilerImage}
              className="xs:h-68 xs:w-68 tablet-sm:w-96 tablet-sm:h-96 absolute right-0 bottom-0 z-3 h-54 w-54 object-contain sm:h-70 sm:w-70 md:h-90 md:w-90 lg:h-80 lg:w-80"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h1 xs:text-5xl m-0 pt-10 text-center md:pb-8 md:text-7xl"
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
                mdSize={48}
                color="primary-300"
                top="14"
                left="-10"
                opacity={40}
                zIndex={10}
                className="md:translate-x-1/4"
              />
              <DecorativeCircle
                size={16}
                mdSize={24}
                color="primary-500"
                top="22"
                left="0"
                opacity={90}
                zIndex={10}
                className="md:translate-x-3/5 md:md:translate-y-1/7"
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

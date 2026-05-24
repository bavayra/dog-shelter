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
            className="hero-vh from-primary-200 6xl:min-h-[calc(var(--vph)-5.5rem)] 5xl:min-h-[calc(var(--vph)-6rem)] 4xl:min-h-[calc(var(--vph)-5rem)] to-primary-50 border-primary-500 px-fluid-hero py-fluid-hero-top py-fluid-hero-bottom relative flex min-h-[calc(var(--vph)-9rem)] flex-col overflow-hidden border-b-3 bg-linear-to-b shadow-md min-[425px]:min-h-[calc(var(--vph)-5rem)] xl:min-h-[calc(var(--vph)-6rem)]"
          >
            <h2 className="heading-fluid-hero text-primary-700 relative z-10 mx-auto w-full text-center font-semibold">
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              sizeVariant="lg"
              color="primary-500"
              top="0"
              left="0"
              opacity={70}
              className="circle-hero-transform circle-position-6xl-md 4xl:ml-5 tablet-lg:mt-2 5xl:-mt-4 6xl:-mt-26 lg:-mt-16"
            />
            <div className="glass-card text-primary-700 relative z-10 mx-auto rounded-3xl text-center font-semibold">
              <p className="4xl:mb-4 mb-2">
                DOGS IN ROTVODOM NOW: {shelterStats.totalDogsNow}{' '}
              </p>
              <p className="4xl:mb-4 mb-2">
                DOGS ADOPTED THIS YEAR: {shelterStats.dogsAdoptedThisYear}
              </p>
              <p className="mb-2">
                TOTAL DOGS ADOPTED: {shelterStats.dogsAdoptedTotal}
              </p>
            </div>

            <div className="tablet-lg:-mt-6 -mt-4 flex justify-center">
              <Button
                variant="primary"
                size="large"
                className="4xl:py-4 4xl:px-10 z-10 transition-transform hover:scale-105"
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
            <div className="hero-cta-section relative z-10 mt-6 max-w-2xl px-4">
              <p className="text-center lg:hidden xl:block">
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
              className="hero-social-position gap-2"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
            <div>
              <DecorativeCircle
                sizeVariant="xl"
                color="primary-500"
                top="auto"
                bottom="0"
                right="0"
                zIndex={2}
                className="hero-circle-xl"
              />
              <DecorativeCircle
                sizeVariant="md"
                color="primary-300"
                top="auto"
                bottom="0"
                right="0"
                zIndex={1}
                className="hero-circle-md"
              />
              <DecorativeCircle
                sizeVariant="sm"
                color="primary-200"
                top="auto"
                bottom="0"
                right="0"
                zIndex={0}
                className="hero-circle-sm"
              />
            </div>
            <img
              src={RottweilerImage}
              className="img-fluid-hero-dog absolute right-0 bottom-0 z-3 -mr-6 object-contain"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="text-fluid-section-heading text-primary-500 5xl:py-20 m-0 pt-10 text-center leading-tight font-bold md:pb-8"
              >
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
          <Suspense fallback={<LoadingSpinner message="Loading content..." />}>
            <div className="relative sm:top-2">
              <DecorativeCircle
                sizeVariant="xl"
                color="primary-500"
                top="-8"
                left="-30"
                opacity={20}
                zIndex={2}
                className="circle-after-dogs"
              />
            </div>
            <HowToHelp />
            <AdoptionRules />
            <div className="relative">
              <DecorativeCircle
                sizeVariant="md"
                color="primary-300"
                top="0"
                left="0"
                opacity={40}
                zIndex={10}
                className="circle-about-md"
              />
              <DecorativeCircle
                sizeVariant="xs"
                color="primary-500"
                top="0"
                left="0"
                opacity={90}
                zIndex={10}
                className="circle-about-xs"
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

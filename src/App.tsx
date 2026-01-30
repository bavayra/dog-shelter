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
            className="from-primary-200 tablet-lg:min-h-[calc(100vh-4rem)] to-primary-50 border-primary-500 xs:min-h-[calc(100vh-3rem)] tablet-sm:min-h-[calc(100vh-4rem)] relative flex min-h-[calc(100vh-2rem)] flex-col overflow-hidden border-b-3 bg-linear-to-b px-4 pt-6 pb-6 shadow-md min-[425px]:min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-9rem)] md:pt-10 md:pb-10 lg:min-h-[calc(100vh-72px)] xl:h-[calc(100vh-10rem)]"
          >
            <h2 className="text-primary-700 xs:text-4xl mt-5xl-mid text-5xl-h-mid text-5xl-h-tall 5xl:mt-16 xs:mt-16 tablet-sm:px-4 tablet-sm:mt-26 tablet-lg:pt-6 tablet-lg:text-7xl 4xl:text-8xl relative z-10 mx-auto mt-10 w-full text-center text-3xl font-semibold sm:text-5xl md:mt-10 md:text-6xl lg:mt-2 xl:mt-0 2xl:mt-4">
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              size={40}
              xsSize={52}
              tabletSmSize={60}
              mdSize={80}
              tabletLgSize={86}
              lgSize={86}
              xl4Size={124}
              xl5Size={150}
              color="primary-500"
              top="0"
              left="0"
              opacity={70}
              className="tablet-sm:translate-y-full 4xl:translate-y-[40%] tablet-lg:mt-2 5xl:-mt-4 -translate-x-1/2 translate-y-[80%] sm:translate-y-[110%] md:translate-y-[50%] lg:-mt-10"
            />
            <div className="glass-card text-primary-700 text-stats-5xl-mid 5xl:text-4xl 5xl:px-20 5xl:py-10 5xl:max-w-5xl xs:text-base tablet-lg:text-2xl xs:mt-8 tablet-sm:mt-12 tablet-sm:text-xl tablet-sm:px-8 tablet-lg:px-12 tablet-lg:py-6 4xl:text-3xl 4xl:py-8 relative z-10 mx-auto mt-6 max-w-xl rounded-3xl p-4 text-center text-xs font-semibold min-[425px]:mt-4 sm:text-lg md:mt-12 xl:text-xl 2xl:mt-16">
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

            <div className="4xl:-mt-6 tablet-lg:-mt-6 -mt-4 flex justify-center">
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
            <div className="tablet-lg:max-w-2xl mt-5xl-mid 4xl:max-w-6xl 5xl:mt-14 tablet-lg:mt-8 tablet-lg:flex relative z-10 mx-auto mt-4 hidden max-w-2xl justify-center px-4">
              <p className="typography-large text-body-5xl-mid tablet-lg:text-2xl 4xl:text-4xl text-center md:text-xl">
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
              className="xs:mt-10 tablet-sm:mt-12 mt-5xl-mid 5xl:mt-24 tablet-lg:mt-8 4xl:-translate-x-120 mt-8 gap-5 min-[425px]:mt-6 md:mt-14 lg:mt-24 lg:-translate-x-60 xl:mt-2 xl:mr-40 2xl:mt-10"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
            <div>
              <DecorativeCircle
                size={72}
                xsSize={96}
                tabletSmSize={94}
                mdSize={104}
                lgSize={96}
                xl2Size={114}
                xl4Size={130}
                xl5Size={168}
                color="primary-500"
                top="auto"
                bottom="0"
                right="0"
                zIndex={2}
                className="tablet-sm:translate-x-[20%] 5xl:-mr-12 tablet-sm:translate-y-1/4 translate-x-[40%] translate-y-[45%] min-[425px]:translate-x-1/5 min-[425px]:translate-y-1/3 sm:translate-x-[30%] sm:translate-y-[40%] md:-mb-6 lg:bottom-32"
              />
              <DecorativeCircle
                size={42}
                xsSize={52}
                tabletSmSize={64}
                mdSize={72}
                xl2Size={76}
                xl4Size={92}
                xl5Size={112}
                color="primary-300"
                top="auto"
                bottom="0"
                right="0"
                zIndex={1}
                className="tablet-sm:-translate-x-[50%] 5xl:-mr-12 tablet-sm:translate-y-[35%] -translate-x-[45%] translate-y-1/2 min-[425px]:-translate-x-[60%] min-[425px]:translate-y-[40%] sm:-translate-x-[60%] sm:translate-y-[35%] lg:bottom-22 2xl:-mr-2"
              />
              <DecorativeCircle
                size={20}
                xsSize={26}
                tabletSmSize={32}
                mdSize={44}
                lgSize={44}
                xl2Size={50}
                xl4Size={60}
                xl5Size={76}
                color="primary-200"
                top="auto"
                bottom="0"
                right="0"
                zIndex={0}
                className="tablet-sm:-translate-x-[240%] tablet-sm:translate-y-[35%] 5xl:-mr-30 -translate-x-[220%] translate-y-1/2 min-[425px]:-translate-x-[200%] min-[425px]:translate-y-1/2 sm:-translate-x-[260%] sm:translate-y-[45%] md:-translate-x-[180%] lg:-mr-12"
              />
            </div>
            <img
              src={RottweilerImage}
              className="xs:h-72 xs:w-72 xs:-mr-10 5xl:h-176 image-5xl-mid tablet-sm:w-96 tablet-sm:h-96 4xl:h-130 4xl:w-130 absolute right-0 bottom-0 z-3 h-54 w-54 object-contain sm:h-84 sm:w-84 md:h-104 md:w-104 2xl:h-110 2xl:w-110"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h1 xs:text-5xl tablet-lg:text-8xl tablet-sm:text-7xl 4xl:text-9xl 5xl:py-20 m-0 pt-10 text-center md:pb-8 md:text-7xl lg:text-8xl"
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
                tabletLgSize={78}
                lgSize={88}
                xl2Size={120}
                xl4Size={150}
                color="primary-500"
                top="-8"
                left="-30"
                opacity={20}
                zIndex={2}
                className="tablet-lg:mt-26 tablet-lg:-ml-12 4xl:-ml-40 lg:mt-36 2xl:-ml-30"
              />
            </div>
            <HowToHelp />
            <AdoptionRules />
            <div className="relative">
              <DecorativeCircle
                size={36}
                mdSize={54}
                tabletLgSize={64}
                lgSize={66}
                xlSize={84}
                xl4Size={104}
                xl5Size={120}
                color="primary-300"
                top="0"
                left="0"
                opacity={40}
                zIndex={10}
                className="xs:translate-y-2/5 xs:-translate-x-1/3 tablet-lg:-translate-x-[10%] tablet-lg:mt-4 4xl:-ml-12 md:translate-x-[5%] xl:translate-x-1/3 2xl:translate-x-2/3"
              />
              <DecorativeCircle
                size={16}
                mdSize={30}
                tabletLgSize={36}
                lgSize={36}
                xlSize={48}
                xl4Size={60}
                xl5Size={68}
                color="primary-500"
                top="0"
                left="0"
                opacity={90}
                zIndex={10}
                className="tablet-lg:translate-x-[25%] xs:translate-y-[145%] xs:-translate-x-[5%] 5xl:-ml-8 4xl:-ml-11 4xl:mt-8 tablet-lg:mt-4 md:translate-x-[50%] md:translate-y-[110%] xl:translate-x-[75%] 2xl:translate-x-[135%]"
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

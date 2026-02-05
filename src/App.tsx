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
            className="from-primary-200 tablet-lg:min-h-[calc(100vh-10rem)] 6xl:min-h-[calc(100vh-5.5rem)] 5xl:min-h-[calc(100vh-6rem)] 4xl:min-h-[calc(100vh-5rem)] to-primary-50 border-primary-500 xs:min-h-[calc(100vh-3rem)] tablet-sm:min-h-[calc(100vh-6rem)] relative flex min-h-[calc(100vh-2rem)] flex-col overflow-hidden border-b-3 bg-linear-to-b px-4 pt-6 pb-6 shadow-md min-[425px]:min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-9rem)] md:p-10 lg:min-h-[calc(100vh-72px)] xl:h-[calc(100vh-10rem)]"
          >
            <h2 className="text-primary-700 xs:text-4xl 6xl:mt-4 6xl:text-[7.5rem] xs:max-w-xs 5xl:mt-10 6xl:mb-0 5xl:mb-4 5xl:text-9xl 5xl:max-w-400 xs:mt-18 tablet-sm:px-4 tablet-sm:mt-20 tablet-sm:max-w-120 tablet-lg:pt-6 4xl:mt-6 relative z-10 mx-auto mt-10 w-full text-center text-3xl font-semibold sm:text-5xl md:mt-12 md:max-w-160 md:text-6xl lg:mt-0 xl:text-7xl 2xl:max-w-220 2xl:text-8xl">
              Give a Shelter Dog a Loving Home
            </h2>
            <DecorativeCircle
              size={40}
              xsSize={52}
              tabletSmSize={62}
              mdSize={80}
              tabletLgSize={86}
              lgSize={90}
              xl2Size={104}
              xl4Size={130}
              xl5Size={160}
              color="primary-500"
              top="0"
              left="0"
              opacity={70}
              className="tablet-sm:translate-y-4/5 4xl:translate-y-[35%] 4xl:ml-5 tablet-lg:mt-2 5xl:-mt-4 6xl:-mt-26 -translate-x-1/2 translate-y-[80%] sm:translate-y-[110%] md:translate-y-[50%] lg:-mt-16"
            />
            <div className="glass-card text-primary-700 5xl:text-3xl 6xl:text-[1.6rem] 6xl:py-8 5xl:px-20 5xl:py-10 4xl:mt-10 6xl:mt-6 5xl:max-w-5xl xs:text-base tablet-lg:text-xl xs:mt-8 tablet-sm:mt-10 tablet-sm:text-xl tablet-sm:px-8 tablet-lg:px-12 tablet-lg:mt-8 tablet-lg:py-6 4xl:text-2xl 4xl:py-6 3xl:mt-6 relative z-10 mx-auto mt-6 max-w-xl rounded-3xl p-4 text-center text-xs font-semibold min-[425px]:mt-4 sm:text-lg md:mt-12 lg:mt-10 lg:text-lg xl:mt-8 2xl:text-xl">
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
            <div className="tablet-lg:max-w-xl 4xl:max-w-3xl 4xl:mt-12 5xl:mt-18 6xl:mt-10 5xl:max-w-5xl 6xl:max-w-4xl tablet-lg:mt-8 tablet-lg:flex relative z-10 mx-auto mt-4 hidden justify-center px-4 2xl:max-w-180">
              <p className="typography-large tablet-lg:text-xl 5xl:text-4xl 6xl:text-3xl text-center md:text-xl lg:hidden xl:block 2xl:text-2xl">
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
              className="xs:mt-10 tablet-sm:mt-12 5xl:mt-24 6xl:mt-8 6xl:mr-60 tablet-lg:mt-8 4xl:-translate-x-124 3xl:mr-20 mt-8 gap-5 min-[425px]:mt-6 lg:mt-20 lg:-translate-x-60 xl:mt-6 xl:-translate-x-90 2xl:-translate-x-100"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
            <div>
              <DecorativeCircle
                size={72}
                xsSize={104}
                tabletSmSize={90}
                mdSize={104}
                lgSize={102}
                xl2Size={112}
                xl4Size={152}
                xl5Size={190}
                color="primary-500"
                top="auto"
                bottom="0"
                right="0"
                zIndex={2}
                className="tablet-sm:translate-x-[20%] 5xl:mr-8 5xl:translate-y-1/4 tablet-sm:translate-y-1/4 translate-x-[40%] translate-y-[45%] min-[425px]:translate-x-1/5 min-[425px]:translate-y-1/3 sm:translate-x-[30%] sm:translate-y-[40%] md:-mb-6"
              />
              <DecorativeCircle
                size={42}
                xsSize={52}
                tabletSmSize={60}
                mdSize={72}
                lgSize={64}
                xl2Size={76}
                xl4Size={104}
                xl5Size={120}
                color="primary-300"
                top="auto"
                bottom="0"
                right="0"
                zIndex={1}
                className="tablet-sm:-translate-x-1/2 5xl:mr-12 5xl:translate-y-1/3 tablet-sm:translate-y-[40%] -translate-x-[45%] translate-y-1/2 min-[425px]:-translate-x-[60%] min-[425px]:translate-y-[40%] sm:-translate-x-[60%] sm:translate-y-[35%] lg:mr-6"
              />
              <DecorativeCircle
                size={20}
                xsSize={26}
                tabletSmSize={30}
                mdSize={44}
                lgSize={36}
                xl2Size={50}
                xl4Size={68}
                xl5Size={86}
                color="primary-200"
                top="auto"
                bottom="0"
                right="0"
                zIndex={0}
                className="tablet-sm:-translate-x-[240%] tablet-sm:translate-y-1/2 5xl:-mr-2 5xl:translate-y-[40%] -translate-x-[220%] translate-y-1/2 min-[425px]:-translate-x-[200%] min-[425px]:translate-y-1/2 sm:-translate-x-[260%] sm:translate-y-[45%] md:-translate-x-[180%] lg:mr-16 2xl:-mb-6 2xl:-translate-x-[160%]"
              />
            </div>
            <img
              src={RottweilerImage}
              className="xs:h-80 xs:w-80 xs:-mr-10 5xl:h-190 5xl:w-190 tablet-sm:w-96 tablet-sm:h-96 4xl:h-150 4xl:w-150 absolute right-0 bottom-0 z-3 h-54 w-54 object-contain sm:h-84 sm:w-84 md:h-104 md:w-104 lg:h-100 lg:w-100 2xl:h-110 2xl:w-110"
              alt="Rottweiler Dog Illustration"
              aria-hidden="true"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-10">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="typography-h1 xs:text-5xl tablet-lg:text-8xl 5xl:text-[10rem] tablet-sm:text-6xl 4xl:text-9xl 5xl:py-20 m-0 pt-10 text-center md:pb-8 md:text-7xl"
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
                tabletLgSize={80}
                lgSize={88}
                xlSize={96}
                xl2Size={120}
                xl4Size={150}
                color="primary-500"
                top="-8"
                left="-30"
                opacity={20}
                zIndex={2}
                className="tablet-lg:mt-36 tablet-lg:-ml-14 4xl:-ml-40 lg:mt-50 xl:mt-36 2xl:-ml-30"
              />
            </div>
            <HowToHelp />
            <AdoptionRules />
            <div className="relative">
              <DecorativeCircle
                size={36}
                tabletSmSize={40}
                mdSize={54}
                tabletLgSize={64}
                lgSize={66}
                xlSize={86}
                xl4Size={98}
                xl5Size={116}
                color="primary-300"
                top="0"
                left="0"
                opacity={40}
                zIndex={10}
                className="xs:translate-y-2/5 xs:-translate-x-1/3 5xl:mt-12 5xl:ml-8 4xl:ml-12 tablet-lg:-translate-x-[10%] tablet-lg:mt-4 3xl:ml-4 3xl:mt-4 md:translate-x-[5%] lg:-mt-2 lg:translate-x-[5%] xl:translate-x-1/4 xl:translate-y-[20%] 2xl:translate-x-1/2"
              />
              <DecorativeCircle
                size={16}
                tabletSmSize={20}
                mdSize={30}
                tabletLgSize={36}
                xlSize={44}
                xl4Size={52}
                xl5Size={60}
                color="primary-500"
                top="0"
                left="0"
                opacity={90}
                zIndex={10}
                className="tablet-lg:translate-x-[25%] xs:translate-y-[145%] tablet-sm:-translate-x-[10%] 5xl:mt-10 tablet-sm:translate-y-[130%] 3xl:ml-6 3xl:mt-4 xs:-translate-x-[5%] 5xl:ml-6 4xl:ml-8 4xl:mt-2 tablet-lg:mt-4 md:translate-x-[50%] md:translate-y-[110%] lg:-mt-2 lg:translate-x-[50%] xl:translate-x-[95%] xl:translate-y-[85%] 2xl:translate-x-[145%]"
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

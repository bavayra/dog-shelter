import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import { shelterStats } from './data/dogs';
import DogGrid from './features/DogGrid';
import SocialLinks from './components/SocialLinks';
import RottweilerBg from '@assets/icons/rottweiler-vector-bg.svg?react';

// Lazy load секции которые не нужны сразу
const AboutUs = lazy(() => import('./features/AboutUs'));
const HowToHelp = lazy(() => import('./features/HowToHelp'));
const ContactSection = lazy(() => import('./features/ContactSection'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="lg:hidden" />
        <main className="flex-1">
          <section
            id="hero"
            className="relative min-h-svh bg-linear-to-b from-primary-500 to-primary-50  pt-16 px-4 pb-24"
          >
            <RottweilerBg
              aria-hidden="true"
              className="z-0 pointer-events-none absolute right-1 -top-62 w-full h-full transform drop-shadow-2xl opacity-95 text-primary-300"
            />
            <h2 className=" relative z-10 text-5xl  text-primary-700 font-medium text-center mt-7 mx-5">
              Give a Shelter Dog a Loving Home
            </h2>

            <div
              className="relative max-w-xl  tracking-wide mx-auto text-lg z-10 mt-7 text-center text-primary-700 font-semibold rounded-2xl py-6 px-0"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                WebkitBackdropFilter: 'blur(1px) saturate(100%)',
                backdropFilter: 'blur(1px) saturate(100%)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
              }}
            >
              <p className="mb-2 letter-spacing-wider">
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
              <Button variant="primary" size="medium" className="-mt-5 z-10">
                Find Your Best Friend
              </Button>
            </div>
            <div className="flex relative z-10 justify-center  ">
              <h3 className=" text-lg  text-center text-primary-500 mt-7 font-semibold">
                Left behind and waiting each day-many gentle hearts long for a
                warm lap and a loving home. We rely solely on the generosity of
                people.
              </h3>
            </div>
            <SocialLinks
              size="md"
              className="mt-20 gap-5"
              iconColor="text-neutral-50"
              bgColor="bg-primary-500"
            />
          </section>
          <section id="pets" className="bg-primary-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <h2
                id="pets-heading"
                className="text-5xl text-primary-500 font-bold text-center"
              >
                Our Pets
              </h2>
            </div>
            <DogGrid />
          </section>
          <Suspense fallback={<div className="min-h-screen" />}>
            <HowToHelp />
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

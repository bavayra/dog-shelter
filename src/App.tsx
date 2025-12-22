import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import { shelterStats } from './data/dogs';
import DogGrid from './features/DogGrid';
import AboutUs from './features/AboutUs';
import HowToHelp from './features/HowToHelp';
import ContactSection from './features/ContactSection';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <section
            id="hero"
            className="relative min-h-svh bg-linear-to-b from-primary-500 to-primary-50  pt-16 px-4 pb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 472.214 472.214"
              aria-hidden="true"
              role="img"
              className="z-0 pointer-events-none absolute right-2 -top-2 w-96 md:w-96 transform -rotate-4 drop-shadow-2xl opacity-95 text-primary-300"
            >
              <path
                d="m460.695 79.339-19.856-1.324c-3.294-16.556-17.935-29.075-35.444-29.075-27.885 0-53.972 14.941-68.081 38.991l-14.994 25.558a52.63 52.63 0 0 1-22.664 20.871c-35.61 17.127-73.673 26.88-113.133 28.987l-77.93 4.161-4.37-1.639c-9.143-3.428-19.508-1.183-26.413 5.721a17.65 17.65 0 0 0-5.081 14.546 17.7 17.7 0 0 0 2.453 7.202l-2.122 2.851a103.33 103.33 0 0 0-19.967 51.854l-4.669 48.817-40.92 35.827c-6.259 5.479-8.869 13.89-6.813 21.949l14.852 58.218a7.5 7.5 0 0 0 7.267 5.646h35.524a7.5 7.5 0 0 0 7.223-9.523l-.446-1.591a34.07 34.07 0 0 0-20.828-22.751l-3.924-18.316c-1.113-5.194 1.64-10.482 6.547-12.574 15.305-6.526 37.975-17.853 59.053-34.755 15.354-12.312 27.443-25.633 36.182-39.826 17.565 4.77 72.373 18.275 129.849 18.275 6.576 0 13.188-.177 19.782-.564.178 4.452.129 8.908-.165 13.34l-4.155 62.788c-.064.97.061 1.944.368 2.867l13.638 40.911a7.5 7.5 0 0 0 6.815 5.123l34.092 1.363q.151.006.302.006a7.5 7.5 0 0 0 6.852-4.454 20.6 20.6 0 0 0 .355-16.008 20.6 20.6 0 0 0-11.145-11.496l-3.773-1.617-5.683-15.5 10.854-59.44a136 136 0 0 1 7.109-25.006c4.607-2.712 13.749-8.61 25.355-18.729 11.45-9.983 18.617-23.721 20.181-38.683 3.899-37.297 17.973-68.808 23.415-79.862a44 44 0 0 0 12.683-1.544c11.139-3.063 20.849-8.403 28.862-15.873 9.205-8.581 14.484-20.85 14.484-33.66v-9.75c-.002-6.473-5.062-11.881-11.521-12.312m-3.481 22.064c0 8.665-3.54 16.934-9.713 22.688-6.224 5.802-13.831 9.968-22.61 12.382-9.299 2.557-19.381.307-26.969-6.018a7.5 7.5 0 0 0-9.603 11.523 45.6 45.6 0 0 0 12.659 7.451c-6.712 14.217-19.31 44.847-23.125 81.353-1.169 11.177-6.539 21.454-15.12 28.937a198 198 0 0 1-7.678 6.366 73.44 73.44 0 0 0-2.094-33.508l-1.752-5.798c-1.198-3.965-5.389-6.209-9.349-5.01a7.5 7.5 0 0 0-5.011 9.349l1.753 5.799a58.45 58.45 0 0 1-2.575 40.732 151 151 0 0 0-10.656 34.417l-11.221 61.45a7.5 7.5 0 0 0 .336 3.929l7.5 20.456a7.5 7.5 0 0 0 4.088 4.312l6.747 2.892a5.7 5.7 0 0 1 2.963 2.889l-21.734-.87-11.533-34.599 4.058-61.317c1.369-20.677-1.89-41.813-9.424-61.121a7.501 7.501 0 0 0-13.975 5.453c3.311 8.484 5.693 17.364 7.121 26.395-57.952 3.256-118.821-10.672-140.919-16.396a110 110 0 0 0 6.224-17.673 7.5 7.5 0 0 0-14.525-3.743c-13.894 53.908-74.599 84.973-100.054 95.826-11.497 4.902-17.944 17.315-15.33 29.515l4.854 22.654a7.5 7.5 0 0 0 5.74 5.757 19.13 19.13 0 0 1 9.925 5.627H28.637L15.225 350.93a6.93 6.93 0 0 1 2.159-6.955l43.162-37.79a7.5 7.5 0 0 0 2.525-4.929l4.953-51.783a88.33 88.33 0 0 1 17.069-44.327l5.849-7.859A7.5 7.5 0 0 0 88.9 186.45c-.973-.608-1.212-1.52-1.268-2.009s-.028-1.432.783-2.243a9.99 9.99 0 0 1 10.54-2.283l5.838 2.189c.967.363 2 .522 3.033.467l79.495-4.245c41.448-2.213 81.43-12.457 118.836-30.448a67.6 67.6 0 0 0 29.099-26.799l14.994-25.558c8.117-13.836 21.131-23.944 36.083-28.643 3.566 2.462 9.311 7.689 6.159 14.281-1.934 4.042-3.909 7.369-5.729 10.048a18 18 0 0 0-2.617-2.828c-3.395-2.957-9.601-6.02-19.871-3.817a7.5 7.5 0 0 0 3.142 14.667c3.266-.7 5.699-.543 6.853.441 1.533 1.308 1.892 4.712 1.825 5.99a7.502 7.502 0 0 0 11.98 6.554c.988-.741 9.887-7.727 17.948-24.583 3.833-8.013 3.177-16.291-1.773-23.672.381-.007.762-.019 1.144-.019 10.034 0 18.44 7.035 20.589 16.427l-4.452 1.908a7.5 7.5 0 0 0 2.959 14.395c.985 0 1.987-.196 2.951-.608l7.889-3.381 21.884 1.459z"
                fill="currentColor"
              />
            </svg>
            <h2 className=" relative z-10 text-5xl text-primary-700 font-medium text-center mt-7 mx-5">
              Give a Shelter Dog a Loving Home
            </h2>

            <div
              className="relative max-w-2xl mx-auto text-xl z-10 mt-7 text-center text-primary-700 font-bold rounded-2xl py-6 px-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                WebkitBackdropFilter: 'blur(1px) saturate(100%)',
                backdropFilter: 'blur(1px) saturate(100%)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
              }}
            >
              <p className="mb-2">
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
              <Button variant="primary" size="large" className="-mt-5 z-10">
                Find Your Best Friend
              </Button>
            </div>
            <div className="flex relative z-10 justify-center  ">
              <h3 className=" text-xl  text-center text-primary-500 mt-7 font-semibold">
                Left behind and waiting each day-many gentle hearts long for a
                warm lap and a loving home. We rely solely on the generosity of
                people.
              </h3>
            </div>
            <SocialLinks
              size="md"
              className="relative top-15 gap-6"
              iconColor="text-neutral-100"
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
          <HowToHelp />
          <AboutUs />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

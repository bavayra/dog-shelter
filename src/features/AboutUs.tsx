import { DecorativeCircle } from '@/components/DecorativeCircle';
import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-primary-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="typography-h2 xs:text-5xl 3xl:mt-10 tablet-lg:text-8xl 4xl:mt-6 5xl:mb-12 xs:pt-2 5xl:text-[10rem] 4xl:text-9xl z-12 mb-4 text-center md:mb-8 md:text-7xl">
          About Us
        </h2>

        <div className="bg-primary-100 4xl:max-w-5xl 5xl:text-3xl 4xl:text-2xl typography-body xs:text-lg border-primary-300 tablet-sm:text-xl tablet-lg:max-w-2xl tablet-lg:px-6 relative z-10 mx-auto my-2 max-w-xl rounded-2xl border-2 px-3 py-6 text-center sm:mx-4 md:mx-auto lg:max-w-3xl xl:px-10 2xl:p-10">
          <p>
            Rotvodom was founded in 2010 by Rotvomama, who started building a
            shelter in her own backyard by herself. She started taking in one
            dog after another, relying solely on herself and her few friends.
          </p>
          <hr className="border-primary-500 my-4 border-t" />
          <p>
            Soon enough the shelter grew, and today we are a team of dedicated
            volunteers and professionals who work tirelessly to rescue,
            rehabilitate, and rehome dogs in need. Over the years, we have saved
            hundreds of dogs from dire situations.
          </p>
          <hr className="border-primary-500 my-4 border-t" />
          <p>
            Our mission is to give every dog a second chance at life and to find
            them loving forever homes. We believe that every dog deserves a
            chance to be happy, healthy, and loved, regardless of their
            background or circumstances.
          </p>
        </div>
        <div className="relative">
          <DecorativeCircle
            size={44}
            xsSize={40}
            mdSize={64}
            lgSize={76}
            xlSize={88}
            xl4Size={96}
            xl5Size={108}
            color="neutral-500"
            top="-32"
            right="-12"
            opacity={30}
            zIndex={5}
            className="4xl:mr-40 5xl:mr-46 3xl:-translate-x-1/3 tablet-lg:-translate-y-1/5 md:mr-10 lg:-mt-20 xl:-mt-8 xl:mr-26"
          />
        </div>
        <h3 className="typography-h3 4xl:text-6xl text-primary-500 tablet-lg:text-4xl my-6 text-center md:py-2 md:text-3xl lg:text-5xl">
          Moments from Rotvodom
        </h3>
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default AboutUs;

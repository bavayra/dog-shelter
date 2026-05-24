import { DecorativeCircle } from '@/components/DecorativeCircle';
import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-primary-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="about-heading text-fluid-about-heading text-primary-500 z-12 text-center leading-tight font-bold">
          About Us
        </h2>

        <div className="about-content bg-primary-100 typography-body border-primary-300 relative z-10 mx-auto my-2 rounded-2xl border-2 text-center md:mx-auto">
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
            sizeVariant="md"
            color="neutral-500"
            top="-32"
            right="-12"
            opacity={30}
            zIndex={5}
            className="4xl:mr-40 circle-decorative-about 5xl:mr-46 md:mr-10 lg:-mt-6 xl:-mt-8 xl:mr-26"
          />
        </div>
        <h3 className="about-moments-heading text-primary-500 my-6 text-center leading-normal font-bold">
          Moments from Rotvodom
        </h3>
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default AboutUs;

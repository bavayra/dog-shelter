import { DecorativeCircle } from '@/components/DecorativeCircle';
import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-primary-50 relative overflow-hidden py-8"
    >
      <DecorativeCircle
        sizeVariant="md"
        color="primary-300"
        top="0"
        left="0"
        opacity={40}
        zIndex={0}
        className="about-circle-md"
      />
      <DecorativeCircle
        sizeVariant="xs"
        color="primary-500"
        top="20"
        left="0"
        opacity={90}
        zIndex={0}
        className="about-circle-xs"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-fluid-about-heading text-primary-500 z-12 text-center leading-tight font-bold">
          About Us
        </h2>

        <div className="relative mx-auto my-2">
          <div className="about-content bg-primary-100 typography-body border-primary-300 relative z-10 mx-auto rounded-2xl border-2">
            <p>
              Rotvodom was founded in 2010 by Rotvomama, who started building a
              shelter in her own backyard by herself. She started taking in one
              dog after another, relying solely on herself and her few friends.
            </p>
            <hr className="border-primary-500 my-4 border-t" />
            <p>
              Soon enough the shelter grew, and today we are a team of dedicated
              volunteers and professionals who work tirelessly to rescue,
              rehabilitate, and rehome dogs in need. Over the years, we have
              saved hundreds of dogs from dire situations.
            </p>
            <hr className="border-primary-500 my-4 border-t" />
            <p>
              Our mission is to give every dog a second chance at life and to
              find them loving forever homes. We believe that every dog deserves
              a chance to be happy, healthy, and loved, regardless of their
              background or circumstances.
            </p>
          </div>
        </div>
        <h3 className="about-moments-heading">Moments from Rotvodom</h3>
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default AboutUs;

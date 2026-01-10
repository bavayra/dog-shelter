import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-primary-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="typography-h2 z-12 mb-4 text-center">About Us</h2>

        <div className="bg-primary-100 typography-body border-primary-300 relative z-10 mx-auto my-2 max-w-xl rounded-2xl border-2 px-3 py-6 text-center sm:mx-4">
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
          <div className="pointer-events-none absolute -top-8 -right-40 z-9 h-72 w-72 rounded-full bg-neutral-500 opacity-40"></div>
        </div>
        <h3 className="typography-h3 text-primary-500 my-6 text-center">
          Moments from Rotvodom
        </h3>
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default AboutUs;

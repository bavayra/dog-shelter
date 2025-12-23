import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-primary-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-primary-500 font-bold text-center mb-8">
          About Us
        </h2>

        <div className="relative max-w-xl mx-auto text-lg z-10 my-7 px-3 text-center bg-primary-300 text-primary-50  rounded-2xl py-6 px-0">
          <p className="mb-2">
            Rotvodom was founded in 2010 by Rotvomama, who started building a
            shelter in her own backyard by herself. She started taking in one
            dog after another, relying solely on herself and her few friends.
          </p>
          <hr className="my-4 border-t border-primary-100" />
          <p className="mb-2">
            Soon enough the shelter grew, and today we are a team of dedicated
            volunteers and professionals who work tirelessly to rescue,
            rehabilitate, and rehome dogs in need. Over the years, we have saved
            hundreds of dogs from dire situations.
          </p>
          <hr className="my-4 border-t border-primary-100" />
          <p>
            Our mission is to give every dog a second chance at life and to find
            them loving forever homes. We believe that every dog deserves a
            chance to be happy, healthy, and loved, regardless of their
            background or circumstances.
          </p>
        </div>

        <h3 className="text-3xl text-primary-500 font-semibold text-center mb-8">
          Moments from Rotvodom
        </h3>
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default AboutUs;

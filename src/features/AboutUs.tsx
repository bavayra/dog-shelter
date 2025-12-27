import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-primary-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-primary-500 3xs:text-4xl mb-8 text-center text-5xl font-bold">
          About Us
        </h2>

        <div className="bg-primary-300 text-primary-50 relative z-10 mx-auto my-7 max-w-xl rounded-2xl px-0 px-3 py-6 text-center text-lg">
          <p className="mb-2">
            Rotvodom was founded in 2010 by Rotvomama, who started building a
            shelter in her own backyard by herself. She started taking in one
            dog after another, relying solely on herself and her few friends.
          </p>
          <hr className="border-primary-100 my-4 border-t" />
          <p className="mb-2">
            Soon enough the shelter grew, and today we are a team of dedicated
            volunteers and professionals who work tirelessly to rescue,
            rehabilitate, and rehome dogs in need. Over the years, we have saved
            hundreds of dogs from dire situations.
          </p>
          <hr className="border-primary-100 my-4 border-t" />
          <p>
            Our mission is to give every dog a second chance at life and to find
            them loving forever homes. We believe that every dog deserves a
            chance to be happy, healthy, and loved, regardless of their
            background or circumstances.
          </p>
        </div>

        <h3 className="text-primary-500 mb-8 text-center text-3xl font-semibold">
          Moments from Rotvodom
        </h3>
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default AboutUs;

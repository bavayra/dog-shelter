import PhotoCarousel from './PhotoCarousel';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-primary-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-primary-500 font-bold text-center mb-8">
          About Us
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 text-gray-700">
          <p>
            Rotvodom was founded in 2010 by Rotvomama, who started building a
            shelter in her own backyard by herself. She started taking in one
            dog after another, relying solely on herself and her few friends.
          </p>
          <p>
            Soon enough the shelter grew, and today we are a team of dedicated
            volunteers and professionals who work tirelessly to rescue,
            rehabilitate, and rehome dogs in need. Over the years, we have saved
            hundreds of dogs from dire situations, providing them with medical
            care, behavioral rehabilitation, and most importantly, love and
            attention.
          </p>
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

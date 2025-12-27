import Button from '../components/Button';

const HowToHelp = () => {
  return (
    <section id="help" className="bg-primary-50 scroll-mt-20 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-primary-500 3xs:text-3xl mb-6 text-center text-4xl font-bold">
          How to Help ROTVODOM
        </h2>
        <div className="3xs:mb-6 mx-auto mb-2 max-w-3xl text-center">
          <p className="3xs:text-lg mb-4 text-xl leading-relaxed text-neutral-700">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700">
            Your support makes a{' '}
            <span className="text-primary-500 font-semibold">
              real difference
            </span>{' '}
            in the lives of these wonderful animals. Whether big or small, every
            contribution counts!
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://qr.nspk.ru/example-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="secondary"
              size="large"
              className="flex items-center gap-2"
            >
              Help Our Pets Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;

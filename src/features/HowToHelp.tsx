import Button from '../components/Button';

const HowToHelp = () => {
  return (
    <section id="help" className="bg-primary-50 py-6 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-primary-500 font-bold text-center mb-6">
          How to Help ROTVODOM
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-2">
          <p className="text-xl text-neutral-700 leading-relaxed mb-4">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
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

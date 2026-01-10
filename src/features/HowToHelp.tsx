import Button from '../components/Button';
import RottweilerPupImage from '@/assets/icons/rott-puppy-bg-image.avif';

const HowToHelp = () => {
  return (
    <section
      id="help"
      className="bg-primary-50 relative scroll-mt-20 overflow-hidden pt-6 pb-30"
    >
      <div className="z-10 container mx-auto px-4">
        <h2 className="typography-h2 mb-4 text-center">How to Help ROTVODOM</h2>
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <p className="typography-body xs:text-lg mb-4 leading-relaxed">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="typography-body xs:text-lg leading-relaxed">
            Your support makes a{' '}
            <span className="text-primary-500 font-semibold">
              real difference
            </span>{' '}
            in the lives of these wonderful animals. Whether big or small, every
            contribution counts!
          </p>
        </div>

        <div className="mb-4 flex justify-center">
          <a
            href="https://qr.nspk.ru/example-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="secondary"
              size="medium"
              className="flex items-center gap-2"
              ariaLabel="Donate to help our pets button"
            >
              Help Our Pets Now
            </Button>
          </a>
        </div>
      </div>
      <img
        src={RottweilerPupImage}
        alt=""
        aria-hidden="true"
        className="from-primary-50 pointer-events-none absolute left-1/2 h-auto w-full max-w-2xl -translate-x-1/2 bg-linear-to-b to-neutral-50 object-contain"
      />
    </section>
  );
};

export default HowToHelp;

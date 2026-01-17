import Button from '../components/Button';
import RottweilerPupImage from '@/assets/icons/rott-puppy-bg-image.avif';

const HowToHelp = () => {
  return (
    <section
      id="help"
      className="bg-primary-50 border-b-primary-500 relative z-1 min-h-[75vh] scroll-mt-20 overflow-hidden border-b-3 pt-6 pb-30 sm:pt-10"
    >
      <div className="z-10 container mx-auto px-4">
        <h2 className="typography-h2 mb-6 text-center md:mt-6 md:text-5xl">
          How to Help ROTVODOM
        </h2>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-6 md:px-12">
          <p className="typography-body xs:text-lg mb-2 leading-relaxed md:text-2xl">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="typography-body xs:text-lg leading-relaxed md:text-2xl">
            Your support makes a{' '}
            <span className="text-primary-500 font-semibold">
              real difference
            </span>{' '}
            in the lives of these wonderful animals. Whether big or small, every
            contribution counts!
          </p>
        </div>

        <div className="mb-4 flex justify-center sm:mb-0">
          <a
            href="https://qr.nspk.ru/example-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="large"
              className="flex items-center gap-2 md:mt-4"
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
        className="from-primary-50 xs:top-119 pointer-events-none absolute top-129 left-1/2 z-3 h-auto w-full max-w-2xl -translate-x-1/2 overflow-visible bg-linear-to-b to-neutral-50 object-contain sm:top-123 sm:w-110 md:top-125 md:w-200 md:max-w-3xl"
      />
    </section>
  );
};

export default HowToHelp;

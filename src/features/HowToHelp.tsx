import Button from '../components/Button';
import RottweilerPupImage from '@/assets/icons/rott-puppy-bg-image.avif';

const HowToHelp = () => {
  return (
    <section
      id="help"
      className="bg-primary-50 border-b-primary-500 tablet-sm:min-h-[80vh] relative z-1 min-h-[75vh] scroll-mt-20 overflow-hidden border-b-3 pt-6 pb-30 sm:pt-10 md:min-h-[72vh] lg:min-h-[90vh] xl:min-h-[80vh]"
    >
      <div className="z-10 container mx-auto px-4">
        <h2 className="typography-h2 xs:text-4xl tablet-sm:text-5xl tablet-sm:mt-0 mb-6 text-center xl:text-7xl">
          How to Help ROTVODOM
        </h2>
        <div className="tablet-sm:px-4 mx-auto mb-6 max-w-3xl text-center md:mb-6 md:px-12">
          <p className="typography-body xs:text-lg tablet-sm:text-2xl mb-2 leading-relaxed">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="typography-body xs:text-lg tablet-sm:text-2xl leading-relaxed">
            Your support makes a{' '}
            <span className="text-primary-500 font-semibold">
              real difference
            </span>{' '}
            in the lives of these wonderful animals. Whether big or small, every
            contribution counts!
          </p>
        </div>

        <div className="mb-2 flex justify-center sm:mb-0">
          <a
            href="https://qr.nspk.ru/example-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="medium"
              className="flex items-center md:mt-4 xl:mt-2"
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
        className="from-primary-50 tablet-sm:w-120 pointer-events-none absolute bottom-0 left-1/2 z-3 h-auto w-full max-w-2xl -translate-x-1/2 translate-y-1/4 overflow-visible bg-linear-to-b to-neutral-50 object-contain sm:w-110 md:w-200 md:max-w-3xl lg:w-130 lg:bg-none xl:w-154"
      />
    </section>
  );
};

export default HowToHelp;

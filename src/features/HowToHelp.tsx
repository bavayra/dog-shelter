import Button from '../components/Button';
import RottweilerPupImage from '@/assets/icons/rott-puppy-bg-image.avif';

const HowToHelp = () => {
  return (
    <section
      id="help"
      className="bg-primary-50 border-b-primary-500 tablet-sm:min-h-[calc(var(--vph)*0.70)] 5xl:min-h-[calc(var(--vph)*0.65)] 4xl:min-h-[calc(var(--vph)*0.84)] relative z-1 min-h-[calc(var(--vph)*0.75)] scroll-mt-20 overflow-hidden border-b-3 pt-6 pb-30 sm:min-h-[calc(var(--vph)*0.68)] sm:pt-10 md:min-h-[calc(var(--vph)*0.60)] lg:min-h-[calc(var(--vph))] xl:min-h-[calc(var(--vph)*0.70)] [@media(min-height:1600px)]:min-h-[50vh]"
    >
      <div className="z-10 container mx-auto px-4">
        <h2 className="typography-h2 xs:text-4xl xs:pt-4 tablet-sm:text-5xl tablet-lg:text-6xl 4xl:pt-10 4xl:pb-4 3xl:mt-10 4xl:text-8xl 3xl:mb-6 mb-6 text-center sm:mt-0 sm:pt-0 lg:mt-12 lg:text-7xl 2xl:mb-10">
          How to Help ROTVODOM
        </h2>
        <div className="3xl:max-w-4xl tablet-lg:mb-6 4xl:max-w-6xl 5xl:max-w-7xl 6xl:max-w-6xl 5xl:px-6 5xl:mb-14 6xl:mb-6 mx-auto mb-6 max-w-3xl text-center sm:px-6 md:mb-4 md:px-22 xl:max-w-240 2xl:max-w-264">
          <p className="typography-body xs:text-lg tablet-sm:text-xl tablet-lg:text-2xl 4xl:text-3xl 6xl:text-[2rem] 5xl:text-4xl mb-2 leading-relaxed">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="typography-body xs:text-lg tablet-sm:text-xl tablet-lg:text-2xl 4xl:text-3xl 6xl:text-[2rem] 5xl:text-4xl leading-relaxed">
            Your support makes a{' '}
            <span className="text-primary-500 font-semibold">
              real difference
            </span>{' '}
            in the lives of these wonderful animals. Whether big or small, every
            contribution counts!
          </p>
        </div>

        <div className="6xl:mb-30 mb-2 flex justify-center sm:mb-0 lg:mb-20">
          <a
            href="https://qr.nspk.ru/example-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="large"
              className="4xl:py-5 4xl:px-10 tablet-lg:mt-0 flex items-center md:mt-4 xl:mt-2"
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
        className="from-primary-50 tablet-sm:w-120 tablet-lg:max-w-170 4xl:w-200 pointer-events-none absolute bottom-0 left-1/2 z-3 h-auto w-full max-w-2xl -translate-x-1/2 translate-y-1/4 overflow-visible bg-linear-to-b to-neutral-50 object-contain sm:w-110 md:w-150 md:max-w-3xl md:bg-none lg:w-160 xl:w-154 2xl:w-170 2xl:max-w-none"
      />
    </section>
  );
};

export default HowToHelp;

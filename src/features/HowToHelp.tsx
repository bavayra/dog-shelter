import Button from '../components/Button';
import RottweilerPupImage from '@/assets/icons/rott-puppy-bg-image.avif';

const HowToHelp = () => {
  return (
    <section
      id="help"
      className="bg-primary-50 border-b-primary-500 help-section-height relative z-1 scroll-mt-20 overflow-hidden border-b-3 pt-6 pb-30 sm:pt-10"
    >
      <div className="z-10 container mx-auto px-4">
        <h2 className="text-fluid-help-heading text-primary-500 heading-help-spacing text-center font-bold">
          How to Help ROTVODOM
        </h2>
        <div className="help-content-width mx-auto text-center">
          <p className="text-fluid-help-body mb-2 leading-normal text-neutral-700">
            Our shelter relies{' '}
            <span className="text-primary-500 font-semibold">entirely</span> on
            the kindness and generosity of people like{' '}
            <span className="text-primary-500 font-semibold">you</span>. Every
            donation helps us provide food, medical care, and a safe home for
            dogs in need.
          </p>
          <p className="help-support-text leading-relaxed">
            Your support makes a{' '}
            <span className="text-primary-500 font-semibold">
              real difference
            </span>{' '}
            in the lives of these wonderful animals. Whether big or small, every
            contribution counts!
          </p>
        </div>

        <div className="help-button-container flex justify-center">
          <a
            href="https://qr.nspk.ru/example-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="large"
              className="help-donate-button flex items-center"
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
        className="from-primary-50 puppy-image pointer-events-none absolute bottom-0 left-1/2 z-3 h-auto w-full -translate-x-1/2 translate-y-1/4 overflow-visible bg-linear-to-b to-neutral-50 object-contain placeholder-purple-50 md:bg-none"
      />
    </section>
  );
};

export default HowToHelp;

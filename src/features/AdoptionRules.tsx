import RuleCard from '@/components/RuleCard';

const AdoptionRules = () => {
  const rules = [
    'If you are interested in adoption, please contact our team for further details and for an online interview.',
    'Interview questions are based on 15 years rehoming experience and have be answered for the better understanding of your needs.',
    'All decisions prioritize the dog’s welfare; we may suggest another dog or refuse adoption.',
    'After the interview, an in-person showing is required (except for applicants who live further than 300 km from Yekaterinburg); dogs are not handed over at showings.',
    'Multiple visits and walking activities are allowed to help the dog and applicants acclimate.',
    "If approved, the curator will arrange the transfer and typically deliver the dog straight to the new owner's home.",
    'After transfer is completed, it is formalized by a contract with passport details of both parties.',
    'After the adoption, we stay in touch and provide support as needed. The shelter has a right to contact new owner anytime to check in on the dog.',
  ];

  return (
    <section id="adoption-rules" className="relative z-1 bg-neutral-50 py-6">
      <div className="container mx-auto px-4 sm:mt-4">
        <h2 className="typography-h2 xs:text-4xl xs:pt-4 4xl:text-9xl tablet-sm:text-5xl 4xl:mt-6 3xl:mt-10 mb-0 text-center md:text-7xl">
          Adoption Rules
        </h2>

        <p className="typography-body 4xl:mt-4 xs:text-lg 5xl:text-5xl tablet-sm:text-xl 5xl:w-auto 5xl:px-60 mx-auto mt-4 mb-6 text-center sm:text-lg md:px-16 md:text-2xl md:tracking-tight lg:text-3xl xl:px-34 2xl:my-8 2xl:w-5xl">
          Please read our adoption guidelines carefully to ensure the best match
          for both you and your future companion.
        </p>
      </div>

      <div className="xl2:gap-x-16 3xl:gap-x-0 3xl:max-w-5xl 4xl:max-w-6xl mx-auto max-w-4xl space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-x-6">
        {rules.map((rule, index) => (
          <RuleCard key={index} number={index + 1} text={rule} />
        ))}
      </div>

      <div className="xs:mb-6 4xl:mt-10 mt-6 text-center">
        <div>
          <a
            href="https://vk.com/topic-215318612_49115975"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:text-primary-100 4xl:text-3xl 4xl:font-normal 4xl:py-5 4xl:px-10 hover:bg-primary-700 tablet-sm:text-lg tablet-lg:text-xl text-primary-50 xs:text-base mb-4 inline-block rounded-full px-6 py-2 text-xs transition-transform hover:scale-105 md:mt-3 md:mb-6 2xl:px-8 2xl:text-2xl"
          >
            See All The Rules
          </a>
        </div>
        <div>
          <a
            href="https://vk.com/topic-215318612_49115985"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:text-primary-100 4xl:text-3xl 4xl:py-5 4xl:px-10 4xl:font-normal tablet-sm:text-lg hover:bg-primary-700 tablet-lg:text-xl text-primary-50 xs:text-base inline-block rounded-full px-6 py-2 text-xs transition-transform hover:scale-105 2xl:px-8 2xl:text-2xl"
          >
            See The Contract Template
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdoptionRules;

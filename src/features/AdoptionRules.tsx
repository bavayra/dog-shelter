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
        <h2 className="text-fluid-rules-heading rules-heading-spacing text-primary-500 text-center font-bold">
          Adoption Rules
        </h2>

        <p className="rules-intro text-fluid-rules-intro mx-auto text-center leading-normal text-neutral-700 md:tracking-tight">
          Please read our adoption guidelines carefully to ensure the best match
          for both you and your future companion.
        </p>
      </div>

      <div className="rules-grid mx-auto space-y-4 lg:grid lg:grid-cols-2">
        {rules.map((rule, index) => (
          <RuleCard key={index} number={index + 1} text={rule} />
        ))}
      </div>

      <div className="xs:mb-6 4xl:mt-10 mt-6 text-center">
        <div>
          <a
            href="https://vk.com/topic-215318612_49115975"
            rel="noopener noreferrer"
            className="rules-button bg-primary-500 hover:text-primary-100 hover:bg-primary-700 text-primary-50 inline-block rounded-full transition-transform hover:scale-105"
          >
            See All The Rules
          </a>
        </div>
        <div>
          <a
            href="https://vk.com/topic-215318612_49115985"
            rel="noopener noreferrer"
            className="rules-button bg-primary-500 hover:text-primary-100 hover:bg-primary-700 text-primary-50 inline-block rounded-full transition-transform hover:scale-105"
          >
            See The Contract Template
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdoptionRules;

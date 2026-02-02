interface RuleCardProps {
  number: number;
  text: string;
}

const RuleCard = ({ number, text }: RuleCardProps) => {
  return (
    <div className="xs:mx-6 3xl:max-w-xl 3xl:p-6 4xl:px-8 5xl:w-xl 5xl:px-4 tablet-lg:w-lg tablet-lg:py-6 tablet-lg:mx-auto mx-2 flex h-full justify-center rounded-lg bg-white px-6 py-4 text-justify shadow-md sm:mx-8 md:mx-16 md:px-8 md:py-6 lg:mx-4 lg:max-w-sm 2xl:mx-auto 2xl:w-md">
      <div className="flex items-center gap-4">
        <span className="text-primary-500 bg-primary-100 3xl:ml-1 5xl:py-6 5xl:w-12 5xl:h-12 5xl:text-2xl tablet-sm:h-8 3xl:h-10 3xl:w-10 tablet-sm:w-8 -ml-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold">
          {number}
        </span>
        <p className="typography-small 4xl:text-2xl 5xl:text-3xl 5xl:pr-10 xs:text-base tablet-sm:text-lg tablet-lg:text-xl text-sm font-normal lg:px-2 lg:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default RuleCard;

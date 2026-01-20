interface RuleCardProps {
  number: number;
  text: string;
}

const RuleCard = ({ number, text }: RuleCardProps) => {
  return (
    <div className="xs:mx-6 mx-2 flex h-full justify-center rounded-lg bg-white px-6 py-4 text-center shadow-md sm:mx-8 md:mx-16 lg:mx-4">
      <div className="flex items-center gap-2">
        <span className="text-primary-500 bg-primary-100 -ml-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold lg:h-8 lg:w-8">
          {number}
        </span>
        <p className="typography-small xs:text-base text-sm font-normal md:text-xl lg:px-2 lg:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default RuleCard;

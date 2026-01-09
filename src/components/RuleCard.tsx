interface RuleCardProps {
  number: number;
  text: string;
}

const RuleCard = ({ number, text }: RuleCardProps) => {
  return (
    <div className="mx-2 rounded-lg bg-white px-6 py-4 shadow-md sm:mx-8">
      <div className="flex items-start gap-2">
        <span className="text-primary-500 bg-primary-100 -ml-3 flex h-6 w-6 shrink-0 items-start justify-center rounded-full font-bold">
          {number}
        </span>
        <p className="typography-body">{text}</p>
      </div>
    </div>
  );
};

export default RuleCard;

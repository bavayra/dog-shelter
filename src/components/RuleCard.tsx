interface RuleCardProps {
  number: number;
  text: string;
}

const RuleCard = ({ number, text }: RuleCardProps) => {
  return (
    <div className="mx-3 rounded-lg bg-white px-6 py-4 shadow-md">
      <div className="flex items-start gap-2">
        <span className="text-primary-500 bg-primary-100 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold">
          {number}
        </span>
        <p className="text-neutral-700">{text}</p>
      </div>
    </div>
  );
};

export default RuleCard;

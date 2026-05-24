interface RuleCardProps {
  number: number;
  text: string;
}

const RuleCard = ({ number, text }: RuleCardProps) => {
  return (
    <div className="rule-card flex h-full justify-center rounded-lg bg-white text-justify shadow-md">
      <div className="flex items-center gap-4">
        <span className="rule-number text-primary-500 bg-primary-100 flex shrink-0 items-center justify-center rounded-full font-bold">
          {number}
        </span>
        <p className="rule-text font-normal">{text}</p>
      </div>
    </div>
  );
};

export default RuleCard;

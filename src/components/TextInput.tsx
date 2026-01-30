import type { ChangeEvent, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const TextInput = ({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = true,
  inputMode,
  className = '',
  ...restProps
}: TextInputProps) => {
  const baseInputStyles = `
    w-full
    mb-4
    bg-transparent
    border-0
    border-b-2
    border-neutral-500
    typography-large
    focus:outline-none
    focus:border-primary-500
    focus:ring-0
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');
  return (
    <div>
      <label
        htmlFor={id}
        className="typography-body xs:text-base 5xl:text-3xl 5xl:mb-4 tablet-lg:text-xl tablet-lg:font-semibold block sm:text-lg md:text-xl 2xl:text-2xl"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        className={baseInputStyles}
        {...restProps}
      />
    </div>
  );
};

export default TextInput;

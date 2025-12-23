import type { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    mb-7
    bg-transparent
    border-0
    border-b-2
    border-neutral-500
    py-2
    text-base
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
        className="block text-primary-700 text-md font-semibold"
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

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'font-semibold rounded-lg transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-[var(--color-primary-700)] text-white hover:bg-[var(--color-primary-900)] hover:scale-103 focus:ring-[var(--color-primary-500)] active:bg-[var(--color-primary-800)]',
    secondary:
      'bg-[var(--color-primary-200)] text-[var(--color-primary-900)] hover:bg-[var(--color-primary-300)] hover:scale-103 focus:ring-gray-500 active:bg-gray-800',
    outline:
      'bg-transparent border-2 border-[var(--color-accent-200)] text-[var(--color-accent-500)] hover:scale-103 hover:bg-[var(--color-primary-100)] focus:ring-[var(--color-accent-500)]',
  };
  const sizeStyles: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

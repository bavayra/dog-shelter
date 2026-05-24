import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  active?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled,
  ariaLabel,
  ...props
}: ButtonProps) => {
  const baseStyles =
    ' rounded-full transform transition-all duration-200 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary-700 text-white 5xl:px-14 hover:bg-primary-900 hover:scale-105 focus:ring-primary-500 active:bg-primary-800',
    secondary:
      'bg-primary-200 text-primary-700 hover:bg-primary-300 md:border-2 md:border-primary-700 hover:scale-105 md:bg-primary-300 md:px-6 focus:ring-gray-500 active:bg-gray-800',
    outline:
      'bg-primary-200 border-2 border-primary-500 text-primary-700 hover:scale-105 hover:bg-primary-100 focus:ring-primary-200 shadow-md active:bg-primary-300',
  };
  const sizeStyles: Record<ButtonSize, string> = {
    small: 'btn-padding-small btn-text-small',
    medium: 'btn-padding-medium btn-text-medium',
    large: 'btn-padding-large btn-text-large',
  };
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

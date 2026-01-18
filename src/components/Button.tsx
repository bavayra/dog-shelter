import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'filter';
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
  active = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'font-semibold rounded-full transform transition-all duration-200 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary-700 text-white text-xs py-2  hover:bg-primary-900 md:text-lg xl:text-xl hover:scale-105 md:font-normal xs:text-lg focus:ring-primary-500 active:bg-primary-800',
    secondary:
      'bg-primary-200 text-primary-700 hover:bg-primary-300 md:border-2 md:border-primary-700 hover:scale-105 xs:text-lg md:text-sm md:bg-primary-300 md:px-6 focus:ring-gray-500 active:bg-gray-800',
    outline:
      'bg-primary-200 border-2 border-primary-500 text-primary-700 lg:text-2xl hover:scale-105 hover:bg-primary-100 focus:ring-primary-200 shadow-md active:bg-primary-300',
    filter: active
      ? 'bg-primary-500 text-primary-700  focus:ring-primary-500 font-semibold'
      : 'bg-primary-200 sm:text-sm text-primary-700 hover:scale-105 hover:bg-neutral-300 text-sm font-semibold focus:ring-primary-500',
  };
  const sizeStyles: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base sm:text-lg sm:px-6 sm:py-2',
    large: 'px-5 py-3 text-lg',
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

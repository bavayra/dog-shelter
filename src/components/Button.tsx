import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Shared visual props that apply to both <button> and <a> variants.
 */
interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

/**
 * When no `href` is provided the component renders a <button>.
 * `href?: never` is the discriminant: it prevents passing href=undefined
 * and allows TypeScript to narrow the union inside the component body.
 */
type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

/**
 * When `href` is provided the component renders an <a>.
 * All anchor-specific attributes (rel, target, download, …) are available
 * automatically through AnchorHTMLAttributes — no manual listing needed.
 */
type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
  } = props;
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

  const sharedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // TypeScript narrows `props` to ButtonAsAnchor here because ButtonAsButton
  // has `href?: never`, meaning props.href can only be undefined in that branch.
  if (props.href !== undefined) {
    const {
      href,
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...anchorProps
    } = props;
    return (
      <a href={href} className={sharedClass} {...anchorProps}>
        {children}
      </a>
    );
  }

  // TypeScript narrows `props` to ButtonAsButton here.
  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    ...buttonProps
  } = props;
  return (
    <button className={sharedClass} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;

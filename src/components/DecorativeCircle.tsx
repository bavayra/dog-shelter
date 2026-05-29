import type { CSSProperties } from 'react';

interface DecorativeCircleProps {
  sizeVariant: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color:
    | 'primary-50'
    | 'primary-200'
    | 'primary-300'
    | 'primary-500'
    | 'primary-700'
    | 'neutral-50'
    | 'neutral-500';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: number;
  zIndex?: number;
  className?: string;
}

export const DecorativeCircle = ({
  sizeVariant,
  color,
  top,
  bottom,
  left,
  right,
  opacity,
  zIndex,
  className = '',
}: DecorativeCircleProps) => {
  const colorMap: Record<string, string> = {
    'primary-50': 'var(--color-primary-50)',
    'primary-200': 'var(--color-primary-200)',
    'primary-300': 'var(--color-primary-300)',
    'primary-500': 'var(--color-primary-500)',
    'primary-700': 'var(--color-primary-700)',
    'neutral-50': 'var(--color-neutral-50)',
    'neutral-500': 'var(--color-neutral-500)',
  };

  const parsePosition = (value: string) => {
    const num = parseFloat(value);
    return `${num * 0.25}rem`;
  };

  const style: CSSProperties = {
    backgroundColor: colorMap[color],
    top: top !== undefined ? parsePosition(top) : undefined,
    bottom: bottom !== undefined ? parsePosition(bottom) : undefined,
    left: left !== undefined ? parsePosition(left) : undefined,
    right: right !== undefined ? parsePosition(right) : undefined,
    opacity: opacity !== undefined ? opacity / 100 : undefined,
    zIndex: zIndex,
  };

  const sizeClass = `circle-${sizeVariant}`;

  return (
    <div
      className={`pointer-events-none absolute rounded-full ${sizeClass} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

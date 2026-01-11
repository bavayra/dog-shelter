import React from 'react';

interface DecorativeCircleProps {
  size: number;
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

export const DecorativeCircle: React.FC<DecorativeCircleProps> = ({
  size,
  color,
  top,
  bottom,
  left,
  right,
  opacity,
  zIndex,
  className = '',
}) => {
  const colorMap: Record<string, string> = {
    'primary-50': 'var(--color-primary-50)',
    'primary-200': 'var(--color-primary-200)',
    'primary-300': 'var(--color-primary-300)',
    'primary-500': 'var(--color-primary-500)',
    'primary-700': 'var(--color-primary-700)',
    'neutral-50': 'var(--color-neutral-50)',
    'neutral-500': 'var(--color-neutral-500)',
  };

  const sizeInRem = `${size * 0.25}rem`;
  const parsePosition = (value: string) => {
    const num = parseFloat(value);
    return `${num * 0.25}rem`;
  };

  const style: React.CSSProperties = {
    width: sizeInRem,
    height: sizeInRem,
    backgroundColor: colorMap[color],
    top: top !== undefined ? parsePosition(top) : undefined,
    bottom: bottom !== undefined ? parsePosition(bottom) : undefined,
    left: left !== undefined ? parsePosition(left) : undefined,
    right: right !== undefined ? parsePosition(right) : undefined,
    opacity: opacity !== undefined ? opacity / 100 : undefined,
    zIndex: zIndex,
  };

  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

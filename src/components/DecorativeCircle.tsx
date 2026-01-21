import React, { useId } from 'react';

interface DecorativeCircleProps {
  size: number;
  xsSize?: number;
  smSize?: number;
  tabletSmSize?: number;
  mdSize?: number;
  lgSize?: number;
  xlSize?: number;
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
  xsSize,
  smSize,
  tabletSmSize,
  mdSize,
  lgSize,
  xlSize,
  color,
  top,
  bottom,
  left,
  right,
  opacity,
  zIndex,
  className = '',
}) => {
  const circleId = useId().replace(/:/g, '');

  const xsMediaQuery = xsSize
    ? `@media (min-width: 360px) { [data-circle-id="${circleId}"] { width: ${xsSize * 0.25}rem !important; height: ${xsSize * 0.25}rem !important; } }`
    : '';

  const smMediaQuery = smSize
    ? `@media (min-width: 412px) { [data-circle-id="${circleId}"] { width: ${smSize * 0.25}rem !important; height: ${smSize * 0.25}rem !important; } }`
    : '';

  const tabletSmMediaQuery = tabletSmSize
    ? `@media (min-width: 480px) { [data-circle-id="${circleId}"] { width: ${tabletSmSize * 0.25}rem !important; height: ${tabletSmSize * 0.25}rem !important; } }`
    : '';

  const mdMediaQuery = mdSize
    ? `@media (min-width: 768px) { [data-circle-id="${circleId}"] { width: ${mdSize * 0.25}rem !important; height: ${mdSize * 0.25}rem !important; } }`
    : '';

  const lgMediaQuery = lgSize
    ? `@media (min-width: 1024px) { [data-circle-id="${circleId}"] { width: ${lgSize * 0.25}rem !important; height: ${lgSize * 0.25}rem !important; } }`
    : '';

  const xlMediaQuery = xlSize
    ? `@media (min-width: 1280px) { [data-circle-id="${circleId}"] { width: ${xlSize * 0.25}rem !important; height: ${xlSize * 0.25}rem !important; } }`
    : '';

  const mediaQueryStyles = ` ${xsMediaQuery} ${smMediaQuery} ${tabletSmMediaQuery} ${mdMediaQuery} ${lgMediaQuery} ${xlMediaQuery}`;
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
    <>
      {(xsSize || smSize || tabletSmSize || mdSize || lgSize || xlSize) && (
        <style>{mediaQueryStyles}</style>
      )}
      <div
        data-circle-id={circleId}
        className={`pointer-events-none absolute rounded-full ${className}`}
        style={style}
        aria-hidden="true"
      />
    </>
  );
};

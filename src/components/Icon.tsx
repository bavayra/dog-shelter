import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const Icon = ({
  title,
  size = 'md',
  className = '',
  ...props
}: IconProps & { as?: React.ComponentType<SVGProps<SVGSVGElement>> }) => {
  const { as: Component, ...restProps } = props as any;

  if (!Component) {
    return null;
  }

  const sizeClass = sizeMap[size];
  const combinedClassName = `${className}`.trim();

  return (
    <Component
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
      className={`h-full w-full ${combinedClassName} ${sizeClass} flex shrink-0 items-center justify-center`}
      {...restProps}
    />
  );
};

export default Icon;

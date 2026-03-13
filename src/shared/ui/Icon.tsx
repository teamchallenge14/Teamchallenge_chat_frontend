import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import { icons, type IconName } from './icon-registry';

/**
 * Icon component that renders SVG icons from the auto-generated registry.
 *
 * Icons are loaded from `shared/assets/icons` and referenced by PascalCase name.
 *
 * @example
 * <Icon name="Lock" size="lg" className="text-red-500" />
 * <Icon name="Home" size={32} color="#3b82f6" aria-label="User profile" />
 */
interface IconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'name'> {
  /**
   * Name of the icon from the registry.
   * Autocomplete works thanks to `IconName` type.
   */
  name: IconName;

  /**
   * Icon size.
   * - preset: 'sm' | 'md' | 'lg'
   * - custom: number (in pixels)
   */
  size?: 'sm' | 'md' | 'lg' | number;

  /**
   * Optional icon color.
   * Works because SVGs use `currentColor` inside.
   * Can be hex, Tailwind color (via className) or CSS variable.
   */
  color?: string;
  /** Icons must not receive children */
  children?: never;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
} as const;

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color, className, style, ...props }, ref) => {
    const Svg = icons[name];
    if (!Svg) {
      console.warn(`[Icon] "${String(name)}" not found`);
      return null;
    }
    /** compute size classes and styles based on the `size` prop */
    const isCustomSize = typeof size === 'number';
    const sizeClass = isCustomSize ? undefined : sizeMap[size as keyof typeof sizeMap];
    const customSizeStyle = isCustomSize ? { width: size, height: size } : undefined;
    /** if no aria-label is provided, hide the icon from screen readers */
    const ariaHidden = props['aria-label'] ? undefined : true;
    return (
      <Svg
        ref={ref}
        {...props}
        /** pointer-events-none ensures icons don't interfere with clicks, shrink-0 — ensures that the icon never flattens if it is in a narrow flex container */
        className={cn('pointer-events-none shrink-0', sizeClass, className)}
        style={{ color, ...customSizeStyle, ...style }}
        aria-hidden={ariaHidden}
        focusable="false"
      />
    );
  },
);

Icon.displayName = 'Icon';

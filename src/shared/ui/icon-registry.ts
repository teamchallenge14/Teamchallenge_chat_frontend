import type { ComponentType, SVGProps } from 'react';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Auto-generated registry of all SVG icons.
 * Icons are loaded from `@/shared/assets/icons/*.svg?react`
 * and converted to PascalCase (e.g. heart.svg → Heart).
 */
const rawModules = import.meta.glob('../assets/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
}) as Record<string, unknown>;

/** Fallback icon component for missing icons */
const FallbackIcon: SvgComponent = () => null;
const registry = new Map<string, SvgComponent>();

for (const [path, Component] of Object.entries(rawModules)) {
  const fileName = path.split('/').pop() ?? '';
  const kebabName = fileName.replace(/\.svg$/, '');

  /** Validate icon filename */
  if (!/^[a-z][a-z0-9-_]*$/i.test(kebabName)) {
    console.warn(
      `[Icon Registry] Invalid icon filename "${fileName}". Use kebab-case and start with a letter.`,
    );
    continue;
  }

  const pascalName = kebabName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // duplicate detection
  if (registry.has(pascalName)) {
    console.warn(
      `[Icon Registry] Duplicate icon name "${pascalName}" from file "${fileName}". Skipping.`,
    );
    continue;
  }

  // invalid component check
  if (typeof Component !== 'function') {
    console.warn(
      `[Icon Registry] "${fileName}" does not export a valid React component (received ${typeof Component}).`,
    );
    registry.set(pascalName, FallbackIcon);
    continue;
  }

  registry.set(pascalName, Component as SvgComponent);

  if (import.meta.env.DEV) {
    console.debug(`[Icon Registry] Registered icon "${pascalName}" from file "${fileName}".`);
  }
}

export const icons = Object.fromEntries(registry) satisfies Record<string, SvgComponent>;

/** Union type of all available icon names (for autocomplete) */
export type IconName = keyof typeof icons;

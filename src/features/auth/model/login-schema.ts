import { z } from 'zod';

/**
 * Zod schema describing validation rules for the login form.
 *
 * This schema represents the single source of truth for:
 * - form validation rules
 * - form data shape
 * - inferred TypeScript types
 *
 * It is intentionally UI-agnostic and can be reused across
 * different layers (forms, API validation, tests).
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
});

/**
 * Strongly typed representation of login form values.
 *
 * This type is inferred directly from the Zod schema to prevent
 * divergence between validation rules and TypeScript definitions.
 */
export type LoginValues = z.infer<typeof loginSchema>;

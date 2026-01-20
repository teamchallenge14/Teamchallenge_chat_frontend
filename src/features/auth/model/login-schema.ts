import { z } from 'zod';

/**
 * Login Form Validation Schema.
 *
 * Rules:
 * - Email: Standard email format validation.
 * - Password: Minimum 8 characters, requires uppercase & number (security standard).
 *
 * NOTE: Error messages are intended for direct UI display.
 */
export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Invalid email address.' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number.' }),
});

/**
 * Type inferred from the schema.
 * Used for React Hook Form types and prop interfaces.
 */
export type LoginValues = z.infer<typeof loginSchema>;

/**
 * Formatted errors type for external components (e.g., error displays).
 */
export type LoginErrors = z.ZodFormattedError<LoginValues>;

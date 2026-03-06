import { z } from 'zod';
import { emailFieldSchema, loginFieldSchema, passwordFieldSchema } from './fields';

/**
 * Zod schema describing validation rules for the registration form.
 * * NOTE:
 * - Field names match Swagger (create-user-dto).
 * - Required fields match the UI Design (even if Swagger allows nulls).
 */
export const GENDERS = ['MALE', 'FEMALE', 'OTHER'] as const;
export const AGE_OPTIONS = Array.from({ length: 89 }, (_, i) => i + 12);

/**
 * Type for gender values (re-usable in UI and other code).
 */
export type Gender = (typeof GENDERS)[number];

// export const registerInitialSchema = z
//   .object({
//     email: emailFieldSchema,

//     password: passwordFieldSchema,

//     confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),

//     login: loginFieldSchema,
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ['confirmPassword'],
//     message: 'Passwords do not match',
//   });

export const emailEditSchema = z.object({
  email: emailFieldSchema,
});

// export const emailPasswordSchema = z
//   .object({
//     email: emailFieldSchema,

//     password: passwordFieldSchema,

//     confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ['confirmPassword'],
//     message: 'Passwords do not match',
//   });

export const userNamechema = z.object({
  username: loginFieldSchema,
});

export const registerSchema = z
  .object({
    // --- 1. Basic information ---

    email: emailFieldSchema,
    password: passwordFieldSchema,
    confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),

    login: loginFieldSchema,
    code: z.string(),

    // --- 2. Profile details ---

    firstName: z
      .string()
      .trim()
      .min(3, { message: 'Name must be at least 3 characters.' })
      .max(20, { message: 'Name must be at most 20 characters.' }),

    lastName: z
      .string()
      .trim()
      .min(1, { message: 'Surname is required.' })
      .regex(/^[a-zA-Z\s-]+$/, {
        message: 'Surname can only contain letters, spaces, and hyphens.',
      }),

    age: z.coerce
      .number({ message: 'Age must be a number.' })
      .int({ message: 'Age must be a whole number.' })
      .min(12, { message: 'Age must be at least 12.' })
      .max(120, { message: 'Age must be at most 120.' }),

    gender: z.enum(GENDERS, { message: 'Please select a gender.' }).default('MALE'),

    // Optional fields
    // Preprocess bio so empty or whitespace-only strings are treated as undefined.
    // This ensures an empty bio is not sent to the backend as an empty string
    // and remains an absent field if the user left it blank.
    description: z.preprocess(
      (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
      z.string().trim().max(200, { message: 'Bio must be at most 200 characters.' }).optional(),
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

/**
 * Strongly typed representation of register form values.
 *
 * This type is inferred directly from the Zod schema to prevent
 * divergence between validation rules and TypeScript definitions.
 */
export type RegisterValues = z.infer<typeof registerSchema>;
// export type RegisterInitialValues = z.infer<typeof registerInitialSchema>;
// export type EmailPasswordValues = z.infer<typeof emailPasswordSchema>;

export type EmailEditSchemaType = z.infer<typeof emailEditSchema>;

/** Type representing raw input values before Zod coercion.
 * Useful for form libraries that handle all inputs as strings.
 */
export type RegisterInput = z.input<typeof registerSchema>;
// export type RegisterInitialInput = z.input<typeof registerInitialSchema>;
/**
 * All error messages are localized and user-friendly.
 * No additional client-side validation is needed.
 */
export type RegisterErrors = z.ZodFormattedError<RegisterValues>;

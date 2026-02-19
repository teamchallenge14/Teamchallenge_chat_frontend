import { z } from 'zod';

/**
 * Zod schema describing validation rules for the registration form.
 * * NOTE:
 * - Field names match Swagger (create-user-dto).
 * - Required fields match the UI Design (even if Swagger allows nulls).
 */
export const GENDERS = ['MALE', 'FEMALE', 'OTHER'] as const;
export const AGE_OPTIONS = Array.from({ length: 89 }, (_, i) => i + 13);

/**
 * Type for gender values (re-usable in UI and other code).
 */
export type Gender = (typeof GENDERS)[number];

const passwordSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter',
  })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  .regex(/[0-9]/, {
    message: 'Password must contain at least one number',
  });

export const registerInitialSchema = z
  .object({
    email: z
      .string()
      .trim()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Invalid email address' }),

    password: passwordSchema,

    confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),

    login: z
      .string()
      .trim()
      .min(3, { message: 'Login must be at least 3 characters.' })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message:
          'Login cannot contain spaces or special characters. Only letters, numbers, and underscores are allowed.',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const emailPasswordSchema = z
  .object({
    email: z
      .string()
      .trim()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Invalid email address' }),

    password: passwordSchema,

    confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const loginSchema = z.object({
  username: loginField,
});

export const registerSchema = z.object({
  // --- Profile details ---

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

  birthDate: z
    .date({
      message: 'Date of birth is required',
    })
    .refine(
      (date) => {
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
        return date <= minDate;
      },
      { message: 'You must be at least 13 years old.' },
    ),

  gender: z.enum(GENDERS, { message: 'Please select a gender.' }).default('MALE'),

  // Optional fields
  // Preprocess bio so empty or whitespace-only strings are treated as undefined.
  // This ensures an empty bio is not sent to the backend as an empty string
  // and remains an absent field if the user left it blank.
  description: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.string().trim().max(200, { message: 'Bio must be at most 200 characters.' }).optional(),
  ),
});

/**
 * Strongly typed representation of register form values.
 *
 * This type is inferred directly from the Zod schema to prevent
 * divergence between validation rules and TypeScript definitions.
 */
export type RegisterValues = z.infer<typeof registerSchema>;
export type RegisterInitialValues = z.infer<typeof registerInitialSchema>;
export type EmailPasswordValues = z.infer<typeof emailPasswordSchema>;

export type EmailEditSchemaType = z.infer<typeof emailEditSchema>;

/** Type representing raw input values before Zod coercion.
 * Useful for form libraries that handle all inputs as strings.
 */
export type RegisterInput = z.input<typeof registerSchema>;
export type RegisterInitialInput = z.input<typeof registerInitialSchema>;
export type SignUpRequest = Omit<RegisterInitialValues, 'confirmPassword'>; /**
 * All error messages are localized and user-friendly.
 * No additional client-side validation is needed.
 */
export type RegisterErrors = z.ZodFormattedError<RegisterValues>;

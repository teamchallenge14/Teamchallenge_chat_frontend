import z from 'zod';

export const lastNameFieldSchema = z
  .string()
  .trim()
  .min(1, { message: 'Surname is required.' })
  .regex(/^[a-zA-Z\s-]+$/, {
    message: 'Surname can only contain letters, spaces, and hyphens.',
  });

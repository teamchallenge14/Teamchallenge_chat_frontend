import z from 'zod';

export const loginFieldSchema = z
  .string()
  .trim()
  .min(3, { message: 'Login must be at least 3 characters.' })
  .regex(/^[a-zA-Z0-9_]+$/, {
    message:
      'Login cannot contain spaces or special characters. Only letters, numbers, and underscores are allowed.',
  });

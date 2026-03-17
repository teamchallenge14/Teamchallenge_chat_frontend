import z from 'zod';

export const firstNameFieldSchema = z
  .string()
  .trim()
  .min(3, { message: 'Name must be at least 3 characters.' })
  .max(20, { message: 'Name must be at most 20 characters.' });

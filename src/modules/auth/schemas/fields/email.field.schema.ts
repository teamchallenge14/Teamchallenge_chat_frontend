import z from 'zod';

export const emailFieldSchema = z
  .string()
  .trim()
  .nonempty({ message: 'Email is required' })
  .email({ message: 'Invalid email address' });

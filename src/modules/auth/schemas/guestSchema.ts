import z from 'zod';
import {
  bioFieldSchema,
  firstNameFieldSchema,
  genderFieldSchema,
  lastNameFieldSchema,
  loginFieldSchema,
} from './fields';

export const guestSchema = z.object({
  login: loginFieldSchema,
  firstName: firstNameFieldSchema,
  lastName: lastNameFieldSchema,
  interests: z.array(z.string()).optional().default([]),
  description: bioFieldSchema(150),
  gender: genderFieldSchema,
  birthDate: z.date().optional(),
});

export type GuestInput = z.input<typeof guestSchema>;
export type GuestSchemaValues = z.infer<typeof guestSchema>;
export type QuestErrors = z.ZodFormattedError<GuestSchemaValues>;

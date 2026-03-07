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
  interests: z.array(z.string()).min(1, { message: 'Please select at least one interest.' }),
  description: bioFieldSchema(150),
  gender: genderFieldSchema,
  birthDay: z.date().optional(),
});

export type GuestInput = z.input<typeof guestSchema>;
export type GuestSchemaValues = z.infer<typeof guestSchema>;

import { GENDERS } from '@/shared/constants';
import z from 'zod';

export const genderFieldSchema = z
  .enum(GENDERS, { message: 'Please select a gender.' })
  .default('MALE');

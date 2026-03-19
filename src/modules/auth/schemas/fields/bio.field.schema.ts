import z from 'zod';

export const bioFieldSchema = (chars: number) => {
  return z.preprocess(
    (val: string) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z
      .string()
      .trim()
      .max(chars, { message: `Bio must be at most ${chars} characters.` })
      .optional(),
  );
};

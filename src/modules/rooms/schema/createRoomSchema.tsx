import * as z from 'zod';

export const formSchema = z.object({
  roomName: z.string().min(1, 'Please enter a room name.'),
  isPublic: z.boolean(),
  ageRange: z.tuple([z.number(), z.number()]).refine(([min, max]) => max - min >= 5, {
    error: 'Age range must be at least 5 years apart.',
  }),
  language: z.enum(['EN', 'UK'], {
    error: 'Please select a language',
  }),
  categories: z
    .array(z.object({ id: z.string(), name: z.string(), category: z.string() }))
    .min(1, 'Please select at least one category.'),
});

export type FormValues = z.infer<typeof formSchema>;

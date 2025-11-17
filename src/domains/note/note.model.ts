import z from 'zod';

export const noteSchema = z.object({
  title: z.string().nonempty('Title is required'),
  content: z.string().nullable(),
});

export type Note = z.infer<typeof noteSchema>;

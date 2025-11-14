import z from 'zod';

export const eventSchema = z.object({
  title: z.string().nonempty('Title is required'),
  content: z.string().nullable(),
});

export type Event = z.infer<typeof eventSchema>;

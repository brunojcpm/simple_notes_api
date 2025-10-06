import z from "zod";

export const NoteSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required')
})

export type NoteInput = z.infer<typeof NoteSchema>;
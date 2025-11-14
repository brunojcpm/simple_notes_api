import type { Context } from 'hono';
import { eventSchema } from '@/domains/note/note.model';

export class NotesController {
  async create(context: Context) {
    const { title, content } = await context.req.json();

    const note = eventSchema.parse({
      title,
      content,
    });

    return context.json(
      {
        message: 'Note created',
        note,
      },
      201,
    );
  }
}

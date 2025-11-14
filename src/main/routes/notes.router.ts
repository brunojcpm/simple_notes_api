import { Hono } from 'hono';
import { NotesController } from '@/controllers/notes.controller';

export function makeNotesRouter(): Hono {
  const router = new Hono();
  const notesController = new NotesController();

  router.post('/', async (context) => await notesController.create(context));

  return router;
}

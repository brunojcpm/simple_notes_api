import { Hono } from 'hono';
import { NotesController } from '@/controllers/notes.controller';

export function makeNotesRouter(): Hono {
  const router = new Hono();
  const notesController = new NotesController();

  router.post('/', async (context) => await notesController.create(context));
  router.get('/', async (context) => await notesController.load(context));
  router.get('/:id', async (context) => await notesController.loadNoteById(context));
  router.put('/:id', async (context) => await notesController.update(context));
  router.delete('/:id', async (context) => await notesController.delete(context));

  return router;
}

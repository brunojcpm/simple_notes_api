import type { Context } from 'hono';
import { CreateNoteUseCase } from '@/domains/note/create-note.usecase';
import { noteSchema } from '@/domains/note/note.model';
import { Note } from '@/domains/note/note.entity';
import { v7 } from 'uuid';
import { LoadNotesUseCase } from '@/domains/note/load-notes.usecase';
import { LoadNoteByIdUseCase } from '@/domains/note/load-note-by-id.usecase';
import z from 'zod';
import { UpdateNoteUseCase } from '@/domains/note/update-note.usecase';
import { DeleteNoteUseCase } from '@/domains/note/delete-note.usecase';

export class NotesController {
  constructor(private readonly createNoteUseCase = new CreateNoteUseCase(), 
  private readonly loadNotesUseCase = new LoadNotesUseCase(),
private readonly loadNoteByIdUseCase = new LoadNoteByIdUseCase(),
private readonly updateNoteByIdUseCase = new UpdateNoteUseCase(),
private readonly deleteNoteByIdUseCase = new DeleteNoteUseCase()) {}

  async create(context: Context) {
    const { title, content } = await context.req.json();

    const noteParsed = noteSchema.parse({
      title,
      content,
    });

    const note = new Note({
      id: v7(),
      title: noteParsed.title,
      content: noteParsed.content ?? '',
    });


    const noteCreated = await this.createNoteUseCase.execute(note);

    return context.json(
      {
        message: 'note created',
        note: noteCreated,
      },
      201,
    );
  }

  async load(context: Context) {
    const notes = await this.loadNotesUseCase.execute();

    return context.json(notes, 200);
  }

  async loadNoteById(context: Context) {
    const id = context.req.param('id');

    const idParsed = z.uuidv7().parse(id);

    const note = await this.loadNoteByIdUseCase.execute(idParsed);

    return context.json(note, 200);
  }

  async delete(context: Context) {
    const id = context.req.param('id');

    const idParsed = z.uuidv7().parse(id);

    await this.deleteNoteByIdUseCase.execute(idParsed);

    return context.json({ message: 'note deleted' }, 200);
  }

  async update(context: Context){
    const id = context.req.param('id');
    const { title, content } = await context.req.json();

    const idParsed = z.uuidv7().parse(id);

    const noteParsed = noteSchema.parse({
      title,
      content,
    });

    const updateNote = new Note({
      id: idParsed,
      title: noteParsed.title,
      content: noteParsed.content ?? '',
    });

    const note = await this.updateNoteByIdUseCase.execute(updateNote)

    return context.json(note, 200);
  }
}

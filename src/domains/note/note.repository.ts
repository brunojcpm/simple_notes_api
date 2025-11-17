import Knex from 'knex';
import { config } from '../../../knexfile';
import type { Note } from '@/domains/note/note.entity';
import { NoteNotFoundError } from '@/errors/note-not-found.error';

export class NoteRepository {
  constructor(private readonly knex: Knex.Knex = Knex(config)) {}

  async create(note: Note): Promise<Note> {
    await this.knex.insert(note).into('notes');

    return note;
  }

  async loadByNoteId(id: string): Promise<Note> {
    const note = await this.knex.select('*').where({id}).first().into('notes');

    if (!note) {
        throw new NoteNotFoundError();
    }

    return note;
  }

  async delete(id: string): Promise<void> {
    await this.knex.table('notes').where({ id }).del();
  }

  async load(): Promise<Note[]> {
    const note = await this.knex.select('*').into('notes');

    return note;
  }

  async update(note: Note): Promise<Note> {
    await this.knex.table('notes').where({ id: note.id }).update(note).returning('*');

    return note;
  }
}

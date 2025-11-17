import { Note } from "@/domains/note/note.entity";
import { NoteRepository } from "@/domains/note/note.repository";

export class CreateNoteUseCase {
  constructor(private readonly noteRepository = new NoteRepository()) {}

  async execute(note: Note) {
    return await this.noteRepository.create(note);
  }
}

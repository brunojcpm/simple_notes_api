import { NoteRepository } from "@/domains/note/note.repository";

export class LoadNoteByIdUseCase {
  constructor(private readonly noteRepository = new NoteRepository()) {}

  async execute(id: string) {
    return await this.noteRepository.loadByNoteId(id);
  }
}

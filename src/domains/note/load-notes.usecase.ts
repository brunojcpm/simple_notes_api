import { NoteRepository } from "@/domains/note/note.repository";

export class LoadNotesUseCase {
  constructor(private readonly noteRepository = new NoteRepository()) {}

  async execute() {
    return await this.noteRepository.load();
  }
}

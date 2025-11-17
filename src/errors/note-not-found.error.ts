export class NoteNotFoundError extends Error {
    readonly errorCode: string;
    
    constructor() {
        super();
        this.message = 'Note not found';
        this.errorCode = 'NOTE_NOT_FOUND';
    }
}
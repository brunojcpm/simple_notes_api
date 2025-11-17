export class Note {
    id: string;
    title: string;
    content?: string;

    constructor(
        input: {
            id: string;
            title: string;
            content?: string;
        }
    ){
        this.id = input.id,
        this.title = input.title,
        this.content = input.content
    }
}
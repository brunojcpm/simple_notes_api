import { prisma } from "../prisma";
import { NoteInput } from "../schemas/note.schema";

export class NotesService {
    async create({ data }: { data: NoteInput }) {
        return await prisma.note.create({
            data,
        });
    }

    async findAll() {
        return await prisma.note.findMany();
    }

    async findById({ id }: { id: number }) {
        const note = await prisma.note.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!note) {
            throw new Error("Note not found");
        }

        return note;
    }

    async update({ id, data }: { id: number; data: NoteInput }) {
        try {
            return await prisma.note.update({
                where: {
                    id,
                },
                data,
            });
        } catch (error) {
            throw new Error("Note not found");
        }
    }

    async delete({ id }: { id: number }) {
        try {
            return await prisma.note.delete({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw new Error("Note not found");
        }
    }
}

export const notesService = new NotesService();

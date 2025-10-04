import { Router, Request, Response } from "express";
import { Note } from "../models/note";
import { prisma } from "../prisma";
import { NoteSchema } from "../schemas/note.schema";
import { ZodError } from "zod";

const router = Router();

// Criar nota
router.post("/", async (req: Request, res: Response) => {
    try {
        const data = NoteSchema.parse(req.body);

        const note = await prisma.note.create({
            data,
        });

        res.status(201).json(note);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ message: error.issues[0].message });
        }

        res.status(500).json({ message: "Internal server error" });
    }
});

// Listar todas
router.get("/", async (req: Request, res: Response) => {
    const notes: Note[] = await prisma.note.findMany();

    res.json(notes);
});

// Buscar por id
router.get("/:id", async (req: Request, res: Response) => {
    const note = await prisma.note.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
});

// Atualizar nota
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const note = await prisma.note.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });

        res.json(note);
    } catch (error) {
        res.status(404).json({ message: "Note not found" });
    }
});

// Deletar nota
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await prisma.note.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: "Note not found" });
    }
});

export default router;

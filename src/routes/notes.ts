import { Router, Request, Response } from "express";
import { Note } from "../models/note";
import { prisma } from "../prisma";

const router = Router();

// Criar nota
router.post("/", async (req: Request, res: Response) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "title and content required" });
    }

    const note = await prisma.note.create({
        data: { title, content },
    });

    res.status(201).json(note);
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

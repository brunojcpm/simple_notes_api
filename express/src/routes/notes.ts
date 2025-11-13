import { Router, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { NoteSchema } from "../database/schemas/note.schema";
import { ZodError } from "zod";
import { notesService } from "../services/notes.service";

const router = Router();

// Criar nota
router.post("/", async (req: Request, res: Response) => {
    try {
        const data = NoteSchema.parse(req.body);

        const note = await notesService.create({ data });

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
    try {
        const notes = await notesService.findAll();

        res.json(notes);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

// Buscar por id
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const note = await notesService.findById({ id: Number(req.params.id) });

        res.json(note);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

// Atualizar nota
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const note = await notesService.update({
            id: Number(req.params.id),
            data: req.body,
        });

        res.json(note);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

// Deletar nota
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await notesService.delete({
            id: Number(req.params.id)
        })
        
        res.status(204).send();
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
});

export default router;

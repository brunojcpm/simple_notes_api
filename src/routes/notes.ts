import { Router, Request, Response } from "express";
import { notes, Note } from "../models/note";

const router = Router();
let idCounter = 1;

// Criar nota
router.post("/", (req: Request, res: Response) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "title and content required" });
    }

    const note: Note = { id: idCounter++, title, content };

    notes.push(note);

    res.status(201).json(note);
});

// Listar todas
router.get("/", (req: Request, res: Response) => {
    res.json(notes);
});

// Buscar por id
router.get("/:id", (req: Request, res: Response) => {
    const note = notes.find((n) => n.id === +req.params.id);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
});

// Atualizar nota
router.put("/:id", (req: Request, res: Response) => {
    const note = notes.find((n) => n.id === +req.params.id);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    const { title, content } = req.body;

    if (title) {
        note.title = title;
    }

    if (content) {
        note.content = content;
    }

    res.json(note);
});

// Deletar nota
router.delete("/:id", (req: Request, res: Response) => {
    const index = notes.findIndex((n) => n.id === +req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Note not found" });
    }

    notes.splice(index, 1);

    res.status(204).send();
});

export default router;

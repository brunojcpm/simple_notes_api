import { Request, Response, NextFunction } from "express";

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    console.error("Erro capturado:", error);

    if (error.name === "ZodError") {
        return res.status(400).json({
            message: "Erro de validação",
            errors: error.errors,
        });
    }

    res.status(500).json({
        message: "Erro interno do servidor",
    });
}

import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err);

    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: err.issues,
        });
    }

    if (err.message && (
        err.message.includes('required') ||
        err.message.includes('Invalid') ||
        err.message.includes('invalide') ||
        err.message.includes('Il faut') ||
        err.message.includes('Pas de bras')
    )) {
        return res.status(400).json({
            success: false,
            error: err.message
        });
    }

    res.status(500).json({
        success: false,
        error: 'Internal Server Error',
    });
}

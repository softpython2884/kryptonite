import { z } from 'zod';

export const TextSchema = z.object({
    text: z.string().min(1, 'Text is required'),
});

export const CaesarSchema = z.object({
    text: z.string().min(1),
    shift: z.number().int().optional(),
});

export const VigenereSchema = z.object({
    text: z.string().min(1),
    key: z.string().min(1, 'Key is required for this operation').optional(),
});

export const PolybeSchema = z.object({
    text: z.string().min(1),
    alphabet: z.string().length(25).optional(),
});

export const PolybeDecryptSchema = z.object({
    text: z.string().min(1),
    alphabet: z.string().length(25).optional(),
});

import { Request, Response, NextFunction } from 'express';
import { Rot13Service } from '../services/Rot13Service';
import { CaesarService } from '../services/CaesarService';
import { VigenereService } from '../services/VigenereService';
import { PolybeService } from '../services/PolybeService';
import { TextSchema, CaesarSchema, VigenereSchema, PolybeSchema, PolybeDecryptSchema } from '../utils/validators';

const rot13Service = new Rot13Service();
const caesarService = new CaesarService();
const vigenereService = new VigenereService();
const polybeService = new PolybeService();

export class CryptoController {

    // --- ROT13 ---
    public rot13(req: Request, res: Response, next: NextFunction) {
        try {
            // J'utilise Zod pour être sûr que l'entrée est clean
            const { text } = TextSchema.parse(req.body);
            const result = rot13Service.encrypt(text);
            res.json({ success: true, data: { result } });
        } catch (error) {
            next(error); // Je passe l'erreur au middleware global, c'est plus propre
        }
    }

    // --- CAESAR ---
    public caesarEncrypt(req: Request, res: Response, next: NextFunction) {
        try {
            const { text, shift } = CaesarSchema.parse(req.body);
            // Si pas de décalage fourni, j'en génère un aléatoire pour l'utilisateur
            const finalShift = shift ?? caesarService.generateKey();
            const result = caesarService.encrypt(text, finalShift);
            res.json({ success: true, data: { result, key: finalShift } });
        } catch (error) {
            next(error);
        }
    }

    public caesarDecrypt(req: Request, res: Response, next: NextFunction) {
        try {
            const { text, shift } = CaesarSchema.parse(req.body);
            // Pour déchiffrer, il me faut la clé !
            if (shift === undefined) {
                throw new Error('Il faut une clé (shift) pour déchiffrer !');
            }
            const result = caesarService.decrypt(text, shift);
            res.json({ success: true, data: { result } });
        } catch (error) {
            next(error);
        }
    }

    // --- VIGENERE ---
    public vigenereEncrypt(req: Request, res: Response, next: NextFunction) {
        try {
            const { text, key } = VigenereSchema.parse(req.body);
            const finalKey = key ?? vigenereService.generateKey();
            const result = vigenereService.encrypt(text, finalKey);
            res.json({ success: true, data: { result, key: finalKey } });
        } catch (error) {
            next(error);
        }
    }

    public vigenereDecrypt(req: Request, res: Response, next: NextFunction) {
        try {
            const { text, key } = VigenereSchema.parse(req.body);
            if (!key) throw new Error('Pas de bras, pas de chocolat (il faut une clé).');
            const result = vigenereService.decrypt(text, key);
            res.json({ success: true, data: { result } });
        } catch (error) {
            next(error);
        }
    }

    // --- POLYBE ---
    public polybeEncrypt(req: Request, res: Response, next: NextFunction) {
        try {
            const { text, alphabet } = PolybeSchema.parse(req.body);

            // Gestion de l'option "tableau aléatoire"
            const useRandom = req.body.random === true;
            let finalAlphabet = alphabet;

            if (useRandom && !finalAlphabet) {
                finalAlphabet = polybeService.generateRandomSquare();
            }

            const result = polybeService.encrypt(text, finalAlphabet);

            const response: any = { result };
            // grille gen, la renvoie
            if (finalAlphabet || useRandom) {
                response.alphabet = finalAlphabet;
            }

            res.json({ success: true, data: response });
        } catch (error) {
            next(error);
        }
    }

    public polybeDecrypt(req: Request, res: Response, next: NextFunction) {
        try {
            const { text, alphabet } = PolybeDecryptSchema.parse(req.body);
            const result = polybeService.decrypt(text, alphabet);
            res.json({ success: true, data: { result } });
        } catch (error) {
            next(error);
        }
    }
}

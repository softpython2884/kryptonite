export class PolybeService {
    private defaultAlphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // J est fusionné avec I traditionnellement (25 lettres).


    public encrypt(text: string, alphabet?: string): string {
        const grid = this.createGrid(alphabet);
        const result: string[] = [];

        for (const char of text.toUpperCase()) {
            if (char === 'J') {
                // Astuce : On traite J comme I
                const coords = this.findInGrid('I', grid);
                if (coords) result.push(coords);
            } else if (/[A-Z]/.test(char)) {
                const coords = this.findInGrid(char, grid);
                if (coords) result.push(coords);
            } else {

            }
        }
        return result.join('');
    }

    /**
     * Déchiffre une chaîne de coordonnées.
     * Attend un format "111523" ou "11 15 23".
     */
    public decrypt(cipher: string, alphabet?: string): string {
        const grid = this.createGrid(alphabet);
        const cleanCipher = cipher.replace(/[^1-5]/g, '');
        if (cleanCipher.length % 2 !== 0) {
            throw new Error('Longueur invalide : il faut des paires de chiffres !');
        }

        let result = '';
        for (let i = 0; i < cleanCipher.length; i += 2) {
            const row = parseInt(cleanCipher[i]) - 1; // -1 car tableau commence à 0
            const col = parseInt(cleanCipher[i + 1]) - 1;
            if (row >= 0 && row < 5 && col >= 0 && col < 5) {
                result += grid[row][col];
            }
        }
        return result;
    }

    public generateRandomSquare(): string {
        const alphabet = this.defaultAlphabet.split('');
        for (let i = alphabet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
        }
        return alphabet.join('');
    }

    private createGrid(customAlphabet?: string): string[][] {
        let alpha = (customAlphabet || this.defaultAlphabet).toUpperCase().replace(/[^A-Z]/g, '');

        const uniqueChars = new Set(alpha);
        alpha = Array.from(uniqueChars).join('');

        if (alpha.length !== 25) {
            // Sécurité : si l'alphabet custom est foireux, on lève une erreur.
            if (customAlphabet && alpha.length !== 25) {
                throw new Error("L'alphabet doit contenir exactement 25 caractères uniques.");
            }
        }

        const grid: string[][] = [];
        for (let i = 0; i < 5; i++) {
            grid.push(alpha.slice(i * 5, (i + 1) * 5).split(''));
        }
        return grid;
    }

    private findInGrid(char: string, grid: string[][]): string | null {
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                if (grid[r][c] === char) {
                    return `${r + 1}${c + 1}`;
                }
            }
        }
        return null;
    }
}

export class CaesarService {

    public encrypt(text: string, shift: number): string {
        return this.shiftText(text, shift);
    }


    public decrypt(text: string, shift: number): string {
        return this.shiftText(text, -shift);
    }


    public generateKey(): number {
        return Math.floor(Math.random() * 25) + 1;
    }

    private shiftText(text: string, shift: number): string {
        // On normalise le shift pour qu'il soit toujours positif (entre 0 et 25)
        // C'est une petite astuce mathématique pour gérer les nombres négatifs avec le modulo JS.
        const normalizedShift = ((shift % 26) + 26) % 26;

        return text.replace(/[a-zA-Z]/g, (char) => {
            const base = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(
                ((char.charCodeAt(0) - base + normalizedShift) % 26) + base
            );
        });
    }
}

export class Rot13Service {
    /**
     * Note: Comme ROT13 est son propre inverse (13+13=26), chiffrer et déchiffrer c'est la même chose.
     */
    public encrypt(text: string): string {
        return this.transform(text);
    }

    public decrypt(text: string): string {
        return this.transform(text);
    }

    private transform(text: string): string {
        return text.replace(/[a-zA-Z]/g, (char) => {
            const base = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(
                ((char.charCodeAt(0) - base + 13) % 26) + base
            );
        });
    }
}

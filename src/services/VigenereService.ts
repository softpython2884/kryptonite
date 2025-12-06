export class VigenereService {

    public encrypt(text: string, key: string): string {
        return this.process(text, key, true);
    }


    public decrypt(text: string, key: string): string {
        return this.process(text, key, false);
    }


    public generateKey(length: number = 10): string {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let key = '';
        for (let i = 0; i < length; i++) {
            key += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return key;
    }

    // Méthode privée commune pour chiffrer/déchiffrer
    // Ça évite de dupliquer la boucle for
    private process(text: string, key: string, isEncrypt: boolean): string {
        let result = '';
        let keyIndex = 0;
        const cleanKey = key.replace(/[^a-zA-Z]/g, '');

        if (cleanKey.length === 0) {
            throw new Error('Clé invalide : il faut au moins une lettre !');
        }

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (/[a-zA-Z]/.test(char)) {
                const isUpper = char === char.toUpperCase();
                const base = isUpper ? 65 : 97;
                const charCode = char.charCodeAt(0) - base;
                const keyChar = cleanKey[keyIndex % cleanKey.length];
                const keyBase = keyChar === keyChar.toUpperCase() ? 65 : 97;
                const keyShift = keyChar.charCodeAt(0) - keyBase;

                let newCode;
                if (isEncrypt) {
                    newCode = (charCode + keyShift) % 26;
                } else {
                    newCode = (charCode - keyShift + 26) % 26;
                }

                result += String.fromCharCode(newCode + base);
                keyIndex++;
            } else {
                result += char;
            }
        }
        return result;
    }
}

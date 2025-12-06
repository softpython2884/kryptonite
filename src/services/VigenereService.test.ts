import { VigenereService } from './VigenereService';

describe('VigenereService', () => {
    let service: VigenereService;

    beforeEach(() => {
        service = new VigenereService();
    });

    test('should encrypt correctly', () => {
        expect(service.encrypt('ATTACKATDAWN', 'LEMON')).toBe('LXFOPVEFRNHR');
    });

    test('should decrypt correctly', () => {
        expect(service.decrypt('LXFOPVEFRNHR', 'LEMON')).toBe('ATTACKATDAWN');
    });

    test('should handle mixed case and match case', () => {
        expect(service.encrypt('a', 'a')).toBe('a');
        expect(service.encrypt('a', 'b')).toBe('b');
    });

    test('should throw error if key is empty or invalid', () => {
        expect(() => service.encrypt('text', '')).toThrow();
        expect(() => service.encrypt('text', '123')).toThrow();
    });

    test('should generate a key of requested length', () => {
        const key = service.generateKey(15);
        expect(key.length).toBe(15);
    });
});

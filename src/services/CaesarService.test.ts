import { CaesarService } from './CaesarService';

describe('CaesarService', () => {
    let service: CaesarService;

    beforeEach(() => {
        service = new CaesarService();
    });

    test('should encrypt with shift 1', () => {
        expect(service.encrypt('abc', 1)).toBe('bcd');
    });

    test('should decrypt with shift 1', () => {
        expect(service.decrypt('bcd', 1)).toBe('abc');
    });

    test('should handle wrapping z -> a', () => {
        expect(service.encrypt('z', 1)).toBe('a');
    });

    test('should handle large shifts', () => {
        expect(service.encrypt('a', 27)).toBe('b'); // 27 % 26 = 1
    });

    test('should handle negative keys (if implementation supports or normalized)', () => {
        expect(service.encrypt('b', -1)).toBe('a');
    });

    test('should generate a valid key', () => {
        const key = service.generateKey();
        expect(key).toBeGreaterThanOrEqual(1);
        expect(key).toBeLessThanOrEqual(25);
    });

    test('should preserve non-alphabetic chars', () => {
        expect(service.encrypt('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    });
});

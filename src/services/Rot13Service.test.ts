import { Rot13Service } from './Rot13Service';

describe('Rot13Service', () => {
    let service: Rot13Service;

    beforeEach(() => {
        service = new Rot13Service();
    });

    test('should encrypt "Hello World" correctly', () => {
        const input = 'Hello World';
        const expected = 'Uryyb Jbeyq';
        expect(service.encrypt(input)).toBe(expected);
    });

    test('should decrypt "Uryyb Jbeyq" correctly', () => {
        const input = 'Uryyb Jbeyq';
        const expected = 'Hello World';
        expect(service.decrypt(input)).toBe(expected);
    });

    test('should be reversible', () => {
        const input = 'Testing Reversibility 123!';
        const encrypted = service.encrypt(input);
        const decrypted = service.decrypt(encrypted);
        expect(decrypted).toBe(input);
    });

    test('should ignore non-alphabetic characters', () => {
        const input = '123!@#';
        expect(service.encrypt(input)).toBe(input);
    });
});

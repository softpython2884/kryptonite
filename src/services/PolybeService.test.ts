import { PolybeService } from './PolybeService';

describe('PolybeService', () => {
    let service: PolybeService;

    beforeEach(() => {
        service = new PolybeService();
    });

    test('should encrypt "POLYBIUS" correctly with default grid', () => {
        // A=0->(0,0)=11. B->12. ... E->15.
        // F->21.
        // P is 3,5? nan.
        // L=31, M=32, N=33, O=34, P=35. ok.
        expect(service.encrypt('P')).toBe('35');
    });

    test('should treat J as I', () => {
        expect(service.encrypt('J')).toBe('24');
        expect(service.encrypt('I')).toBe('24');
    });

    test('should decrypt "35" to "P"', () => {
        expect(service.decrypt('35')).toBe('P');
    });

    test('should support custom alphabet', () => {

        const reverseAlpha = 'ZYXWVUTSRQPONMLKIHGFEDCBA';
        expect(service.encrypt('A', reverseAlpha)).toBe('55');

        expect(service.decrypt('55', reverseAlpha)).toBe('A');
    });

    test('should generate random square', () => {
        const sq = service.generateRandomSquare();
        expect(sq.length).toBe(25);
        expect(new Set(sq).size).toBe(25);
    });
});

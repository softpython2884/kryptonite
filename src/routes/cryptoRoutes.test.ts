import request from 'supertest';
import app from '../app';

describe('Crypto API Routes', () => {
    // ROT13
    describe('POST /api/rot13', () => {
        it('should encrypt text correctly', async () => {
            const res = await request(app)
                .post('/api/rot13')
                .send({ text: 'Hello' });
            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.result).toBe('Uryyb');
        });

        it('should return 400 if text is missing', async () => {
            const res = await request(app).post('/api/rot13').send({});
            expect(res.status).toBe(400);
            expect(res.body.success).toBe(false);
        });
    });

    // Caesar
    describe('POST /api/caesar/encrypt', () => {
        it('should encrypt with provided shift', async () => {
            const res = await request(app)
                .post('/api/caesar/encrypt')
                .send({ text: 'abc', shift: 1 });
            expect(res.status).toBe(200);
            expect(res.body.data.result).toBe('bcd');
            expect(res.body.data.key).toBe(1);
        });

        it('should generate key if shift not provided', async () => {
            const res = await request(app)
                .post('/api/caesar/encrypt')
                .send({ text: 'abc' });
            expect(res.status).toBe(200);
            expect(res.body.data.key).toBeDefined();
        });
    });

    describe('POST /api/caesar/decrypt', () => {
        it('should decrypt correctly', async () => {
            const res = await request(app)
                .post('/api/caesar/decrypt')
                .send({ text: 'bcd', shift: 1 });
            expect(res.status).toBe(200);
            expect(res.body.data.result).toBe('abc');
        });

        it('should fail if shift is missing', async () => {
            const res = await request(app)
                .post('/api/caesar/decrypt')
                .send({ text: 'bcd' });
            expect(res.status).toBe(400);
            expect(res.body.error).toContain('required');
        });
    });

    // Polybe
    describe('POST /api/polybe/encrypt', () => {
        it('should encrypt correctly', async () => {
            const res = await request(app)
                .post('/api/polybe/encrypt')
                .send({ text: 'P' });
            expect(res.status).toBe(200);
            expect(res.body.data.result).toBe('35');
        });

        it('should use random grid if requested', async () => {
            const res = await request(app)
                .post('/api/polybe/encrypt')
                .send({ text: 'P', random: true });
            expect(res.status).toBe(200);
            expect(res.body.data.alphabet).toBeDefined();
            expect(res.body.data.result).toBeDefined();
        });
    });
});

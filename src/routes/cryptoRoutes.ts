import { Router } from 'express';
import { CryptoController } from '../controllers/CryptoController';

const router = Router();
const controller = new CryptoController();

router.post('/rot13', (req, res, next) => controller.rot13(req, res, next));

router.post('/caesar/encrypt', (req, res, next) => controller.caesarEncrypt(req, res, next));
router.post('/caesar/decrypt', (req, res, next) => controller.caesarDecrypt(req, res, next));

router.post('/vigenere/encrypt', (req, res, next) => controller.vigenereEncrypt(req, res, next));
router.post('/vigenere/decrypt', (req, res, next) => controller.vigenereDecrypt(req, res, next));

router.post('/polybe/encrypt', (req, res, next) => controller.polybeEncrypt(req, res, next));
router.post('/polybe/decrypt', (req, res, next) => controller.polybeDecrypt(req, res, next));

export default router;

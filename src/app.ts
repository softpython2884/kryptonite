import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cryptoRoutes from './routes/cryptoRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', cryptoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Kryptonite Crypto API is running.' });
});

app.use(errorHandler);

export default app;

/**

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░   ░░░   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ░░░░░░░░░░░░░
▒   ▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒
▒   ▒   ▒▒▒▒▒  ▒    ▒   ▒▒▒   ▒  ▒   ▒▒▒    ▒  ▒▒▒▒   ▒▒▒▒▒   ▒   ▒▒▒▒▒▒▒    ▒  ▒▒▒▒   ▒▒▒▒
▓  ▓  ▓▓▓▓▓▓▓▓   ▓▓▓▓▓   ▓   ▓▓  ▓▓   ▓▓▓▓   ▓▓▓▓   ▓▓   ▓▓▓   ▓▓   ▓   ▓▓▓   ▓▓▓▓  ▓▓▓   ▓
▓   ▓▓   ▓▓▓▓▓   ▓▓▓▓▓▓▓    ▓▓▓  ▓▓▓   ▓▓▓   ▓▓▓   ▓▓▓▓   ▓▓   ▓▓   ▓   ▓▓▓   ▓▓▓         ▓
▓   ▓▓▓   ▓▓▓▓   ▓▓▓▓▓▓▓▓   ▓▓▓   ▓   ▓▓▓▓   ▓ ▓▓   ▓▓   ▓▓▓   ▓▓   ▓   ▓▓▓   ▓ ▓  ▓▓▓▓▓▓▓▓
█   █████   █    ███████   ████   █████████   █████   █████    ██   █   ████   ████     ███
███████████████████████   █████   █████████████████████████████████████████████████████████

 */
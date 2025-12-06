import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const asciiArt = `
┏┓┏━┓━━━━━━━━━━━━━┏┓━━━━━━━━━━━━┏┓━━━━━
┃┃┃┏┛━━━━━━━━━━━━┏┛┗┓━━━━━━━━━━┏┛┗┓━━━━
┃┗┛┛━┏━┓┏┓━┏┓┏━━┓┗┓┏┛┏━━┓┏━┓━┏┓┗┓┏┛┏━━┓
┃┏┓┃━┃┏┛┃┃━┃┃┃┏┓┃━┃┃━┃┏┓┃┃┏┓┓┣┫━┃┃━┃┏┓┃
┃┃┃┗┓┃┃━┃┗━┛┃┃┗┛┃━┃┗┓┃┗┛┃┃┃┃┃┃┃━┃┗┓┃┃━┫
┗┛┗━┛┗┛━┗━┓┏┛┃┏━┛━┗━┛┗━━┛┗┛┗┛┗┛━┗━┛┗━━┛
━━━━━━━━┏━┛┃━┃┃━━━━━━━━━━━━━━━━━━━━━━━━
━━━━━━━━┗━━┛━┗┛━━━━━━━━━━━━━━━━━━━━━━━━
`;

app.listen(PORT, () => {
    console.log(asciiArt);
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`GitHub: https://github.com/softpython2884`);
    console.log(`Portfolio: https://nightproject.nationquest.fr/`);
    console.log(`N'oubliez pas de checker les fichiers: projet.md et readme.md`);
});
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Embla!')
});

app.listen(port, () => {
    console.log(`The Embla Server is running at http://localhost:${port}`);
});
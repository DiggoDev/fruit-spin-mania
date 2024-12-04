import express, { Request, Response } from 'express';
import cors from 'cors';

import gameRouter from './routes/game'

const allowedHostname = 'http://localhost:1234'; // Replace with your hostname

// Create an Express application
const app = express();

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || origin === allowedHostname) {
                // Allow the request if the origin is null (e.g., same-origin) or matches the allowed hostname
                callback(null, true);
            } else {
                // Deny the request if the origin doesn't match
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);

// Middleware
app.use(express.json());


app.use('/game/', gameRouter)

// Example route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
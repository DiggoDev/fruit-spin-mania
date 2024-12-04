import { Router, Request, Response } from 'express';

const router = Router();

// Define a route
router.get('/get-new-request', (req: Request, res: Response) => {
    res.json({ symbols: [
        [2,2,2],
        [1,1,1],
        [2,2,2],
        [1,1,1],
        [2,2,2]
    ] });
});

export default router;
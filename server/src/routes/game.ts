import { Router, Request, Response } from 'express';
import { GameServerController } from '../game-server/controller/game-server-controller';

const router = Router();

const gameServer = new GameServerController()

// Define a route
router.get('/get-new-request', (req: Request, res: Response) => {

    const state = gameServer.generateNewState()
    res.json(state);
});

export default router;
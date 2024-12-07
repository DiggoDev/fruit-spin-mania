import { Router, Request, Response } from 'express';
import { requestErrorHandlingWrapper } from './route-helper';
import { Session } from 'inspector/promises';

const router = Router();

const sessions: Record<number, Session> = {}
let nextSessionId: number = 0

// Define a route
router.post('/get-new-session', (req: Request, res: Response<{ sessionId: number }>) => {
    requestErrorHandlingWrapper((req, res) => {
        const id = nextSessionId
        if (sessions[id]) throw new Error(`Account with id ${id} is already defined`)
        
        const session: Session = req.body
        sessions[id] = session
        nextSessionId++

        return res.status(204).send({ sessionId: id })
    }, req, res)
});

router.get('/get-session', (req, res) => {
    requestErrorHandlingWrapper((req, res) => {
        const { sessionId }: { sessionId: number } = req.body
        if (!sessions[sessionId]) return res.status(404).send(`Session with id ${sessionId} not found`)

        return res.status(200).send(sessions[sessionId])
    }, req, res)
})



export default router;
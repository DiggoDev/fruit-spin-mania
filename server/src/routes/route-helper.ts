import { Request, Response } from 'express';

export async function requestErrorHandlingWrapper(func: (req: Request, res: Response) => Promise<any> | any, req: Request, res: Response) {
    try {
        await func(req, res)
    } catch(error) {
        res.status(500).send(error)
    }
}
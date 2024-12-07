import { Router, Request, Response } from 'express';
import { requestErrorHandlingWrapper } from './route-helper';
import { Account } from '../model/account';

const router = Router();

const accounts: Record<number, Account> = {}
let nextAccountId: number = 0

// Define a route
router.post('/set-account', (req: Request, res: Response<{ accountId: number }>) => {
    requestErrorHandlingWrapper((req, res) => {
        const id = nextAccountId
        if (accounts[id]) throw new Error(`Account with id ${id} is already defined`)
        
        const account: Account = req.body
        accounts[id] = account
        nextAccountId++

        const resBody = { accountId: id }
        console.log(`POST /set-account: send ${JSON.stringify(resBody)}`)

        return res.status(200).send(resBody)
    }, req, res)
});

router.get('/balance/:accountId', (req, res) => {
    requestErrorHandlingWrapper((req, res) => {
        const accountId = Number(req.params['accountId'])
        if (!accounts[accountId]) return res.status(404).send(`account with id ${accountId} not found`)
        
        const balance = accounts[accountId].balance

        return res.status(200).send({ balance })
    }, req, res)
})



export default router;
import { ApiRequest } from "./api-request";

interface Account {
    balance: number
}

interface SetAccountResponse {
    accountId: number
}

interface GetBalanceResponse {
    balance: number
}


export class AccountApi extends ApiRequest {
    public async setAccountRequest(account: Account) {
        const data = await this.makeJsonPost('/set-account', account, { expectedStatus: 200 })
        console.log(`Got response from /set-account: ${JSON.stringify(data)}`)
        return data as SetAccountResponse
    }
    public async getBalance(accountId: number) {
        const data = await this.makeJsonGet(`/balance/${accountId}`, { expectedStatus: 200 })
        return data as GetBalanceResponse
    }
}
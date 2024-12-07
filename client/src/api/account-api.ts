import { ApiRequest } from "./api-request";

interface Account {
    balance: number
}

interface SetAccountResponse {
    accountId: number
}


export class AccountApi extends ApiRequest {
    public async setAccountRequest(account: Account) {
        const data = await this.makePost('/set-account', account, { expectedStatus: 200 })
        return data as SetAccountResponse
    }
}
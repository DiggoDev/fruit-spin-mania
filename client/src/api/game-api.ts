import { ApiRequest } from "./api-request";

interface GetGameResponse {
    symbols: number[][]
}

export class GameApi extends ApiRequest {
    public async getGameRequest() {
        const data = await this.makeGet('/get-new-request', { expectedStatus: 200 })
        return data as GetGameResponse
    }
}
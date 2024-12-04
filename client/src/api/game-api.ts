import { ApiRequest } from "./api-request";

export class GameApi extends ApiRequest {
    public async getGameRequest() {
        const data = await this.makeGet('/get-new-request', { expectedStatus: 200 })
        return data as { symbols: number[][] }
    }
}
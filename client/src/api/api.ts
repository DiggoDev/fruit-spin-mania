import { AccountApi } from "./account-api";
import { GameApi } from "./game-api";

export class Api {
    public readonly game: GameApi
    public readonly account: AccountApi
    constructor() {
        this.game = new GameApi('game')
        this.account = new AccountApi('account')
    }
}
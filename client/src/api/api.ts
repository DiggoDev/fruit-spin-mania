import { GameApi } from "./game-api";

export class Api {
    public readonly game: GameApi
    constructor() {
        this.game = new GameApi('game')
    }
}
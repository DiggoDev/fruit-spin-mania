import { GameState } from "../../model/game-state";
import { getRandomValue } from "../../utils/random-helper";

export class GameServerController {
    private allSymbols: number[]
    private readonly reels = 5
    private readonly rows = 3


    constructor() {
        this.allSymbols = [1, 2, 3, 4, 5]
    }
    public generateNewState(): GameState {

        const symbols: number[][] = []

        for (let reelIndex = 0; reelIndex < this.reels; reelIndex++) {
            const row = []
            for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
                const sym = getRandomValue(this.allSymbols)
                row.push(sym)
            }
            symbols.push(row)
        }
        return {
            symbols
        }
    }
}
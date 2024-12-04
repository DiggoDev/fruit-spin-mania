import { Container, Sprite, Texture } from "pixi.js";
import { reelFrameSize, reelSymbolPadding } from "../config/reel-config";
import { symbolSize } from "../config/symbol-config";

export class SymbolReelGrid extends Container {
    public gridWidth: number
    public gridHeight: number
    private grid: number[][]
    private symbolTextures: Record<number, Texture>
    private gridSprites: (Sprite | undefined)[][]

    constructor(gridWidth: number, gridHeight: number, symbolTextures: Record<number, Texture>) {
        super()
        this.gridWidth = gridWidth
        this.gridHeight = gridHeight
        this.grid = new Array(gridWidth)
        this.gridSprites = new Array(gridWidth)
        for (let i = 0; i < gridWidth; i++) {
            this.grid[i] = new Array(gridHeight)
            this.gridSprites[i] = new Array(gridHeight)
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j] = 0
                this.gridSprites[i][j] = undefined
            }
        }
        this.symbolTextures = symbolTextures
    }

    public fillGridWithSymbol(symbolId: number) {
        for (let width = 0; width < this.gridWidth; width++) {
            for  (let height = 0; height < this.gridHeight; height++) {
                this.grid[width][height] = symbolId
            }
        }
    }

    public setGridWithSymbols(symbols: number[][]) {
        for (let width = 0; width < this.gridWidth; width++) {
            for  (let height = 0; height < this.gridHeight; height++) {
                this.grid[width][height] = symbols[width][height]
            }
        }
    }
    
    public addSpritesToGrid() {
        for (let x = 0; x < this.gridWidth; x++) {
            for  (let y = 0; y < this.gridHeight; y++) {
                const oldSprite = this.gridSprites[x][y]
                if (oldSprite) {
                    oldSprite.destroy()
                }
                const texture = this.symbolTextures[this.grid[x][y]]
                if (texture) {
                    const sprite = new Sprite(texture)
                    this.moveSpriteToGridPos(sprite, x, y)
                    this.addChild(sprite)
                    this.gridSprites[x][y] = sprite
                }
            }
        }
    }
    
    private moveSpriteToGridPos(sprite: Sprite, x: number, y: number) {
        const spriteX = reelFrameSize + (x * symbolSize) + (reelSymbolPadding * x)
        const spriteY = reelFrameSize + (y * symbolSize) + (reelSymbolPadding * y)

        sprite.x = spriteX
        sprite.y = spriteY
    }
}
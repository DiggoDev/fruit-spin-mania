import { Sprite, Texture, Container } from "pixi.js";
import { resizeContainerAfterOtherContainer, resizeContainerAfterWindow } from "../utils/container-helper";
import { SymbolReelGrid } from "../components/symbol-reel-grid";
import { reelHeight, reelWidth } from "../config/reel-config";

export class ReelsContainerEntity extends Container {
    readonly symbolReelGrid: SymbolReelGrid
    readonly reelBackground: Sprite
    readonly reelFrame: Sprite
    constructor(reelBackgroundTexture: Texture, reelFrameTexture: Texture, symbolTextures: Record<number, Texture>) {
        super()
        this.symbolReelGrid = new SymbolReelGrid(reelWidth, reelHeight, symbolTextures)
        this.symbolReelGrid.fillGridWithSymbol(1)

        this.reelBackground = new Sprite(reelBackgroundTexture)
        this.reelFrame = new Sprite(reelFrameTexture)

        this.resizeObjects()
        
        this.addChild(this.reelBackground)
        this.addChild(this.reelFrame)
        this.addChild(this.symbolReelGrid)

        this.symbolReelGrid.addSpritesToGrid()
        
    }

    private resizeObjects() {
        const reelScaleWidth = 0.27
        const reelScaleHeight = 0.35
        resizeContainerAfterWindow(this.reelBackground, reelScaleWidth, reelScaleHeight)
        resizeContainerAfterOtherContainer(this.symbolReelGrid, this.reelBackground, 0.9, 0.9)
        resizeContainerAfterWindow(this.reelFrame, reelScaleWidth, reelScaleHeight)
    }
}
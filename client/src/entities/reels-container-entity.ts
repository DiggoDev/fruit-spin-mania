import { Sprite, Texture, Container } from "pixi.js";
import { resizeContainerAfterWindow } from "../utils/container-helper";

export class ReelsContainerEntity extends Container {
    constructor(reelBackgroundTexture: Texture, reelFrameTexture: Texture) {
        super()
        const reelBackground = new Sprite(reelBackgroundTexture)
        const reelScaleWidth = 0.7
        const reelScaleHeight = 0.85
        resizeContainerAfterWindow(reelBackground, reelScaleWidth, reelScaleHeight)
        const reelFrame = new Sprite(reelFrameTexture)
        resizeContainerAfterWindow(reelFrame, reelScaleWidth, reelScaleHeight)
        this.addChild(reelBackground)
        this.addChild(reelFrame)
    }
}
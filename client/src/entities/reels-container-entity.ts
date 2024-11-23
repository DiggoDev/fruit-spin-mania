import { Sprite, Texture } from "pixi.js";

export class ReelsContainerEntity extends Sprite {
    constructor(reelBackgroundTexture: Texture, reelFrameTexture: Texture) {
        super()
        this.addChild(new Sprite(reelBackgroundTexture))
        this.addChild(new Sprite(reelFrameTexture))

        this.width = 0.5
        this.height = 0.5

        this.anchor.set(0.5);

    }
}